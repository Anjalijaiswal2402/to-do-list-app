const express = require('express');
const mongoose = require('mongoose')
const app =express();

mongoose.connect("mongodb://localhost/todolist_express",{
    
})
const port =8000;
app.listen (port,function(err){
if (err){
    console .log (`Error is running the server:$ {err}`);

}
console.log (`Server is running on port:$ {port}`);
});
