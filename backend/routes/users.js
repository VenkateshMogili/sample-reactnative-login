var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',//username
  password:'root',//password
  database:'reactdatabase'//database name
});
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

 console.log('connected as id ' + connection.threadId);
});
/* User Login */
router.post('/', function(req, res, next) {
  console.log(req.body);
  var username=req.body.username;
  var password=req.body.password;
  if(!username || !password){
    res.send({'success':false,'message':'Please fill all the fields'});
  } else{
  connection.query("SELECT * FROM users WHERE username=? AND password=?",[username,password],function(err,row,fields){
    if(err) console.log(err);
    if(row.length>0){
      res.send({'success':true,'message':row[0].username});
    } else{
      res.send({'success':false,'message':'User not found, Please try again'});
    }
  });
}
});
/*User registration*/

router.post('/addUser', function(req, res, next) {
  var details=req.body;
  if(!details.username || !details.password){
    res.send({'success':false,'message':'Please fill all the fields'});
  } else{
  connection.query("SELECT * FROM users WHERE username = ?",[details.username],function(err,row,fields){
    if(row.length>0){
      res.send({'success':false,'message':'User Already Exists'});
    } else{
      connection.query("INSERT INTO users SET ?",[details],function(err,result){
        if(err) throw err;
        res.send({'success':true,'message':'Registered Successfully'});
      })
    }
  });
}
});

/*forgot password not implemented completely*/
router.post('/forgotPassword', function(req, res, next) {
  var details=req.body;
  if(!details.username){
    res.send({'success':false,'message':'Please fill all the fields'});
  } else{
  connection.query("SELECT * FROM users WHERE username = ?",[details.username],function(err,row,fields){
    if(row.length>0){
      res.send({'success':true,'message':'Reset Password Link Sent To Your Email Successfully'});
    } else{
      res.send({'success':false,'message':'User Not Found!'});
    }
  });
}
});

module.exports = router;
