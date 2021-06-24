const mongoose = require('mongoose')

const Tasks = mongoose.model('Tasks', {
    Description: {
        type: String,
        trim: true,
        required: true
    },
    Completed: {
        type: Boolean,
        default: false
    }
})




// const FirstTask = new Tasks({ Description: 'Go to market' , Completed: true})

// FirstTask.save().then(() => {
//     console.log(FirstTask)
// }).catch((e) => {
//     console.log(e)
// })

module.exports = Tasks
