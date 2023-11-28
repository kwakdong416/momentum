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
} else if (age === 100) {
  console.log("Wow you are wise.");
} else if (age > 80) {
  console.log("You can do whatever you want.");
}
/*
else if 는 여러개가 동시에 실행될 수 없고 그 중 하나를 골라야 한다.
&& , || 말고도 === 과 !==도 있다. , 이 recap만 특별히 파일 정리함
*/
