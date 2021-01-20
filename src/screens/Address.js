import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {styles} from "./myStyle";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
 
export default function Address ({ navigation ,route}) {
  const{Time}=route.params;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={ styles2.container}>
     
      <StatusBar style="auto" />
     
      <View style={styles2.generalInput}>
  
  <TextInput
    style={styles2.TextInput}
    placeholder="Street Address"
    placeholderTextColor="#003f5c"
    
  />

</View>   

<View style={styles.generalInput}>
  
  <TextInput
    style={styles2.TextInput}
    placeholder="Building Name / Suite / Apt"
    placeholderTextColor="#003f5c"
    
  />
  

</View> 


<View style={styles.generalInput}>
  
  <TextInput
    style={styles2.TextInput}
    placeholder="City"
    placeholderTextColor="#003f5c"
    
  />
  

</View> 


<View style={styles.generalInput}>
  
  <TextInput
    style={styles2.TextInput}
    placeholder="Zipcode"
    placeholderTextColor="#003f5c"
    
  />
  

</View> 

<View style={styles.generalInput}>
  
  <TextInput
    style={styles2.TextInput}
    placeholder="Delivery Instruction"
    placeholderTextColor="#003f5c"
    
  />
  

</View> 

      <TouchableOpacity style={styles2.loginBtn} onPress={() => navigation.navigate('Restaurants' ,{Time:Time})}>
        <Text style={styles2.login}>Search for Locations</Text>
      </TouchableOpacity>
      
    </View>

    
  );
}
 
const styles2 = StyleSheet.create({

 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#f8c471",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 10,
  
  },
  generalInput: {
    flexDirection:'row',
    borderWidth:1,
    borderColor:'white',
    borderBottomColor:'black',
     paddingTop:80,
     fontFamily:"Palatino",
     fontSize: 30,
     color:"white",
     fontWeight: 'bold',
     width:420,
    
   },
 
  Login: {
    fontFamily:"Cochin",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:100,
    borderWidth:1/2,
    borderRadius:155/2,
    height: 155,
    width: 155,
    backgroundColor:'#fff',
    overflow:'hidden',
    paddingLeft:50,
    paddingTop:65,
    borderColor:'grey',
    color:'black',
   
  },

  loginBtn: {
    width: "95%",
    alignSelf:'center',
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    backgroundColor: "#ff8c00",
  },

});