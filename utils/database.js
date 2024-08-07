import mongoose, { Mongoose } from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    
    mongoose.set('strictQuery' , true);

    if(isConnected){
        return;
    } else{
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                dbName: "SkyTutors",
                useUnifiedTopology: true
            })

            isConnected = true;
            return;
        } catch (error) {
            console.log("Database connection failed.");
            console.log(error);
            
        }
    }
}