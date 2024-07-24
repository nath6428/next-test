import mongoose, { Schema, model, models } from "mongoose";

const ClassSchema = new Schema({
    tutor:{
        type: String,
        required: [true, 'Tutor is required.']
    },
    time:{
        type: Number
        required: [true, 'Time is required.']
    },
    userId:{
        type: Schema.Types.ObjectId
    }
})


const Class = models.Class || new Model("Class", ClassSchema)

export default Class;


// Making class prompt 