import React, { Component, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'


const botAvatar = require('../assets/images/foodsnaps_logo.png')
 
const BOT = {
   _id: 2,
   name: 'Sprite',
   avatar: botAvatar
}
 
class ChatbotScreen extends Component {
   state = {
       messages: [{_id: 1, text: 'Hi!', createdAt: new Date(), user: BOT}, {_id: 2, text: "Enter ingredients that you want to cook with and I'll provide a recipes for you!"}],
       id: 1,
       name: ''
   }

   render() {
       return(
           <View style={styles.container}>
               <GiftedChat messages={this.state.messages}
               onSend={(messages) => this.onSend(messages)}
               user={{_id: 1}}
               bottomOffset={74}
               alignTop={true} />
           </View>
       )
   }
}
 
const styles = StyleSheet.create({
   container: {
    flex: 1,
    marginBottom: -36,
    backgroundColor: '#FFF'
   },
 });
 
export default ChatbotScreen