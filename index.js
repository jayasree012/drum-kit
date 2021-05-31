// Button pressed
var numOfDrums=document.querySelectorAll(".drum").length;

for (var i=0;i<numOfDrums;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    var buttonhtml= this.innerHTML;
    makeSound(buttonhtml);
    buttonanimation(buttonhtml);
  });
}

// key pressed
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonanimation(event.key);
});

function makeSound(key)
{
  switch(key)
  {
    case "w":var tom1=new Audio("sounds/tom-1.mp3");tom1.play();break;
    case "a":var tom2=new Audio("sounds/tom-2.mp3");tom2.play();break;
    case "s":var tom3=new Audio("sounds/tom-3.mp3");tom3.play();break;
    case "d":var tom4=new Audio("sounds/tom-4.mp3");tom4.play();break;
    case "j":var crash=new Audio("sounds/crash.mp3");crash.play();break;
    case "k":var kick=new Audio("sounds/kick.mp3");kick.play();break;
    case "l":var snare=new Audio("sounds/snare.mp3");snare.play();break;

    default:
  }
}

function buttonanimation(currentkey)
{
  var activebutton=document.querySelector("."+currentkey);
  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");},100);


}
