const jsonData = `
[
{
"name": "안유진",
"age": 20,
"isStudent": false,
"courses": ["음악", "댄스", "연기"],
"address": {
"city": "서울",
"zipcode": "12345"
}
},
{
"name": "가을",
"age": 20,
"isStudent": false,
"courses": ["음악", "댄스", "연기"],
"address": {
"city": "서울",
"zipcode": "12345"
}
},
{
"name": "레이",
"age": 19,
"isStudent": true,
"courses": ["음악", "일본어", "연기"],
"address": {
"city": "서울",
"zipcode": "12345"
}
}
]
`;


// JSON을 JavaScript 객체로 변환 (역직렬화)
const jsonObj = JSON.parse(jsonData);
console.log("역직렬화된 데이터 : ", jsonObj);

const container = document.getElementById("container");

const htmlContent = jsonObj.map((person) => `
    <div class="person"> 
    <h2>${person.name}</h2>

    <p>나이 : ${person.age}</p>
    <p>학생 여부 : ${person.isStudent ? "예" : "아니오"}</p>
    <p>과목 : ${person.courses.join(", ")}</p>
    <p>주소 : ${person.address.city}</p>
    <p>우편번호 : ${person.address.zipcode} </p>
    </div>
    `).join("");

container.innerHTML = htmlContent;