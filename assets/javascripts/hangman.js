(function () {

    var word = "banana"
    var letter = "c"

    var splitWord = word.split("");
    // console.log(splitWord);

     var count = (word.match(/letter/g) || []).length;
        //  console.log(count);
//why isn't 'letter' above showing as my variable??

    if (splitWord.includes(letter)) {
        console.log(`Yep, the letter ${letter} appears ${count} times in the word.`)
    } else {
        console.log(`WE AINT GOT THAT LETTER HERE`)
    }



})();
