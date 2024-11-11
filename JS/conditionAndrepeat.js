// 자바스크립트의 조건문은 if, if ~ else, if ~ else if, switch ~ case
// 반복문은 while, do ~ while, for, for ~ in, for ~ of
// for ~ in : 객체 반복
// for ~ of : 이터러블 객체 순회
// 주민등록번호를 입력받아 성별, 나이, 출력하기 (웹에 출력하기)
// 문자열을 자르는 함수 jumin.substring(0,2) : 문자열에서 0번째부터 2번 인덱스 미만
// 문자열에서 해당 인덱스의 문자를 추출 jumin.charAt(5) 5번 인덱스의 문자 추출
// const date = new Date();
// date.getFullYear();
/*
let num = new Date().getDay(); // 주중 몇번째 요일인지를 의미함
let day = null;

switch (num) {
    case 0:
        day = "일요일";
        break;
    case 1:
        day = "월요일";
        break;
    case 2:
        day = "화요일";
        break;
    case 3:
        day = "수요일";
        break;
    case 4:
        day = "목요일";
        break;
    case 5:
        day = "금요일";
        break;
    case 6:
        day = "토요일";
        break;

    default:
        console.log("잘못된 요일 입니다.")
}

console.log(`오늘은 ${day} 입니다.`);*/



// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }

console.log("end");

const brands = ["애플", "구글", "엔비디아", "테슬라", "현대", "기아"];

for (let i = 0; i < brands.length; i++) {
    console.log(brands[i]);

}
console.log("----------")
// for ~ of : 이터러블 객체 반복 순회
for (let e of brands) {
    console.log(e);
}


// for ~ in : 객체의 속성을 반복
const person = {
    name: "김심야",
    age: 31,
    addr: "서울시 강남구 논현동"
}

console.log("----------")
for (const key in person) {
    console.log(person[key]);
}
