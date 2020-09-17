const sumAll = function(a,b) {

    if (typeof a != "number" || typeof b != "number") return "ERROR";
    else{

        let min = Math.min(a, b);
        let max = Math.max(a, b);
        let sum = 0;

        for (i = min; i <= max; i++) {
            sum += i;
        }
        if (sum < 0) return "ERROR";
        else return sum;

    }
    

    

}
console.log(sumAll(10,"5"));

module.exports = sumAll
