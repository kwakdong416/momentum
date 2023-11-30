const title = document.querySelector("div.hello:first-child h1");

title.innerText = "New innerText";

console.log(title);

title.style.color = "blue";

function handleTitleClick() {
  console.log("You clicked!");
  title.style.color = "red";
}

title.addEventListener("click", handleTitleClick);

console.dir(title);

/*
dir을 사용해 title이 사용할 수 있는 property를 확인할 수 있다.
앞에 on이 붙는 것들이 event에 관련된 것들이다. on을 빼고 쓰면 된다.
예를 들어 onclick이면 click이라고만 쓰면 된다.
*/

function handleMouseEnter() {
  title.innerText = "mouse is here!";
}

title.addEventListener("mouseenter", handleMouseEnter);

// 마우스를 타이틀 위에 올려놨을 때

function handleMouseLeave() {
  title.innerText = "mouse is gone!";
}

title.addEventListener("mouseleave", handleMouseLeave);

// 마우스가 h1을 벗어났을 때

/*

h1 html element mdn

https://www.google.com/search?q=h1+html+element+mdn&oq=h1+html+element+mdn&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzcyOGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8

에서 다양한 event에 대해 알아볼 수 있다.

style 변화는 사실 javascript 보단 css를 활용하는 것이 낫다.

*/
