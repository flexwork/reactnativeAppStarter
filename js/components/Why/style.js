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
		backgroundColor:Vars.White
	},
	imageStyle:{
		
		width: "auto",
	    height: 500,
	},
	listStyle: {
        backgroundColor : Vars.backgroundColor,
        flex:1,
    },
});
export default styles;