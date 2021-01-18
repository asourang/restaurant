import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { PrivacyStackNavigator} from "./Stack";
import { FeedbackAppStackNavigator} from "./Stack";
import { MainStackNavigator} from "./Stack";
import LoginScreen from "./LoginScreen";
import OrderScreen from "./OrderScreen";
import TabNav from "./TabNav";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (

    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainStackNavigator} />
         <Drawer.Screen name="List" component={TabNav} />
        <Drawer.Screen name="Login" component={LoginScreen } />
        <Drawer.Screen name="Find Locations" component={OrderScreen} />
        <Drawer.Screen name="Feedback" component={FeedbackAppStackNavigator} />
        <Drawer.Screen name="Privacy & Agreement" component={PrivacyStackNavigator} />
       
      </Drawer.Navigator>
  
  );
}



export default DrawerNavigator ;