const express = require("express")

const app = express();

const port = 80;

app.get("/",((req,res)=>{
    res.send("This is home page of my first Express app get request")
}))


app.post("/",((req,res)=>{
    res.send("This is about page of my first Express app post request")
}))

app.get("/about",((req,res)=>{
    res.send("This is about page of my first Express app")
}))



app.listen(port,(()=>{
    console.log("The application started succesfully on port "+port)
}))
