// 날짜와 시간을 다루는 Date 객체
const date = new Date();
console.log(date); // 국제표준시

console.log(date.toLocaleString()) // 현재 지역 날짜와 시간
console.log(date.toLocaleTimeString()) // 현지 시간

/*const date1 = new Date(2024, 11, 27) // 인덱스 개념(년, 월, 일 모두 0부터 시작)
console.log(date1)*/

const date2 = new Date("2024/12/25/09:00:00");
console.log(date2.toLocaleString());

const myDate = new Date();
console.log(myDate.getFullYear()); // 현재 연도 출력
console.log(myDate.getMonth()); // 현재 월 출력
console.log(myDate.getDate()); // 현재 날짜 출력
console.log(myDate.getDay()); // 현재 요일 출력
console.log(myDate.getHours()); // 현재 시간 출력
console.log(myDate.getMinutes()); // 현재 분 출력
console.log(myDate.getSeconds()); // 현재 초 출력
console.log(myDate.getTime()); // 1970년 1월 1일 자정부터 경과한 시간 출력

