const favoriteButtons = document.querySelectorAll('.favorite')
const darkToggle = document.querySelector('#darkToggle')
const header = document.querySelector('header')
const footer = document.querySelector('footer')
const stats = document.querySelector('.statistics')

console.log(stats)

showAnswer = (event) => {
  // console.log(event);
  let answer = event.nextElementSibling;
  answer.classList.toggle("hidden");

  let button = event.textContent.trim();
  button === 'Show Answer' ? event.textContent = "Hide Answer" : event.textContent = "Show Answer"
}

favoriteButtons.forEach(button => {
  // button.addEventListener('click', (event) => {
  //   event.target.src.includes('bookmarkPlus') || event.target.src.includes('bookmarkChecked') ? event.target.src = './assets/bookmarkCross.svg'
  //     : event.target.src = './assets/bookmarkPlus.svg'
  // })

  button.addEventListener('click', event => {
    if (event.target.src.includes('bookmarkPlus')) {
      event.target.src = './assets/bookmarkCross.svg'
    } else if (event.target.src.includes('bookmarkChecked')) {
      event.target.src = './assets/bookmarkCross.svg'
    } else if (event.target.src = './assets/bookmarkCross.svg') {
      event.target.src = './assets/bookmarkPlus.svg'
    }
  })
})

darkToggle.addEventListener('click', event => {
  document.body.classList.toggle('darkMode')
  header.classList.toggle('darkModeExtra')
  footer.classList.toggle('darkModeExtra')
})
