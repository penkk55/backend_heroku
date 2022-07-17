const express = require('express')
//const app = require('../index')
const router = express.Router()


module.exports = router
router.get('/loginNew2', (req, res) => {
  res.send('drreqwrewr')
})
 router.use('/loginNew', require('./route/login'))