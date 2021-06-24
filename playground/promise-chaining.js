require('../src/db/mongoose')
const User = require('../src/models/users')


// User.findByIdAndUpdate('60cd97de58bdda37acb5d576', { age: 19 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 19 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return {user , count}
}

updateAgeAndCount('60cd97de58bdda37acb5d576' , 21).then(({user , count}) => {
    console.log(count , user)
}).catch((e) => {
    console.log(e)
})