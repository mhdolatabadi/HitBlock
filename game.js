
let isClicked = false;
let dY = 1;
const block1 = document.getElementById("block1")
const pane = document.getElementById("pane")
const navigator = document.getElementById("navigator");
document.addEventListener("mousemove", (e) => {
  navigator.style.left = `${e.clientX - navigator.offsetWidth / 2}px`;
  navigator.style.bottom = '5px'
});
const ball = document.getElementById("ball");
function ballMove(e) {
  ball.style.left = `${e.clientX - ball.offsetWidth / 2}px`;
}
document.addEventListener("mousemove", ballMove);
document.addEventListener("click", () => {
  document.removeEventListener("mousemove", ballMove);
  let position = +(ball.style.top);
  if (!isClicked) {
    
    setInterval(() => {  
      position += dY
      ball.style.bottom = `${position}px`;
      if(Number(ball.style.bottom.slice(0, ball.style.bottom.indexOf('p'))) > (document.documentElement.scrollHeight - (2 * ball.offsetWidth))){
          dY = -1
        
      }
      if(ball.style.bottom == navigator.style.bottom){
          dY = 1
          ball.style.left = navigator.style.left;
          console.log(navigator.style.left)
          console.log(ball.style.left)
      }
      if(Number(ball.style.left.slice(0, ball.style.left.indexOf('p'))) <= Number(block1.style.left.slice(0, block1.style.bottom.indexOf('p'))) /*&& ball.style.bottom >= block1.style.bottom*/){
          block1.style.visibility == 'hidden'
      }
    }, 1);
    
    isClicked = true;
  }
});




