'use strict';
var a = `3\n8 12 40`
var nums = a.split('\n')[1].split(' ').map((n) => Number(n));
var count = 0;
console.log(nums);
while (nums.every((n) => (n % 2) === 0)) {
  count++;
  nums = nums.map((n) => n / 2);
};

console.log(count);