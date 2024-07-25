import { connectToDB } from '@utils/database'
import Class from '@models/class'



export const GET = async (req, { params }) => {

    try{
        console.log("weve come here")
        await connectToDB();
        const doc = await Class.find({ userId: params.id })
        return new Response(JSON.stringify(doc), { status: 201 });
        
    } catch(error){
        return new Response("Failed to find any classes.", { status: 500 });
    }
}