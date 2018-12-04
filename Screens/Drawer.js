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

export default class ResultScreen extends Component<Props> {

  goToScreen(screenName){
    Navigation.setStackRoot('ScreenStack',{
        component:{
          name:screenName
        }
    })
  }

  render() {
    return (
      <View style={styles.mainContainer}>

        <View style={styles.headerContainer}>
          <Text style={styles.textHeader} >Drawer</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => this.goToScreen("MainScreen")}>
          <Text style={styles.buttonText}> Home Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.goToScreen("ResultScreen")}>
          <Text style={styles.buttonText}> Result Screen </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems:'center',
    backgroundColor: '#7A7A7A',
  },

  headerContainer:{
    marginBottom:20,
    alignItems:'center',
  },
  textHeader:{
    padding:10,
    fontSize:30,
    fontWeight:'bold',
    color:'#000000'
  },

  button: {
    width: 250,
    height: 50,
    margin: 15,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCCCCC',
  },

  buttonText:{
    fontSize:20,
    fontWeight:'bold'
  }

})
