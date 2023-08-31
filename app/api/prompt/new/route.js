import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt"

export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json()

    try {
        /* this's a lambda function, which will die after it's done
        and we call it when we need it */
        await connectToDB()
        // create new prompt & assign req values to it
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })

        await newPrompt.save()

        return new Response(JSON.stringify(newPrompt), {
            status: 201, // 201 is for successful creation
        })
    } catch (error) {
        return new Response(error, {
            status: 500, // 500 is for internal server error
        })
    }
}