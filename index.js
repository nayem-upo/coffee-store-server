// Making a server

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors)
app.use(express.json())

// for start server example
//server step 1
app.get('/', (req, res)=>{
    res.send(`Coffee shop server is running`)
})

//server step 2
app.listen(port, ()=>{
    console.log(`Coffee server is running on port ${port}`);
})