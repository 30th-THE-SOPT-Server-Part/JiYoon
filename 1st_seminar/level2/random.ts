//import { Member } from "./interfaces/IMember"
import { Dinner } from "./interfaces/IDinner"
// 과제 조건
// 1. Member, Dinner interface 만들고 타입 지정하기
// 2. organize 내부 로직 채우기

const dinner: Dinner = {
    member: [
        {
            name: '채정아',
            group: 'ob'
        },
        {
            name: '김동재',
            group: 'yb'
        },
        {
            name: '강민재',
            group: 'yb'
        },
        {
            name: '김루희',
            group: 'ob'
        },
        {
            name: '박진수',
            group: 'ob'
        }
    ],
    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        return array;
    },
    organize(array) {
        const members = this.shuffle(array);

        const ob = (Object)(members.find(x => x.group == 'ob'));
        const yb = (Object)(members.find(x => x.group == 'yb'));
        
        const dinnerMember: string[] = [ob.name, yb.name];
        console.log(`오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`);
    }
};

dinner.organize(dinner.member);