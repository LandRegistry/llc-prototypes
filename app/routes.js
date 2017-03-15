var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
/*router.get('/maintain-llc/v1/cancel-confirmation', function (req, res) {
  
  var cancel = req.query.cancelYes

  if (cancel === 'True') {
    // redirect to the relevant page
    res.redirect('/maintain-llc/v1/specific-financial')
  } else {
    res.render('maintain-llc/v1/cancel-confirmation')
  }
})*/
module.exports = router
