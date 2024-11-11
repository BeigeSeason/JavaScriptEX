

/*
let jumin = prompt("주민번호를 입력 해 주세요", "");
const date1 = new Date();
const date = date1.getFullYear();

let birth = Number(jumin.substring(0, 2))
let gender = Number(jumin.charAt(7));

let sex, age, str;

if (jumin.length == 14 && jumin.charAt(6) == "-" && gender <= 4 && gender >= 1) {
    if (gender == 1 || gender == 2) {
        birth = birth + 1900;
        if (gender == 1) sex = "남성";
        else if (gender == 2) sex = "여성";
    } else if (gender == 3 || gender || 4) {
        birth = birth + 2000;
        if (gender == 3) sex = "남성";
        else if (gender == 4) sex = "여성";
    }
    age = date - birth;
    str = `나이는 ${age}살, 성별은 ${sex} 입니다. `
} else {
    age = "다시 입력 해 주세요.";
    sex = "다시 입력 해 주세요.";

    str = "다시 입력 해 주세요.";
}

const age1 = document.getElementById("age");
const sex1 = document.getElementById("sex");
const text = document.getElementById("text");

age1.textContent = age;
sex1.textContent = sex;
text.textContent = str;

// document.write(str);

console.log(str);
*/
let jumin_1 = null;
while (true) {
    jumin_1 = prompt("주민등록 번호 입력 : ");
    if (jumin_1.length != 14 || jumin_1.indexOf("-") == -1) {
        alert("입력 오류 : 주민등록 번호를 다시 입력하세요.");
    }
    break;
}

const genderCode = jumin_1.charAt(7);

const birthYearPrefix = (genderCode === "1" || genderCode === "2") ? "19" : "20";
const birthYear = Number(birthYearPrefix + jumin_1.substring(0, 2));
const currentYear = new Date().getFullYear();
const age_1 = currentYear - birthYear;

const genderStr = (genderCode === "1" || genderCode === "3") ? "남성" : "여성";

document.write(`<p class='box'> 성별 :${genderStr} <br> 나이 : ${age_1} </p>`);