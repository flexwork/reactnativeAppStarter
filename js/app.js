//shared entry point for both android and IOS apps
'use strict';

import React,{ Component } from 'react';
import {
    View,
    ActivityIndicator,
    AsyncStorage,
    Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './coreJs/Login';
import LoginScreen from './components/Login';
import HomeScreen from './components/Home';
import sharedStyles from './appStyle';
const App = StackNavigator({
  Home : {screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      headerTitle: "flexwork.io",
      headerStyle: sharedStyles.headerWrapper,
      headerTitleStyle: sharedStyles.headerTitle
    }),},
  Login:{ screen: LoginScreen},
  
});
export default App;