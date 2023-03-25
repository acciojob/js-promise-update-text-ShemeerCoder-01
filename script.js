//your JS code here. If required.
var Promise = new Promise(function(resolve,reject){
	setTimeOut(resolve("Hello, world!"),1000);
});
Promise.then((msg){
	document.queryselector(".output").innerHTML = msg;
})
