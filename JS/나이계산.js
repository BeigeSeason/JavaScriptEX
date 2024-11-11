const currentYear = new Date().getFullYear(); // 현재 년도 가져오기, 값 변경이 없으므로 const선언
let birthYear;
let age;

// prompt() 함수는 사용자에게 입력창을 띄워 입력할 수 있게 끔 한다. 문자열로 입력됨
birthYear = prompt("태어난 년도는 (YYYY)? ", "");
age = currentYear - birthYear;

// 웹화면에 출력
document.write(currentYear + "년 현재<br>");
document.write(birthYear + "년에 태어난 사람은 <b>" + age + "</b>세 입니다.");