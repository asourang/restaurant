import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Linking,
  Button,
  TouchableOpacity,
  Platform
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


import {styles} from "./myStyle";
function PhoneScreen({ navigation }) {
  
 
  return (
    <View style={styles.container1}>
        <View style={{ alignItems: "center",
    justifyContent: "center",marginBottom:200}}>
        <Text style={{fontSize:17,fontWeight:"bold"}} >Please enter your phone number </Text>
        <Text style={{fontSize:15}} >We use this to contact you if there are issues with your order </Text>
    </View>
    
 
      <StatusBar style="auto" />

      <View style={styles1.row}>

      <Icon
       style={styles1.icon}
       name='phone-square'
       type='button'
       size="120"
       color="orange"
       />
 
      </View>

      
      
      <View style={styles1.inputView}>
       
        <TextInput
          style={styles1.TextInput}
          placeholder="(123) 654 467 376"
          placeholderTextColor="grey"
     
       
        />
      </View>

      <View><TouchableOpacity  onPress={() => navigation.navigate('Thank')}
        title="Search" style={styles.checkout}>
        <Text >Continue</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
 
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
    height:50,
    width:60,
  },
 
  inputView: {
    backgroundColor: "white",
   borderBottomWidth:1,
   borderBottomColor:"orange",
    width: "100%",
    height: 45,
    marginBottom: 30,
 
  
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight:330,
    marginBottom:5,
   
  },
  

message:{

  fontSize: 20,
  fontWeight: 'bold',
  marginRight:290,
  marginBottom:5,
 
},

  contact: {
    fontFamily:"Cochin",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:100,
    borderWidth:3,
    borderRadius:175/2,
    height: 175,
    width: 175,
    borderWidth:1/2,
    backgroundColor:'#ffcb15',
    overflow:'hidden',
    paddingLeft:40,
    paddingTop:75,
    borderColor:'grey',
    color:'black',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,

 
  },
 
 
  icon:{
paddingLeft:60,
paddingBottom:50,
width:200,
  },
  row:{
    fontSize: 20,
    fontWeight: 'bold',
    marginRight:20,
    marginBottom:5,
   flexDirection:'row',
  },
  Btn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#ff8c00",
  },
});
export default PhoneScreen;
