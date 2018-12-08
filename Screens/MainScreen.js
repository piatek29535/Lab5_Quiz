/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation'

type Props = {};
let string = "Lorem slipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
let tags = ["#Tag1","#Tag2"];

export default class MainScreen extends Component<Props> {

  goToScreen(screenName){
    Navigation.push(this.props.componentId, {
      component:{
        name:screenName,
      }
    })
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView vertical={true} style={styles.scrollContainer}>

          <View style={styles.headerContainer}>
            <Text style={styles.textHeader} >Main Menu</Text>
          </View>

          <View style={styles.textContainer}>
            <TouchableOpacity style={styles.testButton} onPress={() => this.goToScreen("TestScreen")}>
              <Text style={styles.textHeader} >Title test #1 </Text>
              <Text style={styles.textTags} >{tags[0]+" "+tags[1]}</Text>
              <Text style={styles.textDescription} >{string} </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.textContainer}>
            <TouchableOpacity style={styles.testButton} onPress={() => this.goToScreen("TestScreen")}>
              <Text style={styles.textHeader} >Title test #2 </Text>
              <Text style={styles.textTags} >{tags[0]+" "+tags[1]}</Text>
              <Text style={styles.textDescription} >{string} </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.textContainer}>
            <TouchableOpacity style={styles.testButton} onPress={() => this.goToScreen("TestScreen")}>
              <Text style={styles.textHeader} >Title test #3 </Text>
              <Text style={styles.textTags} >{tags[0]+" "+tags[1]}</Text>
              <Text style={styles.textDescription} >{string} </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.textContainer}>
            <TouchableOpacity style={styles.testButton} onPress={() => this.goToScreen("TestScreen")}>
              <Text style={styles.textHeader} >Title test #4 </Text>
              <Text style={styles.textTags} >{tags[0]+" "+tags[1]}</Text>
              <Text style={styles.textDescription} >{string} </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.resultContainer}>
            <Text style={styles.textHeader} >Zobacz ranking!</Text>
            <TouchableOpacity style={styles.resultButton} onPress={() => this.goToScreen("ResultScreen")}>
              <Text style={styles.textDescription} >Check!</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  //Header Container
  headerContainer:{
    padding:10,
    backgroundColor:'#006080',
    borderStyle: 'solid',
    borderBottomWidth:2,
    alignItems:'center'
  },

  //Test Views Container
  scrollContainer:{
    backgroundColor:'#00bfff',
  },
  textContainer:{
    margin:15,
    backgroundColor:'#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 2,
    justifyContent:'center',
    alignItems:'center'
  },
  testButton:{
    alignSelf:'stretch',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor:'#7F7F7F',
  },
  textHeader:{
    padding:10,
    fontSize:25,
    fontFamily: "Pacifico-Regular"
  },
  textTags:{
    padding:10,
    fontSize:20,
    color:'blue',
    fontFamily: "Pacifico-Regular"
  },
  textDescription:{
    padding:10,
    fontSize:20,
    fontFamily: "GamjaFlower-Regular"
  },

  //Result Container
  resultContainer:{
    padding:2,
    backgroundColor:'#006080',
    borderStyle: 'solid',
    borderWidth: 2,
    alignItems:'center'
  },

  resultButton:{
    margin:5,
    width:300,
    alignItems:'center',
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 10,
    borderColor:'#FFFFFF'
  },
});
