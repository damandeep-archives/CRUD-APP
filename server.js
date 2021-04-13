const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const app=express();
const bodyparser=require('body-parser');
const PORT=process.env.PORT||3000;
const path=require('path');
const connectDB=require('./server/datbase/connection');

dotenv.config({path:'config.env'})

//log request
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parse request to bodyparser
app.use(bodyparser.urlencoded({extended:true}));

//view engine
app.set('view engine','ejs');

//load assets
app.use('/css',express.static(path.join(__dirname,'assets/css')));

app.use('/img',express.static(path.join(__dirname,'assets/img')));

app.use('/js',express.static(path.join(__dirname,'assets/js')));

//load routes
app.use('/',require('./server/routes/router'));


app.listen(PORT,()=>{
    console.log('server started successully');
})