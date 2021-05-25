import * as React from 'react'
import{createStackNavigator} from 'react-navigation-stack'
import BookDonateScreen from '../Screens/bookDonatescreen'
import BookRequestScreen from '../Screens/bookRequestscreen'
import RequesterDetailsScreen from '../Screens/requester'
export const StackNavigator = createStackNavigator({
    Donate : BookDonateScreen,
   requester:RequesterDetailsScreen
})