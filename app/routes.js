var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
/*router.get('/add_charge/v1/map', function (req, res) {
  var searchedItem = req.query.search_term
  res.render('add_charge/v1/map', { 'searchedItem': searchedItem })
})*/

module.exports = router
