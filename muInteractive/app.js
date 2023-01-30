let stuff = "Hi my name is Akili. I am 25 years old and I started my tech journey because of a game called Undertale and Stardew Valley. I fell in love with both games and I was really impressed that the developers created these games all by themselves. I always loved games but didn’t know how to go about getting into tech until a friend told me about Per Scholas."

document.getElementById("stuff").innerHTML=stuff;

function toggle(){
    let superDiv2 = document.querySelector(".superDiv2");
    let showMe = document.getElementById("showMe");
    superDiv2.style.display='block';
    console.log('click')
}

function toggle2(){
    let superDiv2 = document.querySelector(".superDiv2");
    let hideMe = document.getElementById("hideMe");
    superDiv2.style.display ='none';
    console.log('click1')
}



