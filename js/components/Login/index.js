'use strict'
import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Platform,
    AsyncStorage,
    Alert,
    Modal,
    NetInfo,
    ActivityIndicator,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import Translate from "../../translation.js";
import sharedStyles from '../../appStyle';
import styles from "./style.js";
import Vars from '../../appVars.js';
import LoginProvider from './../../coreJs/Login.js';
import { NavigationActions } from 'react-navigation'
class Login extends Component {
    static navigationOptions = {
    header: null,
  }
    constructor(props)
    {
        super(props);
        this.state = {
            login : "",
            password : "",
            isDisable : false,
            showLoading : false,
            scrollEnabled:false,
            errorText:Translate.initText
        }
    }
    componentWillMount() {
        let me = this;
    }
    _doLogin()
    {
        if(this.state.login === "")
        {
            this.setState({errorText:Translate.missingLogin});
        }
        if(this.state.password === "")
        {
            this.setState({errorText:Translate.missingPassword});
        }
        if(this.state.login != "" && this.state.password != "")
        {
            this.setState({
                isDisable : true,
                showLoading : true
            });
            let successFunc = function()
            {
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                    NavigationActions.navigate({ routeName: 'Home'})
                    ]
                    })
                this.props.navigation.dispatch(resetAction)


            }
            let errorFunc = function(status)
            {
                console.log("error")
                this.setState({
                    isDisable : false,
                    showLoading : false,
                    errorText : error
                });
            }
            LoginProvider.doLogin(this.state.login,this.state.password,successFunc.bind(this),errorFunc.bind(this));
        }
    }
    _renderButtonText()
    {
        if(this.state.showLoading)
        {
            return(
                 <View >
                    <ActivityIndicator size="small" color={Vars.White}/>
                </View>
                )
        }
        else
            return( 
                <Text style={sharedStyles.textButton}>
                    {Translate.login.toUpperCase()}
                </Text>
                )
    }
    render() {
        return (

            <KeyboardAwareScrollView
                scrollEnabled={this.state.scrollEnabled}
                onKeyboardWillShow={() => { this.setState({scrollEnabled:true})}}
                onKeyboardWillHide={() => { this.setState({scrollEnabled:false})}}
                contentContainerStyle={styles.wrapper}>

                        <View style={styles.wrapperLogo}>
                            <Image source={require('../../../images/Logo.png')} style={styles.logo} />
                        </View>

                        <View style={styles.wrapperLogin}>
                                <View style={sharedStyles.inputGroupWrapper}>
                                    <View style={sharedStyles.inputGroup}>
                                        <Icon name='user' style={sharedStyles.iconInput} />
                                        <TextInput
                                            style={[sharedStyles.input, styles.input]}
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            includeFontPadding={false}
                                            textAlignVertical="center"
                                            placeholder={Translate.username}
                                            placeholderTextColor={Vars.Silver}
                                            selectionColor={Vars.SeaBuckthorn}
                                            underlineColorAndroid="transparent"
                                            clearButtonMode="while-editing"
                                            onChangeText={(login) => this.setState({login})} />
                                    </View>
                                </View>

                                <View style={sharedStyles.inputGroupWrapper}>
                                    <View style={sharedStyles.inputGroup}>
                                        <Icon name='unlock-alt' style={sharedStyles.iconInput} />
                                        <TextInput
                                            style={[sharedStyles.input, styles.input]}
                                            includeFontPadding={false}
                                            textAlignVertical="center"
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            placeholder={Translate.password}
                                            secureTextEntry={true}
                                            selectionColor={Vars.SeaBuckthorn}
                                            placeholderTextColor={Vars.Silver}
                                            underlineColorAndroid="transparent"
                                            clearButtonMode="while-editing"
                                            onChangeText={(password) => this.setState({password})} />
                                    </View>
                                </View>
                                {
                                    this.state.errorText != "" &&
                                    <Text style={sharedStyles.errorText}>
                                        {this.state.errorText}.
                                    </Text>
                                }
                                <TouchableOpacity onPress={() => this._doLogin()}
                                                  style={[sharedStyles.button, styles.buttonLogin]}
                                                  disabled={this.state.isDisable}>
                                                  {this._renderButtonText()}
                                   
                                </TouchableOpacity>
                       </View>


            </KeyboardAwareScrollView>
        )
    }
}



export default Login;
