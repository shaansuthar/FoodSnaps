import React, { useEffect, useState, Fragment } from 'react'
import {
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    useWindowDimensions,
    InputAccessoryView,
    TouchableOpacity,
    Linking
  } from 'react-native';

import BubblesFactory from '../components/chatbot/bubbles-factory'
import ChatBubble from '../components/chatbot/chat-bubble'
import data from '../components/chatbot/conversation-flow.json'
import { AntDesign } from '@expo/vector-icons'; 

const MARGIN_HORIZONTAL = 16
const INPUT_HEIGHT = 38
const BUTTON_OFFSET = 4
const BUTTON_HEIGHT = 30

const ChatBot = () => {
    const [components, setComponents] = useState([])
    const [text, setText] = useState('')
    const healthyWebsites = ['https://www.eatingwell.com/search/?q=', 'https://www.cleaneatingkitchen.com/?s=', 'https://fitfoodiefinds.com/?s=', 'https://downshiftology.com/#search/q=', 'https://realsimplegood.com/#search/q=']

    const _onChangeText = (t: string): void => {
        setText(t)
    }

    const _onSendMessage = (): void => {
        const randomIndex = Math.floor(Math.random() * healthyWebsites.length);
        const item = healthyWebsites[randomIndex];
        let url = `${item}healthy+${text}`
        Linking.openURL(url)
    }

    const { width: windowWidth } = useWindowDimensions()
    const width = windowWidth - MARGIN_HORIZONTAL * 2

    useEffect(() => {
        if (data) {
            setComponents([
                // eslint-disable-next-line react/jsx-key
                <BubblesFactory data={data?.chatBot.messages} bubble={<ChatBubble/>} interval={3000}/>
            ])
        } 
    }, [])

    return (         
        <ScrollView 
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
            >
            {components.map((component, index) => {
                return (
                    <Fragment key={index}>
                        { component }
                    </Fragment>
                )
            })}   
            <InputAccessoryView>
                <KeyboardAvoidingView style={styles.textInputContainer}>
                    <TextInput 
                        value={text}
                        style={[styles.textInput, { width }]}
                        placeholder="Type a message"
                        onChangeText={_onChangeText}
                    />
                    <TouchableOpacity style={styles.sendButton} onPress={_onSendMessage}>
                    <AntDesign name="upcircleo" size={30} color="black" />
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </InputAccessoryView>            
        </ScrollView>          
    )
}

export default ChatBot

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    textInputContainer: {
        // borderColor: 'lightgrey',
        width: '100%',
        height: INPUT_HEIGHT,
        paddingHorizontal: MARGIN_HORIZONTAL,
        paddingBottom: '25%',

        //position: 'absolute',
        //bottom: 50,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 19,
        width: 100,
        height: 38,
        paddingHorizontal: 12,
        fontSize: 18,
        color: 'Black',
        backgroundColor: 'white',
        lineHeight: 24,
        paddingTop: 0,
        paddingBottom: 4        
    },
    sendButton: {
        position: 'absolute',
        right: MARGIN_HORIZONTAL + BUTTON_OFFSET,
        top: BUTTON_OFFSET,
        width: BUTTON_HEIGHT,
        height: BUTTON_HEIGHT,
        borderRadius: BUTTON_HEIGHT / 2,
        backgroundColor: '#4579FB', //'#4579FB'
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollViewContainer: {
        paddingBottom: 120
    },
    sendIcon: {
        marginLeft: 1,
        fontWeight: '600'
    }
})