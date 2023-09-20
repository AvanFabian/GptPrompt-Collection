import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt"

export const POST = async (req) => {
    const { userId, prompt, tags } = await req.json()
    
    // Ensure that tags is a string and not empty
    if (typeof tags !== 'string' || !tags.trim()) {
        throw new Error('Tags must be a non-empty string.');
      }
      
    try {
        /* this's a lambda function, which will die after it's done
        and we call it when we need it */
        await connectToDB()

        // Split tags by "#" symbol
        const tagsArray = tags.split(/(?=#)/).map(tag => {
            // Remove extra "#" symbols and trim the tag
            const cleanedTag = tag.replace(/#/g, '').trim();
            // Add "#" symbol back if it's not empty
            if (cleanedTag.length > 0) {
              return ` #${cleanedTag}`;
            }
            return '';
          }).filter(Boolean); // Remove empty tags

        // create new prompt & assign req values to it
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tags: tagsArray,
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