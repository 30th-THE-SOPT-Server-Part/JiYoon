//함수 선언식
function menu(dinner) {
    return `오늘 메뉴는 ${dinner} 입니다.`;
}
const str = menu('삼겹살');
console.log(str);


//함수 표현식 aka.화살표 함수
const menu2 = (dinner) => {
    return `오늘 메뉴는 ${dinner} 입니다.`;
}
const str2 = menu('곱창');
console.log(str);



const func = (num) => {
    return num * num;
}
const multiple = (func, num) => {
    console.log(func(num));
}
multiple(func, 3);
