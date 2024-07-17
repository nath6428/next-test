import mongoose, { Mongoose } from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    
    mongoose.set('strictQuery' , true);

    if(isConnected){
        console.log("Database connected.");
        return;
    } else{
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                dbName: "SkyTutors",
                useNewUrlParser: true,
                useUnifiedTopology: true;
            })

            isConnected = true;
            return;
        } catch (error) {
            console.log("Database connection failed.");
            console.log(error);
            
        }
    }
}