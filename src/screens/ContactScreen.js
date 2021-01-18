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
function ContactScreen({ navigation }) {
  const openDialScreen = () => {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:${091123456789}';
    } else {
      number = 'tel:${091123456789}';
    }
    Linking.openURL(number);
  };
 
 
  return (
    <View style={styles.container1}>
    
 
      <StatusBar style="auto" />
   



      <View style={styles1.row}>
      <Icon
       style={styles1.icon}
       name='envelope'
       type='button'
       size="15"
       />
      <Text style={styles1.text}>Email</Text>
      </View>



      <View style={styles1.inputView}>
       
        <TextInput
          style={styles1.TextInput}
          placeholder="info@gmail.com"
          placeholderTextColor="grey"
          secureTextEntry={true}
       
        />
      </View>


      <View style={styles1.row}>
      <TouchableOpacity onPress={() => openDialScreen()}>
      <Icon
       style={styles1.icon}
       name='phone'
       type='button'
       size="15"
       />
      </TouchableOpacity>
      <Text style={styles1.text}>Phone</Text>
      </View>

      
      
      <View style={styles1.inputView}>
       
        <TextInput
          style={styles1.TextInput}
          placeholder="(123) 654 467 376"
          placeholderTextColor="grey"
          secureTextEntry={true}
       
        />
      </View>


     
      <View style={styles1.row}>
    <Icon
       
       name='comment'
       type='button'
       size="15"
       
       />
      <Text style={styles1.message}>Message</Text>
      
      </View>
      <View style={styles1.inputView}>
      

        <TextInput
          style={styles1.TextInput}
          placeholder="Is there is any way to be awarded muchfor the Project? "
          placeholderTextColor="grey"
          secureTextEntry={true}
       
        />
        </View>

      
 
      <TouchableOpacity style={styles1.Btn}>
        <Text style={styles1.loginText}>Send</Text>
      </TouchableOpacity>
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
    width: "100%",
    height: 45,
    marginBottom: 20,
 
  
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
paddingLeft:35,
paddingTop:8,


width:50,
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
export default ContactScreen;
