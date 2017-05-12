//in this file you put all the app variables in one place like the colors you are using
//fonts size, font weight ect
import {Platform} from 'react-native';
module.exports = {
	//Colors 
	mainColor: "#1cbc9f",
    selectionActiveColor : "#1eb0ed",
    boxColors : "#edeff0",
    backgroundColor : "#f9f9f9",
    Black: '#333',
    infoTextColor : "#aaa",
    tableColor : "#e7eaec",
    confirmButton : "#18a689",
    denyButton : "#ed5565",
    White: '#fff',
    listBackground: "#f2f2f2",
        // Icon
    iconFamily: 'FontAwesome',
    // main icon FontSize
    iconFontSize: 22,
    iconFontSizeSub: 18,

    get iconSizeLarge () {
        return this.iconFontSize* 1.5;
    },
    get iconSizeSmall () {
        return this.iconFontSize* .7;
    },
    // TEXT
    fontSizeTitle: 17,
    fontSizeInput: 16,
    fontSizeBase: 15,
    fontSizeSubject: 15,
    fontSizeNote: 13,
    fontSizeSubNote: 12,
    Bold:"500",
    extraBold:"700",
    get fontSizeSmall() {
        return this.fontSizeBase* .8;
    },

    // INPUT

    inputHeight: 45,
    inputHeightMarginTop: 2,

    // GAP Measurements
    gapButtons: 20,

    // Button
    buttonWidth: 145,

    fontSizeBtn: (Platform.OS === 'ios') ? 15 : 17,
    fontFamilyBtn: (Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'Roboto_medium',
    fontWeightBtn: (Platform.OS === 'ios') ? '500' : undefined,

    get btnTextSize () {
        return this.fontSizeBase* 1.1;
    },
    get btnTextSizeLarge () {
        return this.fontSizeBase* 1.5;
    },
    get btnTextSizeSmall () {
        return this.fontSizeBase* .8;
    },

    // General layout
    layoutPadding: 15,
    // Header
    headerHeight: (Platform.OS === 'ios' ) ? 64 : 55,
    headerPaddingHorizontal: 15,
    headerPaddingTop: (Platform.OS === 'ios' ) ? 25 : 6,
}