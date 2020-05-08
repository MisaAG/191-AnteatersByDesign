import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text} from "react-native";
import {KeyboardAvoidingView} from 'react-native';

export default class SignUp extends Component{
    render() {
        return(
        <View style={styles.container}>
        
            <KeyboardAvoidingView style={styles.formContainer} behavior="position" enabled>
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
                <Text style={styles.buttonText}>CREATE MY ACCOUNT</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>

        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#19b5fe',
        padding: 20
    },
    logo: {
        width: 450,
        height: 500
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 0.6,
        justifyContent: 'center'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255, 0.9)',
        marginBottom: 20,
        color: '#1E1E1E',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        marginBottom: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    }
});
