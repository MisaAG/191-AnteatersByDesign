import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Button} from "react-native";
import {KeyboardAvoidingView} from 'react-native';
import TagSelector from 'react-native-tag-selector';


export default class Search extends Component{
    tags = [
		{
			id: 'solotravel',
			name: '#solotravel'
		},
		{
			id: 'business',
			name: '#business'
		},
		{
			id: 'friends',
			name: '#friends'
		},
		{
			id: 'family',
			name: '#family'
		},
		{
			id: 'groupTravel',
			name: '#grouptravel'
		},
		{
			id: 'luxury',
			name: '#luxury'
		},
		{
			id: 'adventure',
			name: '#adventure'
		},
		{
			id: 'budget',
			name: '#budget'
		},
		{
			id: 'foodie',
			name: '#foodie'
		},
		{
			id: 'romantic',
			name: '#romantic'
		},
		{
			id: 'petTravel',
			name: '#pettravel'
		},
		{
			id: 'shopping',
			name: '#shopping'
		}
	]

	constructor(props) {
		super(props);
		this.state = {
			selectedTags: []
		}
	}
    render() {
        return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Search</Text>
            </View>
        
            <KeyboardAvoidingView style={styles.formContainer} behavior="position" enabled>
                <TextInput 
                placeholder= "Search Location" 
                style={styles.locationInput}
                  />
                <TextInput
                secureTextEntry
                style={styles.input}
                  />

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Select Tags</Text>
            </View>

        <View>
				<Text>
					Selected: {this.state.selectedTags.map(tag => `${tag} `)}
				</Text>
				<TagSelector
					maxHeight={150}
					tags={this.tags}
					onChange={(selected) => this.setState({ selectedTags: selected })} />
			</View>

            <Button title="Go" />

            </KeyboardAvoidingView>

        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    locationInput: {
        height: 40,
        backgroundColor: 'rgba(255,255,255, 0.9)',
        marginBottom: 20,
        color: '#1E1E1E',
        paddingHorizontal: 10,
        borderWidth: 1
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
    header: {
        paddingTop: 30,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4"
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "700",
        paddingHorizontal: 20,
    }
});