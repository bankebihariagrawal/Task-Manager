const mongoose = require('mongoose')
const validator = require('validator')

const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
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

userSchema.statics.findByCredentials = async (email, password) => {
    const user = User.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}


// Hash the Plain text password before saving and update
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

// const me = new User({ name: 'Sagar', password: 'sagar@1234   ', email: 'banke@gmail.com' })


// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })


module.exports = User