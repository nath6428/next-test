import { connectToDB } from '@utils/database'

export const POST = async (req, res) => {
    const { tutor, time, userId  } = await req.json();
    
    try{
        await connectToDB()''
    } catch(error){
        
    }
}