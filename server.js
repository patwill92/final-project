const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const passport = require('passport');

const Menu = require('./seed/TestData');
const Item = require('./seed/TestItem');

const keys = require('./config/keys');
const app = express();
const localUsers = require("./routes/localAuthRoutes");
const thirdPartyUsers = require("./routes/thirdPartyAuthRoutes");
const apiRoutes = require("./routes/apiRoutes");
mongoose.connect(keys.mongoURI);

require('./services/passport');

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: keys.cookieKey,
  saveUninitialized: false,
  resave: false,
  store: new MongoStore({
    url: keys.mongoURI,
    ttl: 14 * 24 * 60 * 60
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(expressValidator({
  errorFormatter(param, msg, value) {
    let namespace = param.split('.')
      , root = namespace.shift()
      , formParam = root;
    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));
app.use(flash());
app.use('/user', localUsers);
app.use('/auth', thirdPartyUsers);
app.use('/api', apiRoutes);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.use(express.static('client/build'));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
