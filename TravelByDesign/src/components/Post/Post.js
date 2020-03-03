import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image} from "react-native";

posts = [
    {
        id: "1",
        name: "Joe McKay",
        text:
            "This is my trip to Bali",
        avatar: require("./profile.jpg"),
        image: require("./pic.jpg"),
        timeStamp: "1/1/2020"
    }
]

export default class Feed extends React.Component {
    renderPost = post => {
        return(
            <View style={styles.feedItem}>
                <Image source={post.avatar} style={styles.avatar} />
                <View style={{flex: 1}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                            <Text style={styles.name}>{post.timeStamp}</Text>
                        </View>
                    </View>

                    <Image source={post.image} style={styles.postImage} resizeMode="cover"/>
                    <Text style={styles.posts}>{post.text}</Text>
                </View>
            </View>
        );
    };

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Post</Text>
                </View>

                <FlatList 
                    style={styles.feed} 
                    data={posts} 
                    renderItem={({item}) => this.renderPost(item)} 
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                 />
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EFECF4",
    },
    header: {
        paddingTop: 64,
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
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
    },
    timeStamp: {
        fontSize: 11,
        color: "#454D65",
        marginRight: 4
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: "#454D65"
    },
    postImage: {
        width: undefined,
        height: 150,
        marginVertical: 16
    }


})