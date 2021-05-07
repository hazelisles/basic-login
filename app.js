const { static } = require('express')
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const Users = require('./models/user')
const checkAccount = require('./check')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

mongoose.connect('mongodb://localhost/basic-login', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => console.log('mongodb error!'))
db.once('open', () => console.log('mongodb connected!'))

app.get('/', (req, res) => {
  const reset = { status: true }
  return res.render('index', { result: reset })
})

app.post('/login', (req, res) => {
  const account = req.body
  const result = checkAccount(account)
  if (result.status) {
    return res.render('welcome', { result })
  } else {
    return res.render('index', { result })
  }
  
})

app.listen(3000, () => {
  console.log('App now running on http://localhost:3000')
})