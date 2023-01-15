const express = require('express')
const app = express()
const port = 8080
const basicAuth = require('express-basic-auth')
const songs = [
    "The Charm of You",
    "Charmaine",
    "Chattanoogie Shoe Shine Boy",
    "Cheek to Cheek",
    "Cherry Pies Ought to Be You",
    "Chicago",
    "Christmas Dreaming",
    "Christmas Memories",
    "The Christmas Song",
    "The Christmas Waltz",
    "Ciribiribin",
    "Close Enough for Love",
    "Close to You",
    "Catana",
    "The Coffee Song",
    "Come Back to Me",
    "Come Back to Sorrento",
    "Come Blow Your Horn",
    "Come Dance with Me",
    "Come Fly with Me"
]

app.get('/', (req, res) => {
    var random_song = songs[Math.floor(Math.random()*songs.length)]
    res.send(random_song)
})

app.get('/birth_date', (req, res) => {
        res.send('December 12, 1915')
})

app.get('/birth_city', (req, res) => {
    res.send('Hoboken, New Jersey, U.S.')
})

app.get('/wives', (req, res) => {
    res.send('Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx')
})

app.get('/picture', (req, res) => {
    res.redirect('https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg')
})

app.get('/public', (req, res) => {
    res.send('Everybody can see this page')
})

app.use(basicAuth({
    users: {'admin': 'admin'},
    challenge: true,
    unauthorizedResponse: function() {return "Not authorized"}
}));
app.get('/protected', function(req, res) {
    res.send("Welcome, authenticated client");
}); 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})