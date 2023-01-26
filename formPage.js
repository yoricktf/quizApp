const form = document.querySelector('form')
const newCardsSection = document.querySelector('.newCards')

form.addEventListener('submit', event => {
  event.preventDefault()
  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData)
  console.log(data)

  const cardSection = document.createElement('section')
  cardSection.classList.add('card')

  const header = document.createElement('h2')
  header.textContent = `${data.question}`

  const button = document.createElement('button')
  button.setAttribute('onclick', 'showAnswer(this)')
  button.classList.add('answerButton')
  button.textContent = 'Show Answer'

  const answer = document.createElement('p')
  answer.textContent = `${data.answer}`
  answer.classList.add('answer', 'hidden')

  const tags = document.createElement('ul')
  tags.classList.add('tags')

  const tag = document.createElement('li')
  tag.classList.add('tag')
  tag.textContent = `${data.tags}`

  const bookmark = document.createElement('img')
  bookmark.classList.add('favorite')
  bookmark.setAttribute('src', './assets/bookmarkPlus.svg')

  newCardsSection.append(cardSection)
  cardSection.append(header, button, answer, tags, bookmark)
  tags.append(tag)
})




console.log(form);
