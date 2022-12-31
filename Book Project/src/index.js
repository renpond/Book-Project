function gatherInfo() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let genre = prompt("What is your favorite book genre?");
  let heading = document.querySelector("h1");

  if (genre.length > 0) {
    heading.innerHTML =
      "Thank you, " + name + "! We will send recommendations to " + email;
  } else {
    heading.innerHTML = "I'm sorry, " + name + ", that we couldn't help you.";
  }
}

let getBooks = document.querySelector("button");
getBooks.addEventListener("click", gatherInfo);
