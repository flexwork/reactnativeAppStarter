import {
    Platform,
    StyleSheet,
} from 'react-native'; 
import Vars from '../../appVars.js';
const styles = StyleSheet.create({
	listStyle: {
        backgroundColor : Vars.backgroundColor,
        flex:1,
    },
    wrapper:{
		flex:1,
		backgroundColor:Vars.White
	},
})
export default styles;