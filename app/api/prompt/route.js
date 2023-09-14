import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt"

export const GET = async () => {
    try {
        await connectToDB()

        const prompts = await Prompt.find({}).populate('creator')

        return new Response(JSON.stringify(prompts), {
            status: 200, // 200 is for successful request
        })
    } catch (error) {
        return new Response(error, {
            status: 500, // 500 is for internal server error
        })
    }
}