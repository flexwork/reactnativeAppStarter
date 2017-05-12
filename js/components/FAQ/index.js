"use strict"
import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    ActivityIndicator,
    InteractionManager,
    FlatList,
    RefreshControl,
    Image
} from 'react-native';
import sharedStyles from '../../appStyle';
import styles from "./style.js";
import Vars from '../../appVars.js';
import Faq from '../../coreJs/Faq';
import Translate from '../../translation';
import ListItem from '../ListItem';
class FaqScreen extends Component{
  	constructor(props){
  		super(props);
  		this.state = {
  			loaded : false,
  			data : [],
  			isRefreshing:false
  		}
  	}
    //load the data after intercation(animation,switch tab...)
  	componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            let faqData = Faq.getQuestions();
            this.setState({
            	loaded : true,
            	data : faqData
            })
            
        });
    }
    //function called when the user pull the list
    _pullRefresh()
    {
    	this.setState({
    		refreshing:true
    	});
    	let faqData = Faq.getQuestions();
    	this.setState({
    		data:faqData,
    		refreshing:false
    	})
    }
    //render a list item by calling another component that will display data
    //the component is costum made called ListItem
    _renderItem(item,index)
    {
    	return(
    		<ListItem item={item.item}/>
    		)
    }
    //render a loading wheel while the list data being loaded
    _renderLitItems()
    {
    	if(this.state.loaded)
    	{
    		return(
    			<FlatList
                    scrollEnabled={true}
                    style={styles.listStyle}
                    data={this.state.data}
                    removeClippedSubviews={false}
                    renderItem={this._renderItem.bind(this)}
                    refreshControl={
		                <RefreshControl
		                    refreshing={this.state.isRefreshing}
		                    onRefresh={this._pullRefresh.bind(this)}
		                    title={Translate.loading}
		                    tintColor={Vars.mainColor}
		                    titleColor={Vars.mainColor}
		                    colors={[Vars.mainColor]}
		                    progressBackgroundColor='#fff'
		                />}
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
export default FaqScreen;