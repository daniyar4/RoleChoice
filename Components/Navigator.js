import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import {TouchableOpacity, Image, View} from 'react-native'
import MainScreen from '../Screens/MainScreen'
import ChoiceCategory from '../Screens/ChoiceCategory'
import ChoiceRole from '../Screens/ChoiceRole'
import MasterProfileScreen from '../Screens/MasterProfileScreen'
import StatusScreen from '../Screens/StatusScreen'
import LocationComponent from './LocationComponent'
import { createStackNavigator } from '@react-navigation/stack'

const MainStackNavigator = createStackNavigator();


const defaultOptionsScreen = {
  headerTransparent: true,
  headerTitleAlign: 'center',
  headerTintColor: 'white',
  headerTitleStyle: {
      paddingTop: 15,
      fontSize: 20
  },
  headerLeft: () => {
      return <TouchableOpacity>
          <Image source={require('../assets/menuIcon.png')} style={{width:23, height: 23, marginTop: 10, marginLeft: 30 }}/>
      </TouchableOpacity>
  },
  headerRight: () => {
      return(
          <View style={{flexDirection:'row'}}>
              <TouchableOpacity>
                  <Image source={require('../assets/notificationIcon.png')} style={{width:23, height: 23, marginTop: 10, marginRight: 15 }}/>
              </TouchableOpacity>
              <TouchableOpacity>
                  <Image source={require('../assets/settingIcon.png')} style={{width:23, height: 23, marginTop: 10, marginRight: 25 }}/>
              </TouchableOpacity>
          </View>
      )
  }
}

const MainStack = () => {
    return(
    <MainStackNavigator.Navigator initialRouteName={'Main'} screenOptions={defaultOptionsScreen} >
        <MainStackNavigator.Screen name="Main" component={MainScreen}/>
        <MainStackNavigator.Screen name="ChoiceCategory" component={ChoiceCategory}/>
        <MainStackNavigator.Screen name="ChoiceRole" component={ChoiceRole}/>
        <MainStackNavigator.Screen name="MasterProfileScreen" component={MasterProfileScreen}/>
        <MainStackNavigator.Screen name="StatusScreen" component={StatusScreen}/>
        <MainStackNavigator.Screen name="LocationComponent" component={LocationComponent}/>
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