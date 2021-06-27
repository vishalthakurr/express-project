
const express = require('express');
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

// console.log(path.join(__dirname,"./public"))
const staticpath = path.join(__dirname,"./public");


//to set the view engine
app.set("view engine","hbs");

// app.use(express.static(staticpath));

//template engine   route

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/", (req, res) => {

    res.send("hello from the express");

});
// app.get("/about", (req, res) => {

//     res.send("about");

// });

// app.get("/about/*",(req,res)=>{              //locahost:2000fabout/dvnf  err
//     res.render("404",{
//         err :" page about not found 404"
//     })
// })




app.get("*",(req,res)=>{
    res.render("404",{
        err :" page not found 404"
    })
})



app.listen(port, () => {
    console.log(`${port}`)
});