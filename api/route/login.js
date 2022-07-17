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

console.log('router-api')
router.post('/loginNewV1', [bodyParser.json({ limit: '10mb' })], loginCtrl.login)