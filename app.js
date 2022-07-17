
var express = require("express")
var router = express.Router();
var mysql = require("mysql");
var app = express()
var PORT = process.env.PORT || 8082
var bodyParser = require('body-parser');

// var multer = require('multer');
// var upload = multer();

// app.use(upload.array());
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


console.log('BACKEND SSRU_PROJECT is Running...',process.env.JWT_SECRET_KEY)
let dataJwt = {
    time: Date(),
    userId: 12,
  }
  
console.log('------.1',jwt.sign(dataJwt,jwtSecretKey))

// let dataJwt = {
//   time: Date(),
//   userId: 12,
// }

// var token2 = jwt.sign(dataJwt, jwtSecretKey);
// console.log('------.',dataJwt)
// module.exports = {
//                   // jwtSecretKey: jwtSecretKey,
//                   // jwt:jwt 
//                   token2:token2
                 
//                  }
//                 //  let scan = "ssssss"
//                 //  exports.scan = scan
//                 // //  console.log('token====>',token)
//                  console.log('token2======================>',token2)
                var name2 = 'foobar'
                exports.name2 = name2;
                //  console.log('token2====>',typeof token2)
                //  console.log('scan====>',scan)
                console.log('naeedd2====>',name2.name2)

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
// app.use(express.urlencoded())
// app.use(express.json())
// app.use(express.json());

//test
// app.use((req, res, next) => {
//   const headers = { 'Access-Control-Allow-Origin': '*' }
//   for (let i in req.headers) {
//     if (i.toLowerCase().substr(0, 15) === 'access-control-') {
//       headers[i.replace(/-request-/g, '-allow-')] = req.headers[i]
//     }
//   }
//   res.set(headers)
//   if (req.method === 'OPTIONS') {
//     res.send(200)
//   } else {
//     next()
//   }
// })
// var animal_router = require('./animal_router');
// const { AodOutlined } = require("@mui/icons-material");
app.use((req, res, next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})
//new
// var apiPath =require('./api/index')
// app.use('/api', function(req, res){
//   apiPath
//   console.log('ewfwewefwefwefwefewefwef',req.body)
// });
//old
app.use('/api',(require('./api/index')));

// app.use('/api',(require('./api/index')),function (req, res, next) {
//   req.animal_config = {
//       name: 'Cat',
//       says: 'meow'
//   }
//   next();        
// }, animal_router);

// app.use('/birds', animal_router({
//   name: 'Bird',
//   says: 'chirp'
// }));

// app.use('/cats', animal_router({
//   name: 'Cat',
//   says: 'meow'
// }));


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