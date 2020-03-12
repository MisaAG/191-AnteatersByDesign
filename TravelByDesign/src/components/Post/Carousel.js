import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, Image} from "react-native";

//const DEVICE_WIDTH = Dimensions.get("window").width;

//Array of dummy posts used to simulate a post
var posts = [
    {
        id: "1",
        name: "Joe McKay",
        text:
            "This is my trip to Bali",
        avatar: require("./profile.jpg"),
        image: require("./pic.jpg"),
        timeStamp: "1/1/2020"
    },
    {
        id: "1",
        name: "Joe McKay",
        text:
            "This is my trip to Bali",
        avatar: require("./profile.jpg"),
        image: require("./pic.jpg"),
        timeStamp: "1/1/2020"
    },
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

class Carousel extends React.Component {
    scrollRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };
    }
    renderPost = post => {
        return(
            <View >
                <Image source={post.avatar} />
                <View style={{flex: 1}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <View>
                            <Text >{post.name}</Text>
                            <Text >{post.timeStamp}</Text>
                        </View>
                    </View>

                    <Image source={post.image} resizeMode="cover"/>
                    <Text >{post.text}</Text>
                </View>
            </View>
        );
    };

    render() {
        //const {images} = this.props
        const {selectedIndex} = this.state
        return (
            <View style={{height: "100%", width: "100%"}}>
                <ScrollView horizontal pagingEnabled>
                    {posts.map(post => (
                        <FlatList
                            data={posts}
                            renderItem={({item}) => this.renderPost(item)}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                         />
                    ))}
                  /*
                    {images.map(image => (
                        <Image
                            key={image}
                            source={{uri:image}}
                            style={styles.backgroundImage}
                        />
                    ))}
                    */
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    backgroundImage: {
        height: "50%"
    },
    container: {
        backgroundColor: "white"
    }
})
