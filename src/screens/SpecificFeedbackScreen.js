import {  Text, View,TouchableOpacity ,StyleSheet, TextInput} from "react-native";
import {styles} from "./myStyle";
import React, {useState} from 'react';
import { MainStackNavigator} from "./Stack";

const SpecificFeedbackScreen =({ navigation,route }) =>{
  const {what}=route.params;
  const {why}=route.params;

    return  (

    
    <View style={{ flex: 1, alignItems: 'center' }}>
    <Text style={styles.textOrder}>Feedback Summary</Text>

    


    <View style={styles.row}><TouchableOpacity  onPress={() => orderType()}
        title="Type" style={styles.orderType}>
        <Text style={styles.startText}>What</Text><Text style={styles.endText}>{what}</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.row}><TouchableOpacity  onPress={() => orderType()}
        title="Type" style={styles.orderType}>
        <Text style={styles.startText}>Why</Text><Text style={styles.endText}>{why}</Text>
      </TouchableOpacity>
      </View>

      <Text style={styles.textOrder}>Contact Info</Text>
      <View style={styles.generalInput}>
  
  <TextInput
    style={styles2.TextInput}
    placeholder="Full Name"
    placeholderTextColor="#003f5c"
    
  />

</View>   

<View style={styles.generalInput}>
  
  <TextInput
    style={styles2.TextInput}
    placeholder="Email"
    placeholderTextColor="#003f5c"
    
  />

</View>    
<Text style={styles.textOrder}>Comments</Text>
<View style={styles.commentsInput}>
  
  <TextInput
    style={styles2.Input}
    placeholder="What's onyour mind?"
    placeholderTextColor="#003f5c"
    
  />

</View>   
<View><TouchableOpacity  onPress={() => navigation.navigate('Home')}
        title="Search" style={styles.generalSubmit}>
        <Text >Submit</Text>
      </TouchableOpacity>
      </View>
    
  </View>
  

  
);
}

export default SpecificFeedbackScreen;
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
   
    borderColor:"#ff8c00",
  
    
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#f8c471",
    marginBottom: 20,
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
    marginBottom: 30,
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
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#ff8c00",
  },

});