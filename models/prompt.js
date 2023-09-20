import { Schema, model, models } from 'mongoose'

const PromptSchema = new Schema({
    creator: {
        /* The creator is going to be document in database, more 
        specifically, the user type
        */
        type: Schema.Types.ObjectId,
        // one-to-many relationship. One user can have many prompts
        ref: 'User', 
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required'],
    },
    tags: {
        type: Array,
        required: [true, 'Tag is required'],
    },
})

/* This's regular express backend model instance :
    const User = model('User', UserSchema)
    But a better approach is to check if the model already exists or 
    not. If it does, use that model, otherwise, create a new one.
*/ 
const Prompt = models.Prompt || model('Prompt', PromptSchema)

export default Prompt