import {
    Platform,
    StyleSheet,
    Dimensions
} from 'react-native'; 
import Vars from '../../appVars.js';
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    buttonLogin: {
        marginTop: 15,
        backgroundColor : Vars.confirmButton
    },
    buttonSettings: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    wrapper: {
      flex:1,
      backgroundColor : Vars.White
    },
    wrapperLogo: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        flexDirection:"row"

    },
    logo: {
        resizeMode: 'contain',
        width: deviceWidth*.3,
        alignSelf: 'center',
    },
    flexy : {
        resizeMode: 'contain',
        width: deviceWidth*.5,
        alignSelf: 'center',
        flex:2,
        marginTop : 15
    },
    bg: {
        flex: 1,
        justifyContent: 'center',
       
    },
    wrapperLogin: {
        flex: 1,
        justifyContent: 'center',
         paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: 'transparent',
    },
    input:{
        paddingTop: (Platform.OS === 'ios') ? 1 : 8,
    }

});
export default styles;