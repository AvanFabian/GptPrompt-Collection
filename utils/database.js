import mongoose from "mongoose";

let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    // If there is already a connection, do nothing
    if (isConnected) {
        console.log("=> using existing database connection")
        return
    }

    // If not connected, create a new connection
    try {
        // URI of mongodb atlas instance
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI, {
            dbName: 'cluster0',
            // Options to fix all deprecation warnings
            // useNewUrlParser: true, 
            // used for monitoring engine deprecation warnings
            // useUnifiedTopology: true,
        })

        isConnected = true
        console.log("=> conected to database successfully")
        
    } catch (error) {
        console.log("=> error connecting to database: ", error)
    }
}