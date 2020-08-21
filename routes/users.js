let express = require('express')
let router = express.Router()

/* GET users listing. */
router.get('/', function(req, res) {
  // res.send('respond with a resource')
  res.render("users.hbs")
})

module.exports = router
