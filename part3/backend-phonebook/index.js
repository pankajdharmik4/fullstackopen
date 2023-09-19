const express = require("express")
const app = express()

let data = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons',(req,res)=>{
    res.json(data)
})

app.get('/info',(req,res)=>{
    res.send(`<p>Phonebook has info for ${data.length} people <br/> ${new Date}</p>`)
})

app.get('/api/persons/:id',(req,res)=>{
    const person = data.find((d)=>d.id == req.params.id)
    if(!person){
        res.status(404).end()
    }
    res.json(person)
})


app.delete('/api/persons/:id',(req,res)=>{
    data = data.filter((d)=> d.id != req.params.id);
    res.status(204).end()
})

const PORT = 3001
app.listen(PORT,()=>{
    console.log(`Server is running on PORT: ${PORT}`)
})