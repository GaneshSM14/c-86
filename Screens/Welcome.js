import * as React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Modal} from 'react-native'
import firebase from 'firebase'
import db from '../Config'
export default class Welcome extends React.Component{

  constructor(){
    super()
    this.state={
      Email:'q@W.com',
      Password:'123456',
      firstname:'',
      Lastname:'',
      Address:'',
      Contact:'',
      ConfirmPassword:'',
      visiblity:false
    }
  }
  userLogin=()=>{
    firebase.auth().signInWithEmailAndPassword(this.state.Email,this.state.Password)
    .then((response)=>{alert(" Login succesful ")}).then(()=>{this.props.navigation.navigate('drawer')})
    .catch(function(error){alert(error.message)})
  }
  userSignUp=()=>{
    if (this.state.Password==this.state.ConfirmPassword){
    firebase.auth().createUserWithEmailAndPassword(this.state.Email,this.state.Password)
    .then((response)=>{alert(" New User Added ");
  db.collection('users').add({
    firstname:this.state.firstname,
    Lastname:this.state.Lastname,
    Contact:this.state.Contact,
    Address:this.state.Address,
    Email:this.state.Email,
      IsbookRequestActive:false
  })})
    .catch(function(error){alert(error.message)})
    }
  }
  model=()=>{
    return(
      <Modal animationType="slide" transparent={true} visible={this.state.visiblity}>
        <TextInput  maxLength={8} onChangeText={(Text)=>{this.setState({firstname:Text})}}placeholder="first name"/>
        <TextInput  maxLength={8} onChangeText={(Text)=>{this.setState({Lastname:Text})}}placeholder="Last name"/>
        <TextInput  maxLength={10} keyboardType={'numeric'} onChangeText={(Text)=>{this.setState({Contact:Text})}}placeholder="Contact"/>
        <TextInput  multiline={true}onChangeText={(Text)=>{this.setState({Address:Text})}}placeholder="Address"/>
        <TextInput   onChangeText={(Text)=>{this.setState({Email:Text})}}placeholder="Email"/>
        <TextInput  onChangeText={(Text)=>{this.setState({Password:Text})}}placeholder="Password"/>
        <TextInput   onChangeText={(Text)=>{this.setState({ConfirmPassword:Text})}}placeholder="Confirm Password"/>
        <TouchableOpacity onPress={()=>{this.userSignUp();this.setState({visiblity:false})}}>
          <Text>
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.setState({visiblity:false})}}>
          <Text>
            Cancel
          </Text>
        </TouchableOpacity>
      </Modal>
    )
  }

  
  render(){
    
    return(
      <View>
        <View>
          {this.model()}
        </View>
      <TextInput value={this.state.Email}onChangeText={(Text)=>{this.setState({Email:Text})}} placeholder='Email.Id'/>
      <TextInput value={this.state.Password}onChangeText={(Text)=>{this.setState({Password:Text})}} placeholder='Password'/>
      <TouchableOpacity  onPress={()=>{this.userLogin()}}>
        <Text>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{this.setState({visiblity:true})}}>
        <Text>
          SignUp
        </Text>
      </TouchableOpacity>
      </View>
    )
  }
}