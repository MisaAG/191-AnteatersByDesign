import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image, SafeAreaView, Dimensions} from "react-native";
import Carousel from 'react-native-snap-carousel';

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

export default class Post extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            carousel : [
                    {
                        //id: "1",
                        name: "Joe McKay",
                        text:
                            "This is my trip to Bali",
                        avatar: require("./profile.jpg"),
                        image: require("./pic.jpg"),
                        timeStamp: "1/1/2020"
                    },
                    {
                        //id: "2",
                        name: "Joe McKay",
                        text:
                            "This is my trip to Bali",
                        avatar: require("./profile.jpg"),
                        image: require("./pic.jpg"),
                        timeStamp: "1/1/2020"
                    },
                    {
                        //id: "3",
                        name: "Joe McKay",
                        text:
                            "This is my trip to Bali",
                        avatar: require("./profile.jpg"),
                        image: require("./pic.jpg"),
                        timeStamp: "1/1/2020"
                    }
            ]
        }
    }

    /*
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
    */

   renderPost= ({item, index}) => {
    return (
        <View>
            <Image source={require("./pic.jpg")} style={styles.postImage}/>
            
        </View>
    );
}

    render() {
        return(
            <SafeAreaView style={styles.container}>
                
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Post</Text>
                </View>

            <Carousel
              style={styles.feed}
              ref={ ref =>  this.carousel = ref }
              data={this.state.carousel}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              renderItem = {this.renderPost}
            />
                    
            </SafeAreaView>

        );
    }

}

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;

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
        height: 350,
        marginVertical: 16
    }


})
