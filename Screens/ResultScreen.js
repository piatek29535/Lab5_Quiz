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
let upActiveFields = ['Nick','Point','Type','Date'];
let ranking = [['1','2','3','3'] , ['4','5','6','3'] , ['7','8','9','3'] , ['10','11','12','3']]
export default class ResultScreen extends Component<Props> {

  upActiveFieldsRender(){
    let row = []
    let fields = []
      for(let i = 0;i<4;i++){
          fields.push(<TouchableOpacity style={styles.activeButton} onPress={() => console.log("")}>
                        <Text style={styles.activeButtonText}>{upActiveFields[i]}</Text>
                      </TouchableOpacity>)
      }
      row.push(<View style={styles.activeFields}>{fields}</View>)
    return row
  }

  rankingFieldsRender(){
    let rows = [];
      for(let i = 0;i<4;i++){
        let row = [];
          for(let j = 0;j<4;j++){
              row.push(<Text style={styles.table}>{ranking[i][j]}</Text>)
          }
        rows.push(<View style={styles.fields}>{row}</View>)
      }

    return rows
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        {this.upActiveFieldsRender()}

        {this.rankingFieldsRender()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding:20,
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
  },


// Active Fields
  activeFields:{
    flexDirection:'row',
    borderStyle:'dashed',
    borderWidth: 1,
    borderColor: '#B2B2B2',
    justifyContent: 'center',
  },
  activeButton:{
    flex:1,
    width:80,
    height:80,
    backgroundColor: '#7F7F7F',
    borderStyle:'dashed',
    borderWidth: 1,
    borderColor: '#000000',
    justifyContent:'center',
    alignItems:'center'
  },
  activeButtonText:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:25,
  },


//Normal Fields
  fields:{
    flexDirection:'row',
    borderStyle:'dashed',
    borderWidth: 1,
    borderColor: '#000000'
  },
  table:{
    flex:1,
    padding:22,
    width:80,
    height:80,
    backgroundColor: '#FFFFFF',
    borderStyle:'dashed',
    borderWidth: 1,
    borderColor: '#000000'
  }


});
