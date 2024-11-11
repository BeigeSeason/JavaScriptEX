// prompt로 연속해서 햄버거 3개 가격과 음료 2개의 가격을 입력 받음
// 햄버거 3개 중 가장 싼 가격 + 음료중 가장 싼 가격 -50원
// 결과를 웹 화면에 출력
// 번외 input태그로 변경

let burgerInput = prompt("햄버거 3개의 가격을 입력하세요.", "");
let drinkInput = prompt("음료수 2개의 가격을 입력하세요.", "");

let burgerArr = burgerInput.split(" ");
let drinkArr = drinkInput.split(" ");

let minB, minD, totalPrice;

minB = Math.min(...burgerArr);
minD = Math.min(...drinkArr);

totalPrice = Math.min(...burgerArr) + Math.min(...drinkArr) - 50;

document.write(`<p class='box'> 가장 저렴한 세트의 가격은 ${totalPrice}원 입니다.</p>`)