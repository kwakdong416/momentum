const title = document.getElementById("title");
console.log(title);
console.dir(title);

/* 
console.log(title); 코드는 콘솔에서
document.getElementById("title");
를 사용한 것과 동일한 결과물을 만들어낸다.

console.dir(title); 코드는 element를
더 자세하게 보여준다. (별 차이는 모르겠다.)

document.getElementsByClassName("title");
class를 이용하는 방법도 있다.
*/

/*
javascript는 html element를 가져오긴 
하지만 html 자체를 그대로 보여주지는 않는다.
javascript에서 html을 표현하는 object를
보여줄 뿐이다.

document는 곧 html 문서를 의미한다.
*/

title.innerText = "I Got You.";

/*
이런 식으로 html 내 element를 변경할 수도 있다.
*/

console.log(title.id);
console.log(title.className);
