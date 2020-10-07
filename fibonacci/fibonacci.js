const fibonacci = function(n) {
    let arr = [1,1];
    if(n <= 0){      
        return "OOPS";
    }else if(n > 2){
        for(let i = 2; i < n; i++){
            arr.push((arr[i-2])+(arr[i-1]));
        }
    }

    
    return arr[n-1];
}

console.log(fibonacci(10));

module.exports = fibonacci
