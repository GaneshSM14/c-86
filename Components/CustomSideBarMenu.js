import * as React from 'react'
import { Text,TouchableOpacity,View} from 'react-native'
import { DrawerItems} from 'react-navigation-drawer'
import Welcome from '../Screens/Welcome';
import firebase from 'firebase'
export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <DrawerItems {...this.props}/>
                <TouchableOpacity onPress={()=>{firebase.auth().signOut();this.props.navigation.navigate('Welcome')}}>
                    <Text>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}