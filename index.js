const favoriteButtons = document.querySelectorAll('.favorite')

showAnswer = (event) => {
  // console.log(event);
  let answer = event.nextElementSibling;
  answer.classList.toggle("hidden");

  let button = event.textContent.trim();
  button === 'Show Answer' ? event.textContent = "Hide Answer" : event.textContent = "Show Answer"
}

favoriteButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.target.src.includes('bookmarkPlus') || event.target.src.includes('bookmarkChecked') ? event.target.src = './assets/bookmarkCross.svg'
      : event.target.src = './assets/bookmarkPlus.svg'
  })
})


darkMode = () => {
  console.log('execute ========================')
  // let element = document.body;
  // element.classList.toggle("darkMode");
}
