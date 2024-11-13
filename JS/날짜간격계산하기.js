const date = new Date();
const dDay = new Date("2025/03/24/00:00:00");

const remainTime = dDay.getTime() - date.getTime();

document.getElementById("d-day").innerText = parseInt(remainTime / (1000 * 60 * 60 * 24));
document.getElementById("hour").innerText = parseInt(remainTime / (1000 * 60 * 60)) % 24;


console.log(parseInt(remainTime / (1000 * 60 * 60)) % 24);


console.log(parseInt(remainTime / (1000 * 60 * 60 * 24)));

