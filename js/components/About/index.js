"use strict"
import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    Image,
    Linking,
    TouchableOpacity,
    Alert
} from 'react-native';
import sharedStyles from '../../appStyle';
import styles from "./style.js";
import Vars from '../../appVars.js';
const flexworkWeb = "https://flexwork.io";
class AboutScreen extends Component{

  	constructor(props){
  		super(props);
  		this.state = {
  			breifing:"",
  			company:"",
  			name:"",
  			email:"",
  			phone:""

  		}
  	}
  	//this a dummy method that will check if all form variables are set or not(basic validation you should do more in your app), and display an alert
  	//it will not send any info
  	_sendForm()
  	{
  		if(this.state.breifing!="" &&
  			this.state.name!="" &&
  			this.state.email!="" &&
  			this.state.company!="" &&
  			this.state.phone!="")
  		{
  			Alert.alert("Success","Information submitted successfully");
  		}
  		else
  			Alert.alert("error","please fill all the from fields");
  	}
  	//Open external link using Linking component from react-native
  	_openLink()
  	{
  		Linking.openURL(flexworkWeb).catch(err => console.log('An error occurred', err));
  	}
	render()
	{
		return(
			<ScrollView style={styles.wrapper}>
				<View style={styles.itemwrapper}>
					<View style={styles.titleWrapper}>
						<Text style={[styles.basicTitle,styles.symStyle]}>{'< '}</Text>
						<Text style={[styles.basicTitle,styles.mainTitle,styles.boldTitle]}>plug to</Text>
						<Text style={[styles.basicTitle,styles.mainTitle]}> painless</Text>
						<Text style={[styles.basicTitle,styles.mainTitle,styles.boldTitle]}> development</Text>
						<Text style={[styles.basicTitle,styles.symStyle]}>{' />'}</Text>
					</View>
					<TouchableOpacity onPress={this._openLink}>
						<Text style={styles.linkStyle}>flexwork.io</Text>
					</TouchableOpacity>
					<View style={styles.wrapperPlug}>
                            <Image source={require('../../../images/plug.png')} style={styles.plugStyle} />
                    </View>
                    <View style={styles.formWrapper}>
                    	<Text style={styles.question}>how can we support your project?</Text>
                    	<View style={styles.inputGroup}>
	                        <TextInput
	                            placeholder="breifing"
	                            multiline={true}
	                            style={[sharedStyles.input,styles.mulitText]}
	                            autoCapitalize="none"
	                            autoCorrect={false}
	                            includeFontPadding={false}
	                            placeholderTextColor={Vars.infoTextColor}
	                            selectionColor={Vars.mainColor}
	                            underlineColorAndroid="transparent"
	                            clearButtonMode="while-editing"
	                            onChangeText={(breifing) => this.setState({breifing})} />
                        </View>
                        <View style={styles.inputGroup}>
	                        <TextInput
	                            placeholder="company"
	                            style={[sharedStyles.input]}
	                            autoCapitalize="none"
	                            autoCorrect={false}
	                            includeFontPadding={false}
	                            textAlignVertical="center"
	                            placeholderTextColor={Vars.infoTextColor}
	                            selectionColor={Vars.mainColor}
	                            underlineColorAndroid="transparent"
	                            clearButtonMode="while-editing"
	                            value={this.state.projectskills}
	                            onChangeText={(company) => this.setState({company})} />
                    	</View>
                    	<View style={styles.inputGroup}>
	                        <TextInput
	                            placeholder="name"
	                            style={[sharedStyles.input]}
	                            autoCapitalize="none"
	                            autoCorrect={false}
	                            includeFontPadding={false}
	                            textAlignVertical="center"
	                            placeholderTextColor={Vars.infoTextColor}
	                            selectionColor={Vars.mainColor}
	                            underlineColorAndroid="transparent"
	                            clearButtonMode="while-editing"
	                            value={this.state.projectskills}
	                            onChangeText={(name) => this.setState({name})} />
                    	</View>
                    	<View style={styles.inputGroup}>
	                        <TextInput
	                            placeholder="email"
	                            style={[sharedStyles.input]}
	                            autoCapitalize="none"
	                            autoCorrect={false}
	                            includeFontPadding={false}
	                            textAlignVertical="center"
	                            placeholderTextColor={Vars.infoTextColor}
	                            selectionColor={Vars.mainColor}
	                            underlineColorAndroid="transparent"
	                            clearButtonMode="while-editing"
	                            value={this.state.projectskills}
	                            onChangeText={(email) => this.setState({email})} />
                    	</View>
                    	<View style={styles.inputGroup}>
	                        <TextInput
	                            placeholder="phone number"
	                            style={[sharedStyles.input]}
	                            autoCapitalize="none"
	                            autoCorrect={false}
	                            includeFontPadding={false}
	                            textAlignVertical="center"
	                            placeholderTextColor={Vars.infoTextColor}
	                            selectionColor={Vars.mainColor}
	                            underlineColorAndroid="transparent"
	                            clearButtonMode="while-editing"
	                            value={this.state.projectskills}
	                            onChangeText={(phone) => this.setState({phone})} />
                    	</View>
                    	<TouchableOpacity onPress={() => this._sendForm()}
                                                  style={[sharedStyles.button,{alignSelf:"stretch",width:"auto"}]}
                                                  disabled={this.state.isDisable}>
                                                  <Text style={{color:Vars.White}}>SEND</Text>
                                   
                                </TouchableOpacity>
                    </View>
				</View>
			</ScrollView>
			)
	}
}
export default AboutScreen;