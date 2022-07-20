const mysql = require('../../database/mysql')
const loginModel = require('../model/login')
const ctrl = {}
// console.log('ctrl-api')

var token10 = require('../../libs/utility')
// console.log('oooooooooooooooooOOOOOOOOOooo',token10)
var TOKEN = token10.token10
// console.log('oooooooooooooooooOOOOOOOOOooo222',TOKEN)


ctrl.login = async (req,res)=>{
  console.log('booody------------------------',req.body)
  
  $scope={}
  try{
      let result1 = await loginModel.getUserData(mysql,req.body.username,req.body.password)
      // console.log('ctrlresult11',JSON.parse(JSON.stringify(result1[0].id)))
      // console.log('ctrlresult11Lenghrt',result1.length)
      
  // let now = moment(today).format('DD-MM-YYYY HH:mm:ss')
      $scope = result1[0]
      
        res.send({
          status: "ok",
          message: "Logged in",
          accessToken: TOKEN,
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