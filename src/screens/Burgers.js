
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


function Burgers({navigation,route}) {
  const{basket}=route.params;
 


  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);

 


  


  const menuArray = [
    {name : "Hamburger",price:8.99,calories:840,key:"1"},
    {name : "Little Hamburger",price:5.89,calories:540,key:"2"},
    {name : "Cheeseburger",price:8.89,calories:980,key:"3"},
    {name : "Little Cheeseburger",price:6.69,calories:610,key:"4"},
    {name : "Bacon Burger",price:9.19,calories:920,key:"5"},
    {name : "Little Bacon Burger",price:6.89,calories:620,key:"6"},
  
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

export default Burgers;

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