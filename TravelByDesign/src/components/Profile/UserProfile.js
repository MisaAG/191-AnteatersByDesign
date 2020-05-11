import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image, SafeAreaView, Dimensions} from "react-native";

const numColumns = 3
const WIDTH = Dimensions.get('window').width

export default class UserProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            trips: [
                {key: '1',
                image: require("./pic.jpg")}, 
                {key: '2',
                image: require("./pic.jpg")}, 
                {key: '3',
                image: require("./pic.jpg")}, 
                {key: '4',
                image: require("./pic.jpg")}, 
                {key: '5',
                image: require("./pic.jpg")}
            ],

            user:{
                id: "1",
                image: require("./petr.jpg"),
                bio: "This is my bio...",
                name: "Peter Anteater"
            }
        }

    }

    formatData = (dataList, numColumns) => {
        const totalRows = Math.floor(dataList.length / numColumns)
        let totalLastRow = dataList.length - (totalRows * numColumns)
        while(totalLastRow !== 0 && totalLastRow !== numColumns){
            dataList.push({key: 'blank', empty: true})
            totalLastRow++
        }
        return dataList
    }

    _renderItem = ({item, index}) => {
        let {itemStyle} = styles
        return (
            <View style={itemStyle}>
                <Image source={item.image} style={styles.itemImage} />
            </View>
        )
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Profile</Text>
                </View>
                
                <View style={styles.avatarContainter}>
                <Image source={this.state.user.image} style={styles.avatarImage} />
                </View>
                <View style={styles.description}>
                    <Text style={styles.userName}>{this.state.user.name}</Text>
                    <Text style={styles.bio}>{this.state.user.bio}</Text>
                </View>

                <FlatList
                data={this.formatData(this.state.trips, numColumns)}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()} 
                numColumns={numColumns}
                renderItem={this._renderItem}
                />

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EFECF4",
    },
    header: {
        paddingTop: 44,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4"
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500"
    },
    itemStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: WIDTH / numColumns,
        width: WIDTH/ numColumns,
        paddingRight: 10,
        paddingLeft: 10

    },
    itemImage:{
        width: 130,
        height: 130
    },
    avatarImage:{
        width: 130,
        height: 130,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        borderRadius: 10,
        borderWidth: 1
    },
    avatarContainter: {
        alignItems: 'center',
        flexGrow: 0.6,
        justifyContent: 'center'
    },
    userName:{
        fontSize: 30,
        fontWeight: "500"
    },
    bio:{
        fontSize: 15,
        fontWeight: "500"
    },
    description: {
        paddingTop: 5,
        paddingBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1
    },
})