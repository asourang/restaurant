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

const Basket=({navigation,route})=> {
    const{totalBasket}=route.params;
    const [result, setResult] = useState("In-Store Pickup");
  const [time, setTime] = useState("ASAP");

  var check=(totalBasket*0.05)+(totalBasket);
  
  const choice= () =>
  ActionSheetIOS.showActionSheetWithOptions(
    {
      options: ["In-Store Pickup", "Curbside", "Delivery","Cancel"],
     
      cancelButtonIndex: 3
    },
    buttonIndex => {
      if (buttonIndex === 3) {
        // cancel action
      } else if (buttonIndex === 0) {
        setResult("In-Store Pickup");
      } else if (buttonIndex === 1) {
        setResult("Curbside");
      }
      else if (buttonIndex === 2) {
        setResult("Delivery");
      }
    }
  );

  const Timechoice= () =>ActionSheetIOS.showActionSheetWithOptions(
    {
      options: ["ASAP", "Later", "Cancel"],
     
      cancelButtonIndex: 2
    },
    buttonIndex => {
      if (buttonIndex === 2) {
        // cancel action
      } else if (buttonIndex === 0) {
        setTime("ASAP");
      } else if (buttonIndex === 1) {
        setTime("Later");
      }
    }
  );
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

    return(
<View >
<TouchableOpacity 
        title="home" style={styles.Adress}>
           <Icon
 
       name='home'
       color="#f8c471"
       type='button'
       size="40"
       />
       <View>
        <Text style={styles.AdressText}>Sterling</Text>
        <Text style={styles.AdressText}>46220Potomac Run Plaza</Text>
        </View>
      </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Menu')}
        title="plus" style={styles.basketType}>
           <Icon
      style={styles.icon}
       name='plus-circle'
       type='button'
       size="25"
       color="#464646"
       />
       
        <Text style={styles.basketText}>Add More Item</Text>
      </TouchableOpacity>
     
          <View style={styles.row}><TouchableOpacity  onPress={choice}
        title="Type" style={styles.orderType}>
           <Icon
      style={styles.icon}
       name='list'
       type='button'
       size="15"
       />
       
        <Text style={styles.startText}>Order Type</Text><Text style={styles.endText}>{result}</Text>
        <Icon
       style={styles.icon}
       name='angle-right'
       type='button'
       />
      </TouchableOpacity>
      </View>
      <View style={styles.row}><TouchableOpacity onPress={Timechoice}
        title="when" style={styles.orderType}>
           <Icon
      style={styles.icon}
       name='clock-o'
       type='button'
       size="15"
       />
       
        <Text style={styles.startText}>When</Text><Text style={styles.endText}>{time}</Text>
        <Icon
       style={styles.icon}
       name='angle-right'
       type='button'
       />
      </TouchableOpacity>
      <View >
      <Text style={styles.textOrder}>Coupon</Text>
        <TextInput
          style={styles.basketInput}
          placeholder="FREE20"
          placeholderTextColor="grey"
     
        />
 
       </View>
      </View>
      <Text style={styles.textOrder}>Items</Text>

      <View style={styles.basketTotal}>
        <Text style={styles.startText}>Subtotal</Text><Text style={styles.total}>${totalBasket}</Text>
      </View>
      <View style={styles.basketTotal}>
        <Text style={styles.startText}>Estimated Tax</Text><Text style={styles.total}>${totalBasket*0.05}</Text>
      </View>
      <View style={styles.basketTotal}>
        <Text style={styles.startText}>Estimated Total</Text><Text style={styles.total}>${(totalBasket*0.05)+(totalBasket)}</Text>
      </View>



      
      
      
      <View><TouchableOpacity  onPress={() => navigation.navigate('Payment',{checkoutTotal:check})}
        title="Search" style={styles.checkout}>
        <Text >Checkout</Text>
      </TouchableOpacity>
      </View>
      </View>

      
   
    );

}
export default Basket;