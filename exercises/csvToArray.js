module.exports.run = function(csv){
/*
	A stringified CSV file will be passed into this function.
	Parse the string so it is an array of objects and return the array.
	The object properties are the header of the csv file, and the very first row of the csv file are the headers.

	Example

	function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') =>
		[
			{FirstName: Dan, LastName: Tran, Age: 29},
			{FirstName: Don, LastName: Tran, Age: 25},
			{FirstName: Jasmine, LastName: Tran, Age: 13},
		]

	Write your code below the comment.
*/
	//change stringified csv into arrays
	const array = csv.split('\n');
	// set header arrays 
	const headers = array[0].split(',');
	const res = [];
	// iterate through the array after header array
	for (let i = 1; i < array.length; i++){
		const obj = {};
		const values = array[i].split(',');

		for (let j = 0; j < headers.length; j++){
			// create obj with header and value
			obj[headers[j]] = values[j];
		}
		//push obj into result array
		res.push(obj)
	}
	return res
};
