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
import {LoginStackNavigator }from "./Stack";
 
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={ styles2.container}>
     
      <StatusBar style="auto" />
     
      <View style={styles.generalInput}>
  
  <TextInput
    style={styles2.TextInput}
    placeholder="Eamil"
    placeholderTextColor="#003f5c"
    
  />

</View>   

<View style={styles.generalInput}>
  
  <TextInput
    style={styles2.TextInput}
    placeholder="Password"
    placeholderTextColor="#003f5c"
    
  />

</View> 
      <TouchableOpacity style={styles2.loginBtn} onPress={() => navigation.navigate('Home' )}>
        <Text style={styles2.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.orderType}>
        <Text style={styles2.forgot_button}>Create Account</Text>
        <Text style={styles2.forgot_button}>                                        </Text>
        <Text style={styles2.forgot_button}>Forgot Password?</Text>
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
    marginTop: 20,
    backgroundColor: "#ff8c00",
  },

});