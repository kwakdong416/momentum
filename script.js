const title = document.querySelector("div.hello:first-child h1");

title.innerText = "New innerText";

console.log(title);

/*
querySelectorAll을 사용하면 xx.xxx 식의 사용을 할 수 없기 떄문에 
querySelector을 사용했다.  :first-child를 적용했기 때문에
Grab me! 1만 New innerText로 innerText가 바뀐다.
*/

title.style.color = "blue";

/*
object 내 property를 변경할 수 있는 경우가 많지만 아닌 경우도 많다.
콘솔에 가서 h1을 열어보면 h1에 대한 여러가지 설정을 볼 수 있는데
이것들 하나하나가 전부 object이다. 위 코드의 경우 style 관련 설정 중
color를 변경해 준 것이다.
*/

function handleTitleClick() {
  console.log("You clicked!");
  title.style.color = "red";
}

title.addEventListener("click", handleTitleClick);

/*
addEventListener를 이용해 특정 독장 수행시 함수를 실행시킨다.
*/
