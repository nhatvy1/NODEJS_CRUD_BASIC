require('dotenv').config()
const configViewEngine = require('./configs/viewEngine')
const express = require('express')
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT 
const hostname = process.env.HOST_NAME

configViewEngine(app)

app.use('/' ,webRoutes)


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})