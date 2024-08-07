import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required'],
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        match: [/^(?=.{8,150}$)(?![.])(?!.*[.]{2})[а-яА-Яa-zA-Z0-9.]+(?<![.])$/,
        "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"
        ]
    },
    image: {
        type: String,
    }
})

/* This's regular express backend model instance :
    const User = model('User', UserSchema)
    But a better approach is to check if the model already exists or 
    not. If it does, use that model, otherwise, create a new one.
*/ 
const User = models.User || model('User', UserSchema)

export default User