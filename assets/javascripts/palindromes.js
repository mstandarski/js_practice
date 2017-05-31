(function () {
  let word = "radar";
  let lettersOfWord = word.split("");
  let backwards = lettersOfWord.reverse();
  let joinBackwards = backwards.join("");
  let secondSplit = joinBackwards.split(" ");
  let reverseIt = secondSplit.reverse();
  let complete = reverseIt.join(" ");

  console.log(word == complete);

})();
