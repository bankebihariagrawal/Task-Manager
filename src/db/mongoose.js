const mongoose = require('mongoose')

// database name is different beacuse mongoose data look different
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })