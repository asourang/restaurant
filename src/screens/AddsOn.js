import React, {useState, useEffect} from 'react';
import { View ,Text,Button,TouchableOpacity} from 'react-native';
import {styles} from "./myStyle";
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckboxFormX from 'react-native-checkbox-form';


    import _ from 'lodash';


const bunData = [
    {
        label: 'No Bun (bowl)',
        value: 'one'
    },
    {
        label: 'No Bun (Wrapped in letuce)',
        value: 'two'
    }
];
const condimentData = [
  
  {
      label: 'Mayo',
      value: 'three'
  },
  {
    label: 'Ketchup',
    value: 'four'
},
{
  label: 'Relish',
  value: 'five'
},
{
label: 'Mustard',
value: 'six'
},

];

const AddOns=({ navigation,route }) =>{
  //burger price and calories
  const {foodPrice}=route.params;
  const {foodCalories}=route.params;

  
   


  const [basketTotal, setBasket] = useState(0);
  const [price, setPrice] = useState(0);
  const {burger}=route.params;
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(8.99); 
  var nu=0;
 const  _onSelect = ( item ) => {
  
      console.log(item);
    };
   
    
   

  
    return (

  <View style={{  backgroundColor: "white" }} >
  <View style={styles.burgerPrice}>
    

 
   </View>
   <View style={styles.burgerPrice}>
   
   <Text style={styles.textOption}>${foodPrice}  {foodCalories} Calories</Text>
 
   </View>

     <View style={styles.textBasket}>
   
   <Text style={styles.textOption}>Quantity</Text>
  
   </View>
   <View style={{flexDirection:'row',borderWidth:5,borderColor:"orange",width:350,alignSelf:'center'}}>
  <TouchableOpacity onPress={()=>{setQuantity(quantity-1);setTotal(total-foodPrice);}}>
  <Icon
      style={styles.icon,{paddingRight:100},{paddingLeft:50}}
       name='minus'
       type='button'
       />
  </TouchableOpacity>
  <Text style={{paddingLeft:100}}>{quantity} </Text>
  <TouchableOpacity onPress={()=>{setQuantity(quantity+1);setTotal(total+foodPrice)}}>
  <Icon
      style={styles.icon,{paddingLeft:100}}
       name='plus'
       type='button'
       />
  </TouchableOpacity>
  </View>
   
   <View style={styles.textBasket}>
   
          <Text style={styles.textOption}>Prefer no bun?</Text>
          <Text >Optional</Text>
          </View>
    <View style={styles.row}>
  </View>
          <View style={{ backgroundColor: "white" }} >
              <CheckboxFormX
                 style={{
                  width:200,
                  tintColor:"orange",
                  backgroundColor:"white",
                  iconColor:'orange',
                  marginRight:16,
                    
                  }}
                  dataSource={bunData}
                  itemShowKey="label"
                  itemCheckedKey="RNchecked"
                  iconSize={16}
                  formHorizontal={false}
                  labelHorizontal={true}
                  iconColor={'orange'}
                  onChecked={(item) => this._onSelect(item)}
              />
          </View>

          <View style={styles.textBasket}>
          <Text style={styles.textOption}>Select Unlimited Toppings</Text>
          <Text >Optional</Text>
          </View>
          
          <View style={{ backgroundColor: "white" },styles.basketCheck} >
          
              <CheckboxFormX
                  style={{
                  width:200,
                  tintColor:"orange",
                  backgroundColor:"white",
                  iconColor:'orange',
                  marginRight:16,
                    
                  }}
                  dataSource={condimentData}
                  itemShowKey="label"
                  itemCheckedKey="RNchecked"
                  iconSize={20}
                  formHorizontal={false}
                  labelHorizontal={true}
                  iconColor={'orange'}
                  onChecked={(item) => this._onSelect(item)}
              />


          </View>

          <View>
  
  <TouchableOpacity  onPress={()=>{navigation.navigate('basket',{totalBasket:total})}}
        title="Search" style={styles.addBasket}>
        <Text >Add to Basket - {total} </Text>
      </TouchableOpacity>
      </View>
      




          
     </View>
    );
  }

  export default AddOns;