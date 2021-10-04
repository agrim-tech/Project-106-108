var list = ["Background Noise", "Dog", "Cat", "Hen"
];
var numbers =  ["listen.gif","bark.gif","meow.gif","hen.gif"];
var count,show;
function record() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7TTrI82lY/model.json', modelloaded);
}
function modelloaded() {
    classifier.classify(gotresults);
}
function gotresults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result1").innerHTML = "I Can Hear - " + results[0].label;
        document.getElementById("result2").innerHTML = "Accuracy - " + results[0].confidence;
        if (results[0].label == list[0]){
            console.log(results[0].label);
            document.getElementById("one").src=numbers[0];
        }
        if (results[0].label == list[1]){
            console.log(results[0].label);
            document.getElementById("one").src=numbers[1];
        }
        if (results[0].label == list[2]){
            console.log(results[0].label);
            document.getElementById("one").src=numbers[2];
        }
        if (results[0].label == list[3]){
            console.log(results[0].label);
            document.getElementById("one").src="hen.gif";
        }
    }
}
