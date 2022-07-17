global.giveme = "1150"
var name2= require('../app');
console.log('fooooooooooooooooo11111111111111',name2 )
const express = require('express')
//const app = require('../index')
const router = express.Router()
// const scan =require('../index') 
// console.log('---->ssssssssAPIINDEX',scan.scan)
let bodyParser = require('body-parser');
module.exports = router
router.get('/loginNew2', (req, res) => {
  console.log('>>>>>>>>>>>>>>>>>>>>>',req)
  res.send(req.body)
  
  // res.send('drreqwrewr')
  // var animal = req.animal_config;
  // res.send(animal.name + ' says ' + animal.says);
})
router.post('/loginNew3', (req, res) => {
  console.log('>>>>>>>>>>>>>>>>>>>>>',req.body)
  res.send(req.body)
  
  // res.send('drreqwrewr')
  // var animal = req.animal_config;
  // res.send(animal.name + ' says ' + animal.says);
})

 router.use('/loginNew',[express.json({ limit: '10mb' })], require('./route/login'))