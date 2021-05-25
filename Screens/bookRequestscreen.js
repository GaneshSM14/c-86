import * as React from 'react'
import{View,Text, TextInput, Touchable} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import BookDonateScreen from './bookDonatescreen'
import db from '../Config'
import firebase from 'firebase'
import MyHeader from '../Components/Header'
export default class BookRequestScreen extends React.Component{
    constructor(){
        super()
        this.state={
            BookName:'',
            Reason:'',
            IsbookRequestActive:'',
            userdocid:''
        }
    }
    addRequest=()=>{
        db.collection('Requests').add({
            Name:this.state.BookName,
            Reason:this.state.Reason,
            Userid:firebase.auth().currentUser.email,
            Requestid: Math.random().toString(36).substring(7),
            Bookstatus:"Requested"
        })
db.collection('users').where('Email','==',firebase.auth().currentUser.email).get()
.then((Snapshot)=>{Snapshot.forEach((doc)=>{
    db.collection('users').doc(doc.id).update({
        IsbookRequestActive:true
    })
})})
        this.setState({BookName:'', Reason:''})
        
    }
    componentDidMount(){
        this.getbookRequestActive()
    }
    getbookRequestActive=()=>{
        db.collection('users').where('Email','==',firebase.auth().currentUser.email).onSnapshot((Snapshot)=>{Snapshot.forEach((doc)=>{var Details=doc.data()
        this.setState({
            IsbookRequestActive:Details.IsbookRequestActive,
            userdocid:doc.id
        })})})
    }
    UpdatebookRequestStatus=()=>{db.collection('users').where('Email',"==",firebase.auth().currentUser.email).get()
.then((Snapshot)=>{Snapshot.forEach((doc)=>{
    db.collection('users').doc(doc.id).update({IsbookRequestActive:false})
})})
db.collection('Requests').doc(this.state.docid).update({Bookstatus:"recived"})
}
recievedbooks=()=>{
    db.collection('BooksRecived').add({
        Userid:firebase.auth().currentUser.email,
        BookName:this.state.BookName,
        Reason:this.state.Reason
    })
}

    render(){
        if(this.state.IsbookRequestActive===true){
            return(<View><Text>Book Name:{this.state.BookName}</Text>
            <TouchableOpacity style={{backgroundColor:'blue'}} onPress={()=>{this.recievedbooks();this.UpdatebookRequestStatus()}}>
                <Text>
                    I Received the Book
                </Text>
            </TouchableOpacity>
                </View>)
        }else{
        return(
            <View>
                 <MyHeader navigation={this.props.navigation} title="Book Request Screen "/>
                <TextInput value={this.state.BookName}onChangeText={(Text)=>{this.setState({BookName:Text})}} placeholder="BookName"/>
                <TextInput value={this.state.Reason}onChangeText={(Text)=>{this.setState({Reason:Text})}}placeholder="Reason to Request"/>
                <TouchableOpacity onPress={()=>{this.addRequest()}}>
                    <Text>
                        Request
                    </Text>
                </TouchableOpacity>
            </View>
        )
        }
    }
}