
import React, {useState, useEffect} from 'react';
import {
   StyleSheet, 
   Text, 
   View, 
   FlatList, 
   TouchableOpacity
  } from 'react-native';

function SearchScreen({navigation,route}){
  const{Time}=route.params;
const menuArray = [
  {name : "Sterling",address:'46220 Potomac Run Plaza, Sterling, VA 20164',key:"1"},
  {name : "Ashburn",address:'44650 Waxpool Rd, Ashburn, VA 20147',key:"2"},
  {name : "Leesburg",address:'1083 Edwards Ferry Rd NE, Leesburg, VA 20176',key:"3"},
  {name : "Reston",address:'11674 Plaza America Dr, Reston, VA 20190',key:"4"},
  {name : "Potomac",address:'9812 Falls Rd, Potomac, MD 20854',key:"5"},
  {name : "Chantilly",address:'14421 Chantilly Crossing Ln, Chantilly, VA 20151',key:"6"},

];




  return (
    <View style={styles1.container}>
  
      <FlatList 
        data={menuArray}
       
      keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          
          <View style={styles1.listItem}>
          <TouchableOpacity onPress={() =>navigation.navigate('Menu',{location:item.address, Time:Time})}>
              
            <View style={styles1.metaInfo}>
           
            <Text style={styles1.title}>{item.name}</Text>
            <Text >{item.address}</Text>
            <Text >In-Store Pickup,Curbside, Delivery</Text>
            </View></TouchableOpacity>
            
          </View>
          
        )}
      />

      
    </View>
    



  );
}

export default SearchScreen;

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
    paddingVertical: 10,
    paddingHorizontal: 10,
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
    fontWeight:'bold',
    fontSize: 18,
    width: 400,
    paddingBottom: 5
  }
})