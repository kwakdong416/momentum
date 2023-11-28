const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

if (isNaN(age)) {
  console.log("Please write a number.");
} else {
  console.log("Thank you for your writing your age.");
}

/*
isNan()은 받은 값이 number인지 아닌지 boolean으로 알려준다.
숫자이면 false 숫자가 아니면 true를 반환한다.
*/
