import React, { useEffect, useState, Fragment } from 'react'
import { StyleSheet, ScrollView, Alert, Text, TextInput, InputAccessoryView, View, TouchableOpacity, useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import BubblesFactory from '../components/chatbot/bubbles-factory'
import ChatBubble from '../components/chatbot/chat-bubble'
import data from '../components/chatbot/conversation-flow.json'
import { Ionicons } from '@expo/vector-icons'

const MARGIN_HORIZONTAL = 16
const INPUT_HEIGHT = 38
const BUTTON_OFFSET = 4
const BUTTON_HEIGHT = INPUT_HEIGHT - BUTTON_OFFSET * 2

const ChatBot = () => {
    const [components, setComponents] = useState([])
    const [text, setText] = useState('')

    const _onChangeText = (t: string): void => {
        setText(t)
    }

    const _onSendMessage = (): void => {
        // Implement this function
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
                <View style={styles.textInputContainer}>
                    <TextInput 
                        value={text}
                        style={[styles.textInput, { width }]}
                        placeholder="Type a message"
                        onChangeText={_onChangeText}
                    />
                    <TouchableOpacity style={styles.sendButton} onPress={_onSendMessage}>
                        <Ionicons 
                            name="md-arrow-round-up"
                            size={22}
                            color="#fff"
                            style={styles.sendIcon}
                        />
                    </TouchableOpacity>
                </View>
            </InputAccessoryView>            
        </ScrollView>          
    )
}

export default ChatBot

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },
    textInputContainer: {
        width: '100%',
        height: INPUT_HEIGHT,
        paddingHorizontal: MARGIN_HORIZONTAL,
        marginBottom: 4
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: INPUT_HEIGHT / 2,
        width: 100,
        height: INPUT_HEIGHT,
        paddingHorizontal: 12,
        fontSize: 18,
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
        backgroundColor: '#4579FB',
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