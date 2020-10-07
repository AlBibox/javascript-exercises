const caesar = function(string, n) {
    n = n%26;

    let coded = "";
    for(let i = 0; i < string.length; i++){
        let code = string.charCodeAt(i);
        if(code >= 97 && code <= 122){
            code += n;
            if(code > 122){
                code = code - 26;
            }else if(code < 97){
                code = code + 26;
            }
        }else if(code >= 65 && code <= 90){
            code += n;
            if(code >90){
                code = code - 26;
            }else if(code < 65){
                code = code + 26;
            }
        }
        coded += String.fromCharCode(code);            
    }return coded;  
}

console.log(caesar("Sono un pazzooooo!", 2));

module.exports = caesar
