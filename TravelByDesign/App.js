
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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


const AppStack = createStackNavigator();

const AuthStack =createStackNavigator();

const loginStack = createStackNavigator();
const bottomTab = createBottomTabNavigator();
const bucketListPage = createStackNavigator();
const CreatePostPage = createStackNavigator();

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
          title: "Home"
        }
      }
      />
      <bottomTab.Screen name='Create Post' component={PostPageStack}/>
      <bottomTab.Screen name='Bucket List' children={BucketListStack} />
    </bottomTab.Navigator>
  );
}

function BucketListStack() {
  return (
    <bucketListPage.Navigator>
      <bucketListPage.Screen name="bucketList" component={BucketList}/>
      <bucketListPage.Screen name="newBucketList" children={CreateBucketList}/>
    </bucketListPage.Navigator>
  );
}

function PostPageStack() {
  return (
    <CreatePostPage.Navigator>
      <CreatePostPage.Screen name="Create Post" component={CreatePost}/>
    </CreatePostPage.Navigator>
  );
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



