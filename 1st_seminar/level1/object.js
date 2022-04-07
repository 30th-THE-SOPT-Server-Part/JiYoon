const { cannotHaveAUsernamePasswordPort } = require('whatwg-url');

const sopt = {
  season: 30,
  group: ['YB', 'OB'],
  part: ['서버', '기획', '디자인', '안드로이드', '웹', 'iOS'],
  president: '김규민',
  introduce: function () {
    this.part.map(partName => {
      console.log(`솝트 내 파트는 ${partName} 파트가 있어요!`);
    });
  },
};
console.log(sopt.group);
sopt.introduce();

console.log(sopt.season);

let array = [1, true, 'string'];
console.log(array);

let array2 = [
  {
    name: '남지윤',
    age: 5,
  },
  {
    name: '김소령',
    age: 6,
  },
];
console.log(array2);
console.log(typeof array2);
