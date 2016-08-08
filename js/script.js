// var sentence = prompt("Enter a sentence.");
// console.log(sentence);

// var capitalize = function(sentence) {
//   sentence.trim();
//   var end = sentence.length - 1;
//   var firstLetter = sentence.substr(0,1).toUpperCase();
//   var lastLetter = sentence.substr(sentence.length - 1).toUpperCase();
//   var newSentence = firstLetter + sentence.substr(1,sentence.length-2) + lastLetter;
//   return newSentence;
// }
//
// console.log(capitalize(sentence));

var reverse = function(sentence) {
    sentence.trim();
    // removes extra spaces
    var firstLetter = sentence.substr(0,1);
    var secondLetter = sentence.substr(1,1);
    return secondLetter + firstLetter + sentence.substr(2);
    //  takes first two character of argument and reverses them. also stores as variable "firstreverse"

}
var backwards = prompt("Enter a word and we're going to mess it up");
console.log(reverse(backwards));
