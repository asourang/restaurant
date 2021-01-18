import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import DrawerNavigator from "./src/screens/DrawerNavigator";

const App = () => {


  return (
  <NavigationContainer>
    <DrawerNavigator/>
  </NavigationContainer>
   
  );
}
export default App;
