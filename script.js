const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number.");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink.");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise.");
} else if (age > 80) {
  console.log("You can do whatever you want.");
} else {
  console.log("You can't drink.");
}

/*
위 코드에서 isNaN이 flase 이면 else if 가 실행되고 else if 도 false이면 else가 실행된다.
else는 옵션일 뿐 필수적으로 적을 필요는 없다.
*/
