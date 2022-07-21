const express = require('express')
const router = express.Router()

module.exports = router


 router.use('/loginNew', require('./route/login'))


 /**
 * @swagger
 * /api/swag:
 *   get:
 *     description: Get all books
 *     parameters:
 *      - name: title
 *        description: title of the book
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Created
 */
 router.get('/swag',(req,res)=>{
res.send ("swagggg")
 })