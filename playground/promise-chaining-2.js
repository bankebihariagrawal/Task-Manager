require('../src/db/mongoose')
const Task = require('../src/models/tasks')

// Task.findByIdAndDelete('60cf32a6f666a10738b279b2').then((task) => {
//     console.log(task)
//     return Task.countDocuments({})
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.count({})
    return count
}

deleteTaskAndCount('60cd947bc5236b4038cb7740').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e);
})
