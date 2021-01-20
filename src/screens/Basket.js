import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {styles} from "./myStyle";
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  ActionSheetIOS,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Basket=({navigation,route})=> {
  const{Time}=route.params;
  var check;
    const{totalBasket}=route.params;
    const{location}=route.params;
    const {foodName}=route.params;
    const {number}=route.params;
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
   
  
    const [time, setTime] = useState(Time);
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
        <Text style={styles.AdressText}>{location}</Text>
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
        <Text style={styles.startText}>{number}x {foodName}</Text>
      </View>
      <Text style={{paddingLeft:10}}>${totalBasket}</Text>
      <View style={styles.basketTotal}>
        <Text style={styles.startText}>{'\n'}Subtotal</Text><Text style={styles.total}>{'\n'}${totalBasket.toFixed(2)}</Text>
      </View>
      <View style={styles.basketTotal}>
        <Text style={styles.startText}>Estimated Tax</Text><Text style={styles.total}>${(totalBasket*0.05).toFixed(2)}</Text>
      </View>
      <View style={styles.basketTotal}>
        <Text style={styles.startText}>Estimated Total</Text><Text style={styles.total}>${((totalBasket*0.05)+(totalBasket)).toFixed(2)}</Text>
      </View>



      {show &&(
  <DateTimePicker
  
  testID="datePicker"
  value={date}
  mode={modeDate}
  is24Hour={true}
  display="default"
  onChange={onChange}
  style={{marginLeft: '40%',
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
  style={{marginLeft: '45%',
  color: 'red', width:400}}
  
  />
)}
      


      
      
      
      <View><TouchableOpacity  onPress={() => navigation.navigate('Payment',{checkoutTotal:(((totalBasket*0.05)+(totalBasket)).toFixed(2))})}
        title="Search" style={styles.checkout}>
        <Text >Checkout</Text>
      </TouchableOpacity>
      </View>

      </View>

      
   
    );

}
export default Basket;