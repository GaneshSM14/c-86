import * as React from 'react'
import { Component } from 'react'
import{View,Text, FlatList,TouchableOpacity} from 'react-native'
import MyHeader from '../Components/Header'
import db from '../Config'
import firebase from 'firebase'
export default class NotificationsScreen extends Component{
    constructor(){
        super()
        this.state={
            Notificationlist:[]
        }
    }
    componentDidMount(){this.getNotificationlist()}
    getNotificationlist=()=>{
        db.collection('Notification').onSnapshot((Snapshot)=>{
            var Notificationlist=Snapshot.docs.map((document)=>document.data())
            this.setState({Notificationlist:Notificationlist})
        })
    }
    render(){
        return(
            <View>
{this.state.Notificationlist.length==0?
                (
                    <Text>
                        Loading
                    </Text>
                ):(
                    <View>
                       <MyHeader navigation={this.props.navigation} title="Donate Screen"/>
           <FlatList
           keyExtractor={(item,index)=>{index.toString()}}
           data={this.state.Notificationlist}
           renderItem={({item})=>{
               console.log(item)
               return(
               <View>
               <Text>
               {item.BookName}
               </Text>
               <Text>
                  {item.Message}
               </Text>
               <TouchableOpacity style={{backgroundColor:'red'}}>
                   <Text>
                       Read
                   </Text>
               </TouchableOpacity>
                   </View>
           )}}
           />
            </View>
                )}
            </View>
        )
    }
}