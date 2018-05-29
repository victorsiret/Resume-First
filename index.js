const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello world'))
app.get('/mysecret/', (req, res) => res.send('You are now on my secret page'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))