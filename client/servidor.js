var express = require('express')
var app = express()


app.use(express.static("dist/client"));

app.listen(9090)
