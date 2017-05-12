import LocalizedStrings from 'react-localization';
let strings = new LocalizedStrings({
  en:{
  	login: "Login",
    missingLogin : "missing login",
    missingPassword : "missing password",
    initText : "this a demo app, use any text to login, and change flexwork logo with your app logo",
    loading : "refreshing",
  },
  fr:{

  },
  de:{
  	
  }
 });
strings.setLanguage('en');
export default strings;