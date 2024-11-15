// ES5(ECMA Script 5) : 자바스크립트의 5번째 버전, 리액트의 핵심 문법
// JOSN객체
// Array 메서드 : 
// forEach() : 모든 요소 순회, 요소 내용 변경 불가
// map() : 배열의 모든 요소를 순회하여 가공된 새 배열을 반환
// filter() : 배열의 모든 요소를 순회하여 조건에 맞는 요소로만 이루어진 새로운 배열 반환
// reduce() : 배열의 모든 요소를 순회하여 누적값을 사용하여 하나의 결과값을 반환
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = nums.reduce((a, b) => a + b, 0); // reduce((누적값, 다음요소) => 연산식, 기본값)
console.log(sum);

// ES6
// let, const
// 화살표 함수
// 템플릿 리터럴
const name = "조니잼";
const msg = `우주비행파티 ${name} 파티 직원들보다 바빠 어예`;
console.log(msg);


// 배열에서 전개 연산자
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const newArr = [...arr1, ...arr2, ...arr3];

console.log(newArr);

// 객체에서의 전개 연산자
const obj1 = {
    name: "김심야",
    age: 29,
    addr: "서울시 강남구 논현동",
    position: "rapper"
}

const modifyMember = { ...obj1, age: 30 }

console.log(modifyMember)