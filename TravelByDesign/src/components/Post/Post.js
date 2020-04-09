import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image, SafeAreaView, Dimensions} from "react-native";
import Carousel from 'react-native-snap-carousel';


export default class Post extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            carousel : [
                    {
                        id: "1",
                        text:
                            "This is my trip to France",
                        image: require("./pic.jpg"),
                    },
                    {
                        id: "2",
                        text:
                            "This is my trip to France",
                        image: require("./pic.jpg"),
                    },
                    {
                        id: "3",
                        text:
                            "This is my trip to France",
                        image: require("./pic.jpg"),
                    }
            ],

            userInfo : {
                name: "John Doe",
                timeStamp: "1/1/2020",
                avatar: require("./profile.jpg")
            }
        }
    }

   renderPost= ({item, index}) => {
    return (
        <View>
            <Image source={item.image} style={styles.postImage} resizeMode="cover"/>
            <View style={styles.feedItem}>
            <Text style={styles.posts}>{item.text}</Text>
            </View>
        </View>
    );
}

    render() {
        return(
            <SafeAreaView style={styles.container}>
                
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Post</Text>
                </View>

                <View style={styles.feedItem}>
                <Image source={this.state.userInfo.avatar} style={styles.avatar} />
                <View style={{flex: 1}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <View>
                            <Text style={styles.name}>{this.state.userInfo.name}</Text>
                            <Text style={styles.name}>{this.state.userInfo.timeStamp}</Text>
                        </View>
                    </View>
                </View>
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
