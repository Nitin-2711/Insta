const express = require("express");
const cors = require("cors");
const {mongoClient} = require("mongodb");
const jwt = require("jsonwebtoken");const app = require();

app.use(express);

const app = express();
app.post("signup", async(req, res) => {
    let client=new mongoClient("mongodb://localhost:27017/"); 
    let collection =db.collection("users");
     await collection.insertOne(req.body);
     res.json({"message": "User signed up successfully!"});

})
