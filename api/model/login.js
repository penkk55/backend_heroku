const model = {}

model.getUserData = async (trx,table) =>{
  
   console.log('CCCCCCCCCCCCCC',table)
   let result = await trx.raw(`select  id, username, PASSWORD, nickname, firstname, lastname, fullname, role, admin_id, student_id, teacher_id 
   from user
   where username = 'penk'
   and password = 'zaq1' `).then(data => JSON.parse(JSON.stringify(data[0])))
   console.log('54555555555555555555555555555555555555555555',result)
   // var string =JSON.stringify(result[0])
   // console.log('>> string: ', string );
   // var json =  JSON.parse(string);
   // console.log('>> json: ', json[0]);
   // console.log('>> user.name: ', json[0].id);
   // var test = JSON.parse(JSON.stringify(result[0]))
   // console.log('>> test: ', test[0].id);

   return result
}

module.exports = model