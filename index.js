function displayPanel (loops1) {

var content = '';

for (i = 0; i < 7; i++) {
    content = content + '#';
    console.log(content);
	}
}


function displayPanel (loops2){
for (i=1; i<=100; i++){	

	if ((i % 3) ===0)
		console.log("Fizz"); 
	

	else if ((i % 5) ===0)
		console.log("Buzz"); 
	

	else if ((i % 3) && (i % 5) ===0)
		console.log("FizzBuzz"); 
	
	else
		console.log (i);
}
}	 
