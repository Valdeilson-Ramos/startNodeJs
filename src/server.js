const express = require("express");
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://dropclone:dropclone@cluster0-rsqkf.mongodb.net/test?retryWrites=true', 
    {
        useNewUrlParser: true
    }
)

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(require("./routes"));

/*
const app = express();
app.get("/teste", (req, res) =>{
    return res.send("vai da certo")
})
*/
app.listen(3333);
