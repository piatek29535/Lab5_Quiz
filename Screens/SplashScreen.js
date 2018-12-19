/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation'

type Props = {};

export default class ResultScreen extends Component<Props> {

  goToScreen(screenName){
    Navigation.push(this.props.componentId, {
      component:{
        name:screenName,
      }
    })
  }

  render() {
    setTimeout( () => this.goToScreen("MainScreen"),2000)
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => this.goToScreen("MainScreen")}>
          <Image
            style={styles.image}
            source={require('../Assets/Images/drawerPic.jpg')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor:'#00bfff',
    borderWidth:3,
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  image:{
    borderWidth:2,
    borderColor:'#FFFFFF',
    margin:20,
    width: 300,
    height: 200,
  },
});
