'use strict';
var Login = {
	doLogin : function(login,pass,success,failure)
	{
		//call api here
		success();
		return true;
	},
	setisLogin : function(is)
	{
		Login.prototype.isLogin = is;
	},
	isUserLogin : function()
	{
		return Login.prototype.isLogin;
	},
	setUser : function(user)
	{
		Login.prototype.user = user;
	},
	getUser : function()
	{
		return Login.prototype.user;
	}
}
Login.prototype = {
	isLogin : false,
	user : null,
};
export default Login;