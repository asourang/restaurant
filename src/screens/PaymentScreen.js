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

const PaymentScreen=({navigation,route})=> {
  const{checkoutTotal}=route.params;
    return(
    <View style={styles.row}>
    <TouchableOpacity  onPress={() => navigation.navigate('Credit Card',{checkoutTotal})}
    title="Type" style={styles.orderType}>
    <Text style={styles.startText}>New Credit Card</Text>
  </TouchableOpacity>

  <TouchableOpacity  
    title="Type" style={styles.orderType} onPress={() => navigation.navigate('Gift Card',{checkoutTotal})}>
    <Text style={styles.startText}>New Gift Card</Text>
  </TouchableOpacity>

  <View style={styles.basketTotal}>
        <Text style={styles.startText}>Estimated Total</Text><Text style={styles.total}>${checkoutTotal}</Text>
      </View>

  <View><TouchableOpacity  onPress={() => navigation.navigate('Payment')}
        title="Search" style={styles.checkout}>
        <Text >Continue</Text>
      </TouchableOpacity>
      </View>

      

  </View>
    );
}
export default PaymentScreen;