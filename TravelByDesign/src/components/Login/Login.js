import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Button} from "react-native";
import {KeyboardAvoidingView} from 'react-native';
import signUp from './SignUp';
import openApp from '../../../App'
import { useNavigation, useRoute } from '@react-navigation/native';
import Root from "../../../App";

export default class Login extends Component{
    state = {
        email: '',
        password: '',
        errorMessage: null
    };


    handleLogin = () => {
        const { email, password } = this.state

        // firebase
        //    .auth()
        //    .signInWithEmailAndPassword(email, password)
        //    .catch(error => this.setState({ errorMessage: error.message }));

    };

    render() {
        return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo}
                    source={require('./img.jpg')}
                />
            </View>

            <View style={styles.errorMessage}> 
                {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
            </View>
        
            <KeyboardAvoidingView style={styles.formContainer} behavior="position" enabled>
                <TextInput 
                placeholder= "username or email" 
                style={styles.input}
                autoCapitalize='none'
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
                  />
                <TextInput
                placeholder="password"
                secureTextEntry
                style={styles.input}
                autoCapitalize='none'
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
                  />
            <Button 
                title="LOGIN"
                >
                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </Button>
            <TouchableOpacity 
                style={styles.buttonContainer}
                >
                <Text style={styles.buttonText}>SIGN UP</Text>
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
        marginBottom: 10,
        borderRadius: 4,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '500'
    },
    errorMessage: {
        height: 72,
        alignItems: 'center', 
        justifyContent: 'center', 
        marginHorizontal: 30
    },
    error: {
        color: '#E9446A',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center'
    }
});
