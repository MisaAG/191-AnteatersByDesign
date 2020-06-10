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

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
import Results from './src/components/Search/Results';
import SignUp from './src/components/SignUp/SignUp';


const bottomTab = createMaterialBottomTabNavigator();
// AppTabs uses bottomTab to create screens with the bottom tab navigator. 
// Each screen icon is changed on the line <MaterialCommunityIcons name="*icon name* "
function AppTabs() {
  return (
    <bottomTab.Navigator
      initialRouteName="Feed"
      activeColor="white"
      tabBarOptions={{
        labelStyle: { fontSize: 12 },
        tabStyle: { width: 100 },
        style: { backgroundColor: 'light blue' },
      }}
      >
      <bottomTab.Screen
        name="Feed"
        component={HomeStack}
        options={{
          Header: null,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26}/>
          ),
        }}
      />
      <bottomTab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <bottomTab.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          tabBarLabel: 'Make a Post',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="upload" color={color} size={26} />
          ),
        }}
      />
      <bottomTab.Screen
        name="Bucket List"
        component={BucketList}
        options={{
          tabBarLabel: 'Bucket List',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="compass" color={color} size={26} />
          ),
          HeaderTitle: "Bucket List"
        }}
      />
      <bottomTab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-star"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </bottomTab.Navigator>
  );
}

const Stack = createStackNavigator();
// Stack navigator for home screen; moving from the feed to a single post
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} options={{headerTitle: null}}/>
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
}

const searchStack = createStackNavigator();
// Search stack not yet implented
// Once this works the SearchStack function 
//  can replace the Search component in AppTabs function
function SearchStack() {
  return (
    <searchStack.Navigator>
      <searchStack.Screen name="Search" component={Search} />
      <searchStack.Screen name="Results" component={Results} />
    </searchStack.Navigator>
  );
}

const authStack = createStackNavigator();
// AuthStack for Login and Signup screens
function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name=" " 
      component={Login} 
      options={{Header: null}} 
      />
      <Stack.Screen name="Signup" component={SignUp} />
    </Stack.Navigator>
  );
}

/*
<Stack.Screen
        name="Travel By Design"
        children={AppTabs}
        options={{headerLeft: () => null}}
      />
*/

const appStack = createStackNavigator();

//  AppStack nests AuthStack and AppTabs
//  Needs some work on the headers
// The app can be structured differently than this. 
// Instead of AppStack, AppTabs could be added to AuthStack, but
// It still needs work so the user doesn't swipe back to the login page while in the app...
function AppStack() {
  return (
    <appStack.Navigator initialRouteName="Login" options={{headerMode: 'none'}}>
      <appStack.Screen name="Login" headerTitle="Welcome to Travel by Design" component={AuthStack} 
      options={{HeaderTitle: ' '}}
      />
       <appStack.Screen
        name="Travel By Design"
        children={AppTabs}
        options={{headerLeft: () => null}}
      />
    </appStack.Navigator>
  );
}

const bucketListStack = createStackNavigator();

// BucketListStack should replace BucketList component in AppTabs when it works.
function BucketListStack() {
  return (
    <bucketListStack.Navigator>
      <bucketListStack.Screen
        name="Bucket List"
        title="Bucket List"
        component={BucketList}
        />
      <bucketListStack.Screen
        name='Create List'
        component={CreateBucketList}
        />
      <bucketListStack.Screen
        name='Post'
        component={Post}
      />
    </bucketListStack.Navigator>
  );
}

// This is the function that contains the nested navigators.
export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
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
