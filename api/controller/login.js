var name2= require('../../app.js');
console.log('fooooooooooooooooo0000000000000000000000000',name2 )
var name007= require('../moduleRest.js');
console.log('fooooooooooooooooo0000000000000000000000000',name007 )
const mysql = require('../../database/mysql')
const loginModel = require('../model/login')
global.giveme = '44'
console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',giveme)

var token10 = require('../../libs/utility')
console.log('oooooooooooooooooOOOOOOOOOooo',token10)
var token11 = token10.token10
console.log('oooooooooooooooooOOOOOOOOOooo222',token11)
// const { lineNotify } = require('../model/stockMovement')
// const moment = require(moment)
// const express = require('express');
// const router = express.Router();
// const bodyParser = require('body-parser');
// const scan =require('../../index.js') 
// console.log('---->ssssssssAPICTRL',scan)
const PORT = process.env.PORT || 8082
const ctrl = {}
console.log('ctrl-api')
var bodyParser = require('body-parser');
const dotenv = require('dotenv');
 const jwt = require('jsonwebtoken');
 dotenv.config(); 
// let jwt =require('../../index')
//  let jwtSecretKey =require('../../index')
var token2 =require('../../app.js') 
console.log('----PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP>inCTRL',token2)
const express = require('express');
const router = express.Router();
router.post('/loginNew5', (req, res) => {
  console.log('>>>>>>>>>>>>>>>>>>>>>',req.body)
  res.send(req.body)
  
  // res.send('drreqwrewr')
  // var animal = req.animal_config;
  // res.send(animal.name + ' says ' + animal.says);
})
ctrl.login = async (req,res)=>{
  console.log('booody------------------------',req.body)
  
//   let dataJwt = {
//     time: Date(),
//     userId: 12,
// }
  // let token = jwt.sign(dataJwt, jwtSecretKey);
  // console.log('------.3',jwt.sign(dataJwt))
  // let today = new Date()
  // let now = moment(today).format('DD-MM-YYYY HH:mm:ss')
  $scope={}
  try{
      let result1 = await loginModel.getUserData(mysql,req.body.username,req.body.password)
      // console.log('ctrlresult11',JSON.parse(JSON.stringify(result1[0].id)))
      // console.log('ctrlresult11Lenghrt',result1.length)
      console.log('jwtSecretKey--->',process.env.JWT_SECRET_KEY)
      let dataJwt = {
        time: Date(),
        userId: 12,
    }
    console.log('datajwt---->',dataJwt)
      let jwtSecretKey =  process.env.JWT_SECRET_KEY
      
        
  let token3 = jwt.sign(dataJwt, jwtSecretKey);
  console.log('------.3',jwt.sign(dataJwt,jwtSecretKey))
  let today = new Date()
  // let now = moment(today).format('DD-MM-YYYY HH:mm:ss')
      $scope = result1[0]
      
        res.send({
          status: "ok",
          message: "Logged in",
          accessToken: token3,
          data:$scope,
          data2:$scope.username
        })
    
        if(result1.length>=0){
            console.log('result1==============>',)
            // moment().format('DD-MM-YYYY HH:mm:ss'))
              // await stockMovementModel.lineNotify1("SP_UPDATE_OPENSHOP")
   
            
        }

  }catch(e){
    res.status(400).send({ 
      status: "error",
      message: "Login failed"
    });
      console.log('---->e',e)

      
  }
}
module.exports = ctrl
// module.exports = router