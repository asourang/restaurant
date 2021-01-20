
import React, {useState, useEffect} from 'react';
import {
   StyleSheet, 
   Text, 
   View, 
   FlatList, 
   TouchableOpacity
  } from 'react-native';

function MenuScreen({navigation,route}) {
  const{basket}=route.params;
  const{location}=route.params;
    const{Time}=route.params;
    const[page,setpage]=useState();
const menuArray = [
  {name : "Burger",screen:'Burgers',key:"1"},
  {name : "Hot Dog",screen:'Hot Dogs',key:"2"},
  {name : "Sandwiches",screen:'Sandwiches',key:"3"},
  {name : "Fries",screen:'Fries',key:"4"},
  {name : "Drinks",screen:'Drinks',key:"5"},
  {name : "Shakes",screen:'Shakes',key:"6"},

];



  return (
    <View style={styles1.container}>
  
      <FlatList 
        data={menuArray}
       
      keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          
          <View style={styles1.listItem}>
          <TouchableOpacity onPress={() =>navigation.navigate(item.screen,{burger:8.99,menu:basket,location:location,Time:Time})}>
              
            <View style={styles1.metaInfo}>
           
            <Text style={styles1.title}>{item.name}</Text>
            </View></TouchableOpacity>
            
          </View>
          
        )}
      />

      
    </View>
    



  );
}

export default MenuScreen;

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeeda',
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
    width: 400,
    padding: 10
  }
})