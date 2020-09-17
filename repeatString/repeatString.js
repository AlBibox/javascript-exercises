const repeatString = function(string, n) {
    let a = "";
    if(n<0) return "ERROR";
    else{
        for (let i = 0; i < n; i++) {
            a += string;

        }
        return a;

    }
    

}

console.log(repeatString("hey",3));

module.exports = repeatString
