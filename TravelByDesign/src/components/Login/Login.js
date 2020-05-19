import React, { Component, useState } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text} from "react-native";
import {KeyboardAvoidingView} from 'react-native';

import FormButton from '../FormButton';
import FormInput from '../FormInput';

import SignUp from '../SignUp/SignUp';

export default function Login({ navigation }) {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo}
                    source={require('./img.jpg')}
                />
            </View>
        
            <KeyboardAvoidingView style={styles.formContainer} behavior="position" enabled>
            <FormInput
                value={email}
                placeholderText='Email'
                onChangeText={userEmail => setEmail(userEmail)}
                autoCapitalize='none'
                keyboardType='email-address'
                autoCorrect={false}
            />
            <FormInput
                value={password}
                placeholderText='Password'
                onChangeText={userPassword => setPassword(userPassword)}
                secureTextEntry={true}
            />
            <FormButton buttonTitle='Login' onPress={() => alert('login button')} />
            
            <TouchableOpacity
                style={styles.navButton}
                 onPress={() => navigation.navigate('SignUp')}
            >
            <Text style={styles.navButtonText}>New user? Join here</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>

        </View>
        );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    },
    text: {
        fontSize: 24,
        marginBottom: 10
      },
      navButton: {
        marginTop: 15
      },
      navButtonText: {
        fontSize: 20,
        color: '#6646ee'
      }
});
