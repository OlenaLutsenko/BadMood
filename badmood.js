const { explanation } = require('./explanation');
const { badChoise } = require('./bad_choise');
const express = require('express');
const bad_choise = require('./bad_choise');
const app = express()
const port = 8080


app.get('/', (req, res) => {
    res.send(`
Bad mood app features:
    /song
    /badChoise
    /noHope
    /wantDrink
    /tired
    /explanation
    /picture
    `);
})

app.get('/song', (req, res) => {
    res.redirect('https://www.youtube.com/watch?v=gnPxKZUyTJo')
})

app.get('/badChoise', (req, res) => {
    var choise = badChoise();
    res.send(choise);
})

const noHope = [
    "Have a coffe with cream",
    "Go for a long wolk",
    "Play with cats",
    "Sew something - hole or a button"      
]

app.get('/noHope', (req, res) => {
    var random_noHope = noHope[Math.floor(Math.random()*noHope.length)]
    res.send(random_noHope)
})

const wantDrink = [
    "Take 2+2+2+2 valerianna pills",
    "Get bath with cup of coffe",
    "Run 10 km",
    "Learn English"       
]

app.get('/wantDrink', (req, res) => {
    var random_wantDrink = wantDrink[Math.floor(Math.random()*wantDrink.length)]
    res.send(random_wantDrink)
})

const tired = [
    "Read in bed",
    "Color pictures in coloring book",
    "Open the window",
    "Learn French"    
]

app.get('/tired', (req, res) => {
    var random_tired = tired[Math.floor(Math.random()*tired.length)]
    res.send(random_tired)
})


app.get('/explanation', (req, res) => {
    res.send(explanation);
})


app.get('/picture', (req, res) => {
    res.redirect('https://www.pexels.com/search/mood/')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${8080}`)
})