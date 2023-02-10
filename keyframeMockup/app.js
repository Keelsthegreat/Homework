const jump =  () => {
    let mario = document.querySelector('.ball')
    mario.classList.toggle('jump2')
    
       }



const pulse =  () => {
    let mario2 = document.querySelector('.ball2')
    mario2.classList.toggle('pulse2')
}


const flash =  () => {
    let mario3 = document.querySelector('.ball3')
    mario3.classList.toggle('flash2')
}

const zoomIn =  () => {
    let mario4 = document.querySelector('.ball4')
    mario4.classList.toggle('zoomIn2')
}

const walk =  () => {
    let mario5 = document.querySelector('.ball5')
    mario5.classList.toggle('walk2')
}

function toggle(){
    let container2 = document.querySelector(".container2");
    let showMe = document.getElementById("showMe");
    container2.style.display='block';
    console.log('click')
}

function toggle2(){
    let container2 = document.querySelector(".container2");
    let hideMe = document.getElementById("hideMe");
    container2.style.display ='none';
    console.log('click1')
}

function toggle3(){
    let container3 = document.querySelector(".container3");
    let showMe = document.getElementById("showMe");
    container3.style.display='block';
    console.log('click')
}

function toggle4(){
    let container3 = document.querySelector(".container3");
    let hideMe = document.getElementById("hideMe");
    container3.style.display ='none';
    console.log('click1') 
}

function toggle5(){
    let container4 = document.querySelector(".container4");
    let showMe = document.getElementById("showMe");
    container4.style.display='block';
    console.log('click')
}

function toggle6(){
    let container4 = document.querySelector(".container4");
    let hideMe = document.getElementById("hideMe");
    container4.style.display ='none';
    console.log('click1') 
}

function toggle7(){
    let container5 = document.querySelector(".container5");
    let showMe = document.getElementById("showMe");
    container5.style.display='block';
    console.log('click')
}

function toggle8(){
    let container5 = document.querySelector(".container5");
    let hideMe = document.getElementById("hideMe");
    container5.style.display ='none';
    console.log('click1') 
}

function toggle9(){
    let container6 = document.querySelector(".container6");
    let showMe = document.getElementById("showMe");
    container6.style.display='block';
    console.log('click')
}

function toggle10(){
    let container6 = document.querySelector(".container6");
    let hideMe = document.getElementById("hideMe");
    container6.style.display ='none';
    console.log('click1') 
}

let play = document.getElementById("play");
function playMusic() {
  let audio = new Audio("twinkle.mp3");
   audio.play()
}
play.addEventListener("click", playMusic)

let play2 = document.getElementById("play2");
function playMusic2() {
  let audio = new Audio("clang.mp3");
   audio.play()
}
play2.addEventListener("click", playMusic2)







