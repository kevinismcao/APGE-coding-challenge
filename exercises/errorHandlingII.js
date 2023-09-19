// import axios
const axios = require('axios');
//change the function to async/await
module.exports.run = async function(url){
/*
	You are given a url. Make a GET call with axios using the given url.
	However, there is something wrong with the url, and it throws an error.
	This error will have a property 'message'. Properly return the message, adding 'Error: ' to the beginning of the message.

    You are welcome to change this function to an async/await.

	Write your code below the comment.
*/
	try{
		//use axios.get to call the url
		let res = await axios.get(url);
	}catch(err){
		//if it throws an error print out "Error: " plus error message
		return ('Error: ' + err.message);
	}
};
