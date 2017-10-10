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
const cloudinary = require('cloudinary');

const Menu = require('./models/Menu');
const Item = require('./models/Item');
const Order = require('./models/Order');
const Dish = require('./models/Dish');

const keys = require('./config/keys');
const app = express();
const localUsers = require("./routes/localAuthRoutes");
const thirdPartyUsers = require("./routes/thirdPartyAuthRoutes");
const apiRoutes = require("./routes/apiRoutes");
mongoose.connect(keys.mongoURI);

cloudinary.config({
  cloud_name: 'daj4m3xio',
  api_key: '979417658567592',
  api_secret: 'xhiWzS6C1UYHhI69pHk47k_2fD4'
});

require('./services/passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
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

// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   })
// }

app.use(express.static('client/build'));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
});


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  }
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  let arr = ['Message1', 'Message2', 'Message3'];

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('message', (data) => {
    console.log(data);
    setInterval(() => {
      let random = Math.floor(Math.random() * (3));
      socket.emit('getMessage', {hello: arr[random]})
    }, 6000)
  });

  socket.on('order',  (data) => {
    Order.findById(data.id, (err, order) => {
      console.log('----------------------------');
      console.log('----------------------------');
      console.log('----------------------------');
      console.log(order);
      console.log('------------------------------------------');
      console.log('------------------------------------------');
      console.log('------------------------------------------');
      socket.emit('getOrder', {order: order.totalQty});
      if(err) {
        console.log(err);
      } else {
      }
    })
  })
});
