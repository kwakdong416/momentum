const title = document.getElementById("title");

const hellos = document.getElementsByClassName("hello");

console.log(hellos);

/*
콘솔에서 확인해보면 5개의 <h1> elements로 구성된 배열이 나온다.
여러개의 elements를 동시에 가져와야 할 때는 getElementsByClassName
를 사용하는 것이 좋다.다만 xx.xxx 식의 사용은 할 수 없는데 이는
여러개로 구성된 배열이기 때문이다.
*/

const title2 = document.getElementsByTagName("h1");

console.log(title2);
/*
이렇게 하면 모든 <h1> 태그를 가진 요소를 가져오므로 우리가 원하는 결과가 아니다.
*/

const title3 = document.querySelector(".hello2 h1");

/* const title3 = document.querySelector(".hello2 h1:first-child");
    굳이 first-child를 써주지 않아도 첫번째 element 만을 가져온다.
*/
const title4 = document.querySelectorAll(".hello2 h1");

console.log(title3);
console.log(title4);

/*
querySelector는 css처럼 element를 검색할 수 있게 해준다.
.hello2 h1 는 hello2라는 class명을 사용하는 태그 내의
<h1> 태그를 가져오라는 의미이다.

div h1도 같은 결과를 만들어낼 수 있다.

class는 .xx , id는 #xx로 구성된다. 
*/

/*
uerySelector는 .hello2 h1 중 첫번째 element만 가져올 수 있다.
반면 querySelectorAll는 모든 배열 내 element를 가져올 수 있다.
*/

const title5 = document.querySelector(".hello2 h1");

title5.innerText = "Hello World!";

console.log(title5);
