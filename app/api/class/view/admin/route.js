import { connectToDB } from '@utils/database'
import Class from '@models/class'



export const GET = async (req, res) => {

    try{
        await connectToDB();
        const doc = await Class.find()
        return new Response(JSON.stringify(doc), { status: 201 });
        
    } catch(error){
        return new Response("Failed to find any classes.", { status: 500 });
    }
}