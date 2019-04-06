function play(){
    var audio = document.getElementById("audio");
    audio.play();
}

function instruct() {
    // text to speech
}

function reload() {
    if(audio.src = "bark3.mp3") {
        audio.setAttribute("src","guitar_D5_very-long_piano_normal(1).mp3");
    }
    else {
        audio.setAttribute("src","bark3.mp3");
    }
}
var answer;
var inField = document.getElementById("inField")
if(audio.src = "bark3.mp3") {
    var label1 = document.querySelector("label[for=one]");
    label1.textContent+="Dog";
    var label2 = document.querySelector("label[for=two]");
    label2.textContent+="Cat";    
    var label3 = document.querySelector("label[for=three]");
    label3.textContent+="Elephant";  
    var inputVal = document.querySelector("input[name=obj]");
    answer = inputVal.value;
} else {
    var label1 = document.querySelector("label[for=one]");
    label1.textContent+="Stringed";
    var label2 = document.querySelector("label[for=two]");
    label2.textContent+="Wind";    
    var label3 = document.querySelector("label[for=three]");
    label3.textContent+="Percussion";  
    var inputVal = document.querySelector("input[name=obj]");
    answer = inputVal.value;
}

function submit() {

    if(answer === "one") {
        alert("Verified");
    } else {
        alert("Try Again")
    }
    location.reload();
}