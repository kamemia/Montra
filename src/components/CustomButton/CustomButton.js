import React from 'react'
import { Text, StyleSheet, onPress } from 'react-native'
const CustomButton = ({onPress, text, type = "PRIMARY"}) =>{
    return(
        <Pressable onPress={onPress} style={[style.container, style[`container_${type}`]]}>
            <Text style={[style.text, style[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
}

export default CustomButton