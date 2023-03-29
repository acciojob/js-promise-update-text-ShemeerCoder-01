//your JS code here. If required.
var Promise = new Promise(function(resolve,reject){
	return setTimeOut(resolve("Hello, world!"),1000);
});
Promise.then((msg)=>{
	document.querySelector("#output").innerHTML = msg;
}).catch((err)=>{
	document.querySelector("#output").innerHTML = err;
})
