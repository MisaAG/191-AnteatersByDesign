import React, {Component, useEffect, useState, componentWillMount} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {images} from '../../../pictureindex.js';
import firebase from '../../../firebaseconfig.js';
const postsRef = firebase.database().ref('/posts');

const Feed = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]); //exists for testing only!
  const [localPosts, setLocalPosts] = useState([]);
  const [soloPosts, setSoloPosts] = useState([]);
  const [groupPosts, setGroupPosts] = useState([]);
  const [businessPosts, setBusinessPosts] = useState([]);
  const [adventurePosts, setAdventurePosts] = useState([]);
  const [luxuryPosts, setLuxuryPosts] = useState([]);
  const [postCollections, setPostCollections] = useState([]);

  const retrievePosts = async () => {
    // setPosts({name: "name"});
    const initPosts = [];
    await postsRef.once('value', snapshot => {
      const data = snapshot.val();
      // if(snapshot.val()) {
      //console.log("*****data******",data);
      Object.keys(data).forEach(post => initPosts.push(data[post]));
      // console.log("*****initPosts*****",initPosts);
      setPosts(initPosts);
      setLoading(false);
      // console.log('******posts*******', initPosts);
      // }
      if (initPosts.length > 0) {
        setLocalPosts(initPosts.filter(p => p.location === 'San Francisco'));
        setPostCollections({
          "#solotravel" : initPosts.filter(p => p.tags.includes('solotravel')),
          "#grouptravel" : initPosts.filter(p => p.tags.includes('groupTravel')),
          "#business" : initPosts.filter(p => p.tags.includes('business')),
          "#adventure" : initPosts.filter(p => p.tags.includes('adventure')),
          "#luxury" : initPosts.filter(p => p.tags.includes('luxury')),
          "#foodie" : initPosts.filter(p => p.tags.includes('foodie')),
        });
      }
    });
    //return initPosts;
  };

  useEffect(() => {
    console.log('calling useEffect');
    // console.log(images);
    retrievePosts();
    //console.log('*****',posts);
  }, []);

  const renderPost = ({item, index}) => {
    // const picturePath = item.pictureCollection[0].picture;
    // var splitPicture = picturePath.split("/");
    // var getName = splitPicture[splitPicture.length - 1].split(".")[0];
    // console.log(postCollection);
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Post', {post: item})}>
          <Image
            source={images[item.pictureCollection[0].picture]}
            style={styles.postImage}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View style={styles.feedItem}>
          <Text style={styles.caption}>{item.title}</Text>
        </View>
      </View>
    );
  };

  //render() {
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (

        <View style={styles.header}>
          <Text style={styles.headerTitle}> Loading </Text>
        </View>

      ) : (
        <ScrollView>
          <Text style={styles.headerTitle}> Local Attractions </Text>
          <Carousel
            style={styles.feed}
            // ref={ ref => this.carousel = ref }
            data={localPosts}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            renderItem={renderPost}
          />
          <Text style={styles.headerTitle}> Based on your interests </Text>
          {Object.keys(postCollections).map((key, index) => {
            return (
              <View>
                  <Text style={styles.tagTitle}> {key} </Text>
                  <Carousel
                    key={index}
                    style={styles.feed}
                    // ref={ ref => this.carousel = ref }
                    data={postCollections[key]}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    renderItem={renderPost}
                  />
              </View>
            );
          })}
        </ScrollView>
      )}
   </SafeAreaView>

  );
  // <Carousel
  //   style={styles.feed}
  //   // ref={ ref => this.carousel = ref }
  //   data={posts}
  //   sliderWidth={sliderWidth}
  //   itemWidth={itemWidth}
  //   renderItem={renderPost}
  // />
};

// export default class Feed extends React.Component {
//
//     render() {
//         return(
//
//             <View style={styles.container}>
//                 <View style={styles.header}>
//                     <Text style={styles.headerTitle}>Feed</Text>
//                 </View>
//
//                 <ScrollView
//                     scrollEventThrottle={16}
//                 >
//                     <View style={styles.container}>
//                         <Text style={styles.headerTitle}>
//                             Local
//                         </Text>
//
//                         <View style={styles.post}>
//                             <ScrollView
//                                 horizontal={true}
//                                 showsHorizontalScrollIndicator={false}
//                             >
//
//                                 <View style={styles.carousel}>
//                                     <View style={{flex:2}}>
//                                         <Image source={require('./downtown.jpg')} style={styles.image} />
//                                     </View>
//                                 </View>
//
//                                 <View style={styles.carousel}>
//                                     <View style={{flex:2}}>
//                                         <Image source={require('./park.jpeg')} style={styles.image} />
//                                     </View>
//                                 </View>
//
//                                 <View style={styles.carousel}>
//                                     <View style={{flex:2}}>
//                                         <Image source={require('./chinatown.jpg')} style={styles.image} />
//                                     </View>
//                                 </View>
//
//                                 <View style={styles.carousel}>
//                                     <View style={{flex:2}}>
//                                         <Image source={require('./salesforce.jpg')} style={styles.image} />
//                                     </View>
//                                 </View>
//
//
//                             </ScrollView>
//
//                         </View>
//
//                     </View>
//
//
//
//                     <View style={styles.container}>
//                         <Text style={styles.headerTitle}>
//                             Trending
//                         </Text>
//
//                         <View style={styles.post}>
//                             <ScrollView
//                                 horizontal={true}
//                                 showsHorizontalScrollIndicator={false}
//                             >
//
//                                 <View style={styles.carousel}>
//                                     <View style={{flex:2}}>
//                                         <Image source={require('../../../asset/pic.jpg')} style={styles.image} />
//                                     </View>
//                                 </View>
//
//                                 <View style={styles.carousel}>
//                                     <View style={{flex:2}}>
//                                         <Image source={require('../../../asset/kyoto.jpg')} style={styles.image} />
//                                     </View>
//                                 </View>
//
//                                 <View style={styles.carousel}>
//                                     <View style={{flex:2}}>
//                                         <Image source={require('./times.jpg')} style={styles.image} />
//                                     </View>
//                                 </View>
//
//                                 <View style={styles.carousel}>
//                                     <View style={{flex:2}}>
//                                         <Image source={require('./bali.jpg')} style={styles.image} />
//                                     </View>
//                                 </View>
//
//
//                             </ScrollView>
//
//                         </View>
//
//                     </View>
//
//
//                 </ScrollView>
//
//             </View>
//
//         );
//     }
//
// }

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 0,
  },
  carousel: {
    height: 250,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  feed: {
    marginHorizontal: 16,
  },
  feedItem: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 8,
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EBECF4',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 20,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  post: {
    height: 250,
    marginTop: 20,
  },
  postImage: {
    width: undefined,
    height: 350,
    marginVertical: 16,
  },
  tagTitle: {
    paddingTop: 20,
    paddingBottom: 16,
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 20,
    textDecorationLine: 'underline'
  },
  topRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 30
},
  caption: {
    fontSize: 25,
  },
}); //end of styles object list
export default Feed;
