const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const loginCtrl = require('../controller/login')
// const app = express()
module.exports = router

// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));
// router.use((req, res, next)=>{
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// })
router.get('/loginNew', (req, res) => {
  res.send('drreqwrewr')
})
router.post('/loginNew4', (req, res) => {
  console.log('>>>>>>>>>>>>>>>>>>>>>',req.body)
  res.send(req.body)
  
  // res.send('drreqwrewr')
  // var animal = req.animal_config;
  // res.send(animal.name + ' says ' + animal.says);
})
// console.log('router-api')
router.post('/loginNewV1',[express.json({ limit: '10mb' })], loginCtrl.login)

// router.use('/loginNew', require('../controller/login'))
// router.use(function (req, res, next) {
//   // ตรวจสอบเงื่อนไขว่ามีการส่ง req.headers['x-auth'] มาหรือไม่ 
//   if (!req.headers['x-auth']) return next('router') // ถ้าไม่มี ให้ออกจาก router แล้วไปทำคำสั่งนอก router ต่อ
//   next() // แต่ถ้ามี ก็ทำคำสั่งใน router ในลำดับถัดไปต่อ
// })

// router.use('/loginNew0a',router, require('../controller/login'))