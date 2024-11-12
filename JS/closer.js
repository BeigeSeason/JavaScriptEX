// 클로저 : 함수가 해당 함수의 스코프 외부에 있는 변수에 접근할 수 있는 메커니즘
function Counter() {
    let count = 0;

    return {
        imcrement: function () {
            count++;
            console.log(count);
        },

        decrement: function () {
            count--;
            console.log(count);
        }
    };
}

const myCount = Counter();

myCount.imcrement();
myCount.imcrement();

myCount.decrement();

class Counter {
    constructor() { // 생성자
        this.count = 0;
    }

    increment() {
        this.count++;
        console.log(this.count);
    }

    decrement() {
        this.count--;
        console.log(this.count);
    }
}


const counter = new Counter();

counter.increment();
counter.decrement();
counter.increment();

