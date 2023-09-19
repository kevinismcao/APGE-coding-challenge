module.exports.run = function(a, b, c) {
/*
Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

Examples:
	function(1, 2, 3) => 6
	function(3, 2, 3) => 2
	function(3, 3, 3) => 0

Write your code below the comment.

*/
// hash map for num appear as the arguments
let sum = 0;
let count = {};
for (let num of arguments){
	if (count[num]){
		count[num]++
	}
	else{
		count[num] = 1;
	}
}
// if the count of the number is 1, sum will add the number. this method will be better for large amount of arguments.
for (let key in count){
	if (count[key] === 1){
		sum += parseInt(key);
	}
}
return sum;
// for simple 3 int values we could also try this way which is checking if each number equals to each other:
	// return a + b + c - +(a === b) * 2 * a - +(b === c) * 2 * b - +(a === c) * a * 2 + +(a===b && b===c) * 3 * a
};
