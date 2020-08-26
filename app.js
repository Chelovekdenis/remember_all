const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const sassMiddleware = require('node-sass-middleware')
const hbs = require("hbs")
const expressHbs = require("express-handlebars")

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const chatRouter = require('./routes/chat')

const app = express()


// view engine setup

app.engine("hbs", expressHbs(
    {
      layoutsDir: "views",
      defaultLayout: "layout",
      extname: "hbs"
    }
))
app.set("view engine", "hbs")
hbs.registerPartials(__dirname + "/views/partials")


// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'hbs')

// Логи пишет, GET, POST все вот это
// app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/chat', chatRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
