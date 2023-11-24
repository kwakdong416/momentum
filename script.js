const a = 10;
const b = 7;
let myName1 = " Nico";
let myName2 = " Nico";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello" + myName);

myName1 = " Nicolas";
myName2 = " Nicolas";
console.log("your name is" + myName1);
console.log("your name is" + myName1);

/* 
const 말고 let으로도 변수 선언이 가능하다. const는 상수라 값을 변경할 수 없지만
let은 값을 변경하는 것이 가능하다. const  값을 변경하려고 하면 오류가 난다.
이를 통해 코드를 작성한 사람의 의도를 파악하는 것이 가능하기 떄문에 유용하다.
선언할 때만 let이나 const를 사용하는 거지 값을 변경할 떄는 쓰지 않는다.  

javascript에 처음부터 const와 let 이 있었던 것은 아니다. 원레 var만 존재했었다.
var는 원한다면 어디서든 변수를 업데이트 할 수 있었기 때문에 실수로 변수를 업데이트 해도
언어가 문제를 알려주지 않는다. 그래서 최근엔 var를 사용하지 않는 추세이다.
*/
