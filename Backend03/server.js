//building our first project 
//1.Create notes ✅
//2.Show all the notes
//3.Delete an note
//4.Update an note


const express = require('express')

const app = express();
app.use(express.json())
/* /notes =>title & description */

let notes = []
app.post('/notes',(req,res)=>{
  console.log(req.body) 
  notes.push(req.body)
  res.json({
    message: "Note added successfully",
    notes: notes
  })
})

app.listen(3000,()=>{
     console.log("Server is running on port 3000");
})