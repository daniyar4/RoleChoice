import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

import Mainscreen from '../Screens/MainScreen'
import ChoiceCategory from '../Screens/ChoiceCategory'

const MainStackNavigator = createNativeStackNavigator();


const MainStack = () => {
    return(
    <MainStackNavigator.Navigator initialRouteName={'Main'}>
        <MainStackNavigator.Screen name="Main" component={Mainscreen}/>
        <MainStackNavigator.Screen name="ChoiceCategory" component={ChoiceCategory}/>
    </MainStackNavigator.Navigator>
      )
  }


  const MainNavigator = () => {
    return(
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    )
  }
  
  
  export default MainNavigator