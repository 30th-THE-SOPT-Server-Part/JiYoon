let strName: string = '남지윤';
let grade: number = 4;
let isDeleted: boolean = false;

const sum = (x: number, y: number) => {
    return x * y;
}

const numArray: number[] = [1, 2, 3, 4, 5];
const numArray2: Array<number> = [1, 2, 3, 4];

const strArray: string[] = ["hi", "hello"];
const strArray2: Array<string> = ["hi2", "hello2"];

//원시 타입은 할당 불가능
const obj: object = {

}
//모든 타입 할당 가능
const obj2: Object = {
  
}

const f1 = (obj: object): void => {
    console.log(obj);
}
const f2 = (obj: Object): void => {
    console.log(obj);
}
f2([1, 2, 3, 4]);
f2('hihi');

f1([1, 2, 3, 4]);
//f1('hihi');


const div = (x: number, y: number): number => {
    return x / y;
}
const div2 = (x: number, y: number): number[] => {
    return [x / y];
}

let p: null = null;
let u: undefined = undefined;

//타입 단언
let anyName: any = '남지윤';
let anyLength: number = anyName.length;
let anyLength2: number = (<string>anyName).length;

let asName: any = '서버';
let asLength: number = (asName as string).length;

const unknown: any = {
    name: '채정아',
    age: 18,
    organization: 'SOPT',
    completion: [28, 29]
}