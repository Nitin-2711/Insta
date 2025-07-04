const express = require('express');
const cors = require('cors');
const {mongoClient} = require("mongodb");
const jwt = require('jsonwebtoken');
const e = require('cors');

app.use(express);

const app = express();
app.post("signup", async(req, res) => {
    let client=new mongoClient(); 
})
