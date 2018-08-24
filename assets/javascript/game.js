var words = [
  "yggdrassil",
  "jotunheim",
  "folkvangr",
  "hvergelmir",
  "jormungandr",
  "freyja",
  "svartalfar"
];
var wins = 0;
var remainingGuess = 13;
//TODO: remainingguess not working

//When I press space the game begins
document.body.onkeyup = function(e) {
  //keycode for space
  if (e.keyCode == 32) {
    //reset my img source
    element = document.getElementById("winelement");
    element.src = "";

    //pick a word from my array of words
    var chosenWord = words[Math.floor(Math.random() * words.length)];
    //split that word into an array of letters
    var splitedWord = chosenWord.split("");
    //store my guessed letters so far
    let guessedLetters = [];

    console.log(splitedWord);

    //function to show my hidden word
    function hideWord(splitedWord, guessedLetters) {
      //create a new array from my splitted word that will have its letters replaced if...
      const hiddenWord = splitedWord.map(value => {
        //my array of guessesletters has a value contained in my splitted word array
        if (guessedLetters.includes(value.toLowerCase())) {
          //just keep that same value and print it
          return value;
        } else {
          //replace it with a dash
          return "-";
        }
      });
      //if my hidden word doesn't have anymore dashes then I won
      if (!hiddenWord.includes("-")) {
        document.getElementById("wins").innerHTML = wins + 1;
        wins++;
        if (chosenWord == "yggdrassil") {
          element = document.getElementById("winelement");
          element.src =
            "https://www.ethnos.biz/wp-content/uploads/2017/05/yggdrasil-spilla-PB810_G.jpg";
        } else if (chosenWord == "jotunheim") {
          element = document.getElementById("winelement");
          element.src =
            "https://vignette.wikia.nocookie.net/mythology/images/7/7f/Jotunheimr.jpg/revision/latest?cb=20120813182754";
        } else if (chosenWord == "folkvangr") {
          element = document.getElementById("winelement");
          element.src = " https://i.ytimg.com/vi/pt0EcJyY7Dk/hqdefault.jpg";
        } else if (chosenWord == "hvergelmir") {
          element = document.getElementById("winelement");
          element.src =
            "https://pm1.narvii.com/6199/03916d6e795c9895e3cb83a94e4ce6deef2a346f_hq.jpg";
        } else if (chosenWord == "jormungandr") {
          element = document.getElementById("winelement");
          element.src =
            "https://cdna.artstation.com/p/assets/images/images/009/957/632/large/juho-huttunen-jormungandr.jpg?1521766569";
        } else if (chosenWord == "freyja") {
          element = document.getElementById("winelement");
          element.src =
            "http://www.kellymorgen.com/blog/wp-content/uploads/2016/04/FreyjaPicture.jpg";
        } else if (chosenWord == "svartalfar") {
          element = document.getElementById("winelement");
          element.src =
            "https://vignette.wikia.nocookie.net/mythology/images/6/69/Svart%C3%A1lfaheim.jpg/revision/latest/scale-to-width-down/2000?cb=20120813195526";
        }
      }
      //print my hidden word on html with a .join that gets rid of default colons
      document.getElementById("word").innerHTML = hiddenWord.join("");
    }

    //for every key pressed
    document.onkeyup = function(event) {
      //I will store it in userGuess
      var userGuess = event.key;

      if (
        !splitedWord.includes(userGuess) &&
        !guessedLetters.includes(userGuess)
      ) {
        remainingGuess--;
      }

      document.getElementById("remainingGuess").innerHTML = remainingGuess;
      var img = new Image();
      //if my guessedlettersarray already have the userGuess
      if (guessedLetters.includes(userGuess)) {
        //then don't add it and tell them, also return to stop the rest of the function
        console.log("guessed that one");
        return;
        //else just add the guess to the array
      } else {
        guessedLetters.push(userGuess);
      }

      if (remainingGuess <= 0) {
        document.getElementById("lost").innerHTML = "You lost";
        setTimeout(9000, doHide);
        location.reload();
      }

      function doHide() {
        document.getElementById("lost").style.display = "none";
      }
      //call hidden word
      hideWord(splitedWord, guessedLetters, remainingGuess);

      console.log(guessedLetters);
      //Prints my guessed letters array on html
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
    };
  }
};
