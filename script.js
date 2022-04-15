const scoreCounter = document.querySelector('.score-counter')
const randomWordEl= document.querySelector('.random-word')
const textInput = document.querySelector('.text-input')
const time = document.querySelector('.time')

const api = 'https://random-words-api.vercel.app/word'

let randomWord

function get() {
    fetch(api)
    .then((data)=> {
        return data.json() 
    })
    .then(getWord)
}

get()

function getWord(e) {
    randomWord = e[0].word.toLowerCase()
    randomWordEl.textContent = randomWord
}

textInput.addEventListener('input', ()=> {
    if(randomWord == textInput.value) {
        get()
        textInput.value = ''
    }
})
