const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');



const routes = express.Router();

const BoxController = require("./controllers/BoxController");
const FileController = require("./controllers/FileController");

routes.post("/boxes/:id/files", BoxController.store); 
routes.post("/files", multer(multerConfig).single("file"), FileController.store);
routes.get("boxes/:id", BoxController.show);

/*
routes.get("/teste", (req, res) =>{
    return res.send("foi !!")
})
*/

module.exports = routes;
