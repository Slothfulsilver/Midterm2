const express = require('express')
const path = require('path');
const app = express();
const https = require('https');
const res= require("express/lib/response")
const jsdom = require('jsdom')
const bodyParser = require('body-parser')
const { title } = require('process');
const fs= require('fs');
const { json } = require('express/lib/response');

const dom = new jsdom.JSDOM("")

const jQuery = require('jquery')(dom.window)
//jQuery([selector]).[action]

/*app.use(express.urlencoded({ extended:true }));
app.use(express.json());*/
//const router = express.Router();
app.use("/public",express.static('public'));
/*app.engine('html', require('ejs').renderFile);*/
app.set('view engine', 'html');




app.get('/', (req,res)=>{

    res.sendFile(__dirname + '/index.html');
})






//app.use('/', router);
app.listen(process.env.port || 3000);


console.log('Running at port 3000');
