interface ServerPart {
  name: string;
  age: number;
  group: string;
  mbti: string[];
  grade?: number;
}

const serverPart: ServerPart = {
  name: '김소령',
  age: 5,
  group: 'YB',
  mbti: ['ESTJ', 'ENFJ'],
};

const serverMembers: ServerPart[] = [
  {
    name: '김소령',
    age: 5,
    group: 'YB',
    mbti: ['ESTJ', 'ENFJ'],
  },
  {
    name: '남지윤',
    age: 10,
    group: 'OB',
    mbti: ['ESTJ', 'ENFJ'],
    grade: 4,
  },
];

console.log(serverPart);
