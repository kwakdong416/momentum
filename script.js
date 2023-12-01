const h1 = document.querySelector("div.hello:first-child h1");

/*
function handleTitleClick() {
  if (h1.style.color === "blue") {
    h1.style.color = "tomato";
  } else {
    h1.style.color = "blue";
  }
}

h1.addEventListener("click", handleTitleClick);

*/

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);

/*
값이 바뀔 필요가 없는 것에는 const를 바뀔 필요가 있는 것에는 let을 사용했다.

이런 식으로 function을 짜는 것이 더 효율적이다.

사실 element style을 js 파일로 변경하는 것은 좋지 않다. 되도록 css 파일을 쓰는 것이 좋다.
*/
