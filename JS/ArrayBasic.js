// 배열에서 사용할 수 있는 속성과 메서드
// 배열의 메서드는 크데 파괴적 메서드와 비파괴적 메서드가 있다
// 파괴적 메서드 : 배열의 내용을 변경하는 메서드
// 비파괴적 메서드 : 배열의 내용을 변경하지 않는 메서드

const arr = [10, 20, 30, 40, 50];
const furits = ["cherry", "apple", "lime", "grape", "grapefurit", "watermelon", "kiwi"];

// 비파괴적 메서드 사용
arr.forEach(e => {
    console.log(e);
})

// 인덱스 접근
for (i = 0; i < arr.length; i++) {
    arr[i] += 100;
    console.log(arr[i]);
}

for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 이터러블 객체 순회
for (let e of arr) {
    console.log(e);
}

// toString() : 배열 안의 모든 문자열을 모두 결합하여 하나의 문자열로 반환(쉽표로 구분)
console.log(arr.toString())

// join() : 배열 안의 모든 문자열을 모두 결합하여 하나의 문자열로 반환(지정한 문자열로 구분)
console.log(arr.join("#@!"));

// pop() : 마지막 요소를 제거하고 반환
console.log(furits.pop())

// shift() : 첫번째 요소를 제거하고 반환
console.log(furits.shift())

// push() : 배열의 맨 뒤에 새로운 요소를 추가 (반환값은 길이)
furits.push("melon");

console.log(furits.toString())

// unshift() : 배열의 맨 앞에 요소를 추가 (반환값은 길이)
furits.unshift("peach")

console.log(furits.toString())

// concat() : 두개 이상의 배열을 하나의 배열로 결합 (비파괴적)
const arrCar1 = ["Model S", "Model 3", "Model X", "Model Y"];
const arrCar2 = ["Ev 3", "Ev 6", "Ev 9"];
const evCar = arrCar1.concat(arrCar2).concat("GV60");
console.log(evCar);

const evCar2 = [...arrCar1, ...arrCar2, "G80 e"]
console.log(evCar2)

// slice()
const newCar = evCar.slice(0, 4);
console.log(newCar);

// sort() : 정렬 (파괴적)
newCar.sort();
console.log(newCar);

// filter() : 배열에서 특정 조건을 만족하는 배열의 요소만 찾아서 새로운 배열을 생성
const persons = [
    {
        name: "김심야",
        porint: 82,
        city: "서울"
    }, {
        name: "씨잼",
        point: 92,
        city: "제주"
    }, {
        name: "더콰이엇",
        point: 88,
        city: "광명"
    }, {
        name: "창모",
        point: 76,
        city: "남양주"
    }
]

const pass = persons.filter((e) => e.point > 80);
console.log(pass);

// map() : 배열의 각 요소를 변환하고, 그 결과로 변환된 값을 반환하는 메서드
const numbers = [1, 2, 3, 4, 5];
const squreN = numbers.map(e => e * e);
console.log(squreN);




