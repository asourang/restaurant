
import {  Text,  ActionSheetIOS,View,TouchableOpacity,Image, Button } from "react-native";
import {styles} from "./myStyle";
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


function OrderScreen({ navigation }) {
  const [result, setResult] = useState("In-Store Pickup");
  const [time, setTime] = useState("ASAP");
  
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


  
    return (

      
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.textOrder}>How do you want your order?</Text>
          <View style={styles.row}><TouchableOpacity  onPress={choice}
        title="Type" style={styles.orderType}>
           <Icon
      style={styles.icon}
       name='list'
       type='button'
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
        size='15'
       name='clock-o'
       type='button'
       />
       
        <Text style={styles.startText}>When</Text><Text style={styles.endText}>{time}</Text>
        <Icon
       style={styles.icon}
       name='angle-right'
       type='button'
       />
      </TouchableOpacity>
      </View>

      
      
      
      <View><TouchableOpacity  onPress={() => navigation.navigate('Restaurants')}
        title="Search" style={styles.newOrder}>
        <Text >Search for Locations</Text>
      </TouchableOpacity>
      </View>
        </View>
      );
    }
 
  export default OrderScreen;