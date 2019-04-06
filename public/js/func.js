var object = require("/home/shubham/Desktop/AudibleCAPTCHA/index")
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
var speechrecognitionlist = new SpeechGrammarList();
/*
$(".play").addEventListener("click",function(){
    $(".captcha-audio").src = object.link;
    console.log("done")
})
*/
