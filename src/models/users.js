const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 15,
        validate(value) {
            if (value < 0) {
                throw new Error('Age Must be a Positive number')
            }
        }
    }
})

// const me = new User({ name: 'Sagar', password: 'sagar@1234   ', email: 'banke@gmail.com' })


// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })


module.exports = User