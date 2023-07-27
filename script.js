//your JS code here. If required.
const promise = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Hello, world!");
	},1000)
})
promise.then((msg)=>{
	document.getElementById("output").textContent = msg;
}).catch((err)=>{
	document.querySelector("#output").innerHTML = err;
})
