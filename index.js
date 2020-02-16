const express = require("express");
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const users = require('./routes/api/users');
const service=require('./routes/api/service');

const app = express();


//Body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//db Config
const db=require('./config/keys').mongoURI;


//conect to Mongodb
mongoose
 .connect(db)
 .then(() => console.log('MongoDB connected'))
 .catch( err => console.log(err))

// app.use('/', (req,res) =>{
//     res.send("Hello");
// })

//Use Routers to route
app.use('/api/users',users);
app.use('/api/service',service);


const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);