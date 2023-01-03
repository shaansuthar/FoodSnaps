import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
const API_URL = "https://3c86-2001-1970-59e1-8a00-5922-39be-f382-9d6c.ngrok.io/api/"
 
const botAvatar = require('../assets/images/foodsnaps_logo.png')
const BOT = {
  _id: 2,
  name: 'Sprite',
  avatar: botAvatar
}

class ChatbotScreen extends Component {
  state = {
      messages: [
        {_id: 2, text: "Enter ingredients that you want to cook with and I'll provide a recipes for you!", createdAt: new Date(), user: BOT},
        {_id: 1, text: 'Hi!', createdAt: new Date(), user: BOT}
      ],
      id: 1,
      name: ''
  }

  sendOpenaiResponse = (response) => {
    console.log(response)

    let msg = {
        _id: this.state.messages.length + 1,
        text: response,
        createdAt: new Date(),
        user: BOT
    }

    this.setState((previous) => {
        messages: GiftedChat.append(previous.messages, [msg])
    })
  }
 
   onSend(messages = []) {
       this.setState((previous) => {
           messages: GiftedChat.append(previous.messages, messages)
       })

       this.state.messages
 
       let prompt = messages[0].text
       var myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");
       myHeaders.append("Accept", "application/json");
       
       var raw = JSON.stringify({
         "ingredient": prompt
       });
       
       var requestOptions = {
         method: 'POST',
         headers: myHeaders,
         body: raw,
         redirect: 'follow'
       };
       
       fetch(`${API_URL}generateRecipes`, requestOptions)
         .then(response => response.json())
         .then(result => {
           console.log(result.result)
           this.sendOpenaiResponse(result.result)
         })
         .catch(error => console.log('error', error));    
  }
 
  render() {
      return(
        <View style={styles.container}>
            <GiftedChat 
            messages={this.state.messages}
            onSend={(messages) => this.onSend(messages)}
            user={{_id: 1}}
            bottomOffset={74}
            alignTop={true}
            infiniteScroll={true}
            scrollToBottom
            />            
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