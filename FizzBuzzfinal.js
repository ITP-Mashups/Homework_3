// solution
for (var num = 1; num <= 100; num++) {
  var fB = "";
  if (num % 3 == 0)
    fB += "Fizz";
  if (num % 5 == 0)
    fB += "Buzz";
  console.log(fB || num);
}



// solution
function fizzBuzz() {
for (var num = 1; num <= 100; num++) { 
  var fB = "";
  if (num % 3 == 0)
    console.log( "Fizz");
  if (num % 5 == 0)
    console.log("Buzz");
} 
}