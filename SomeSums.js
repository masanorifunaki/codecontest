var a = `20\n2\n5`;

var input = a.split('\n').map((n) => {
  return parseInt(n, 10);
});
// console.log(input);
var N = input[0];
var A = input[1];
var B = input[2];
var totalSum = 0;

for (var i = 0; i <= N; i++) {
  var tmpSum = 0;
  var tmpStr = i.toString();
  // console.log(tmpStr);
  var len = tmpStr.length;
  // console.log(len);
  for (var j = 0; j < len; j++) {
    tmpSum += parseInt(tmpStr[j], 10);
  }
  totalSum += ((A <= tmpSum && tmpSum <= B) ? i : 0);
}

console.log(totalSum);