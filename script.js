const scoreCounter = document.querySelector('.score-counter')
const randomWordEl = document.querySelector('.random-word')
const textInput = document.querySelector('.text-input')
const timeEl = document.querySelector('.time')

const api = 'https://random-words-api.vercel.app/word'

let randomWord

let score = 0

let time = 10

function get() {
  fetch(api)
    .then((word) => {
      return word.json()
    })
    .then(getWord)
}

get()

function getWord(e) {
  randomWord = e[0].word.toLowerCase()
  randomWordEl.textContent = randomWord
}

textInput.addEventListener('input', () => {
  if (randomWord == textInput.value) {
    get()
    textInput.value = ''
    score++
    scoreCounter.textContent = score
    time += 3
  }
})

setInterval(() => {
  if (time) {
    time--
    timeEl.textContent = time

    // modal => game over
    // score: 9
    // button refresh sahifa
  }
}, 1000)
