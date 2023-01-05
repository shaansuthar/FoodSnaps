import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { GiftedChat, Reply } from 'react-native-gifted-chat'

// Since I am using ngrok to tunnel my localhost, I need to change the API_URL to the ngrok URL, which is generated every time I start ngrok.
// I used ngrok because I have not deployed this web api to a server
const API_URL = "https://2c6d-2001-1970-59e1-8a00-457a-49cb-e848-f1b6.ngrok.io/api/"
 
const botAvatar = require('../assets/images/foodsnaps_logo.png')

const BOT = {
  _id: 4,
  name: 'Sprite',
  avatar: botAvatar
}

export default function ChatBotScreen() {

    const [messages, setMessages] = useState([
        {
            _id: 1,
            text: 'Hi! I am a recipe bot. I can help you find recipes based on ingredients.',
            createdAt: new Date(),
            user: BOT
        }
    ])

    const onSend = (message: any) => {
        setMessages(previousMessages => {
            return GiftedChat.append(previousMessages, message)
        })
        let prompt = message[0].text
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        let raw = JSON.stringify({
            "ingredient": prompt
        });
        
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        
        fetch(`${API_URL}generateRecipes`, requestOptions)
            .then(response => response.json())
            .then(result => {
                handleOpenAIResponse(result)
            })
            .catch(error => console.log('error', error));        

    }

    const handleOpenAIResponse = (result: any) => {
    let text = result.result.trim().replace("AI: ","")
    sendResponse(text)
    }

    const sendResponse = (text: any) => {
        let msg = {
            _id: messages.length + 1,
            text,
            createdAt: new Date(),
            user: BOT
        }
        setMessages(previousMessages => {
            return GiftedChat.append(previousMessages, [msg])
        })
    }

    const onQuickReply = (reply: Reply[]) => {
        let msg = {
            _id: messages.length + 1000,
            text: reply[0].value,
            createdAt: new Date(),
            user: BOT
        }
        onSend([msg])
    }

      return (
        <View style={styles.container}>
            <GiftedChat 
            messages={messages}
            onSend={messages => onSend(messages)}
            onQuickReply={(reply: Reply[]) => onQuickReply(reply)}
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