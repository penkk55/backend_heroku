const express = require("express")
const app = express()
const PORT = process.env.PORT || 8081
// let mysql = require('mysql');


// let dbCon = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root999',
//   database: 'nodejs_api'
// })

// app.get("/", (req, res)=>{
//     res.json({result: "ok", data:[1,2,3,4,5]})
// })

app.get("/", (req, res)=>{
  res.json({
    username: "godwqdqwdqwdqw",
    paswword: "666"
  })

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

  if(username || password) {
    return res.json({
      username: "god",
      paswword: "666"
    })
  }
  
})

app.listen(PORT,()=>{
  console.log(`server is running${PORT}`)
})