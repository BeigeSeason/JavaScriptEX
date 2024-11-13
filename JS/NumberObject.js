// Number 객체: 숫자와 관련된 작업, 자바스크립트는 정수와 실수를 모ㅜㄷ Number로 처리한다.

const x = 10;
const y = 3.14;

console.log(`x : ${typeof x}, y : ${typeof y}`)

// Number.pasdeFloat() : 주어진 문자열을 실수로 변환
console.log(Number.parseFloat("12"));
console.log(Number.parseFloat("12.34"));
console.log(Number.parseFloat("12문자열"));
console.log(Number.parseFloat("12 34 56"));
console.log(Number.parseFloat("문자열12"));

// Number.parseInt() : 주어진 문자열을 정수로 변환
console.log(Number.parseInt("12.34"));