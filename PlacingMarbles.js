var a = '101';
var inputs = a.split('');
var result = 0;
inputs.forEach((input) => {
  if (input == '1') result++
});
console.log(result);