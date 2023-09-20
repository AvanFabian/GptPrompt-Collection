import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt"

export const GET = async (req, { params }) => {
    const tag = req.params.tag;
    try {
        await connectToDB()
        const relatedTag = await Prompt.find({ tags: tag })
        return new Response(JSON.stringify(relatedTag), {
            status: 200,
        })
        
    } catch (error) {
        return new Response(error, {
            status: 500,
        })
    }
}