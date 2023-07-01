require('dotenv').config();
const express = require('express');
const app = express();
const fruits = require('./models/fruits');
const methodOverride = require('method-override');
const FruiteRouter = require('./controllers/fruit');
const UserRouter = require('./controllers/user');
const session = require('express-session');
const MongoStore = require('connect-mongo');
//MiddleWare//
app.use(express.static('public'));
app.use(express.urlencoded()); // allows the req.body to be read
app.use(methodOverride('_method'));
// this below sets up the ability to track if the user has authorization to access authorized routes
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    saveUninitialized: true,
    resave: false,
}))
app.use('/fruit', FruiteRouter);
app.use('/user', UserRouter);


app.get('/', (req, res) => {
    res.render('index.ejs')
})

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))