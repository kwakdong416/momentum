const h1 = document.querySelector("div.hello:first-child h1");

h1.innerText = "New innerText";

console.log(h1);

h1.style.color = "blue";

function handleTitleClick() {
  console.log("You clicked!");
  h1.style.color = "red";
}

console.dir(h1);

function handleMouseEnter() {
  h1.innerText = "mouse is here!";
}

// 마우스를 타이틀 위에 올려놨을 때

function handleMouseLeave() {
  h1.innerText = "mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
  /* 
  javascript로 가져올 수 있는 body 부분은 backgroundColor가 전부다.
  document.div나 document.title 같은 건 사용할 수 없다.
  다른 element는 querySelector나 getElementById 같은 걸 사용해야 한다.
  */
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS No wifi!");
}

function handleWindowOnline() {
  alert("ALL GOOD!");
}

//title.addEventListener("click", handleTitleClick);
h1.onclick = handleTitleClick;
//title.addEventListener("mouseenter", handleMouseEnter);
h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);

/*
title.onclick = handleMouseEnter;
title.addEventListener(“mouseenter” , handleMouseEnter);

위에 두 코드는 동일하나 addEventListener를 선호하는 이유는
removeEventListener을 통해서 event listener을 제거할수있기 때문이다.
*/

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
/*
windows 또한 object 처럼 javascript에서 기본적으로 제공하는 것이다.\
windows에서 발생한 event이므로 window를 사용하는 것이다. h1에서 발생한
이벤트이면 h1을 사용해야 한다.
*/
