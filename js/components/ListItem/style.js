import {
    Platform,
    StyleSheet,
} from 'react-native'; 
import Vars from '../../appVars.js';
const styles = StyleSheet.create({
	wrapper: {
        backgroundColor : Vars.White,
        flex:1,
        padding : 20,
        marginHorizontal: 10,
        marginVertical: 5,
		borderWidth : 1.5,
	  	borderColor : Vars.boxColors,
	  	borderRadius : 7,

    },
    questionWrapper:{
    	flexDirection:'row',

    },
    questionText:{
    	flex:3,
    	alignSelf:"flex-start",
    	flexWrap: 'wrap',
    	marginRight: 10,
    	color :Vars.Black,
    	fontSize: Vars.fontSizeTitle,
    	fontWeight : Vars.Bold
    },
    expandStyle : {
	  	paddingLeft : 10,
	  	color : Vars.infoTextColor,
	  	fontWeight : Vars.Bold
	},
	answerWrapper:{
		borderLeftWidth: 1.5,
        borderLeftColor: Vars.mainColor,
        marginTop:5
	},
	answerStyle :{
		paddingVertical : 15,
		paddingLeft: 10,
		color:Vars.Black,
		
		
		fontSize: Vars.fontSizeNote,
	}
})
export default styles;