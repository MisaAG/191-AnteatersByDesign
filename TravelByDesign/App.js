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
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

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

// Place Holder Screens

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

const bottomTab = createMaterialBottomTabNavigator();
function AppTabs() {
  return(
    <bottomTab.Navigator
    initialRouteName="Feed"
    activeColor="white"
    style={{ backgroundColor: 'light blue' }}>
      <bottomTab.Screen
        name='Feed'
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        />
      <bottomTab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='magnify' color={color} size={26} />
          ),
        }}
        />
      <bottomTab.Screen
        name='CreatePost'
        component={CreatePost}
        options={{
          tabBarLabel: 'Make a Post',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='upload' color={color} size={26} />
          ),
        }}
        />
      <bottomTab.Screen
        name='Bucket List'
        component={BucketList}
        options={{
          tabBarLabel: 'Bucket List',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='compass' color={color} size={26} />
          ),
        }}
        />
      <bottomTab.Screen
        name='UserProfile'
        component={UserProfile}
        options={{
          tabBarLabel: 'UserProfile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='alien' color={color} size={26} />
          ),
        }}
        />
    </bottomTab.Navigator>
  )
}

const Stack = createStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Feed' component={Feed} />
      <Stack.Screen name='Post' component={Post} />
    </Stack.Navigator>
  );
}

const authStack = createStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ header: () => null }}
      />
      <Stack.Screen name='Signup' component={SignUp} />
    </Stack.Navigator>
  );
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
  const isSignedIn = 1;
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
