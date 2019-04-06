var object = require('../..index')
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
console.log(object.object)
var recognition = new SpeechRecognition();
var speechrecognitionlist = new SpeechGrammarList();
/*
$(".play").addEventListener("click",function(){
    $(".captcha-audio").src = object.link;
    console.log("done")
})
*/
