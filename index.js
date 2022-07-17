
const express = require("express")
const router = express.Router();
const mysql = require("mysql");
const app = express()
const PORT = process.env.PORT || 8082
let bodyParser = require('body-parser');
// const { json } = require("express/lib/response")

// let mysql = require('mysql');

//jwt
// Set up Global configuration access
 const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
//  module.exports = {jwt,dotenv}
 dotenv.config(); 

 const loginCtrl = require('./api/controller/login')
 let jwtSecretKey = process.env.JWT_SECRET_KEY;


console.log('BACKEND SSRU_PROJECT is Running...')
let dataJwt = {
  time: Date(),
  userId: 12,
}
let token2 = jwt.sign(dataJwt, jwtSecretKey);
console.log('------.',dataJwt)
module.exports = {
                  // jwtSecretKey: jwtSecretKey,
                  // jwt:jwt 
                  token2:token2
                 }
                //  console.log('token====>',token)
                 console.log('token2====>',token2)

// let dbCon = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root999',
//   database: 'nodejs_api'
// })

// app.get("/", (req, res)=>{
//     res.json({result: "ok", data:[1,2,3,4,5]})
// })

// body parse middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended:false}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//test

app.use('/api',(require('./api/index')))

// module.exports = router;


 app.post('/api/loginNew0', [bodyParser.json({ limit: '10mb' })], loginCtrl.login)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/1", (req, res)=>{
  res.json({
    data:[
    {
      id: "0",
      username: "god",
      password: "666"
    },
    {
      id: "1",
      username: "penk",
      password: "1234"
    },
    {
      id: "2",
      username: "not",
      password: "1234"
    },
    {
      id: "3",
      username: "nut",
      password: "1234"
    }
    ]  
  })
  // res.send('test' + req.params.aa)
})
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})
// app.put("/api/login", (req, res)=>{
//   res.json({result: "ok", data:[1,2,3,4,5]})
// })
app.post("/api/login", (req, res)=>{
  let username = req.body.username
  let password = req.body.password
  // res.send(req.body)
  
 
  let dataJwt = {
    time: Date(),
    userId: 12,
}
  const token = jwt.sign(dataJwt, jwtSecretKey);
  console.log('------.',dataJwt)
  
  if((username !="god" && username !="penk" &&username != "nut" && username !="not") || (password != "666" && password !="1234")) {
    return res.status(400).send({ 
      status: "error",
      message: "Login failed"
    });
  }
  else {
    return res.send({
      status: "ok",
      message: "Logged in",
      accessToken: token,
      user : {
        username: req.body.username,
        password: req.body.password
      }
      
    })
   
  }
})
  


app.listen(PORT,()=>{
  console.log(`server is running${PORT}`)
})
