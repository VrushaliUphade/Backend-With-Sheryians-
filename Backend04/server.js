const express = require('express');

const app = express();
app.use(express.json());
let notes = []
app.get('/',(req,res)=>{
    res.send('Hello,world!');
})
//POST /notes => {title , content}
app.post('/notes',(req,res)=>{
    console.log(req.body);   

    notes.push(req.body)
    res.json({
        message:"note create successfully",

    })
})
//server notes -> frontend
app.get('/notes',(req,res)=>{
    res.json(notes);
})

//Delete /notes/:index
app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index
    delete notes[index]
    res.json({
        message:"note deleted successfully"
    })
})
//Patch /notes/:index => {title}
app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index
    const{title} = req.body

    notes[index].title = title
    res.json({
        message:"note updated successfully",
    })
})

app.listen(3000,()=>{
    console.log('Server running on port 3000');
    
})