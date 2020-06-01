import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image, SafeAreaView, Dimensions,TouchableOpacity} from "react-native";
import CreateBucketList from './CreateBucketList';

import {database} from "../../../firebaseconfig.js";
import {images} from "../../../pictureindex.js";

const numColumns = 2
const WIDTH = Dimensions.get('window').width

const BucketList = ({route, navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const [pictures, setPictures] = useState(null);

    const usersRef = database.ref('/users');
    const postsRef = database.ref('/posts');

    retrieveUser = async () => {
        var loginUser = {};
        let getUser = await usersRef.on('value', snapshot => {
            // alert("executing first await");
            const data = snapshot.val();
            loginUser = data['-M6g0qovjBa4gMAcHpFl'];
            setCurrentUser(loginUser);
            setPictures(loginUser.bucketlist);
            console.log(loginUser);
            setLoading(false);
            // alert("setCurrentUser complete")
        });
        // let getPicture = await postsRef.on('value', snapshot => {
        //           console.log("executing second await");
        //           const initPictures = []
        //           const data = snapshot.val();
        //           for(i = 0; i < currentUser.bucketlist.length; ++i) {
        //               initPictures[i] = data[currentUser.bucketlist[i]];
        //           }
        //           setPictures(initPictures);
        //           setLoading(false);
        // });
    };
    retrieveData = async () => {
        const userFetch = database.ref('/users').once('value');
        const postFetch = database.ref('/posts').once('value');
        const snapshots = await Promise.all([userFetch, postFetch]);
        const userData = snapshots[0].val();
        const postData = snapshots[0].val();
        console.log("***userData***",userData);
    };
    useEffect(() => {
        console.log("calling useEffect");
        retrieveUser();
        // retrieveData();
    },[]);

    // formatData = (dataList, numColumns) => {
    //     const totalRows = Math.floor(dataList.length / numColumns)
    //     let totalLastRow = dataList.length - (totalRows * numColumns)
    //     while(totalLastRow !== 0 && totalLastRow !== numColumns){
    //         dataList.push({key: 'blank', empty: true})
    //         totalLastRow++
    //     }
    //     return dataList
    // }
    _getPost = async (postid) => {
        var fetchedPost = {};
        let getPicture = await postsRef.on('value', snapshot => {
                  console.log("executing getPost");
                  const data = snapshot.val();
                  fetchedPost = data[postid];
        });
        alert(fetchedPost);
        navigation.navigate('Post',{post: fetchedPost})
    }

    _renderItem = ({item, index}) => {
        let {itemStyle} = styles
        console.log(item);
        return (
            <View style={itemStyle}>
                <TouchableOpacity onPress ={_getPost} >
                    <Image source={images[item.thumbnail]} style={styles.itemImage}/>
                </TouchableOpacity>
            </View>
        )
    }

    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Bucket List</Text>
            </View>

            <Image style={styles.add} source={require('./add_blue.jpg')}/>

            {isLoading ?
              <View style={styles.header}>
                  <Text style={styles.headerTitle}> Loading </Text>
              </View> :
              <FlatList
              data={pictures}
              renderItem={this._renderItem}
              // keyExtractor={(item, index) => index.toString()}
              numColumns={numColumns}
              extraData={pictures}
              />

            }

        </SafeAreaView>
    );

}
// export default class BucketList extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             bucketList: [
//                 {key: '1',
//                 image: require("./pic.jpg")},
//                 {key: '2',
//                 image: require("./pic.jpg")},
//                 {key: '3',
//                 image: require("./pic.jpg")},
//                 {key: '4',
//                 image: require("./pic.jpg")},
//                 {key: '5',
//                 image: require("./pic.jpg")}
//             ]
//         }
//
//     }
//
//     formatData = (dataList, numColumns) => {
//         const totalRows = Math.floor(dataList.length / numColumns)
//         let totalLastRow = dataList.length - (totalRows * numColumns)
//         while(totalLastRow !== 0 && totalLastRow !== numColumns){
//             dataList.push({key: 'blank', empty: true})
//             totalLastRow++
//         }
//         return dataList
//     }
//
//     _renderItem = ({item, index}) => {
//         let {itemStyle} = styles
//         return (
//             <View style={itemStyle}>
//                 <Image source={item.image} style={styles.itemImage} />
//             </View>
//         )
//     }
//
//     render() {
//         return(
//             <SafeAreaView style={styles.container}>
//
//                 <View style={styles.header}>
//                     <Text style={styles.headerTitle}>Bucket List</Text>
//                 </View>
//
//                 <Image style={styles.add} source={require('./add_blue.jpg')}/>
//
//
//                 <FlatList
//                 data={this.formatData(this.state.bucketList, numColumns)}
//                 renderItem={this._renderItem}
//                 keyExtractor={(item, index) => index.toString()}
//                 numColumns={numColumns}
//                 />
//
//             </SafeAreaView>
//         );
//     }
// }

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
    add: {
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center'
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

export default BucketList
