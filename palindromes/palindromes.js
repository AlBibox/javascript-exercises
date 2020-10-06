const palindromes = function(string) {
    let a = (string.toLowerCase()).replace(/[^a-zA-Z0-9]/g, '');
    let arr = a.split("");
    let invArr = [];
    arr.map(a => {invArr.unshift(a)});
    let b = invArr.join("");
    const isPalindrome = a == b ? true : false;
    return isPalindrome;
    
    
    
}

module.exports = palindromes
