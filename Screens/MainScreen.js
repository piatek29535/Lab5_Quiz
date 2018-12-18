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
let goToScreenNames = ["TestScreen","TestScreen2","TestScreen3","TestScreen4"];

export default class MainScreen extends Component<Props> {

  constructor(){
    super()
    this.state = {
      jsonFromServer:" ",
    }
  }

  goToScreen(screenName){
    Navigation.push(this.props.componentId, {
      component:{
        name:screenName,
      }
    })
  }

  componentDidMount(){
    fetch('https://pwsz-quiz-api.herokuapp.com/api/tests')
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({
              jsonFromServer: responseJson,
          })
      })
      .catch((error) => {
          console.error(error)
      });
  }


  renderQuizViews(){
    let view = []
    for(let i = 0; i<4;i++){

      let tags = []
      for(let j = 0; j<this.state.jsonFromServer[i].tags.length;j++){
          tags.push("#"+this.state.jsonFromServer[i].tags[j]+" ")
      }

      view.push(
        <View style={styles.textContainer}>
          <TouchableOpacity style={styles.testButton} onPress={() => this.goToScreen(goToScreenNames[i])}>
            <Text style={styles.textHeader} >{this.state.jsonFromServer[i].name}</Text>
            <Text style={styles.textTags} >{tags}</Text>
            <Text style={styles.textDescription} >{this.state.jsonFromServer[i].description} </Text>
            <Text style={styles.textDescription} >{"Poziom trudności: "+this.state.jsonFromServer[i].level} </Text>
            <Text style={styles.textDescription} >{"Ilośc pytań: "+this.state.jsonFromServer[i].numberOfTasks} </Text>
          </TouchableOpacity>
        </View>)
    }

    return view;
  }

  render() {

    if(this.state.jsonFromServer[0].tags === undefined){
      return null;
    }

    return (
      <View style={styles.mainContainer}>
        <ScrollView vertical={true} style={styles.scrollContainer}>

          <View style={styles.headerContainer}>
            <Text style={styles.textHeader} >Menu główne</Text>
          </View>

          {this.renderQuizViews()}

          <View style={styles.resultContainer}>
            <Text style={styles.textHeader} >Zobacz ranking!</Text>
            <TouchableOpacity style={styles.resultButton} onPress={() => this.goToScreen("ResultScreen")}>
              <Text style={styles.textDescription} >Sprawdź!</Text>
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
    fontSize:22,
    fontFamily: "Pacifico-Regular"
  },
  textTags:{
    paddingLeft:10,
    fontSize:20,
    color:'blue',
    fontFamily: "Pacifico-Regular"
  },
  textDescription:{
    padding:10,
    fontSize:17,
    fontStyle:'italic'
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
