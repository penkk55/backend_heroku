const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
 dotenv.config(); 

 let dataJwt = {
  time: Date(),
  userId: 12,
}

let jwtSecretKey =  process.env.JWT_SECRET_KEY
       
let token10 = jwt.sign(dataJwt, jwtSecretKey);

module.exports = {token10:token10}