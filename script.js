const amIFat = true;
console.log(amIFat);
/* 
boolean 표현방식은 true와 fasle로만 대상을 표현한다.
true와 false에는 ''를  사욜하지 않는다.
사용자가 로그인했는 지를 판단하거나 할 때 유용하다.
*/

const amINull = null;
console.log(amINull);

/*
null이라는 값도 존재하는데 아무런 값이 존재하지 않음을 의미한다.
null과 false 는 다른 것이므로 헷갈리면 안 된다. false는 값이 존재하는 것이다.
null은 자연적으로 발생하지 않고 우리가 값이 없다는 걸 확실히 할 때만 사용한다.
*/

let something;
console.log(something);

something = "I got something.";
console.log(something, amINull);

/*
변수를 선언한 후 값을 대입하지 않으면 undefined 즉 정의되지 않았다고 뜬다.
true , false , null , undefined 모두 문자가 아니라 타입일 뿐이다.
*/
