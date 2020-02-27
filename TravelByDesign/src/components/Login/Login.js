import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text} from "react-native";

export default class Login extends Component{
    render() {
        return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo}
                    source={require('./img.jpg')}
                />
            </View>
        
            <View style={styles.formContainer}>
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
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
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
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
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
