import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image, SafeAreaView, Dimensions} from "react-native";
import Carousel from 'react-native-snap-carousel';

import {database} from "../../../firebaseconfig.js";
import {images} from "../../../pictureindex.js";


const Post = ({route, navigation}) => {
    const {posts} = route.params;
    const {userid} = route.params;
    const {location} = route.params;
    const {tags} = route.params;
    // const [posts,setPosts] = useState(null);
    const [isLoading,setLoading] = useState(true);
    const [user,setUser] = useState(null)

    retrieveUser = async () => {
        // setPosts({name: "name"});
        const postsRef = database.ref('/users');
        // const initPosts = [];
        await postsRef.on('value', snapshot => {
            const data = snapshot.val();
            // console.log(data);
            initUser = data[userid];
            console.log("***inituser***",initUser)
            setUser(initUser);
            // if(snapshot.val()) {
            //console.log("*****data******",data);
            // Object.keys(data).forEach(post => initPosts.push(data[post]));
            // console.log("*****initPosts*****",initPosts);
            // setPosts(initPosts);
            setLoading(false);
            // console.log("******posts*******",posts);
            // }
        });
        //return initPosts;
    };
    useEffect(() => {
        console.log("calling useEffect");
        retrieveUser();
        // console.log("***tags***",tags)
        // console.log('*****',posts);
    },[]);
    // /*
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         carousel :
    //         /*
    //         [
    //                 {
    //                     id: "1",
    //                     text:
    //                         "This is my trip to France",
    //                     image: require("./pic.jpg"),
    //                 },
    //                 {
    //                     id: "2",
    //                     text:
    //                         "This is my trip to France",
    //                     image: require("./pic.jpg"),
    //                 },
    //                 {
    //                     id: "3",
    //                     text:
    //                         "This is my trip to France",
    //                     image: require("./pic.jpg"),
    //                 }
    //         ]
    //         */,
    //
    //         userInfo : {
    //             name: "John Doe",
    //             timeStamp: "1/1/2020",
    //             avatar: require("./profile.jpg")
    //         }
    //     }*/
    //}


   renderPost= ({item, index}) => {
    return (
        <View>
            <Image source={images[item.picture]} style={styles.postImage} resizeMode="cover"/>
            <View style={styles.feedItem}>
            <Text style={styles.posts}>{item.caption}</Text>
            </View>
        </View>
    );
    }

    //render() {
        return(
            <SafeAreaView style={styles.container}>
                {isLoading ?
                  <View style={styles.header}>
                      <Text style={styles.headerTitle}> Loading </Text>
                  </View> :
                  <View style={styles.feedItem}>
                      <View style={{flex: 1}}>
                          <Text style= {styles.name}>{user.firstname} {user.lastname}</Text>
                          <Text style= {styles.timeStamp}>{location}</Text>
                      </View>
                  </View>
                }
                <Carousel
                    style={styles.feed}
                    // ref={ ref => this.carousel = ref }
                    data={posts}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    renderItem = {this.renderPost}
                />
                <View style= {styles.feedItem}>
                    <Text style = {styles.headerTitle}>Tags: </Text>
                    <FlatList
                        data={tags}
                        renderItem= {({item}) => (
                          <Text style={styles.name}> {item} </Text>
                        )}
                    />
                </View>
            </SafeAreaView>

        );
    //}

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
        fontSize: 20,
        fontWeight: "500",
        color: "#454D65"
    },
    timeStamp: {
        fontSize: 15,
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

export default Post;
