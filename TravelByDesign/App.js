
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Login from './src/components/Login/Login';
import signUp from './src/components/Login/SignUp';
import Post from './src/components/Post/Post';
import Feed from './src/components/Feed/Feed';
import BucketList from './src/components/BucketList/BucketList';
import CreateBucketList from './src/components/BucketList/CreateBucketList';
import CreatePost from './src/components/Post/CreatePost';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, BottomTabView } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { mdiHome } from '@mdi/js';


//import * as firebase from 'firebase';


/*
const App: () => React$Node = () => {
  

    return (
      <>

        <Login />
      </>
    );
  
  
};
*/

// Place Holder Screens
Search = () =>
  <View style={styles.center}>
    <Text style={styles.title}>Search</Text>
  </View>

Profile = () =>
  <View style={styles.center}>
    <Text style={styles.title}>Profile</Text>
    <Button title='Edit Profile'>
     
    </Button>
    <Button title='Settings'>
      Settings
    </Button>
  </View>

EditProfile = () =>
  <View style={styles.center}>
    <Text style={styles.title}>Edit Profile</Text>

  </View>

Settings = () =>
  <View style={styles.center}>
    <Text style={styles.title}>Settings</Text>
  </View>


const AppStack = createStackNavigator();

const AuthStack =createStackNavigator();

const bottomTab = createBottomTabNavigator();
const searchStack = createStackNavigator();
const bucketListPage = createStackNavigator();
const CreatePostPage = createStackNavigator();
const ProfileStack = createStackNavigator();


//const switchStack = createSwitchNavigator();

/*
export default createAppContainer(
  
  )
)
*/

function Root() {
  return (
    
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login}
         options={{title:"Travel By Design"}} />
      <AuthStack.Screen name="Sign Up" component={signUp} />
    </AuthStack.Navigator>
  );
}

function OpenApp() {
  return (
    <bottomTab.Navigator> 
      <bottomTab.Screen 
        name='Feed' 
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          title: "Home",
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Icon style={[{ color: 'black' }]} size={25} name={"home"} />
          )
        }}
      />
      <bottomTab.Screen name='Search' 
      component={SearchStack}
      options={{
        tabBarLabel: 'Search',
        title: "Search",
        tabBarLabel: 'Search',
        tabBarIcon: () => (
          <Icon style={[{ color: 'black' }]} size={25} name={"magnify"} />
        ) 
      }}
        />
      <bottomTab.Screen name='Create Post' 
      component={PostPageStack}
      options={{
        tabBarLabel: 'Post',
        title: "Create Post",
        tabBarLabel: 'Post',
        tabBarIcon: () => (
          <Icon style={[{ color: 'black' }]} size={25} name={"upload"} />
        ) 
      }}
      />
      <bottomTab.Screen name='Bucket List' 
      children={BucketListStack} 
      options={{
        tabBarLabel: 'Bucket List',
        title: "Bucket List",
        tabBarLabel: 'Bucket List',
        tabBarIcon: () => (
          <Icon style={[{ color: 'black' }]} size={25} name={"bitbucket"} />
        ) 
      }}
      />
      <bottomTab.Screen name='Profile' 
      children={profileStack} 
      options={{
        tabBarLabel: 'Profile',
        title: "Profile",
        tabBarLabel: 'Profile',
        tabBarIcon: () => (
          <Icon style={[{ color: 'black' }]} size={25} name={"cookie"} />
        ) 
      }}
      />
    </bottomTab.Navigator>
  );
}

function BucketListStack() {
  return (
    <bucketListPage.Navigator>
      <bucketListPage.Screen name="Bucket List" component={BucketList}/>
      <bucketListPage.Screen name="Create New Bucket List" children={CreateBucketList}/>
    </bucketListPage.Navigator>
  );
}

function SearchStack() {
  return(
    <searchStack.Navigator>
      <searchStack.Screen name='Search' component={Search} />
    </searchStack.Navigator>
  );
}

function PostPageStack() {
  return (
    <CreatePostPage.Navigator>
      <CreatePostPage.Screen name="Create Post" component={CreatePost}/>
    </CreatePostPage.Navigator>
  );
}

function profileStack() {
  return(
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile}/>
      <ProfileStack.Screen name="Edit Profile" component={EditProfile}/>
      <ProfileStack.Screen name="Settings" component={Settings}/>
    </ProfileStack.Navigator>
  )
}

export default class App extends Component {
  

  render() {

    const isSignedIn = 1;

    return(
      isSignedIn ? (
        <>
          <NavigationContainer>
            <OpenApp/>
          </NavigationContainer>
        </>
      ) : (
        <>
          <NavigationContainer>
            <Root/>
          </NavigationContainer>
        </>
      )
      
    )
  }
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



