import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image, SafeAreaView, Dimensions} from "react-native";
import Carousel from 'react-native-snap-carousel';

import {database} from "../../../firebaseconfig.js";
const postsRef = database.ref('/posts');

const Post = () => {
    const [posts,setPosts] = useState(null);
    const [isLoading,setLoading] = useState(true);
    const [user,setUser] = useState(
        {
            name: "John Doe",
            timeStamp: "1/1/2020",
            avatar: "./profile.jpg"
        }
    )

    retrievePosts = async () => {
        // setPosts({name: "name"});
        const initPosts = [];
        await postsRef.on('value', snapshot => {
            const data = snapshot.val();
            // if(snapshot.val()) {
            //console.log("*****data******",data);
            Object.keys(data).forEach(post => initPosts.push(data[post]));
            console.log("*****initPosts*****",initPosts);
            setPosts(initPosts);
            setLoading(false);
            console.log("******posts*******",posts);
            // }
        });
        //return initPosts;
    };
    useEffect(() => {
        console.log("calling useEffect");
        retrievePosts();
        //console.log('*****',posts);
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
            <Image source={item.picture} style={styles.postImage} resizeMode="cover"/>
            <View style={styles.feedItem}>
            <Text style={styles.posts}>{item.description}</Text>
            </View>
        </View>
    );
    }

    //render() {
        return(
            <SafeAreaView style={styles.container}>
                { isLoading ?
                     (<View style={styles.header}>
                          <Text style={styles.headerTitle}> Loading </Text>
                      </View>
                    ) : (
                       // <View style={styles.container}>
                       //   <Text style={styles.header}>Description</Text>
                       //   <Text style={styles.headerTitle}>
                       //     {posts[0].picture}
                       //   </Text>
                       // </View>
                       <Carousel
                           style={styles.feed}
                           // ref={ ref => this.carousel = ref }
                           data={posts}
                           sliderWidth={sliderWidth}
                           itemWidth={itemWidth}
                           renderItem = {this.renderPost}
                       />
                    )
                    // <Fragment>
                    // <View style={styles.feedItem}>
                    //     <Image source={this.state.userInfo.avatar} style={styles.avatar} />
                    //     <View style={{flex: 1}}>
                    //         <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    //             <View>
                    //                 <Text style={styles.name}>{this.state.userInfo.name}</Text>
                    //                 <Text style={styles.name}>{this.state.userInfo.timeStamp}</Text>
                    //             </View>
                    //         </View>
                    //     </View>
                    // </View>
                    // </Fragment>


                    // <Carousel
                    //     style={styles.feed}
                    //     ref={ ref => this.carousel = ref }
                    //     data={posts}
                    //     sliderWidth={sliderWidth}
                    //     itemWidth={itemWidth}
                    //     renderItem = {renderPost(posts)}
                    // />
                }
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

export default Post;
