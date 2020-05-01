import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Button} from "react-native";
import {KeyboardAvoidingView} from 'react-native';


export default class signUp extends Component{
    state = {
        name: '',
        email: '',
        password: '',
        errorMessage: null
    };

    render() {
        return(
            <View style={styles.container} paddingVertical={50}>
                
                <Text> Sign Up! :)</Text>
                <View> 
                    <KeyboardAvoidingView style={styles.formContainer} behavior="position" enabled>
                    <TextInput 
                    placeholder= "Full Name" 
                    style={styles.input}
                    autoCapitalize='none'
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    />
                    <TextInput 
                    placeholder= "email" 
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
                    </KeyboardAvoidingView>
                  </View>
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
