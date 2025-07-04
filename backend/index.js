const express = require("express");

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

app.post("Login", async(req, res) => {
    let client=new mongoClient("mongodb://localhost:27017/"); 
    await client.connect();
    let db = client.db("Insta");
    let collection = db.collection("users");
    let email = req.body.email;
    let password = req.body.password;

    let row=await collection.findOne({"email": email});
    if(row == null) {
        res.json({"Message":'User not found'});
       return;
    }
    
    res.json({"Message":'Data saved'}); (err, result) => {
});
