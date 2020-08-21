let express = require('express')
let router = express.Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Express' ,
    content: 'some text some text some text, some text some text some text.'
  })
})

module.exports = router
