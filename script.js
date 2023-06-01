// Making an ugly mess
const audioBoom = document.getElementById("audioBoom");
const boom = document.getElementById("boom");
const audioClap = document.getElementById("audioClap");
const clap = document.getElementById("clap");
const audioHihat = document.getElementById("audioHihat");
const hihat = document.getElementById("hihat");
const audioKick = document.getElementById("audioKick");
const kick = document.getElementById("kick");
const audioOpenhat = document.getElementById("audioOpenhat");
const openhat = document.getElementById("openhat");
const audioRide = document.getElementById("audioRide");
const ride = document.getElementById("ride");
const audioSnare = document.getElementById("audioSnare");
const snare = document.getElementById("snare");
const audioTink = document.getElementById("audioTink");
const tink = document.getElementById("tink");
const audioTom = document.getElementById("audioTom");
const tom = document.getElementById("tom");

// Adding sound and animation to keydown
document.addEventListener("keydown", (event) => {
    if (event.key == "q") {
        audioBoom.src = "sounds/boom.wav";
        boom.setAttribute('style', '-webkit-transform:scale(1.1);');
        }
    else if (event.key == "w") {
        audioClap.src = "sounds/clap.wav";
        clap.setAttribute('style', '-webkit-transform:scale(1.1);');
        } 
    else if (event.key == "e") {
        audioHihat.src = "sounds/hihat.wav";
        hihat.setAttribute('style', '-webkit-transform:scale(1.1);');
        }
    else if (event.key == "a") {
        audioKick.src = "sounds/kick.wav";
        kick.setAttribute('style', '-webkit-transform:scale(1.1);');
        }
    else if (event.key == "s") {
        audioOpenhat.src = "sounds/openhat.wav";
        openhat.setAttribute('style', '-webkit-transform:scale(1.1);');
        }
    else if (event.key == "d") {
        audioRide.src = "sounds/ride.wav";
        ride.setAttribute('style', '-webkit-transform:scale(1.1);');
        }
    else if (event.key == "z") {
        audioSnare.src = "sounds/snare.wav";
        snare.setAttribute('style', '-webkit-transform:scale(1.1);');
        }
    else if (event.key == "x") {
        audioTink.src = "sounds/tink.wav";
        tink.setAttribute('style', '-webkit-transform:scale(1.1);');
        }
    else if (event.key == "c") {
        audioTom.src = "sounds/tom.wav";
        tom.setAttribute('style', '-webkit-transform:scale(1.1);');
    }});

// Removing animation on keyup
document.addEventListener("keyup", (event) => {
    if (event.key == "q") {
        boom.setAttribute('style', '-webkit-transform:scale(1);');
        }
    else if (event.key == "w") {
        clap.setAttribute('style', '-webkit-transform:scale(1);');
        }
    else if (event.key == "e") {
        hihat.setAttribute('style', '-webkit-transform:scale(1);');
        }
    else if (event.key == "a") {
        kick.setAttribute('style', '-webkit-transform:scale(1);');
        }
    else if (event.key == "s") {
        openhat.setAttribute('style', '-webkit-transform:scale(1);');
        }
    else if (event.key == "d") {
        ride.setAttribute('style', '-webkit-transform:scale(1);');
        }
    else if (event.key == "z") {
        snare.setAttribute('style', '-webkit-transform:scale(1);');
        }
    else if (event.key == "x") {
        tink.setAttribute('style', '-webkit-transform:scale(1);');
        }
    else if (event.key == "c") {
        tom.setAttribute('style', '-webkit-transform:scale(1);');
        }
});

// Adding sound an animation to click
boom.addEventListener("click", () => {
    audioBoom.src = "sounds/boom.wav";
    boom.setAttribute('style', '-webkit-transform:scale(1.1);');
    setTimeout(()=>{
        boom.setAttribute('style', '-webkit-transform:scale(1);');
     },100)  
});
clap.addEventListener("click", () => {
    audioClap.src = "sounds/clap.wav";
    clap.setAttribute('style', '-webkit-transform:scale(1.1);');
    setTimeout(()=>{
        clap.setAttribute('style', '-webkit-transform:scale(1);');
     },100)  
});
hihat.addEventListener("click", () => {
    audioHihat.src = "sounds/hihat.wav";
    hihat.setAttribute('style', '-webkit-transform:scale(1.1);');
    setTimeout(()=>{
        hihat.setAttribute('style', '-webkit-transform:scale(1);');
     },100)  
});
kick.addEventListener("click", () => {
    audioKick.src = "sounds/kick.wav";
    kick.setAttribute('style', '-webkit-transform:scale(1.1);');
    setTimeout(()=>{
        kick.setAttribute('style', '-webkit-transform:scale(1);');
     },100)  
});
openhat.addEventListener("click", () => {
    audioOpenhat.src = "sounds/openhat.wav";
    openhat.setAttribute('style', '-webkit-transform:scale(1.1);');
    setTimeout(()=>{
        openhat.setAttribute('style', '-webkit-transform:scale(1);');
     },100)  
});
ride.addEventListener("click", () => {
    audioRide.src = "sounds/ride.wav";
    ride.setAttribute('style', '-webkit-transform:scale(1.1);');
    setTimeout(()=>{
        ride.setAttribute('style', '-webkit-transform:scale(1);');
     },100)  
});
snare.addEventListener("click", () => {
    audioSnare.src = "sounds/snare.wav";
    snare.setAttribute('style', '-webkit-transform:scale(1.1);');
    setTimeout(()=>{
        snare.setAttribute('style', '-webkit-transform:scale(1);');
     },100)  
});
tink.addEventListener("click", () => {
    audioTink.src = "sounds/tink.wav";
    tink.setAttribute('style', '-webkit-transform:scale(1.1);');
    setTimeout(()=>{
        tink.setAttribute('style', '-webkit-transform:scale(1);');
     },100)    
});
tom.addEventListener("click", () => {
    audioTom.src = "sounds/tom.wav";
    tom.setAttribute('style', '-webkit-transform:scale(1.1);');
    setTimeout(()=>{
        tom.setAttribute('style', '-webkit-transform:scale(1);');
     },100)  
});

