
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {styles} from "./myStyle";
import {
  StyleSheet,
  ActionSheetIOS,
  Alert,
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
const CreditCardScreen =({navigation,route})=> {
  const{checkoutTotal}=route.params;
    return(
<View style={{backgroundColor:"white"}}>
<Text style={styles.textOrder}>New Credit Card </Text>
    <Text style={{fontSize:15,color:"orange"}}>Card Detail</Text>
   
 
<View style={styles.inputView}>
       
        <TextInput
          style={styles.creditInput}
          placeholder="Card #"
          placeholderTextColor="#464646"
       
        />
      </View>
      <View style={styles.inputView}>
       
        <TextInput
          style={styles.creditInput}
          placeholder="CVV"
          placeholderTextColor="#464646"
       
        />
      </View>

      <View style={styles.inputView}>
       
        <TextInput
          style={styles.creditInput}
          placeholder="Zipcode"
          placeholderTextColor="#464646"
       
        />
      </View>

      <View style={styles.inputView}>
       
        <TextInput
          style={styles.creditInput}
          placeholder="Expiring Month (MM)"
          placeholderTextColor="#464646"
       
        />
      </View>

      <View style={styles.inputView}>
       
        <TextInput
          style={styles.creditInput}
          placeholder="Expiring Year (YYYY)"
          placeholderTextColor="#464646"
       
        />
      </View>




  <View style={styles.cardApply}>
        <Text style={styles.startTextCard}>Amount to Apply</Text><Text style={styles.totalCard}>${checkoutTotal}</Text>
      </View>

      <View><TouchableOpacity  onPress={() => navigation.navigate('Phone Number')}
        title="Search" style={styles.checkout}>
        <Text >Continue</Text>
      </TouchableOpacity>
      </View>

 

      

  </View>
    );
}
export default CreditCardScreen;