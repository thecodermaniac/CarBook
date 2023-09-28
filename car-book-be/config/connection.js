import mongoose from 'mongoose'
import env from 'dotenv'

env.config()

const dbConnection = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            autoIndex: true
        })
        console.log(`MongoDB connected successfully : ${connect.connection.host}`)
    } catch (error) {
        console.log(`error while connectiong to Mongo database: ${error.message}`)
        process.exit(1)
    }
}

export default dbConnection
