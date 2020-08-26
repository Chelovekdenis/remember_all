let express = require('express')
let router = express.Router()

/* GET users listing. */
router.get('/', function(req, res) {
  // res.send('respond with a resource')
  res.render("users.hbs", {
    title: "Denis",
    email: "chel@yandex.ru",
    phone: "+7 323 234"
  })
})

module.exports = router
