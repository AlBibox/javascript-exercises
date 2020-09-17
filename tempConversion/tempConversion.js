const ftoc = function(fTemp) {
return parseFloat(((fTemp - 32)*(5/9)).toFixed(1));

}


const ctof = function(cTemp) {
  return parseFloat(((cTemp * (9/5)) + 32).toFixed(1));

}

module.exports = {
  ftoc,
  ctof
}
