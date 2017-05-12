'use strict';
import React, { Component } from 'react';
import{Image} from "react-native";
import { DrawerNavigator } from 'react-navigation';
import FaqScreen from "../FAQ";
import WhyScreen from "../Why";
import AboutScreen from "../About";
import sharedStyles from '../../appStyle';
import Vars from '../../appVars.js';
import AwseomeIcon from 'react-native-vector-icons/FontAwesome';
//we use the component TabNavigator for ios app (the common use in IOS app)

const MyApp = DrawerNavigator({
  About: {
    screen: AboutScreen,
    navigationOptions : ({ navigation, screenProps }) => ({
      drawerLabel: 'ABOUT US',
      drawerIcon:function(tint){
        if(tint.focused)
          return(
            <Image
                source={require('../../../images/fxw_active.png')}
                style={[sharedStyles.tabIcon]}
              />
            )
      else
        return(
          <Image
                source={require('../../../images/fxw.png')}
                style={[sharedStyles.tabIcon]}
              />
             )},
      
      headerLeft: <AwseomeIcon name="bars" style={[sharedStyles.headerIcon, sharedStyles.headerIconMenu]} onPress={() => navigation.navigate('DrawerOpen')}/>
    })
  },
  WHY: {
    screen: WhyScreen,
    navigationOptions : ({ navigation, screenProps }) => ({
      drawerLabel: 'WHY',
      drawerIcon:function(tint){
        if(tint.focused)
          return(
            <Image
                source={require('../../../images/why_active.png')}
                style={[sharedStyles.tabIcon]}
              />
            )
      else
        return(
          <Image
                source={require('../../../images/why.png')}
                style={[sharedStyles.tabIcon]}
              />
          )
      },
      headerLeft: <AwseomeIcon name="bars" style={[sharedStyles.headerIcon, sharedStyles.headerIconMenu]} onPress={() => navigation.navigate('DrawerOpen')}/>
    })
  },
  FAQ: {
    screen: FaqScreen,
    navigationOptions :({ navigation, screenProps }) => ({
      drawerLabel: 'FAQ',
      drawerIcon:function(tint){
          if(tint.focused)
              return(
                  <Image
                      source={require('../../../images/faq_active.png')}
                      style={[sharedStyles.tabIcon]}
                    />
                  )
          else
              return(
                  <Image
                      source={require('../../../images/faq.png')}
                      style={[sharedStyles.tabIcon]}
                    />
              )
      },
      headerLeft: <AwseomeIcon name="bars" style={[sharedStyles.headerIcon, sharedStyles.headerIconMenu]} onPress={() => navigation.navigate('DrawerOpen')}/>,
    }),
    
  },
  
}, {
  contentOptions: {
    activeTintColor: Vars.mainColor,
    inactiveTintColor:Vars.Black,
    style: {
      backgroundColor: Vars.White,
    },
  },
});
export default MyApp;