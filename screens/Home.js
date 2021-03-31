import { StatusBar } from 'expo-status-bar';
import React, {Component, useState} from 'react';
import { Button, SafeAreaView,StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Home extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.colors}>Money</Text>

        <Text style={{height:30}}></Text>
        <Text>Enter your money</Text>
        <TextInput style={styles.input}></TextInput>
        <TouchableOpacity style={styles.buttons}>
          <Text style={{color:"white"}}>Save the money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={{color:"white"}}>Plus 10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={{color:"white"}}>Warning:RESET</Text>
        </TouchableOpacity>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b90000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colors: {
    color:'white',
    fontSize:25,
    position:'relative',
    bottom: 230,
  },
  views: {
    paddingBottom:10,
  },
  input:{
    borderWidth:1,
    borderColor:"#575DD9",
    alignSelf:"stretch",
    margin:32,
    height:64,
    borderRadius:6,
    paddingHorizontal:16,
    fontSize:16,
    fontWeight:"300",

  },
  buttons:{
    backgroundColor:"#575DD9",
    alignItems:"center",
    justifyContent:"center",
    alignSelf:"stretch",
    paddingVertical:12,
    paddingHorizontal:32,
    marginTop:32,
    marginHorizontal:32,
    borderRadius:6,
  }


});