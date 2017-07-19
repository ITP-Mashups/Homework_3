//fizzbuzz attempts



// cannot figure out how to make this a function; receiving undefined
function fizzBuzz() {
	for (var num = 1; num <= 100; num++) 
  var fB = "";
  if (num % 3 == 0)
    return "Fizz";
  if (num % 5 == 0)
    return "Buzz";
  fizzBuzz();

// to print all numbers btw 1 and 100
for (var number = 1; number <= 100; number = number + 1)
  console.log(number);

// to print "Fizz" instead of number for numbers divisible by 3
for (var number = 1; number <= 100; number = number + 1) {
	var output = "";
	if (number % 3 == 0)
		output += "Fizz";
	if (number % 5 == 0)
		output += "Buzz";
	console.log(output || number);
}





// solution
for (var num = 1; num <= 100; num++) {
  var fB = "";
  if (num % 3 == 0)
    fB += "Fizz";
  if (num % 5 == 0)
    fB += "Buzz";
  console.log(fB || num);
}



}

function fizzBuzz() {
  var fB = "";
  if (num % 3 == 0)
    fB += "Fizz";
  if (num % 5 == 0)
    fB += "Buzz";
  console.log(fB || num);
}

//was using previous function as model. wasn't sure whether to do a for loop, if loop, if you could nest them etc. took some experimenting and a lot of youtube tutorials
var hash = "#";
function addHash () {
	for (var hash = "#"; hash.length < 8; hash += "#")
	console.log(hash);
	} 
addHash();
