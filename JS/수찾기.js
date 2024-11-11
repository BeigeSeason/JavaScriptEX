// 3개의 수를 입력받아 가장 큰 수와 작은수를 화면에 출력하기
// prompt로 입력받은 값은 문자열이므로 숫자로 변경하기 위해선 Number() 함수로 형을 바꿔주어야 함
let n1, n2, n3, max, min;

n1 = Number(prompt("수를 입력하세요. : ", ""));
n2 = Number(prompt("수를 입력하세요. : ", ""));
n3 = Number(prompt("수를 입력하세요. : ", ""));

max = Math.max(n1, n2, n3);
min = Math.min(n1, n2, n3);

document.write("가장 큰 수는 "+max+", 가장 작은 수는 "+min+"입니다.");

