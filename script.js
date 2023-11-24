const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

let daysOfWeek = mon + tue + wed + thu + fri + sat;

console.log(daysOfWeek);

/*
위와 같은 방식은 번잡한 데다가 쓸모도 없다.
*/

daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
const nonsense = [1, 2, "hello", null, true, false];
console.log(daysOfWeek, nonsense);

console.log(daysOfWeek[4]);
daysOfWeek.push("holiay");
console.log(daysOfWeek);

/*
이런 식으로 배열을 사용하면 훨씬 간편하고 이해하기도 사용하기도 더 쉽다.
배열에는 null , true , false 등의 타입들도 들어갈 수 있다.
배열에서 특정 순서의 값도 가져올 수 있어 여러모러 편리하다.
push를 이용해 배열에 요소를 추가할 수 있다.
*/

const toBuy = ["porato", "tomato", "banana", "apple"];
toBuy.push("kiwi");
console.log(toBuy);
