let name = '남지윤';
console.log(typeof name);

let age = 18;
console.log(typeof age);

let server = true;

console.log('안녕하세요 제 이름은 ' + name + '입니다. 제 나이는 ' + age + '살 입니다.');
console.log(`안녕하세요 제 이름은 ${name}입니다. 제 나이는 ${age}살 입니다.`);


console.log(typeof null);
console.log(typeof undefined);

let arr = ["안녕", 1, "나는", 2, true];


//map : 새로운 배열 만들 때 유용
let num = [1, 2, 3, 4];
const numArr = num.map(x => x * 2);

console.log(numArr);

numArr.map(x => {
    console.log(x);
})


for (const x of numArr) {
    console.log(x);
}