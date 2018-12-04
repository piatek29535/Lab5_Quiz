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
const tempQuest = "Lorem slipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const questions = json.questions;

export default class TestScreen extends Component<Props> {

  constructor(){
    super()
    this.state = {
      timer:10,
      points: 0,
      iterator: 0,
    }

    interval = setInterval(() => {
      if(this.state.timer > 0){
        this.setState({
            timer: this.state.timer - 1
        })
      }else if(this.state.iterator > 8){
            clearInterval(interval)

            Navigation.push(this.props.componentId, {
              component:{
                name:"ResultScreen",
              }
            })
      }else{
        this.setState({
            timer: 10,
            iterator: this.state.iterator + 1
        })
      }
    },1000)
  }

  buttonPressHandler(answer){
    switch(answer){
      case 'answer1':
      case 'answer2':
      case 'answer3':
      case 'answer4':

        if(this.state.iterator < 9){
          if(answer === questions[this.state.iterator].correctAnswer){
            this.setState({
                points: this.state.points + 1,
                timer: 10,
                iterator: this.state.iterator + 1,
            })
            console.log(this.state.points + "   " + questions[this.state.iterator].correctAnswer)

          }else{
            this.setState({
                timer: 10,
                iterator: this.state.iterator + 1,
            })
            console.log(this.state.points + "    " + questions[this.state.iterator].correctAnswer)
          }
      }

      break
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>

        <View style={styles.testView}>

          <View style={styles.questionView}>
            <Text style={styles.timer}> Czas: {this.state.timer} sec</Text>
            <Text style={styles.questionNumber}> Pytanie {this.state.iterator+1}</Text>
            <Text style={styles.question}> {questions[this.state.iterator].question} </Text>
          </View>

          <View style={styles.bottomTestView}>
            <TouchableOpacity style={styles.anwerButton} onPress={()=>this.buttonPressHandler("answer1")}>
              <Text style={styles.buttonText}> {questions[this.state.iterator].answer1} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwerButton} onPress={()=>this.buttonPressHandler("answer2")}>
              <Text style={styles.buttonText}> {questions[this.state.iterator].answer2} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwerButton} onPress={()=>this.buttonPressHandler("answer3")}>
              <Text style={styles.buttonText}> {questions[this.state.iterator].answer3} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwerButton} onPress={()=>this.buttonPressHandler("answer4")}>
              <Text style={styles.buttonText}> {questions[this.state.iterator].answer4} </Text>
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
    backgroundColor: '#F5FCFF',
  },

  testView:{
    backgroundColor:'#808080',
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
    fontWeight:'bold',
    padding:20,
    fontSize:20,
    textAlign:'center',
  },
  question:{
    textAlign:'center',
    fontSize:25,
    margin:2,
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
    fontWeight:'bold',
    textAlign:'center'
  },
});
