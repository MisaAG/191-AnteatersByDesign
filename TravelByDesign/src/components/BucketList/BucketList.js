import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image, SafeAreaView, Dimensions} from "react-native";

const numColumns = 2
const WIDTH = Dimensions.get('window').width

export default class BucketList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            bucketList: [
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
            ]
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
                    <Text style={styles.headerTitle}>Bucket List</Text>
                </View>
                {/*
                <Image style={styles.add} source={require('./add_blue.jpg')}/>
                <Image style={styles.bucketlist} source={require('./pic.jpg')}/>
                */}

                <FlatList
                data={this.formatData(this.state.bucketList, numColumns)}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()} 
                numColumns={numColumns}
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
        width: 180,
        height: 180
    }

})