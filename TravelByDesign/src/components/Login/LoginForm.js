import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default class LoginForm extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                placeholder= "username or email" 
                style={styles.input}
                  />
                <TextInput
                placeholder="password"
                secureTextEntry
                style={styles.input}
                  />

            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    }
});