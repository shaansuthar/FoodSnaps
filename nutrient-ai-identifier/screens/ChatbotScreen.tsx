import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
 
const botAvatar = require('../assets/images/foodsnaps_logo.png')
 
const BOT = {
   _id: 2,
   name: 'Sprite',
   avatar: botAvatar
}
 
class ChatbotScreen extends Component {
   state = {
       messages: [],
       id: 1,
       name: ''
   }
 
   render() {
       return(
           <View style={styles.container}>
               <GiftedChat messages={this.state.messages}
               onSend={(messages) => this.onSend(messages)}
               onQuickReply={(quickReply) => this.onQuickReply(quickReply)}
               user={{_id: 1}}
               bottomOffset={74} />
           </View>
       )
   }
}
 
const styles = StyleSheet.create({
   container: {
    flex: 1,
    marginBottom: -36
   },
 });
 
export default ChatbotScreen