let isClicked = false;
let dY = 1;
const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");
const block3 = document.getElementById("block3");
const block4 = document.getElementById("block4");
const pane = document.getElementById("pane");
const navigator = document.getElementById("navigator");
function getMeNumber(a) {
  return Number(a.slice(0, a.indexOf("p")));
}
function isBroke(a) {
  if (a.style.visibility == "hidden")
    return true;
  else
    return false;
}
function isOk(a){
    if(
        getMeNumber(ball.style.left) > getMeNumber(a.style.left) &&
        getMeNumber(ball.style.bottom) >
          getMeNumber(a.style.bottom) -
            getMeNumber(a.style.height) -
            getMeNumber(ball.style.height) &&
        !isBroke(a) &&
        getMeNumber(ball.style.left) <
          getMeNumber(a.style.left) + getMeNumber(a.style.width)
    ){
        return true;
    }
    else
        return false;
    
}
function backBall(a){
    if (
        isOk(a)
      ) {
        a.style.visibility = "hidden";
        dY = -1;
      }
}
function setPosition(a){
    a.style.bottom = `700px`;
    a.style.width = `100px`;
    a.style.height = `20px`;
}
document.addEventListener("mousemove", (e) => {
  navigator.style.left = `${e.clientX - navigator.offsetWidth / 2}px`;
  navigator.style.bottom = "5px";
  setPosition(block1)
  setPosition(block2)
  setPosition(block3)
  setPosition(block4)
  block2.style.left = `150px`
  block3.style.left = `300px`;
  block4.style.left = `450px`
});
const ball = document.getElementById("ball");
function ballMove(e) {
  ball.style.left = `${e.clientX - ball.offsetWidth / 2}px`;
  ball.style.height = `20px`;
}
document.addEventListener("mousemove", ballMove);
document.addEventListener("click", () => {
  document.removeEventListener("mousemove", ballMove);
  let position = +ball.style.top;
  if (!isClicked) {
    setInterval(() => {
      position += dY;
      ball.style.bottom = `${position}px`;
      if (
        getMeNumber(ball.style.bottom) >
        document.documentElement.scrollHeight - 2 * ball.offsetWidth
      ) {
        dY = -1;
      }
      if (ball.style.bottom == navigator.style.bottom) {
        dY = 1;
        ball.style.left = navigator.style.left;
      }
      backBall(block1)
      backBall(block2)
      backBall(block3)
      backBall(block4)
    }, 1);

    isClicked = true;
  }
});
