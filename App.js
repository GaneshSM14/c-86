import * as React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Modal} from 'react-native'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import firebase from 'firebase'
import db from './Config'
import Welcome from './Screens/Welcome'
import { AppTabNavigator } from './Components/TabNavigator'
import {DrawerNavigator} from './Components/Drawer'
export default class App extends React.Component{

  render(){
    return(
      <AppContainer/>
    )
  }
}
const SwitchNavigator=createSwitchNavigator({
  Welcome:Welcome,
 drawer:DrawerNavigator
})
const AppContainer = createAppContainer(SwitchNavigator)