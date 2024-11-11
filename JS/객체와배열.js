// 자바 스크립트는 원시 타입을 제외하면 모든 데이터 타입이 객체이다.
// 객체 타입의 자료형에는 배열, 객체 리터럴, 함수 등이 있음
// 배열 : 복수의 데이터를 정의할 수 있는 자료형, 인덱스 기반
let score = [80, 99, 77, 65];
console.log(score[1]); // 인덱스를 기반으로 값을 찾을 수 있다.

// js의 배열은 데이터 타입이 달라도 된다.
let arr = ["김심야", "XXX", 21, true, [87, "씨잼", 0.01]];

for (i = 0; i < 5; i++) {
    console.log(arr[i]);
}

console.log(arr[4][1]);

// 객체 리터럴(오브젝트) : 객체를 정의하는 가장 간단한 방법, 중괄호 사용{}

let memberInfo = {
    name: "김심야",
    age: 31,
    addr: "서울특별시 강남구 논현동",
    score: [99, 88, 91],
    getInfo: function () {
        const avg = (this.score[0] + this.score[1] + this.score[2]) / 3;
        return `이름 : ${this.name}, 나이 : ${this.age}, 주소:${this.addr}, 성적:${this.score}, 평균:${avg}`
    }
}


console.log(memberInfo.getInfo());


// 비교연산자 : 자바 스크립트에서는 동등연산자와 일치 연산자가 있다.
console.log(1 == "1"); // true, 동등 연산자 : 값이 같은지 확인
console.log(1 === "1"); // false, 일치 연산자 : 값과 타입이 같은지 확인

console.log(1 != "1");
console.log(1 !== "1");

// 형변환 : 묵시적 형변환, 명시적 형변환
let num1 = 10 + "10"; // 숫자와 문자열을 결합하면 문자열로 자동 형변환
console.log(num1);

let num2 = 10 + Number("10"); // 명시적 형 변환
console.log(num2);

let num3 = 10 + String(10); // 명시적 형 변환과 묵시적 형 변환이 같이 일어남

console.log(num3);

