
// Diagonal Animation

const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

function begin(){
  let timerID = 0;
  let x = 0;
  let y = 0;

  timerID = setInterval(frame, 5); // callback 'frame' with 5 milisec interval

  function frame(){
    if(y >= 200){
      clearInterval(timerID) // interval end
    }
    else{ // increament of x and y
      y+=1;
      x+=1;
      myAnimation.style.top = y + "px";
      myAnimation.style.left = x + "px";
    }
    
  }
}
