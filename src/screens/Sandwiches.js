
import React, {useState, useEffect} from 'react';
import {
   StyleSheet, 
   Text, 
   View, 
   FlatList, 
   ActivityIndicator, 
   Image,
   TextInput,
   TouchableOpacity
  } from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome';


function Sandwiches({navigation,route}) {
  const{basket}=route.params;

  


  const menuArray = [
    {name : "Grilled Cheese",price:5.19,calories:440,key:"1"},
    {name : "Veggie Sandwich",price:4.89,calories:280,key:"2"},
    {name : "BLT Sandwich",price:6.89,calories:650,key:"3"},
    {name : "Veggie Sandwich & Cheese",price:7.69,calories:610,key:"4"},
  
  ];



  return (
    <View style={styles1.container}>
  
      <FlatList 
        data={menuArray}
       
      keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          
          <View style={styles1.listItem}>
          <TouchableOpacity onPress={() => navigation.navigate('AddOns',{foodPrice:item.price,foodCalories:item.calories})}>
              
            <View style={styles1.metaInfo}>
           
            <Text style={styles1.title}>{item.name}</Text>
            <Text >${item.price}  {item.calories} Calories</Text>
            </View></TouchableOpacity>
            
          </View>
          
        )}
      />

      
    </View>
    



  );
}

export default Sandwiches;

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffeeda",
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: '#101010',
    marginTop: 60,
    
    fontWeight: '700'
  },
  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width:400,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  coverImage: {
    width: 100,
    height: 100,
    borderRadius: 8
  },
  metaInfo: {
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    width: 300,
  
  }
})