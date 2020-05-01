import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Button, ActivityIndicator} from "react-native";

export default class loadingScreen extends Component{

    render() {
        return(
            <View style={styles.container}>
                <Text>Loading...</Text>
                <ActivityIndicator size='large'></ActivityIndicator>
            </View>
        );
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});