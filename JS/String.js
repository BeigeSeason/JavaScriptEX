const pwd = "12345678";
console.log(pwd.length); // 문자열의 길이 확인

// 특정 문자열의 포함 여부 확인
// include("문자열") : 문자열의 포함 여부를 true, false로 반환
// indexOf("문자열") : 문자열이 시작하는 인덱스를 반환하고 없다면 -1 반환
const email = "test#naver.com";

if (!email.includes("@")) {
    console.log("includes : 올바른 이메일 형식이 아닙니다.")
}

//const email2 = "test#naver.com";

if (email.indexOf("@") == -1) {
    console.log("indexOf : 올바른 이메일 형식이 아닙니다.")
}
console.log("-".repeat(30))
// lastIndexOf() : 찾고자 하는 문자열이 둘 이상 있다면 마지막에 발견된 문자열의 시작인덱스 반환
const email2 = "test@naver.com";

console.log(email2.lastIndexOf("@"));
console.log(email2.lastIndexOf("e"));

console.log("-".repeat(30))
// slice() : 시작위치와 종류 위치를 주면 해당 문자열을 잘라내어 반환, 음수를 사용하면 마지막부터 시작 Like Python
// substring() : 시작위치와 종류 위치를 주면 해당 문자열을 잘라내어 반환, 음수는 0으로 처리
const fruits = "apple, grape, grapefruit";

console.log(fruits.slice(7, 12));
console.log(fruits.substring(7, 12));
console.log(fruits.slice(-18, -12));

console.log("-".repeat(30))
// replace() : 문자열을 지정한 문자열로 변환
const names = "스윙스, 바스코, 씨잼, 천재노창, 기리보이";
const newNames = names.replace("바스코", "빌스택스").replace("천재노창", "그냥노창");
console.log(names);
console.log(newNames);

console.log("-".repeat(30))

const engStr = "Have you ever seen a man like this?";
console.log(engStr);
console.log(engStr.toUpperCase());
console.log(engStr.toLowerCase());
console.log("-".repeat(30))


// 두개의 문자열 합치기
// react에선 변수의 불변성의 원칙을 지향하기 때문에 아래와 같이 let을 쓰고 내용을 바꾸면 안된다.
let str1 = "새꺄";
str1 += "유명하다";
str1 += "왜";
console.log(str1);

const str01 = "생로랑";
const str02 = str01.concat("발");
const str03 = str02.concat(" ", "니면상에");
console.log(str03);
console.log("-".repeat(30))


// trim() : 문자열의 앞 뒤 공백을 제거
const strTrim = "            오 참을성이 없어 아마 너무 참았어   ";
console.log(strTrim);
console.log(strTrim.trim());

// padStart, padEnd(): 문자열 앞/뒤에 지정한 문자를 해당 길이에 도달할 만큼 추가
const fixStr = "!!!";
const padedStr = fixStr.padEnd(10, 0);
const padedStr2 = padedStr.padStart(20, "@@@");
console.log(padedStr);
console.log(padedStr2);

// charAt() : 문자열에서 특정 인덱스에 해당하는 문자 하나를 반환
const okasian = "여전히 몸엔 카모 상어가죽 걸친채로";
console.log(okasian.charAt(5));

// charCodeAt() : 특정 인덱스에 해당하는 문자의 유니코드 값을 반환
console.log(okasian.charCodeAt(5));

// split()
let birthday = "1997-06-12";
let arr2 = birthday.split("-"); // 하이픈(-)을 기준으로 문자열을 분리해서 배열로 
console.log(arr2); // ["1997","06","02"]