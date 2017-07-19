// PROBLEM 1 
var pyramid = function(base){
	var result1  = '';
	for (var row = "#"; row.length <= base; row += "#"){
		result1 += row + '<br />';
	}
	document.getElementById('problemOne').innerHTML = result1;
};

pyramid(150);

// PROBLEM 2
var fizzbuzzer = function(number){
	var result2  = '';
	for (var i = 1; i <= number; i++){
		if (i%3 === 0 && i%5 === 0 ){
			result2 += 'fizzbuzz'+ '<br />';
		}
		if (i%3 === 0){
			result2 += 'fizz'+ '<br />';
		}
		if (i%5 === 0){
			result2 += 'buzz'+ '<br />';
		}
		else {
			result2 += i + '<br />';
		}
	}
	document.getElementById('problemTwo').innerHTML = result2;
};

fizzbuzzer(300);


