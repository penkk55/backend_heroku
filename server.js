const express = require("express")
// const { json } = require("express/lib/response")
const app = express()
const PORT = process.env.PORT || 8081
// let mysql = require('mysql');

let bodyParser = require('body-parser');

//jwt
// Set up Global configuration access
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();



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

app.get("/:aa", (req, res)=>{
  res.json({
    username: "god",
    password: "666"
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
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  let data = {
    time: Date(),
    userId: 12,
}
  const token = jwt.sign(data, jwtSecretKey);
  
  if(!username || !password) {
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