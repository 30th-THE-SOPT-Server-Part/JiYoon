import { Dinner } from './interfaces/IDinner';
import { Member } from './interfaces/IMember';

// 과제 조건
// 1. Member, Dinner interface 만들고 타입 지정하기
// 2. organize 내부 로직 채우기

const dinner: Dinner = {
  member: [
    {
      name: '채정아',
      group: 'ob',
    },
    {
      name: '김동재',
      group: 'yb',
    },
    {
      name: '강민재',
      group: 'yb',
    },
    {
      name: '김루희',
      group: 'ob',
    },
    {
      name: '박진수',
      group: 'ob',
    },
  ],
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
  },
  organize(array) {
    this.shuffle(array);

    // const ob = Object(array.find(x => x.group == 'ob'));
    // const yb = Object(array.find(x => x.group == 'yb'));

    // const dinnerMember: string[] = [ob.name, yb.name];
    // console.log(`오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`);
    const ob = array.find(x => x.group == 'ob');
    const yb = array.find(x => x.group == 'yb');

    const dinnerMember = [ob?.name, yb?.name]; //옵셔널 체이닝 사용
    console.log(`오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`);
  },
};

dinner.organize(dinner.member);
