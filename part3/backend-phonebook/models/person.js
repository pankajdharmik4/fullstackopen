const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', false)


const url = process.env.MONGODB_URI


console.log('connecting to', url)

mongoose.connect(url)

  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name:{
    type:String,
    minLength: 3,
    required: true
  },
  number: {
    type:String,
    minlength: 8,
    maxlength: 12,
    validate: {
      validator: function (v) {
        return (/(0([1-9]{1,2})-([0-9]{7}))|(0([0-9]{2})-([0-9]{8}))/).test(v)
      },
      message: props => `${props.value} is not a valid phone number!`,
    },
    required: [true, 'User phone number required']
  }
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Person', personSchema)