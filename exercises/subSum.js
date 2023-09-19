
module.exports.run = function(x, y) {
/*
	You are given a 2D array. Using the x and y co-ordinates, find the sum of all the numbers from (0, 0) to (x, y)

	Example:

	-1  1  5        function(1, 1) => 12
	 9  3  7		function(1, 0) => 0
	 2  8  4		function(0, 1) => 8

	 Write your code below the comment.
*/
const twoDArray = [[0,  4,  2,  1],
		   [3, -1,  1,  0],
		   [0,  0,  2,  3],
		   [1,  3, -3,  0]];

// According to example and test data, I assume x is represent column and y is representing row
let sum = 0;
// iterate through each coordinates that row is less or equal to y and col is less or equal to x
for(let i = 0; i <= y; i++){
	for(let j = 0; j <= x; j++){
		//add sum to all matched numbers with in the x, y coordinates		
		sum += twoDArray[i][j];
	}
}
return sum;
}



