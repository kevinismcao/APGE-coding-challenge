module.exports.run = function(str) {
/*
A lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right.
Return true if all the g's in the given string are happy, otherwise return false.

	Example:
		function("xxggxx") => true
		function("xxgxx") => false

        Write your code below the comment.
*/
	//iterate through the string
	for (let i = 0; i < str.length; i++){
		//if the current index is g and the previous and next index is not g return false
		if (str[i] === "g" && str[i-1] !== "g" && str[i+1] !== "g"){
			return false
		}
	}
	//return true if no single "g" found in the array.
	return true
};
