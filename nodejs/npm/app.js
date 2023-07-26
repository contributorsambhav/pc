const express = require("express")
const app = express();
const port = 80;
const path = require('path')

// for serving static files
app.use("/static",express.static("static"))


// set the template engine as pug
app.set('view engine','pug')

//setting the views dir
app.set('views',path.join(__dirname,'views'))

//our pug demo endpoint
app.get("/demo",((req,res)=>{
    res.status(200).render('demo',{title: " This is pug endpoint ka title",message : "This is pug's demo endpoint"})
}))


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
