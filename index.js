const favoriteButtons = document.querySelectorAll('.favorite')

showAnswer = () => {
  let answer = event.target.nextElementSibling;
  answer.classList.toggle("hidden");

  let button = event.target.innerHTML;
  button == 'Show Answer' ? event.target.innerHTML = "Hide Answer" : event.target.innerHTML = "Show Answer"
}

favoriteButtons.forEach(button => {
  button.addEventListener('click', () => {
    event.target.classList.toggle('favoriteSelected')
  })
})


darkMode = () => {
  console.log('execute ========================')
  // let element = document.body;
  // element.classList.toggle("darkMode");
}
