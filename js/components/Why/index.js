"use strict"
import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    ActivityIndicator,
    FlatList,
    InteractionManager,
    Image
} from 'react-native';
import sharedStyles from '../../appStyle';
import styles from "./style.js";
import Vars from '../../appVars.js';
import Why from '../../coreJs/Why';
class WhyScreen extends Component{
  	constructor(props){
  		super(props);
  		this.state = {
  			loaded : false,
  			data : [],
  		}
  	}
  	//render one list item
  	_renderItem(item,index)
  	{
  		return(
  				<Image source={{uri:item.item.imageUrl}} style={styles.imageStyle} />
  			)
  	}
  	//load list data after component mount and animation is done
  	componentDidMount() {
        
            let whyData = Why.getData();
            this.setState({
            	loaded : true,
            	data : whyData
            
        });
    }
    //render loading wheel until the list is loaded
  	_renderLitItems()
  	{
  		if(this.state.loaded)
    	{
    		return(
    			<FlatList
                    scrollEnabled={true}
                    removeClippedSubviews={false}
                    style={styles.listStyle}
                    data={this.state.data}
                    renderItem={this._renderItem.bind(this)}
                    enableEmptySections={true}
                    >

                </FlatList>
    			)
    	}
    	else
    	{
    		return(
                
                    <View style={sharedStyles.ListLoading}>
                            <ActivityIndicator size="large" color={Vars.mainColor}/>
                    </View>
                
                )
    	}
  	}
	render()
	{
		return(
        <View style={styles.wrapper}>
		 {this._renderLitItems()}
        </View>
        )
	}
}
export default WhyScreen;