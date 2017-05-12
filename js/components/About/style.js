import {
    Platform,
    StyleSheet,
    Dimensions
} from 'react-native'; 
import Vars from '../../appVars.js';
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
	wrapper:{
		flex:1,
		backgroundColor:Vars.White,
		
	},
	itemwrapper:{
		alignItems:"center"
	},
	titleWrapper:{
		flexDirection:"row",
		padding:15,
		alignItems:"stretch"
	},
	basicTitle:{
		fontSize: Vars.fontSizeTitle*1.2,
    	
	},
	symStyle:{
		fontWeight : Vars.extraBold,
		color:Vars.infoTextColor
	},
	mainTitle:{
		color:Vars.mainColor
	},
	boldTitle:{
		fontWeight : Vars.extraBold
	},
	wrapperPlug: {
        flex: 1,
        justifyContent: 'center',
         paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: 'transparent',
    },
	plugStyle:{
		resizeMode: 'contain',
        width: deviceWidth*.6,
        alignSelf: 'center',
	},
	clientlogoStyle:{
		height:50,
		width:50
	},
	linkStyle:{
		color: Vars.selectionActiveColor,
		textDecorationLine:"underline"
	},
	formWrapper:{
		flex:1,
		marginTop:20,
		marginHorizontal:20,
		padding:15,
		borderColor:Vars.infoTextColor,
		borderWidth:1,
		alignSelf:"stretch",
		alignItems:"center"
	},
	inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 12,
        paddingTop: 5,
        marginBottom: 0,
        borderWidth: 1,
        borderColor: Vars.infoTextColor,
        borderLeftColor: Vars.mainColor,
        marginBottom:15
    },
    mulitText : {
        height: deviceWidth*.4,
        color: '#000',
        fontSize: Vars.fontSizeBase,
        textAlignVertical: 'top',
        backgroundColor: '#fff'
    },
    question:{
    	flexWrap:"wrap",
    	fontSize:Vars.fontSizeTitle,
    	marginBottom:15,
    	fontWeight:Vars.extraBold
    }
});
export default styles;