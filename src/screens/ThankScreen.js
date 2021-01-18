import React from "react";
import {
 TouchableOpacity,
  Text,
  View,
} from "react-native";
import {styles} from "./myStyle";

const ThankScreen=({navigation})=>{
    return(
<View style={styles.thankContainer}>
        <View style={{ alignItems: "center",
    justifyContent: "center",marginBottom:200}}>
        <Text style={{fontSize:50,fontWeight:"bold",color:"beige"}} >Thank You </Text>
        <Text style={{fontSize:20,color:"beige"}} >Your order have been placed successfully!</Text>
    </View>

    <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginText}>Home</Text>
      </TouchableOpacity>
</View>
    );
}
export default ThankScreen;