let x = 2;
let y = a++;
let z = ++a;

console.log(x);
console.log(y);
console.log(z);

let a = 2 + 3;
let b = 2 * 3;
let c = 7 - 2;
let d = 4 / 2;
let e = '5';

console.log(a, b, c, d);

if (a === c) {
  console.log('a === x');
}
if (a === e) {
  console.log('a === e');
}
if (a == e) {
  console.log('a == x');
}

if (a !== e) {
  console.log('a !== e');
}
if (a != e) {
  console.log('a != e');
}

if (b % d == 0) {
  console.log('나머지 0');
}

if (a === 5 && b === 6) {
  console.log('hi');
}

if (a === 5 && b === 3) {
  console.log('hihi');
}

if (typeof a === 'number') {
  console.log(typeof a);
}
