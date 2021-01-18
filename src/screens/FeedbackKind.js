import {  Text, View,TouchableOpacity } from "react-native";
import {styles} from "./myStyle";
import React, {useState} from 'react';



const FeedbackKind =({ navigation,route }) =>{
    const {what}=route.params;
    const {why}=route.params;
    return  (
    
    <View style={{ flex: 1, alignItems: 'center' }}>
    <Text style={styles.textOrder}>Is this about a specific location?</Text>
    <View style={styles.row}><TouchableOpacity onPress={() => navigation.navigate('GeneralFeedbackScreen',{what:what,why:why} )}
 style={styles.orderType}  >
   
  <Text style={styles.startText}>General Feedback</Text>
  </TouchableOpacity> 

</View>

<View style={styles.row}><TouchableOpacity  onPress={() => navigation.navigate('FeedbackLocation' ,{what:what,why:why})}
  title="Type" style={styles.orderType}>
   
  <Text style={styles.startText}>Specific Location</Text>
</TouchableOpacity>

</View>
</View>
);
}

export default FeedbackKind;