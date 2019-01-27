const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');

require('./controllers/post.js')(app);
//set db
require('./data/reddit-db');

app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs')
//Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(expressValidator());

app.get('/', (req, res) => {
  res.render('posts-index', {})
})

app.get('/posts/new', (req, res) => {
  res.render('posts-new', {})
})

app.listen(3000, () => {
  console.log('hey bitch');
})
