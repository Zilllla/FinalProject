const List = require('./models/list.js');
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = mongoose.connection;
const dbupdateobject = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

// Connect to Mongo
mongoose.connect(process.env.DATABASE_URL, dbupdateobject);
// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', process.env.DATABASE_URL));
db.on('disconnected', () => console.log('mongo disconnected'));
db.on('open', () => {
    console.log('Connection made!');
});

//SHOW
app.get('/', (req, res) => {
  List.find({}, (err, allLists) => {
    res.json(allLists);
  })
});

//CREATE
app.post('/', (req, res) => {
  List.create(req.body)
    .then(data => res.json(data));
});

// //EDIT
app.get('/edit/:id', (req, res) => {
  List.findById(req.params.id, (err, data) => {
    res.json(data)
  })
});

//UPDATE
app.put('/:id', (req, res) => {
  List.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    res.json(data)
  });
});



app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
