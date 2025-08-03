// import {openDB} from './database/config_db.js'
import express from 'express'
import {createTableWords, insertWords} from './controller/words.js'

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

createTableWords()

app.get('/', (request, response) => {
    response.send('Teste')
})//endpoint

app.get('/words', (request, response) => {
    
    response.send('Teste')
})

app.post('/register', (request, response) => {
    insertWords(request.body)
    response.json({
        "statusCode": 200
    })
    
})

app.listen(3000, () => {console.log('API rodando')})

// document.addEventListener('DOMContentLoaded', () => {
//     const playBtn = document.getElementById('playBtn');
//     const instruction = document.getElementById('instructions')
//     const areaGame = document.getElementById('playGame')

//     playBtn.addEventListener('click', () => {
//         window.alert('O jogo começou!')
//         instruction.style.display = 'none'
//         areaGame.style.display = 'block'

//     })

    
// })