/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type Props = {};
const tempQuest = "Lorem slipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default class TestScreen extends Component<Props> {

  constructor(){
    super()
    this.state = {
      timer: 10,
    }

    setInterval(() => {
      if(this.state.timer > 0){
        this.setState({
            timer: this.state.timer - 1
        })
      }else{
        this.setState({
            timer: 0,
        })
      }
    },1000)
  }


  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.testView}>

          <View style={styles.questionView}>
            <Text style={styles.timer}> Timer: {this.state.timer} sec</Text>
            <Text style={styles.questionNumber}> Question 1 </Text>
            <Text style={styles.question}> {tempQuest} </Text>
          </View>

          <View style={styles.bottomTestView}>
            <TouchableOpacity style={styles.anwerButton}>
              <Text style={styles.buttonText}> Tekst 1 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwerButton}>
              <Text style={styles.buttonText}> Tekst 2 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwerButton}>
              <Text style={styles.buttonText}> Tekst 3 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.anwerButton}>
              <Text style={styles.buttonText}> Tekst 4 </Text>
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
    backgroundColor:'grey',
    borderStyle: 'solid',
    borderWidth: 2,
    width:350,
    height:550,
    padding:10,
  },
  // ---------------------------------------------- Question View --------------------------------
  questionView:{
    backgroundColor:'white',
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
    alignSelf:'flex-end',
    textAlign:'center',
    fontSize:15,
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
    backgroundColor:'white',
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
    fontWeight:'bold'
  },
});
