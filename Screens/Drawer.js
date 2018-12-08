/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
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
          <Image
            style={styles.image}
            source={require('../Assets/Images/drawerPic.jpg')}
          />
          <Text style={styles.textHeader} >Szybki dostęp</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => this.goToScreen("MainScreen")}>
          <Text style={styles.buttonText}>Okno główne</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.goToScreen("ResultScreen")}>
          <Text style={styles.buttonText}> Wyniki </Text>
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
    backgroundColor: '#0099cc',
  },

  headerContainer:{
    marginBottom:20,
    alignItems:'center',
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
  },
  image:{
    borderWidth:2,
    borderColor:'#FFFFFF',
    margin:20,
    width: 300,
    height: 200,
  },
  textHeader:{
    padding:10,
    fontSize:30,
    fontWeight:'bold',
    fontStyle:'italic',
    color:'#FFFFFF'
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
    fontFamily: "Pacifico-Regular"
  }

})
