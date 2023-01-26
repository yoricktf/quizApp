const form = document.querySelector('form')
const newCardsSection = document.querySelector('.newCards')
const questionInput = document.querySelector('#question')
const questionOutput = document.querySelector('#questionCharecters')
const answerInput = document.querySelector('#answer')
const answerOutput = document.querySelector('#answerCharecters')

questionInput.addEventListener('input', event => {
  questionOutput.textContent = countCharecters(questionInput)
})
answerInput.addEventListener('input', event => {
  answerOutput.textContent = countCharecters(answerInput)
})


const countCharecters = (inputData, outputField) => {
  const numberOfCharecters = 150 - inputData.value.length
  return `${numberOfCharecters} Charecters remaining`
}


form.addEventListener('submit', event => {
  event.preventDefault()
  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData)

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

  // const tag = document.createElement('li')
  // tag.classList.add('tag')

  const allTags = data.tags.split(',')

  allTags.forEach(element => {
    const tag = document.createElement('li')
    tag.classList.add('tag')
    tag.textContent = element
    tags.append(tag)
  });


  // tag.textContent = `${data.tags}`

  const bookmark = document.createElement('img')
  bookmark.classList.add('favorite')
  bookmark.setAttribute('src', './assets/bookmarkPlus.svg')

  newCardsSection.append(cardSection)
  cardSection.append(header, button, answer, tags, bookmark)


})
