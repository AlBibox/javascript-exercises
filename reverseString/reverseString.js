const reverseString = function(string) {
    let a = [];
    let b = string.split("");

    for(let i=0; i<b.length;i++){

        a.unshift(b[i]);   

    }
    return a.join("");
}



module.exports = reverseString
