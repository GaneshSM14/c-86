import * as React from 'react'
import react from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import db from '../Config'
import firebase from 'firebase'
import MyHeader from '../Components/Header'
export default class Settings extends React.Component{
    constructor(){
        super()
        this.state={
            FirstName:'',
            LastName:'',
            Contact:'',
            Address:'',
            Email:'',
            docid:''
        }
    }
    componentDidMount(){
        this.getUserDetails()
    }
    getUserDetails=()=>{
        db.collection('users').where('Email', '==', firebase.auth().currentUser.email).get()
        .then((doc)=>{
            doc.forEach((document)=>{var details=document.data()
            this.setState({
                Email:details.Email,
                FirstName:details.firstname,
                LastName:details.Lastname,
                Address:details.Address,
                Contact:details.Contact,
                docid:document.id

            })})
        })
    }
    updateDetails=()=>{
        db.collection('users').doc(this.state.docid).update({
            firstname:this.state.FirstName,
            Lastname:this.state.LastName,
            Contact:this.state.Contact,
            Address:this.state.Address
        })
        alert("Changes Have Been Saved")
    }
    render(){
        return(
            <View>
                       <MyHeader navigation={this.props.navigation} title="Settings"/>
                <TextInput  value={this.state.FirstName}onChangeText={(Text)=>{this.setState({FirstName:Text})}} placeholder="First Name"/>
                <TextInput  value={this.state.LastName}onChangeText={(Text)=>{this.setState({LastName:Text})}} placeholder="Last Name"/>
                <TextInput value={this.state.Contact}onChangeText={(Text)=>{this.setState({Contact:Text})}} placeholder="Contact"/>
                <TextInput value={this.state.Address}onChangeText={(Text)=>{this.setState({Address:Text})}} placeholder="Address"/>
                <TouchableOpacity onPress={()=>{this.updateDetails()}}>
                    <Text>
                        Save Changes
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}