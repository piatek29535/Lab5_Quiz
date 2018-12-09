/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, ListView, RefreshControl} from 'react-native';

type Props = {};
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class ResultScreen extends Component<Props> {

  constructor() {
      super();
      this.componentDidMount;
      this.state = {
        refreshing: false,
        dataSource: ds,
      };
  }

  onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }


  componentDidMount(){
    //https://pwsz-quiz-api.herokuapp.com/api/results
    fetch('https://pwsz-quiz-api.herokuapp.com/api/results')
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({
              dataSource: ds.cloneWithRows(responseJson),
          })
      })
      .catch((error) => {
          console.error(error)
      });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
          <View style={styles.headerView}>
            <Text style={styles.headerText}> Wyniki graczy </Text>
          </View>

          <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View style={styles.results}>
              <Text style={styles.resultText}>{"Nick: "+rowData.nick}</Text>
              <Text style={styles.resultText}>{"Wynik: "+rowData.score}</Text>
              <Text style={styles.resultText}>{"Suma punktów: "+rowData.total}</Text>
              <Text style={styles.resultText}>{"Typ: "+rowData.type}</Text>
              <Text style={styles.resultText}>{"Data: "+rowData.date}</Text>
            </View>
          }

            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            }
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor:'#00bfff',
    borderWidth:3,
    margin:10,
    marginTop:60,
    flex: 1,
    padding:10,
    justifyContent: 'center',
  },
//Header
  headerView:{
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:4,
    borderRadius:20,
    borderColor:'#FFFFFF',
  },
  headerText:{
    marginBottom:10,
    fontSize:30,
    fontFamily:"RobotoSlab-Bold",
    color:'#e0ebeb',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 3, height: 3},
  },

//Wyniki
  listView:{
    marginTop:20,
  },

  results:{
    borderWidth:2,
    borderStyle:'dashed',
    borderColor:'#FFFFFF',
    borderRadius:5,
    backgroundColor:"#00ace6",
    margin:5,
    padding:15,
  },

  resultText:{
    fontSize:15,
    fontFamily:"Oswald-Bold",
    letterSpacing:1

  }

});
