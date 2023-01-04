import React, { useState, useCallback, useEffect } from 'react'
import { View, StyleSheet, ViewPagerAndroidComponent } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
const API_URL = "https://729f-2001-1970-59e1-8a00-38fd-729b-e62b-7e18.ngrok.io/api/"
 
const botAvatar = require('../assets/images/foodsnaps_logo.png')

const BOT = {
  _id: 2,
  name: 'Sprite',
  avatar: botAvatar
}

const introMessage = {
    _id: 1,
    text: "Hi! I am a recipe bot. I can help you find recipes based on ingredients. Try it now!",
    createdAt: new Date(),
    user: BOT,
} 

export default function ChatBotScreen() {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages([introMessage])
      }, [])

      const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        let prompt = messages[0].text
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "ingredient": prompt
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://729f-2001-1970-59e1-8a00-38fd-729b-e62b-7e18.ngrok.io/api/generateRecipes", requestOptions)
          .then(response => response.json())
          .then(result => {
            handleOpenAIResponse(result)
          })
          .catch(error => console.log('error', error));        

        
      }, [])

      const handleOpenAIResponse = (response) => {
        let text = response.result.trim()
        console.log(messages.length)
        let msg = {
            _id: messages.length + 2,
            text: text,
            createdAt: new Date(),
            user: BOT,
        }

        setMessages(previousMessages => GiftedChat.append(previousMessages, [msg]))
      }

      return (
        <View style={styles.container}>
            <GiftedChat 
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{_id: 1}}
            bottomOffset={74} />
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom: -38,
    }
})