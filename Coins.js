// 'use strict';
var a = `2\n2\n2\n100`;
var input = a.split('\n').map((n) => {
  return parseInt(n);
});
var A = input[0];
var B = input[1];
var C = input[2];
var X = input[3];
var count = 0;
for (i = 0; i <= A; i++) {
  for (j = 0; j <= B; j++) {
    for (k = 0; k <= C; k++) {
      var totall = 500 * i + 100 * j + 50 * k;
      totall === X ? count++ : '';
    }
  }
}
console.log(count);