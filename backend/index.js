const express = require("express");
const cors = require("cors");
const {mongoClient} = require("mongodb");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());
app.post("signup", async(req, res) => {
    let client=new mongoClient("mongodb://localhost:27017/"); 
    await client.connect();
    let db = client.db("Insta");
    let collection = db.collection("users");
    await collection.insertOne(req.body);
    res.json({"Message":'Data saved'}); (err, result) => {
});
