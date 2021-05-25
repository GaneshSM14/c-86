import * as React from 'react'
import{View,Text, FlatList,TouchableOpacity,} from 'react-native'
import MyHeader from '../Components/Header'
import db from '../Config'
export default class BookDonateScreen extends React.Component{
    constructor(){
        super()
        this.state={
            Requestslist:[],
        }
    }
    componentDidMount(){this.getrequestlist()}
    getrequestlist=()=>{
        db.collection('Requests').onSnapshot((Snapshot)=>{
            var Requestslist= Snapshot.docs.map((document)=>document.data())
                this.setState({Requestslist:Requestslist})
            })
    
    }
    render(){
        return(
            <View>
                {this.state.Requestslist.length==0?
                (
                    <Text>
                        Loading
                    </Text>
                ):(
                    
                    <View>
                        <MyHeader navigation={this.props.navigation} title="Donate Screen"/>
                        {console.log(this.state.Requestslist)}
<FlatList 
keyExtractor={(item,index)=>{index.toString()}}
data={this.state.Requestslist}
renderItem={({item})=>{
    console.log(item)
    return(
    <View>
    <Text>
        {item.Name}
    </Text>
    <Text>
        {item.Reason}
    </Text>
    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('requester',{Details:item})}}style={{borderWidth:2,backgroundColor:'Aqua'}}>
        <Text>
            View
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
