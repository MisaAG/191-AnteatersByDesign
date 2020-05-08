import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from  '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
import SignUp from './src/components/SignUp/SignUp';

// Place Holder Screens
Search = () =>
  <>
  <View>
    <Text>Search</Text>
  </View>
  </>

Profile = () =>
  <>
  <View style={styles.center}>
    <Text style={styles.title}>Profile</Text>
  </View>
  </>

EditProfile = () =>
  <>
  <View style={styles.center}>
    <Text style={styles.title}>Edit Profile</Text>
  </View>
  </>

Settings = () =>
  <>
  <View style={styles.center}>
    <Text style={styles.title}>Settings</Text>
  </View>
  </>

const bottomTab = createBottomTabNavigator();
function AppTabs() {
  return(
    <bottomTab.Navigator>
      <bottomTab.Screen 
        name='Feed'
        component={Feed}
        />
      <bottomTab.Screen 
        name='Search'
        component={Search}
        />
      <bottomTab.Screen 
        name='Post'
        component={CreatePost}
        />
      <bottomTab.Screen 
        name='Bucket List'
        component={BucketList}
        />
      <bottomTab.Screen 
        name='Profile'
        component={Profile}
        />
    </bottomTab.Navigator>
  )
}

const authStack = createStackNavigator();
function AuthStack() {
  return (
    <authStack.Navigator>
      <authStack.Screen 
        name='Travel By Design'
        component={SignUp}
        />
    </authStack.Navigator>
  )
}

const bucketListStack = createStackNavigator();
function BucketListStack() {
  return(
    <bucketListStack.Navigator>
      <bucketListStack.Screen 
        name="My List"
        component={BucketList}
        />
      <bucketListStack.Screen 
        name='Create List'
        component={CreateBucketList}
        />
    </bucketListStack.Navigator>
  )
}

export default function App() {
  const isSignedIn = 0;
  return (
    isSignedIn ? (
      <>
      <NavigationContainer>
        <AppTabs />
      </NavigationContainer>
      </>
    ) : (
      <>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
      </>
    )
  );
    
}

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