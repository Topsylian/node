const copyBtn = document.querySelector("#copy");
const generateBtn = document.querySelector("#generate-text");

let animate = 2;

copyBtn.addEventListener("click", () => {
  let text = document.getElementById("show").innerHTML;
  let show = document.getElementById("show-container");
  copyBtn.style.visibility = "hidden";

  navigator.clipboard.writeText(text);
  show.classList.add("active");
  show.classList.add("shake");
  setTimeout(function () {
		show.classList.remove("shake");
		
		copyBtn.style.visibility = "visible";
  }, 1000);
});

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

generateBtn.addEventListener("click", () => {
	let show = document.getElementById("show-container");
	copyBtn.style.visibility = "visible";
	show.classList.remove("active");
  let story = quotes;
  document.getElementById("show").innerHTML;

  const valueIn = randomValueFromArray(quotes);
  story.forEach(() => {
    document.getElementById("show").innerHTML = valueIn;
  });
});

const quotes = [
  "He Who is Not Courageous Enough to Take Risks Will Accomplish Nothing in Life.",
  "Either Run the Day or the Day Runs You.",
  "When You Feel Like Quitting, Remember Why You Started",
  "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind. — Mister Rogers",
  "It’s not whether you get knocked down, it’s whether you get up.  –  Vince Lombardi",
  "The twin killers of success are impatience and greed.",
  "The path to success is to take massive determined action.",
  "In the end, the money and success that truly last come not to those who focus on such things as goals, but rather to those who focus on mastery and fulfilling their Life’s Task.",
  "If one advances confidently in the direction of one’s dreams, and endeavors to live the life which one has imagined, one will meet with a success unexpected in common hours.  –  Henry David Thoreau",
  "Where success is concerned, people are not measured in inches, or pounds, or college degrees, or family background: they are measured by the size of their thinking.  –  David J. Schwartz",
];
