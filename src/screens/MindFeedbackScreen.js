import {  Text, View,TouchableOpacity } from "react-native";
import {styles} from "./myStyle";
import React, {useState} from 'react';



const MindFeedbackScreen =({ navigation,route }) =>{
  const {what}=route.params;
    return  (
    
    <View style={{ flex: 1, alignItems: 'center' }}>
    <Text style={styles.textOrder}>What is on your mind?</Text>
    <View style={styles.row}><TouchableOpacity 
 style={styles.orderType}  onPress={() => navigation.navigate('FeedbackKind',{what:what,why:'Compliment'} )} >
   
  <Text style={styles.startText}>Compliment</Text>
  </TouchableOpacity>

</View>

<View style={styles.row}><TouchableOpacity onPress={() => navigation.navigate('FeedbackKind',{what:what,why:'Issue'} )}
  title="Type" style={styles.orderType}>
   
  <Text style={styles.startText}>Issue</Text>
</TouchableOpacity>

</View>
<View style={styles.row}><TouchableOpacity onPress={() => navigation.navigate('FeedbackKind',{what:what,why:'Question'} )}
  title="Type" style={styles.orderType}>
   
  <Text style={styles.startText}>Question</Text>
</TouchableOpacity>

</View>
<View style={styles.row}><TouchableOpacity onPress={() => navigation.navigate('FeedbackKind',{what:what,why:'Suggestion'} )}
  title="Type" style={styles.orderType}>
   
  <Text style={styles.startText}>Suggestion</Text>
</TouchableOpacity>

</View>






  </View>
);
}

export default MindFeedbackScreen;