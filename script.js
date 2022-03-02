const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bgs_texts = document.querySelectorAll(".animated-bg-texts");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="images/kouji-tsuru-2VIkTJVotv8-unsplash.jpg" alt="food-image" />';
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, numquam!";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  name.innerHTML = "Jhon Doe";
  date.innerHTML = "Oct 08,2022";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));

  animated_bgs_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
