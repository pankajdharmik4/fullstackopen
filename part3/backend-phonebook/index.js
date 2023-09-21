const express = require("express")
const app = express()
const bodyParser = require("body-parser")
var morgan = require('morgan')
const Person = require('./models/person')


app.use(bodyParser())

morgan.token('body', (request) =>
  request.method === 'POST' ? JSON.stringify(request.body) : null
);

app.use(express.static('dist'))

app.use(morgan(':method :url :status :res[content-length] :response-time ms :body'))

app.get('/api/persons',(req,res)=>{
    Person.find({}).then((response)=>res.json(response));
    
})

app.get('/info',(req,res)=>{
    Person.count({}).then((count)=>{
        res.send(`<p>Phonebook has info for ${count} people <br/> ${new Date}</p>`)
    })
    
})

app.get('/api/persons/:id',(req,res)=>{
    Person.findById(req.params.id).then((response)=>{
        if(response){
            res.json(response)
        }else{
            res.status(404).end()
        }
    })
    .catch((error)=>next(error))
})

app.put('/api/persons/:id',(req,res,next)=>{
    const body = req.body
    const person = {
        name: body.name,
        number: body.number
    }
    Person.findByIdAndUpdate(req.params.id,person,{new:true, runValidators: true, context: 'query' })
    .then((updatedPerson)=>{
        res.json(updatedPerson)
    })
    .catch((error)=>next(error))
})

app.delete('/api/persons/:id',(req,res)=>{
    Person.findByIdAndRemove(req.params.id)
    .then((response)=>{
        res.status(204).end()
    })
    .catch((error)=>next(error))
})

app.post('/api/persons',(req,res,next)=>{
    if(!req.body.name || !req.body.number){
        return res.status(400).json({error: 'content missing'})
    }

    // if(data.some((d)=>d.name == req.body.name)){
    //     return res.status(400).json({ error: 'name must be unique' })
    // }

    const newPerson = new Person({
        name:  req.body.name,
        number: req.body.number,
        })
    newPerson.save().then((result)=>{
        res.send(result)
    })
    .catch((error)=>next(error))
})

const errorHandler = (error, request, response, next)=>{
    console.error(error.name)

    if(error.name === 'CastError'){
        return response.status(400).send({error: 'malformatted id'})
    }else if(error.name === 'ValidationError'){
        return response.status(400).json({error:error.message})
    }
    next(error);
}

app.use(errorHandler);

const PORT = process.env.PORT | 3001
app.listen(PORT,()=>{
    console.log(`Server is running on PORT: ${PORT}`)
})