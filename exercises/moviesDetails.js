const axios = require('axios');
// change function to async function and import axios
module.exports.run = async function(movies) {
/*
	You are given a list of urls that will be used to search up movies.
	Make a GET call with axios using the given urls to search each movies.
	Then return an array of objects with the properties 'Title, Year, Genre' of each movie in the same order it came in as.

	You are welcome to change this function to an async/await.

	Example:

	function (['https://www.omdbapi.com/?t=Lion%20King', 'https://www.omdbapi.com/?t=Up']) =>
	[
		{Title: 'The Lion King', Year: '1994', Genre: 'Animation, Adventure, Drama, Family, Musical'},
		{Title: 'Up', Year: '2009', Genre: 'Animation, Adventure, Comedy, Family'},
	]

	Write your code below the comment.
*/	
	const movieObj = []
	//iterate through all urls in movies array provided
	for (let url of movies){
		try{
			//using the given urls to search movie save to res
			let res = await axios.get(url);
			//save res to movieInfo to get access to reponse data
			const movieInfo = res.data
			//create objects and save each movie titles, years and genres to the object
			let obj = {}
			obj['Title'] = movieInfo.Title
			obj['Year'] = movieInfo.Year
			obj['Genre'] = movieInfo.Genre
			//push to the final result movieObj array
			movieObj.push(movieInfo)
			
		} catch (err) {
			//if error got caught return the error message
			return ('Error: ' + err.message);
		}
	}
	//return movieObj
	return movieObj
	
};
