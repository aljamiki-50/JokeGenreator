// let's get first of all out div with  buttons
const GenJokeBtn = document.getElementById("btn");
const TheJoke = document.getElementById("joke");
const span = document.getElementById("categ");
console.log(span.innerText);
// the url should be fetched here with an api jokes
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&type=single";

// console.clear();

let GetJoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      TheJoke.classList.remove("fade");
      TheJoke.innerHTML = item.joke;
      span.innerHTML = `here this one about ${item.category}`;
      TheJoke.classList.add("fade");
      console.log(item);
    });
};

GetJoke();

// add an event listenr
GenJokeBtn.addEventListener("click", GetJoke);
