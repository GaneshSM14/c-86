import * as React from 'react'
import {View,Text, Dimensions} from 'react-native'
import { ListItem } from 'react-native-elements'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import {SwipeListView} from 'react-native-swipe-list-view'
export default class SwipableFlatlist extends React.Component{
    constructor(props){
        super(props)
        this.state={
            allNotifications:this.props.allNotifications
        }
    }
    renderItem=(data)=>{
        return(
<ListItem LeftElement={<Icon name="Book" type='Font-awsome'/>} title={data.item.BookName} subtitle={data.item.Message} bottomDivider/>
        )
        }
        renderHiddenItem=(data)=>{
            return(
                <Text>
                    Clear
                </Text>
            )
        }
        onSwipeValueChange=(swipedata)=>{
            var allNotifications=this.state.allNotifications
            const{key,value}=swipedata
            if(value<-Dimensions.get('Window').width){
                const newdata=[...allNotifications]
                this.update(allNotifications[key])
                newdata.splice(key,1)
                this.setState({allNotifications:newdata})
            }
        }
    render(){

        return(
            <View>
                <SwipeListView 
                disableRightSwipe
                data={this.state.allNotifications}
                renderItem={this.renderItem}
                renderHiddenItem={this.renderHiddenItem}
                rightOpenValue={-Dimensions.get("Window").width}
                onSwipeValueChange={this.onSwipeValueChange}
                KeyExtractor={(item,index)=>{index.toString()}}
                />
            </View>
        )
    }
}