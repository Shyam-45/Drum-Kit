var size = document.querySelectorAll(".drum").length;

function playAudio(thisInnerHTML) {

    switch(thisInnerHTML) {

        case "a" :
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
        break;

        case "d" :
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
        break;

        case "j" :
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
        break;

        case "k" :
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
        break;

        case "l" :
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
        break;

        case "s" :
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
        break;

        case "w" :
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
        break;

        default:
            
    }

}

for(var i = 0; i < size; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        playAudio(this.innerHTML);
        buttonAnimation(this.innerHTML);

    })
}

document.addEventListener("keypress", function(ele) {

    playAudio(ele.key);
    buttonAnimation(ele.key);
})

function buttonAnimation (currKey) {

    var activeButton = document.querySelector("." + currKey);
    activeButton.classList.add("pressed");

    setTimeout( function() {
        activeButton.classList.remove("pressed");
    }, 200);
}

