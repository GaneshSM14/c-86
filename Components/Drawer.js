import * as React from 'react'
import{createDrawerNavigator} from 'react-navigation-drawer'
import { AppTabNavigator } from './TabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu'
import Settings from '../Screens/Settings'
import NotificationsScreen from '../Screens/Notifications'
export const DrawerNavigator = createDrawerNavigator({
    Home:{screen:AppTabNavigator}, 
    settings:{screen:Settings},
    Notification:{screen:NotificationsScreen}
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home'
})