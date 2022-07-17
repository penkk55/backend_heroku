const mysql = require('../../database/mysql')
const loginModel = require('../model/login')
// const { lineNotify } = require('../model/stockMovement')
// const moment = require(moment)
const ctrl = {}
console.log('ctrl-api')

// const dotenv = require('dotenv');
//  const jwt = require('jsonwebtoken');
// //  dotenv.config(); 
// let jwt =require('../../index')
//  let jwtSecretKey =require('../../index')
const token2 =require('../../index') 
console.log('---->inCTRL',token2)
ctrl.login = async (req,res)=>{
  
  
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
      let result1 = await loginModel.getUserData(mysql,'user')
      // console.log('ctrlresult11',JSON.parse(JSON.stringify(result1[0].id)))
      // console.log('ctrlresult11Lenghrt',result1.length)
      $scope = result1[0]
      res.send({
        status: "ok",
        message: "Logged in",
        accessToken: token2,
        data:$scope,
        data2:$scope.username
      })
        if(result1.length>=0){
            console.log('result1==============>',)
            // moment().format('DD-MM-YYYY HH:mm:ss'))
              // await stockMovementModel.lineNotify1("SP_UPDATE_OPENSHOP")
   
            
        }

  }catch(e){
      console.log('---->e',e)

      
  }
}
module.exports = ctrl