
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
const GiftCardScreen =({navigation})=>{
    return(
<View style={{backgroundColor:"white"}}>
<Text style={styles.textOrder}>New Gift Card </Text>
<View style={styles.inputView}>
       
        <TextInput
          style={styles.creditInput}
          placeholder="Card #"
          placeholderTextColor="#464646"
       
        />
      </View>    
  <View style={styles.cardApply}>
        <Text style={styles.startTextCard}>Amount to Apply</Text><Text style={styles.totalCard}>$0.00</Text>
      </View>

      <View><TouchableOpacity  onPress={() => navigation.navigate('Phone Number')}
        title="Amount" style={styles.checkout}>
        <Text >Continue</Text>
      </TouchableOpacity>
      </View>

 

      

  </View>
    );
}
export default GiftCardScreen;