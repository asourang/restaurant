
import {  Text,  ActionSheetIOS, View,TouchableOpacity,Image, Button,Platform } from "react-native";
import {styles} from "./myStyle";
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';

function OrderScreen({ navigation }) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('dTE');
  const [modeDate, setModeDate] = useState('date');
  const [show, setShow] = useState(false);

  const onChange=(event,selectedDate)=>{
    const currentDate = selectedDate || date;
    setShow(Platform.OS==='ios');
    setDate(currentDate);

  };
  const showMode = (currentMode) => {
      setShow(true);
      setModeDate(currentMode);
    };

  const [result, setResult] = useState("In-Store Pickup");
 

  const [time, setTime] = useState("ASAP");
  const [address, setAddress] = useState("Restaurants");
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
        setAddress("Address")
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
        setShow(false)
      } else if (buttonIndex === 1) {
      
        showMode('date');
        showMode('date');
        setTime("Later");
      }
    }
  );
  
    return (

      
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.textOrder}>How do you want your order?</Text>
          <View style={styles.row}><TouchableOpacity  onPress={(choice)}
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
      <View style={styles.row}>
        <TouchableOpacity onPress={Timechoice}
        title="when" style={styles.orderType}>
          
           <Icon
        size= '15'
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


      {show &&(
  <DateTimePicker
  
  testID="datePicker"
  value={date}
  mode={modeDate}
  is24Hour={true}
  display="default"
  onChange={onChange}
  style={{marginLeft: '60%',
  color: 'orange', width:400}}
  

  
  />
)}
{show &&(
  <DateTimePicker
  
  testID="timePicker"
  value={date}
  mode={mode}
  is24Hour={true}
  display="default"
  onChange={onChange}
  style={{marginLeft: '71%',
  color: 'red', width:400}}
  
  />
)}
      
 <View><TouchableOpacity  onPress={() => navigation.navigate(address, {Time:time})}
        title="Search" style={styles.newOrder}>
        <Text >Search for Locations</Text>
      </TouchableOpacity>
      </View>
        </View>
      );
    }
 
  export default OrderScreen;