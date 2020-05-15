
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Login from './src/components/Login/Login';
import Post from './src/components/Post/Post';
import Feed from './src/components/Feed/Feed';
import BucketList from './src/components/BucketList/BucketList';
import CreateBucketList from './src/components/BucketList/CreateBucketList';
import CreatePost from './src/components/Post/CreatePost';
import UserProfile from './src/components/Profile/UserProfile';
import Search from './src/components/Search/Search';

import {database} from "/Users/Cherald/repo/191-AnteatersByDesign/TravelByDesign/firebaseconfig.js";
const postsRef = database.ref('/posts');

const App: () => React$Node = () => {
  const [posts,setPosts] = useState(null);
  const [user,setUser] = useState(
      {
          name: "John Doe",
          timeStamp: "1/1/2020",
          avatar: "./profile.jpg"
      }
  )

  retrievePosts = async () => {
      setPosts({name: "name"});
      await postsRef.on('value', snapshot => {
          const data = snapshot.val();
          if (snapshot.val()) {
              console.log("*****data******",data);
              const initPosts = [];
              Object.keys(data).forEach(post => initPosts.push(data[post]));
              setPosts(initPosts);
              console.log("*****initPosts*****",initPosts);
              console.log("******posts*******",posts);
          }

      });
      //return initPosts;
  };
  useEffect(() => {
      console.log("calling useEffect");
      retrievePosts();
      //console.log('*****',posts);
  },[]);

  return (
    <>
    <Post />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});



export default App;
