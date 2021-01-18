
import { StatusBar } from 'expo-status-bar';
import { FlatList,SafeAreaView, Text, View,TouchableOpacity,Image, Button } from "react-native";
import {styles} from "./myStyle";
import React, {useState} from 'react';
import ApiManager from '../../api/ApiManager';



 function HomeScreen({ navigation }) {
  //Declare variable
  

  const [result , setResults]  = useState([]);

  const getPost = async () => {
      const response = await ApiManager.get('/posts');
      setResults(response.data);
  };

  
  
  return (
    
    <SafeAreaView style={styles.container} >
      
      <Image 
              style={{borderRadius:250/2,
              height: 250,
              width: 250,
            }}
              source={require('../../assets/home.png')}
              
            />
      <View><TouchableOpacity  onPress={() => navigation.navigate('Order')}
        title="Search!" style={styles.homeOrder}>
        <Text style={styles.loginText}>Restaurants</Text>
      </TouchableOpacity>
      </View>
      
      <View><TouchableOpacity   onPress={() => navigation.navigate('Order')}
        title="Order!" style={styles.newOrder1}>
        <Text >Start New Order</Text>
      </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    
    </SafeAreaView>
  );
}

export default  HomeScreen;

