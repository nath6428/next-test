import { connectToDB } from '@utils/database'
import Class from '@models/class'


export const POST = async (req, res) => {
    const { tutor, time, userId  } = await req.json();
    
    try{
        await connectToDB()
        const newClass = new Class({
            tutor, time, userId
        })

        await newClass.save();
        return new Response(JSON.stringify(newClass), { status: 201 })

    } catch(error){
        return new Response("Failed to create class.", { status: 500 })
    }
}
