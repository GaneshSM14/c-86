import * as React from 'react'
import{createBottomTabNavigator} from 'react-navigation-tabs'
import BookDonateScreen from '../Screens/bookDonatescreen'
import BookRequestScreen from '../Screens/bookRequestscreen'
import { StackNavigator } from './stacknavigator'
export const AppTabNavigator = createBottomTabNavigator({
   StackNavigator: StackNavigator,
    Request:BookRequestScreen
})