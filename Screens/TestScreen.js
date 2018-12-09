/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import json from '../JSON_Quizzes/Quiz1.json'
import {Navigation} from 'react-native-navigation'

type Props = {};
//const tempQuest = "Lorem slipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const questions = json.questions

export default class TestScreen extends Component<Props> {

  constructor(){
    super()
    this.state = {
      score: 0,
      timer:10,
      iterator: 0,
      jsonFromServer:" ",
    }
// Obsługa timera
  if(this.state.iterator < 9){
    interval = setInterval(() => {
        if(this.state.timer > 0){
          this.setState({
              timer: this.state.timer - 1
          })
        }else{
          this.setState({
              timer: 10,
              iterator: this.state.iterator + 1
          })
        }
      },1000)
   }else{
        clearInterval(interval)

        Navigation.push(this.props.componentId, {
          component:{
            name:"ResultScreen",
          }
        })
    }

  }

// Pobranie Quizu
  componentDidMount(){
    fetch('https://pwsz-quiz-api.herokuapp.com/api/test/5c05d64f2404232b3bc09a84')
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({
              jsonFromServer: responseJson.tasks,
          })
      })
      .catch((error) => {
          console.error(error)
      });
  }

// Obsługa przycisków
  buttonPressHandler(answer){
    if(this.state.iterator < 9){
      if(answer === true){
        this.setState({
            score: this.state.score + 1,
            iterator: this.state.iterator + 1,
            timer: 10
        })
      }else{
        this.setState({
            timer: 10,
            iterator: this.state.iterator + 1
        })
      }
    }else{

      clearInterval(interval)

      Navigation.push(this.props.componentId, {
        component:{
          name:"ResultScreen",
        }
      })
    }
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
            <TouchableOpacity style={styles.anwerButton} onPress={()=>this.buttonPressHandler(this.state.jsonFromServer[this.state.iterator].answers[0].isCorrect)}>
              <Text style={styles.buttonText}> {this.state.jsonFromServer[this.state.iterator].answers[0].content} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwerButton} onPress={()=>this.buttonPressHandler(this.state.jsonFromServer[this.state.iterator].answers[1].isCorrect)}>
              <Text style={styles.buttonText}> {this.state.jsonFromServer[this.state.iterator].answers[1].content} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwerButton} onPress={()=>this.buttonPressHandler(this.state.jsonFromServer[this.state.iterator].answers[2].isCorrect)}>
              <Text style={styles.buttonText}> {this.state.jsonFromServer[this.state.iterator].answers[2].content} </Text>
            </TouchableOpacity>
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
    fontSize:20,
    textAlign:'center',
    fontFamily:'Oswald-Bold'
  },
});
