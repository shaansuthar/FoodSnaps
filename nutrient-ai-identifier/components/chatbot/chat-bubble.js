import React, { useEffect, useRef, useState } from 'react'
import { View, Animated, StyleSheet, Text } from 'react-native'
import ChatTyping from './chat-typing'

function ChatBubble ({ data, isTyping = true }) {
    const [isTypingVisibility, setTypingVisibility] = useState(isTyping)
    const positionAnimated = useRef(new Animated.Value(-10)).current
    const opacityAnimated = useRef(new Animated.Value(0)).current
    const typingOpacityAnimated = useRef(new Animated.Value(0)).current

    const Opening = Animated.parallel([
        Animated.timing(
            opacityAnimated,
            {
                toValue: 1,
                duration: 100,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            positionAnimated,
            {
                toValue: 0,
                duration: 200,
                useNativeDriver: true
            }
        )
    ])

    const FadeIn = Animated.timing(
        typingOpacityAnimated,
        {
            toValue: 1,
            duration: 800,
            useNativeDriver: true
        }
    )

    const FadeOut = Animated.timing(
        typingOpacityAnimated,
        {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }
    )

    useEffect(() => {
        let timer
        if (!isTyping) {
            Opening.start()
        } else {
            FadeIn.start(() => {
                timer = setTimeout(() => {
                    FadeOut.start(() => {
                        setTypingVisibility(false)
                        Opening.start()
                    })
                }, 1000)
            })
        }
        return () => { timer && clearTimeout(timer) }
    }, [])

    return (
        <View style={styles.container}>
            {isTypingVisibility
                ? <Animated.View style={{ opacity: typingOpacityAnimated }}>
                    <ChatTyping />
                </Animated.View>
                : <Animated.View style={{ ...styles.bubble, opacity: opacityAnimated, transform: [{ translateX: positionAnimated }] }}>
                    <Text style={styles.textBubble} >{data.text}</Text>
                </Animated.View>}
        </View>
    )
}

export default ChatBubble

const styles = StyleSheet.create({
    container: {
        minHeight: 50
    },
    bubble: {
        backgroundColor: 'lightgrey',
        padding: 16,
        marginRight: '45%',
        marginTop: 5,
        marginLeft: 10,
        maxWidth: '75%',
        alignSelf: 'flex-start',
        borderRadius: 20,
        borderColor: 'grey',
        borderTopLeftRadius: 0
    },
    textBubble: {
        fontSize: 16,
        color: 'black'
    }
})