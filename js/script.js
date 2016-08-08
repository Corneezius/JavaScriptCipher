// var sentence = prompt("Enter a sentence.");
// console.log(sentence);

var capitalize = function(sentence) {
  sentence.trim();
  var end = sentence.length - 1;
  var firstLetter = sentence.substr(0,1).toUpperCase();
  var lastLetter = sentence.substr(sentence.length - 1).toUpperCase();
  var newSentence = firstLetter + lastLetter;
  return newSentence;
}

// console.log(capitalize(sentence));

var reverse = function(sentence) {
    sentence.trim();
    // removes extra spaces
    var firstLetter = sentence.charAt(0);
    var secondLetter = sentence.charAt(1);
    return secondLetter + firstLetter;
    //  takes first two character of argument and reverses them. also stores as variable "firstreverse"

}
// var backwards = prompt("Enter a word and we're going to mess it up");
// console.log(reverse(backwards));

// Third function

var both = function(sentence){
  sentence.trim();
  return sentence + reverse(capitalize(sentence));

}

//Fourth function
var middleChar = function(sentence) {
  var halfLength = parseInt(sentence.length / 2);
  return sentence.charAt(halfLength) + sentence;
}
//
// var sentence = prompt("Enter a sentence");
// console.log(middleChar(both(sentence)).split("").reverse().join(""));

jQuery(document).ready(function() {
  jQuery("button").click(function() {
    alert("You are about to leave this page");
  });

  jQuery("h2").click(function() {
    alert("There's so much to learn about JavaScript.");
  });
});
