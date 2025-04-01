const express = require('express')
const connectDB = require("./db.js")
const itemModel = require('./models/Item.js')
const cors =require('cors')


const app = express()
app.use(express.json())
app.use(cors())
connectDB();
 
app.get('/', (req, res) => {
    itemModel.find()
      .then(items => res.json(items)) // ✅ Send resolved data
      .catch(error => res.status(500).json({ error: error.message }));
  });

//itemModel
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("app is running")
})