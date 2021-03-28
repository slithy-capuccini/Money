import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Button, SafeAreaView,StyleSheet, Text, TextInput, View, TouchableOpacity,TouchableWithoutFeedback, Keyboard} from 'react-native';
import { createAppContainer } from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DimissKeyboard =({ children })=>(
  <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function App() {
  let [name,setName]=useState();

  const save=async () =>{
    try{
      if(name>0){
        await AsyncStorage.setItem("MyName",name);
      }else{
        alert("Enter a valid number");
      }
    }catch(e){
      alert(e);
    }
  }
  const load=async () =>{
    try{
      let name=await AsyncStorage.getItem("MyName");
      if (name!==null){
        setName(name);
      }
    
    }catch(e){
      alert(e);
    }

  }
  useEffect(()=>{
    load()
  },[]);
  const remove = async()=>{
    try{
      await AsyncStorage.removeItem("MyName");
    }catch(e){
      alert(e);
    }finally{
      setName("");
    }
  }
  return (
      <DimissKeyboard>
      <View style={styles.container}>
        <Text style={styles.colors}>Money</Text>

        <Text style={{height:30}}>{name}</Text>
        <Text>Enter your money</Text>
        <TextInput style={styles.input} keyboardType='numeric' onChangeText={text=>setName(text)}></TextInput>
        <TouchableOpacity style={styles.buttons} onPress={()=>save()}>
          <Text style={{color:"white"}}>Save the money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.remove} onPress={()=>remove()}>
          <Text style={{color:"#ff1616", fontSize:12}}>Warning:RESET</Text>
        </TouchableOpacity>
      </View>
      </DimissKeyboard>
  );

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
    alignItems:"center",
    justifyContent:"center",
    fontSize:25,
    position:'relative',
    bottom: 100,
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
  },
  remove:{
    backgroundColor:"#fff64d",
    alignItems:"center",
    justifyContent:"center",
    paddingVertical:10,
    paddingHorizontal:20,
    marginTop:32,
    marginHorizontal:32,
    borderRadius:6,
    position:"relative",
    top:100
  }


});