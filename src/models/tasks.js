const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Tasks = mongoose.model('Tasks', taskSchema)




// const FirstTask = new Tasks({ Description: 'Go to market' , Completed: true})

// FirstTask.save().then(() => {
//     console.log(FirstTask)
// }).catch((e) => {
//     console.log(e)
// })

module.exports = Tasks
