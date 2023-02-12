"use strict";

const words = ["happy", "times", "facts", "night", "plant"];

let box0 = document.getElementById("word-1");
let box1 = document.getElementById("word-2");
let box2 = document.getElementById("word-3");
let box3 = document.getElementById("word-4");
let box4 = document.getElementById("word-5");
let submit = document.getElementById("input-btn");
let inputBox = document.getElementById("guess");

let guess;
let word = "fiver";
let number = Math.random() * words.length - 1;

submit.addEventListener("click", () => {
  guess = inputBox.value;

  if (guess != word) {
    document.getElementById("message").textContent =
      "Ah I'm sorry try again! 🎉";
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] == word[i]) {
        document.getElementById(`word-${i + 1}`).textContent = guess[i];
        document.getElementById(`word-${i + 1}`).style.color = "red";
      } else if (word.includes(guess[i])) {
        document.getElementById(`word-${i + 1}`).textContent = guess[i];
        document.getElementById(`word-${i + 1}`).style.color = "blue";
      } else {
        document.getElementById(`word-${i + 1}`).textContent = guess[i];
        document.getElementById(`word-${i + 1}`).style.color = "black";
      }
    }
  } else {
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] == word[i]) {
        document.getElementById(`word-${i + 1}`).textContent = guess[i];
        document.getElementById(`word-${i + 1}`).style.color = "red";
      }
    }
    document.getElementById("message").textContent = "Well done you got it 🤪";
    word = words[number];
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    guess = inputBox.value;

    if (guess != word) {
      document.getElementById("message").textContent =
        "Ah I'm sorry try again! 🎉";
      for (let i = 0; i < guess.length; i++) {
        if (guess[i] == word[i]) {
          document.getElementById(`word-${i + 1}`).textContent = guess[i];
          document.getElementById(`word-${i + 1}`).style.color = "red";
        } else if (word.includes(guess[i])) {
          document.getElementById(`word-${i + 1}`).textContent = guess[i];
          document.getElementById(`word-${i + 1}`).style.color = "blue";
        } else {
          document.getElementById(`word-${i + 1}`).textContent = guess[i];
          document.getElementById(`word-${i + 1}`).style.color = "black";
        }
      }
    } else {
      for (let i = 0; i < guess.length; i++) {
        if (guess[i] == word[i]) {
          document.getElementById(`word-${i + 1}`).textContent = guess[i];
          document.getElementById(`word-${i + 1}`).style.color = "red";
        }
      }
      document.getElementById("message").textContent =
        "Well done you got it 🤪";
      word = words[number];
    }
  }
});
