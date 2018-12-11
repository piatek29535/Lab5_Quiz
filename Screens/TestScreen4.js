/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation'

type Props = {};

export default class TestScreen4 extends Component<Props> {

  constructor(){
    super()

    this.state = {
      nick:"Adam Pidżątek",
      score: 0,
      total: 0,
      type:" ",
      date: new Date().getFullYear()+"-"+eval(new Date().getMonth() + 1)+"-"+new Date().getDate(),

      timer: 40,  // Spróbować ogarnąć duration z JSONa,żeby nie skipowało pierwszego screena
      iterator: 0,
      jsonFromServer:" ",
      jsonFromServerGeneral:" ",
    }
 }

// Pobranie Quizu
  componentDidMount(){
    fetch('https://pwsz-quiz-api.herokuapp.com/api/test/5c05d64f2404232b3bc09a86')
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({
              jsonFromServer: responseJson.tasks,
              jsonFromServerGeneral: responseJson,
          })
      })
      .catch((error) => {
          console.error(error)
      });

      interval = setInterval(() => {
          if(this.state.timer > 0){
            this.setState({
                timer: this.state.timer - 1
            })
          }else{
            this.setState({
                timer: this.state.jsonFromServer[this.state.iterator].duration,
                iterator: this.state.iterator + 1
            })
          }
        },1000)


  }
// Jedna metodiczka załatwia sprawę z timerem <3
  shouldComponentUpdate(nextProps,nextState){
    if(nextState.iterator > this.state.jsonFromServer.length - 1){
      clearInterval(interval)

      this.state.type = this.state.jsonFromServerGeneral.tags[0]
      this.state.total = eval(this.state.jsonFromServer.length * 2)

      alert("Nick: "+this.state.nick+"\nWynik: "+this.state.score+"\nSuma punktów: "+this.state.total+"\nTyp: "+this.state.type+"\nData: "+this.state.date)

      Navigation.push(this.props.componentId, {
        component:{
          name:"ResultScreen",
        }
      })
/*  Działa odblokować potem żeby nie śmiecić serwera resultami

      fetch('https://pwsz-quiz-api.herokuapp.com/api/result', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nick: this.state.nick,
          score: this.state.score,
          total: this.state.total,
          type: this.state.type,
          date: this.state.date,
        }),
      });
*/
      return false
    }
    return true
  }

// Obsługa przycisków
  buttonPressHandler(answer){
      if(answer === true){
        this.setState({
            score: this.state.score + 2,
            iterator: this.state.iterator + 1,
            timer: this.state.jsonFromServer[this.state.iterator].duration
        })
      }else{
        this.setState({
            timer: this.state.jsonFromServer[this.state.iterator].duration,
            iterator: this.state.iterator + 1
        })
      }
  }

  renderAnswerView(){
    let btn = []

    for(let i = 0;i < 4;i++){
      btn.push(
          <TouchableOpacity style={styles.anwerButton} onPress={()=>this.buttonPressHandler(this.state.jsonFromServer[this.state.iterator].answers[i].isCorrect)}>
            <Text style={styles.buttonText}>{this.state.jsonFromServer[this.state.iterator].answers[i].content}</Text>
          </TouchableOpacity>
        )
    }

    return btn;
  }

  render() {
    if(this.state.jsonFromServer[this.state.iterator].answers === undefined){
      return null;
    }

    return (
      <View style={styles.mainContainer}>
        <View style={styles.testView}>

          <View style={styles.questionView}>
            <Text style={styles.timer}> Czas: {this.state.timer} sec</Text>
            <Text style={styles.questionNumber}> Pytanie {this.state.iterator+1}</Text>
            <Text style={styles.question}> {this.state.jsonFromServer[this.state.iterator].question} </Text>
          </View>

          <View style={styles.bottomTestView}>
            {this.renderAnswerView()}
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00bfff',
  },

  testView:{
    backgroundColor:'#006080',
    borderStyle: 'solid',
    borderWidth: 2,
    width:350,
    height:550,
    padding:10,
  },
  // ---------------------------------------------- Question View --------------------------------
  questionView:{
    backgroundColor:'#FFFFFF',
    flex:1,
    alignItems:'stretch',
  },
  timer:{
    margin:4,
  },
  questionNumber:{
    padding:20,
    fontSize:20,
    textAlign:'center',
    fontFamily:'RobotoSlab-Bold'
  },
  question:{
    textAlign:'center',
    fontSize:15,
    margin:2,
    fontFamily:'RobotoSlab-Bold'

  },


  // ---------------------------------------------- Bottom Test View --------------------------------

  bottomTestView:{
    backgroundColor:'#4C4C4C',
    marginTop:10,
    flex:1,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
  },
  anwerButton:{
    backgroundColor:'#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    margin:5
  },
  buttonText:{
    fontSize:15,
    textAlign:'center',
    fontFamily:'Oswald-Bold'
  },
});
