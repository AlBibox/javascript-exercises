function add (...args) {
	let result = 0;
	args.map(a => result += a); 
	return result;
}




function subtract (a, ...args) {	
	args.map(b => a -= b);
	return a;
	
}

function sum (arg) {
	let result = 0;
	arg.map(a => result += a);
	return result;
	
}



function multiply (args) {
	let result = 1;
	args.map(a => result *= a);
	return result;	
}



function power(a,b) {
	let c = a;
	for(let i = 1; i<b; i++){
		c *= a;
	}
	return c;
}



function factorial(x) {
	 
	let a = (x == 0 ? 1 : x);
	for(let i = 1; i<x; i++ ){
		a *= i;
	}
	return a;
}

console.log(factorial(5));


module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}