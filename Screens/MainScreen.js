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

export default class MainScreen extends Component<Props> {


  goTo(screenName){
    Navigation.push(this.props.componentId, {
      component:{
        name:screenName
      }
    })
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView vertical={true} style={styles.scrollContainer}>
          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => this.goTo("ResultScreen")}>
              <Text style={styles.text} >Przejdź do ResultScreen </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.goTo("TestScreen")}>
              <Text style={styles.text} >Przejdź do TestScreen </Text>
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
    backgroundColor: '#F5FCFF',
  },
  scrollContainer:{
    backgroundColor:'#AF0093',
  },
  textContainer:{
    margin:10,
    padding:10,
    backgroundColor:'#FF0500',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    padding:10,
    fontSize:20,
  }
});
