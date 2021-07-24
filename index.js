const express = require("express");
const app = express();
app.use(express.static(__dirname + '/'));
app.listen(6040,()=>{
    console.log('app live in port 6040')
})