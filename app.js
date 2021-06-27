
const express = require('express');

const app = express();


app.get("/", (req, res) => {

    res.send("hello from the express");

})


app.get("/about", (req, res) => {

    res.status(200).send("hello from the about");

})
app.get("/contact", (req, res) => {

    res.status(200).send("hello from the contact");

})
app.get("/temp", (req, res) => {

    res.status(200).send("hello from the temp");

})

// app.get("/h", (req, res) => {

//     res.status(404).send([
//         {

//             name: "vishal",
//             id: 2
//         },
//         {

//             name: "vishal",
//             id: 2
//         },
//         {

//             name: "vishal",
//             id: 2
//         },
//     ]);

// })



app.listen(8000, () => {
    console.log("listen port 8000")
})