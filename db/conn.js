const mongoose = require('mongoose')

async function main() {
    try {
        //  mongoose.set('strictQuery', false)

        await mongoose.connect('mongodb://127.0.0.1:27017/users')

        //await mongoose.connect('mongodb://root:root@mongo:27019/users')

    } catch (error) {
        console.error(error)
    }
}

module.exports = main