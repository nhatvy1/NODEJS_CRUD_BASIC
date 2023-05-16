require('dotenv').config()
const configViewEngine = require('./configs/viewEngine')
const express = require('express')
const webRoutes = require('./routes/web')
const connection = require('./configs/dbConnection')
const app = express()
const port = process.env.PORT 
const hostname = process.env.HOST_NAME

// config req.body
app.use(express.json())
app.use(express.urlencoded({extended: true}))


configViewEngine(app)

app.use('/' ,webRoutes)



// simple query
connection.query(
    'SELECT * FROM Users u',
    function(err, results, fields) {
      console.log('Result: ', results); // results contains rows returned by server
      // console.log('Fields: ', fields); // fields contains extra meta data about results, if available
    }
  );


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})