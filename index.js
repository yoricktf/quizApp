function showAnswer() {
  let answer = event.target.nextElementSibling;
  answer.classList.toggle("hidden");

  let button = event.target.innerHTML;
  if (button == "Show Answer") {
    event.target.innerHTML = "Hide Answer";
  } else {
    event.target.innerHTML = "Show Answer";
  }
}


function darkMode() {
  console.log('execute ========================')
  // let element = document.body;
  // element.classList.toggle("darkMode");
}