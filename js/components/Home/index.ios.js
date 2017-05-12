'use strict';
import React, { Component } from 'react';
import{Image} from "react-native";
import { TabNavigator } from 'react-navigation';
import FaqScreen from "../FAQ";
import WhyScreen from "../Why";
import AboutScreen from "../About";
import sharedStyles from '../../appStyle';
import Vars from '../../appVars.js';
//we use the component TabNavigator for ios app (the common use in IOS app)
const MyApp = TabNavigator({
  About: {
    screen: AboutScreen,
    navigationOptions : {
      tabBarLabel: 'ABOUT US',
      tabBarIcon:function(tint){
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
             )}
      
    }
  },
  WHY: {
    screen: WhyScreen,
    navigationOptions : {
      tabBarLabel: 'WHY',
      tabBarIcon:function(tint){
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
      }
    }
  },
  FAQ: {
    screen: FaqScreen,
    navigationOptions :{
      tabBarLabel: 'FAQ',
        tabBarIcon:function(tint){
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
        }
    }
  },
  
}, {
  tabBarOptions: {
    activeTintColor: Vars.mainColor,
    style: {
      backgroundColor: Vars.White,
    },
  },
});
export default MyApp;