
var express = require("express")
// var router = express.Router();
// var mysql = require("mysql");
var app = express()
var PORT = process.env.PORT || 8082
var bodyParser = require('body-parser');

//  const dotenv = require('dotenv');
// const jwt = require('jsonwebtoken');
//  dotenv.config(); 




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})

app.use('/api',(require('./api/index')));

// แบบไม่ทำ route 
const loginCtrl = require('./api/controller/login')
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

// console.log('QQQQQQQQQQQQQQQQQQQQQQqqqqqqqqqqqqqqqqqqQQQQQQQQQQQQQQ',module)