
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from 'react';
import HomeScreen from "./HomeScreen";
import OrderScreen from "./OrderScreen";
import LoginScreen from "./LoginScreen";


import Burgers from "./Burgers";
import LocationsScreen from "./LocationsScreen";
import FeedbackScreen from "./FeedbackScreen";
import SearchScreen from "./SearchScreen";
import FeedbackLocation from "./FeedbackLocation";
import PrivacyScreen from "./PrivacyScreen";
import MindFeedbackScreen from "./MindFeedbackScreen";
import FeedbackKind from "./FeedbackKind";
import MenuScreen from "./MenuScreen";
import Basket from "./Basket";
import Hotdog from "./Hotdog";
import Sandwiches from "./Sandwiches";
import Fries from "./Fries";
import Drinks from "./Drinks";
import Shakes from "./Shakes";
import PaymentScreen from "./PaymentScreen";
import PhoneScreen from "./PhoneScreen";
import ThankScreen from "./ThankScreen";
import CreditCardScreen from "./CreditCardScreen";
import GiftCardScreen from "./GiftCardScreen";
import ContactScreen from "./ContactScreen";
import GeneralFeedbackScreen from "./GeneralFeedbackScreen";
import SpecificFeedbackScreen from "./SpecificFeedbackScreen";
import AddOns from "./AddsOn";
import Address from "./Address";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Order" component={OrderScreen} />
    <Stack.Screen name="Restaurants" component={SearchScreen} />
    <Stack.Screen name="Credit Card" component={CreditCardScreen} />
    <Stack.Screen name="Contact" component={ContactScreen} />
    <Stack.Screen name="Menu" component={MenuScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Burgers" component={Burgers} />
    <Stack.Screen name="Address" component={Address} />
    <Stack.Screen name="Hot Dogs" component={Hotdog} />
    <Stack.Screen name="Sandwiches" component={Sandwiches} />
    <Stack.Screen name="Fries" component={Fries} />
    <Stack.Screen name="Drinks" component={Drinks} />
    <Stack.Screen name="Shakes" component={Shakes} />



    <Stack.Screen name="AddOns" component={AddOns} />
    <Stack.Screen name="basket" component={Basket} />
    <Stack.Screen name="Thank" component={ThankScreen} />
    <Stack.Screen name="Payment" component={PaymentScreen} />
    <Stack.Screen name="Phone Number" component={PhoneScreen} />
    <Stack.Screen name="Gift Card" component={GiftCardScreen} />
    <Stack.Screen name="GeneralFeedbackScreen" component={GeneralFeedbackScreen} />
    </Stack.Navigator>
  );
}
const FeedbackAppStackNavigator = () => {
    return (
      <Stack.Navigator >
      <Stack.Screen name="FeedBack" component={FeedbackScreen} />
      <Stack.Screen name="MindFeedbackStack" component={MindFeedbackScreen} />
      <Stack.Screen name="FeedbackKind" component={FeedbackKind} />
      <Stack.Screen name="FeedbackLocation" component={FeedbackLocation} />
      <Stack.Screen name="GeneralFeedbackScreen" component={GeneralFeedbackScreen} />
      <Stack.Screen name="SpecificFeedbackScreen" component={SpecificFeedbackScreen} />

     
      </Stack.Navigator>
    );
}



const PrivacyStackNavigator = () => {
    return (
      <Stack.Navigator >
      <Stack.Screen name="Privacy" component={PrivacyScreen} />
   
      </Stack.Navigator>
    );
}


const ListStackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Restaurants" component={SearchScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    
    </Stack.Navigator>
  );
}
const MapStackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Restaurants" component={LocationsScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    
    </Stack.Navigator>
  );
}




export { MainStackNavigator ,MapStackNavigator ,ListStackNavigator,FeedbackAppStackNavigator, PrivacyStackNavigator};