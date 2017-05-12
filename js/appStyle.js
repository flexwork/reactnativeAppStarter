//In this file you can put the styles that you will use in all the application 
//like icon styles, input styles, button...
import {StyleSheet, Platform} from 'react-native';
import Vars from './appVars';
module.exports = StyleSheet.create({
	ListLoading: {
        flex:1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems:"center",
        padding:15,
        backgroundColor: Vars.backgroundColor,
    },
    ListNoInternet:{
        flex:1,
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        padding:15,
        backgroundColor: Vars.backgroundColor,
    },
    icon: {
        fontSize: Vars.iconFontSize,
        color: Vars.mainColor
    },
    tabIcon:{
        resizeMode: 'contain',
        height:25,
        width:25
    },
    iconClose: {
        fontSize: Vars.iconFontSize,
        color: Vars.mainColor
    },
    text: {
        fontSize: Vars.fontSizeBase
    },
    // group of iconInput and input
     // group of iconInput and input
    inputGroupWrapper: {
        marginBottom: 15,
        borderBottomLeftRadius: 3,
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 12,
        paddingTop: 5,
        marginBottom: 0,
        borderBottomWidth: 0.5,
        borderBottomColor: Vars.Gallery,
        borderLeftWidth: 1.5,
        borderLeftColor: Vars.mainColor,
    },
    iconInput: {
        fontSize: Vars.iconFontSize,
        color: Vars.infoTextColor,
        alignSelf: 'center',
        paddingRight: 8
    },
    input: {
        flex:1,
        height: Vars.inputHeight,
        color: Vars.Black,
        fontSize: Vars.fontSizeInput,
        paddingTop: (Platform.OS === 'ios') ? 1 : 8,
    },
     // header styling
    headerWrapper: {
        height: Vars.headerHeight,
        paddingHorizontal: Vars.headerPaddingHorizontal,
        paddingTop: Vars.headerPaddingTop,
        backgroundColor: Vars.White,
       
        borderBottomWidth : 1.5,
        borderBottomColor: Vars.mainColor
    },
    headerTitle: {
        fontFamily: Vars.fontFamilyBtn,
        fontSize: Vars.fontSizeTitle,
        fontWeight: Vars.fontWeightBtn,
        color: Vars.Black,
        alignSelf: (Platform.OS === 'ios' ) ? 'center' : 'flex-start',
    },
    areaLeft: {
        flex: 1,
        justifyContent: 'center',
    },
    areaMiddle: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: "center"
    },
    areaRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding:5,
    },
    headerIcon: {
        color: Vars.mainColor,
        fontSize: Vars.iconFontSize,
        paddingLeft: 10,
    },
    headerIconMenu: {
        paddingLeft: 0,
    },
    headerIconBack: {
        color : Vars.mainColor,
        alignSelf:"stretch"
    },
    headerIconBackText: {
        paddingLeft: 2,
        fontSize: Vars.fontSizeBase,
    },
    // styling for Text with icon and is Used for Button
    textLink: {
        fontWeight: Vars.fontWeightBtn,
        fontSize: Vars.fontSizeBtn,
        color: Vars.selectionActiveColor,
        alignSelf: 'center',
        lineHeight: 20
    },

    // text that is placed under icon for explanation
    textSubLink: {
        fontSize: Vars.fontSizeSubNote,
        paddingTop: 3,
        fontWeight: '500',
        color: Vars.selectionActiveColor
    },


    // TEXT

    textNote: {
        fontSize: Vars.fontSizeNote,
        color: Vars.cNote
    },

    textSubNote: {
        fontSize: Vars.fontSizeSubNote,
        color: Vars.cSubNote
    },

    // LIST
    listDivider: {
        padding: 15,
        marginBottom: 8,
        backgroundColor: Vars.Alabaster,
        borderBottomWidth: 1,
        borderColor: Vars.Gallery
    },
    listItem: {
        flexDirection: 'row',
        marginHorizontal: Vars.layoutPadding,
        height: Vars.inputHeight,
        marginBottom: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: Vars.Gallery
    },
    listItemTitle: {
        flex:2,
        justifyContent: 'center',
    },
    titleText: {
        height: (Platform.OS === 'ios') ? null : Vars.inputHeight,
        textAlignVertical:"center",
        includeFontPadding:false,
        fontSize: Vars.fontSizeBase,
        color: Vars.LimedSpruce2,
    },
    listItemContent: {
        flex:3,
        borderRightWidth: 1.5,
        borderRightColor: Vars.cActionBlue,
        paddingRight: 12,
    },
    textDivider: {
        color: Vars.Black,
        fontSize: Vars.fontSizeBtn,
        fontFamily: Vars.fontFamilyBtn,
        fontWeight: Vars.fontWeightBtn,
    },

    // checkbox
    checkBoxContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center'
    },
    checkBoxLabel: {
        flex: 1
    },
    checkBox: {
        width: 26,
        height: 26,
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 5
    },

    // button

    button: {
        width: Vars.buttonWidth,
        padding:5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 40,
        borderWidth: 1.5,
        borderColor: Vars.confirmButton,
        borderRadius: 3,
        backgroundColor: Vars.confirmButton,
    },
    textButton: {
        fontFamily: Vars.fontFamilyBtn,
        fontWeight: Vars.fontWeightBtn,
        fontSize: Vars.fontSizeBtn,
        color: Vars.White,
        letterSpacing: 0.4
    },

    // Alert Text (validation input)
    errorText: {
        fontSize: Vars.fontSizeBase,
        fontWeight : "500",
        color: Vars.denyButton

    }
})