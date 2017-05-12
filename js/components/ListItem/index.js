'use strict'
import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from "react-native";
import styles from './style.js';
import Icon from 'react-native-vector-icons/Ionicons';
import sharedStyles from '../../appStyle';
class ListItem extends Component{
	constructor(props) {
        super(props);
        this.state = {
            open : false,
        }
        //the list item coming from list
        this.item = this.props.item;
    }
    //render the answer in case the user touch the expand icon
    _showAnswer(){
    	if(this.state.open)
    	{
    		return(
    			<Text style={styles.answerStyle}>{this.item.answer}</Text>
    			)
    	}
    }
    //event listener to fire when the user touch expand icon
    _showDetails()
	{
		let show = this.state.open;
		this.setState({
			open : !show
		})
	}
	//change the icon when the user touch it to show the state
    _renderExpandIcon()
	{
		if(!this.state.open)
		{
			return(
				<Icon name="ios-arrow-dropdown" style={[sharedStyles.icon,styles.expandStyle]}/>
				)
		}
		else
			return(
				
				<Icon name="ios-arrow-dropup" style={[sharedStyles.icon,styles.expandStyle]}/>
					
				)
	}
	//render the component
    render()
    {
    	return(
    		<View style={styles.wrapper}>
	    		<View style={styles.questionWrapper}>
	    			<Text style={[styles.questionText]}>{this.item.question}</Text>
	    			<TouchableOpacity onPress={()=>this._showDetails()}>
						{this._renderExpandIcon()}
					</TouchableOpacity>
	    		</View>
	    		<View style={styles.answerWrapper}>
	    			{this._showAnswer()}
	    		</View>
    		</View>
    		)
    	
    }
}
export default ListItem;