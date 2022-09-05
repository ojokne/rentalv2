require('dotenv').config()
const express = require('express')
const flash = require('connect-flash')
const session = require('express-session')
const path = require('path')

// custom imports
const tenant = require('./routes/tenant/index')
const db = require('./db')

const app = express()
const PORT = process.env.PORT || 3000

// middlewares
app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views'))

app.use('/assets', express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(flash())
app.use(session({
    secret: 'a?D3HbJd/;POSjhsdh',
    saveUninitialized: true,
    resave: true
}))

// my middlewares
app.use('/tenant', tenant)
app.use((req, res, next) => {
    res.locals.success = req.flash('success')
    res.locals.failure = req.flash('failure')
    next()
})

// routes
app.get('/', (req, res) => {
    res.send('Yooo')

})
// db.sequelize.authenticate()
//     .then(() => {
//         console.log("connection made");
//     }).catch(err => {
//         console.log(err);
//     })

// db.sequelize.sync({ force: true })
//     .then(() => {
//         console.log('Tables created');
//     })
//     .catch(err => {
//         console.log(err);
//     })

app.listen(PORT, err => {
    if (err) {
        console.error(err)
    }
    else {
        console.log(`Server running on port ${PORT}`);
    }
})
