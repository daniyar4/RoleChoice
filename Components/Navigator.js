import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

import MainScreen from '../Screens/MainScreen'
import ChoiceCategory from '../Screens/ChoiceCategory'
import ChoiceRole from '../Screens/ChoiceRole'

const MainStackNavigator = createNativeStackNavigator();


const MainStack = () => {
    return(
    <MainStackNavigator.Navigator initialRouteName={'Main'}>
        <MainStackNavigator.Screen name="Main" component={MainScreen}/>
        <MainStackNavigator.Screen name="ChoiceCategory" component={ChoiceCategory}/>
        <MainStackNavigator.Screen name="ChoiceRole" component={ChoiceRole}/>
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