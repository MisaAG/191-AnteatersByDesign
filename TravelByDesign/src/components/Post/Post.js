import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image, SafeAreaView, Dimensions, Button} from "react-native";
import Carousel from 'react-native-snap-carousel';

import {images} from "../../../pictureindex.js";
import {database} from "../../../firebaseconfig.js";


const Post = ({route, navigation}) => {
    const {post} = route.params;
    // const {userid} = route.params;
    const [isLoading,setLoading] = useState(true);
    const [user,setUser] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const usersRef = database.ref('/users');

    retrieveUsers = async () => {
        await usersRef.on('value', snapshot => {
          /*
            data takes a reference to the database.
            inituser uses data and takes needed user based on the post's userid.
            loginuser uses data and takes hardcoded userid(temporary) to have access to a user.
            setUser and setCurrentUser sets the state of the screen to store fetched info.
          */
            const data = snapshot.val();
            // console.log(data);
            let initUser = data[post.userid];
            let loginUser = data['-M6g0qovjBa4gMAcHpFl'];
            // console.log("***inituser***",initUser)
            setUser(initUser);
            setCurrentUser(loginUser);
            setLoading(false);
        });
        //return initPosts;
    };
    useEffect(() => {
        console.log("calling useEffect");
        retrieveUsers();
        // console.log("***tags***",tags)
        // console.log('*****',posts);
    },[]);
    updateUser = () => {
      /*
      looks for a bucketlist on the user object and pushes postinfo to it.
      updates database using usersRef.update.
      */
        var updateBucket = [];
        // var newBucketKey = usersRef.child(userid).push().key;
        var updates = {};
        if ('bucketlist' in currentUser) {
          console.log("found bucketlist");
          updateBucket = currentUser.bucketlist;
        }
        var getStop = post.pictureCollection[0];
        var bucketlistObject = {
          postid : post.postid,
          thumbnail : getStop.picture
        }
        updateBucket.push(bucketlistObject);
        updates[currentUser.userid + '/bucketlist'] = updateBucket;
        alert("Post saved to bucketlist!")
        return usersRef.update(updates);
    }
   renderPost= ({item, index}) => {
    return (
        <View>
            <Image source={images[item.picture]} style={styles.postImage} resizeMode="cover"/>
            <View style={styles.feedItem}>
            <Text style={styles.posts}>{item.caption}</Text>
            </View>
            <Button
             onPress={updateUser}
             title="Save"
             />
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
                          <Text style= {styles.timeStamp}>{post.location}</Text>
                      </View>
                  </View>
                }
                <Carousel
                    style={styles.feed}
                    // ref={ ref => this.carousel = ref }
                    data={post.pictureCollection}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    renderItem = {this.renderPost}
                />

                <View style= {styles.feedItem}>
                    <Text style = {styles.headerTitle}>Tags: </Text>
                    <FlatList
                        data={post.tags}
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
