const mongoose = require('mongoose')

// database name is different beacuse mongoose data look different
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })


