// 자바스크립트에선 원시타입을 제외한 모든 데이터는 객체 타입이다.
// 객체는 중괄호를 사용하여 만들고, 속성과 값으로 구성되어있다.
// 객체는 객체 리터럴을 사용하여 생성한다.
const person = {
    name: "김심야",
    age: "29",
    addr: "서울시 송파구 잠실1동",
    job: "아티스트",

    info: function () {
        return `이름 :${this.name}, 나이:${this.age}, 주소:${this.addr}, 직업:${this.job}`
    }
};

console.log(person.name);
console.log(person["age"]);
console.log(person);

console.log(person.info());

const profile = [
    {
        name: "김심야",
        age: 29,
        history:
            [
                {
                    date: "2016-07-09",
                    album: "KYOMI"
                },
                {
                    date: "2017-11-28",
                    album: "Moonshine"
                }]


    }, {
        name: "류성민",
        age: 31,
        history: [{
            date: "2019-05-16",
            album: "KEUNG"
        },
        {
            date: "2022-03-03",
            album: "Ghenn"
        }]
    }, {}, {}
];

console.log('-'.repeat(20));

// 객체 속성 동적 추가하기
// 객체 속성에 키로 접근해 값을 재할당하면 기존 속성값을 변경할 수 있음
// 키가 없는 경우, 키와 값으로 구성된 새로운 속성이 객체로 추가

const carInfo = {};
carInfo.name = "Model X";
carInfo.year = "2025";
carInfo.maxSpeed = "250km/h";

delete carInfo.maxSpeed;

console.log(carInfo);
console.log('함수를 객체처럼 사용' + '-'.repeat(20));
// 생성자 : 자바스크립트에선 클래스 대신 생성자를 통해 함수를 객체로 만들 수 있다.
function Person(name, age, album) {
    this.name = name;
    this.age = age;
    this.album = album;
    this.info = function () {
        return `이름: ${this.name}, 나이: ${this.age}, 앨범: ${this.album}`;
    }
}

const person1 = new Person("김심야", 29, "KYOMI");
const person2 = new Person("씨잼", 31, "킁");
const person3 = new Person("키드밀리", 31, "L I F E");

console.log(person1.info());
console.log(person2.info());
console.log(person3.info());

console.log('클래스 사용' + '-'.repeat(20));
// 클래스 방식
class Person {
    constructor(name, age, album) {
        this.name = name;
        this.age = age;
        this.album = album;
    }

    info() {
        return `이름: ${this.name}, 나이: ${this.age}, 앨범: ${this.album}`;
    }
}


const person4 = new Person("김심야", 29, "KYOMI");
const person5 = new Person("씨잼", 31, "킁");
const person6 = new Person("키드밀리", 31, "L I F E");

console.log(person4.info());
console.log(person5.info());
console.log(person6.info());