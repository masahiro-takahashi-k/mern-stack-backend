const mongoose = require("mongoose")

const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://masahiro29:Kgit4pn1Kgit4pn1@cluster0.xrsayqt.mongodb.net/appDataBase?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected to MongoDB")
    }catch(err){
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()
    }
}

module.exports = connectDB