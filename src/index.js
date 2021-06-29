const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const Tasks = require('./models/tasks')
const User = require('./models/users')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on ' + port)
})

// uplaod code test
// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a word document'))
//         }

//         // cb(new Error('file must be a PDF'))
//         cb(undefined, true)
//         // cb(undefined , false)
//     }
// })
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })






// const main = async () => {
    // const task = await Tasks.findById('60d6f42c2615413f54593fc0')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

//     const user = await User.findById('60d6f59548326538e462021c')
//     await user.populate('tasks').execPopulate()    
//     console.log(user.tasks)
// }

// main()

// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse' , { expiresIn : '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()

