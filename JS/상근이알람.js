// 시간과 분을 입력하면 45분 일찍 알람이 설정되도록 변경
// 시간은 24시간제, 00:30 -> 23:45
// parseInt() : 해당값을 정수로 반환, Math.floor를 사용하여도 동일한 효과

let inHour, inMinute, time, outHour, outMinute;

inHour = prompt("기상 시간을 입력 해 주세요 : ", "");
inMinute = prompt("기상 분을 입력 해 주세요 : ", "")

time = Number(inHour) * 60 + Number(inMinute) - 45;

if (time < 0) {
    time = time + 1440;
}

if (parseInt(time / 60) >= 24) {
    outHour = parseInt(time / 60) - 24;
} else {
    outHour = parseInt(time / 60)
}

outMinute = time % 60;

document.write("기상 시간은 " + +inHour + ":" + inMinute + "<br>");
document.write("알람 설정 시간은 " + `${outHour} : ${outMinute}`);