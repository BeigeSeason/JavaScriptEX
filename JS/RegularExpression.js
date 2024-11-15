// 정규표현식 : 특정 패턴을 정의해 문자열을 검색, 대체, 추출하는 데 사용

// RegExp 객체 사용 방식
const regex1 = new RegExp("World")

// 리터럴 방식 : 보편적으로 이쪽을 많이 사용
const regex = /World/;

// test() : 해당 문자열에 포함되어 있으면 true 반환
console.log(regex.test("Hello World"));

// exec() : 해당하는 문자열이 처음으로 시작하는 부분을 찾아 매치 객체로 반환, 없다면 null 반환
const regex2 = /가장/;
console.log(regex2.exec("그거 아시나요? 가장 큰 실수는 포기입니다."));

// match() : 문자열에서 패턴에 일치하는 결과를 배열로 반환
const inputText = "010-5006-4146 asdasfdasfasfas 010-5564-8989 sdafffffff 033-765-2020";
const regNum = inputText.match(/\d{3}-\d{3,4}-\d{4}/g);

console.log(regNum);

