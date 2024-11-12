// 함수는 특정 작업을 반복하거나 재사용 할 수 있도록 작성된 코드 블록
// 복잡한 작업을 쉽게 처리할 수 있고 코드의 재사용성을 높여준다.


// 함수 선언과 호출 : function 키워드 사용, 반드시 호출해야 동작, 호이스팅 적용
// 호이스팅 : 함수를 위로 끌어올린다, 함수의 선언 위치와 상관없이 자바스크립트 엔진이 
// 먼저 전체 코드를 한 번 스캔하고 실행컨텍스트에 미리 기록해 놓기 때문에 어디서든 실행 가능

console.log(sum(100, 200));

function sum(a, b) {
    return a + b;
}

// 함수 표현식 : 변수에 함수를 할당해서 사용하는 방식
// 함수는 익명함수와 기명함수로 나누어 진다
// 주로 익명함수로 사용해야 할 때 사용, 호이스팅 적용(X)

const multiply = function (a, b) {
    return a * b;
}

console.log(multiply(100, 200));


// 함수 표현식을 화살표 함수로 만드는 방식(ES6부터 지원)
// 화살표 함수는 함수 표현식을 간결하게 작성할 때 사용하는 방식이다.
// this 바인딩이 함수 선언문과 다르게 동작함
const divide = (a, b) => a / b;

console.log(divide(10, 2));

function TestFunc() {
    this.value = 10;

    // 이 화살표 함수가 정의된 곳의 this를 가리킨다.
    const arrowFunc = () => {
        console.log(this.value);
    }

    // 호출될 때 동적 바인딩이 일어나 호출되는 방식에 따라 this가 가리키는 값이 달라진다.
    const traditionFunc = function () {
        console.log(this.value);
    }

    arrowFunc();

    traditionFunc();
}

new TestFunc();

console.log("-".repeat(20));

// 기본값 할당
function add(a, b = 10, c = 20) {
    console.log("a : " + a);
    return a + b + c;
}

console.log(add());

console.log(add(1, 2));

// 스코프 : 변수나 함수가 유효한 범위, 자바스크립트는 함수 스코프와 블록 스코프 방식으로 나누어진다.

// 함수 스코프 : 함수에서 정의한 블록문만 스코프의 유효 범위로 인식하는 방식

function sum2() {
    let a = 10;

    console.log(`함수내부 : ${a}`)
}

sum2();

// console.log(`함수외부 : ${a}`);

// 블록스코프 : 자바스크립트는 함수 스코프 기반의 언어이지만
// ES6 이후로 let, const키워드가 추가되면서 블록 스코프도 지원
let b = 20;
{
    var c = 30;
    console.log(`코드 블록 내부 : ${b}`);
    console.log(`코드 블록 내부 : ${c}`);
}

console.log(`코드 블록 외부 : ${b}`);
console.log(`코드 블록 외부 : ${c}`);
console.log("-".repeat(20));

// 참조 우선순위 : let, const 키워드는 같은 식별자의 중복 선언이 불가능
/*let d = 10;
let d = 30;
var d = 20;

var p = 10;
var p = 20;*/

let d = 10;
const e = 20;
{
    let d = 20;
    const e = 30;
    console.log(`블록 내부 : ${d}`);
    console.log(`블록 내부 : ${e}`);
}

console.log(`블록 외부 : ${d}`);
console.log(`블록 외부 : ${e}`);
console.log("-".repeat(20));

// 즉시 실행 함수 : 함수를 정의 하자마자 바로 실행하는 함수, 전역변수의 오염을 막기 위함
(function () {
    // 화면 초기화 루틴 수행
    // 통신 모듈 초기화
    initScreen();
    console.log("통신 모듈 초기화.......")
    console.log("키오스크 동작 준비 완료")
})();

function initScreen() {
    console.log("화면 초기화 루틴 수행....");
}

// Callback 함수 : 함수의 인자로 다른 함수를 전달하여 그 함수가 실행될 때 호출되는 함수
// 주로 비동기 처리나 사용자 이벤트 처리에 사용된다.

// 함수를 매개변수로 넘기기

checkAnimal("fox");

function birdHumming() {
    console.log("🐦🦜🐥🦆🦅");
}

function dogBark() {
    console.log("🐶🐶🐶");
}

function foxNinNin() {
    console.log("🦊🐱‍👤🦊");
}

// 일반 함수로 구현하기
function checkAnimal(mod) {
    if (mod === "bird") birdHumming();
    else if (mod === "dog") dogBark();
    else if (mod === "fox") foxNinNin();
    else console.log("🐯🐯🐯");
}


// 콜백 함수로 구현하기
function checkAnimalCallback(mod, firstAction, secondAction, thirdAction) {
    if (mod === "bird") firstAction();
    else if (mod === "dog") secondAction();
    else if (mod === "fox") thirdAction();
    else console.log("🐯🐯🐯")
}

checkAnimalCallback("bird", () => { console.log("🦅🦅🦅🦅🦅🦅") }, dogBark, foxNinNin);
console.log("-".repeat(20));
// 타이머 설정과 Callback 함수
const buyToy = (item, price, quan, callback) => {
    console.log(`아이가 ${item} 장난감을 ${quan}개 골라서 엄마에게 가져갔습니다.`);
    setTimeout(() => {
        console.log("계산이 필요합니다.");
        let total = price * quan;
        callback(total);
    }, 2000);
}

const pay = (total) => {
    console.log(`지불할 금액은 ${total}원 입니다.`);
}

buyToy("공룡장난감", 3000, 2, pay);
