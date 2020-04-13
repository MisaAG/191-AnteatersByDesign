import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text} from "react-native";
import {KeyboardAvoidingView} from 'react-native';

export default class CreateBucketList extends Component{
    render() {
        return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.textFont}>New BucketList</Text>
            </View>
        
            <KeyboardAvoidingView behavior="position" enabled>
                <TextInput 
                placeholder= "BucketList Name" 
                style={styles.input}
                  />

            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>

        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 70
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
        height: 50,
        backgroundColor: 'rgba(220,220,220, 0.9)',
        marginBottom: 20,
        color: '#1E1E1E',
        paddingHorizontal: 10,
    
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
    textFont: {
        fontSize:35
    }
});
