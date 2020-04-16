import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Button} from "react-native";
import {KeyboardAvoidingView} from 'react-native';
import ImagePicker from "react-native-image-picker";

export default class CreatePost extends Component{
    state = {
        photo: null,
    };
    handleChoosePhoto = () => {
        const options = {
            noData: true
        };
        ImagePicker.launchImageLibrary(options, response => {
            console.log("response", response);
            if (response.uri) {
                this.setState({ photo: response });
            }
        });
    };

    render() {
        const { photo } = this.state;
        return(
        <View style={styles.container}>
        
            <KeyboardAvoidingView behavior="position" enabled>
                <TextInput 
                placeholder= "Journey Name" 
                style={styles.input}
                  />    
            </KeyboardAvoidingView>

            <View style={{flex: 2, alignItems: "center", justifyContent: "center"}}>
                {photo && (
                    <Image 
                        source = {{uri:photo.uri}}
                        style={{width: 300, height: 300}}
                    />
                )}
                <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
            </View>
            
            <KeyboardAvoidingView behavior="position" enabled>
                <TextInput 
                placeholder= "Insert Location" 
                style={styles.inputLocation}
                  />    
            </KeyboardAvoidingView>

            <View style={styles.text}>
            <Button style={styles.addTag} title="Add Tag+" />
            <TextInput style={styles.addCaption} placeholder = "Add Caption..." />
            <TextInput style={styles.addURL} placeholder = "Insert URL" />
            </View>
            
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 70
    },
    input: {
        height: 50,
        backgroundColor: 'rgba(220,220,220, 0.9)',
        marginBottom: 20,
        color: '#1E1E1E',
        paddingHorizontal: 10,
    
    },
    inputLocation: {
        height: 40,
        backgroundColor: 'rgba(220,220,220, 0.9)',
        marginBottom: 20,
        color: '#1E1E1E',
        paddingHorizontal: 10,
        marginTop: 10
    
    },
    text: {
        fontSize:20,
        flex: 2
    },
    addTag: {
        borderStyle: "solid",
        borderColor: 'black',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    addCaption: {
        borderStyle: "solid",
        borderColor: 'black',
        borderWidth: 1,
        flex: 0.8,

    },
    addURL: {
        borderStyle: "solid",
        borderColor: 'black',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10
    },

});