const express = require('express')
const app = express()
const mysql = require('mysql')
const Parser = require("body-parser");
const cors = require('cors')
const moment = require('moment')

app.use(cors())
app.use(Parser.urlencoded({
    extended: true
  }));

  const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'minip'
  });
  db.connect(function(error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Mysql Connected");
    }
  });


app.get("/", (req, res)=>{
    sqlstmt = "SELECT ID, _key, msg, time_ ,nname FROM (SELECT * FROM msgs natural join userdetails ORDER BY _key DESC LIMIT 10)Var1 ORDER BY _key ASC;";
    db.query(sqlstmt, function(err, result){
        if(err){
            console.log(err);
        }else{
            var mysqlTimestamp = moment(result[0].time_).format('HH:mm');
            result.forEach(obj => obj.time_ = moment(obj.time_).format('HH:mm'))
            res.json(result);
        }
    })
})

app.post("/insert", (req, res)=>{
  let message = req.body.Message;
  let ID = req.body.Id;
  console.log(req.body);
  console.log(ID);
  sqlstmt = "insert into msgs(ID, msg) values( ?, ?);";
  db.query(sqlstmt, [ID, message], function(err, result){
    if(err){
      console.log(err);
    }
  })
})

app.post("/login", (req, res)=>{
  const id = req.body.ID;
  const pass = req.body.Pass;
  const fid = -1;
  sqlstmt = "SELECT pass FROM userdetails WHERE ID = ?";
  db.query(sqlstmt, [id], function(err, result){
    if(err){
      console.log(err);
    }else{
      if(result.length === 0){
        res.json(fid);
      }else{
        if(result[0].pass === pass){
          res.json(id);
        }else{
          res.json(fid);
        }
        
      }
    }
    
  })

})

app.post("/register", (req, res)=>{
  const nickname = req.body.Nname;
  const pass = req.body.Pass;
  sqlstmt = "insert into userdetails(pass, nname) values(?, ?);";
  db.query(sqlstmt, [pass, nickname], function(err, result){
    if(err){
      console.log(err);
    }else{
      res.json(result.insertId)
    }
  })
})


app.listen(3001, ()=>{
    console.log("server started in port 3001")
})