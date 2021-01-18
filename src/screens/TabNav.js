import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ListStackNavigator,MapStackNavigator } from "./Stack";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="List" component={ListStackNavigator} />
      <Tab.Screen name="Map" component={MapStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;