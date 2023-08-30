import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import User from "@models/user"
import { connectToDB } from "@utils/database"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    // FInally we need to get user data every time to keep an 
    // existing and active session
    async session({ session}) {
        const sessionUser = await User.findOne({
            email: session.user.email,
        })

        // update session user with database user
        // to let admin know which user is online
        session.user.id = sessionUser._id

        return session
    },
    async signIn({ profile }) {
        try {
            await connectToDB()

            // check if user exists in database
            const userExists = await User.findOne({ 
                email: profile.email 
            })

            // if not, create new user and save to database
            if (!userExists) {
                await User.create({
                    email: profile.email,
                    // replace input spaces with no spaces
                    username: profile.name.replace
                    (" ", "").toLowerCase(),
                    image: profile.picture,
                })
            }
            return true
        } catch (error) {
            console.log("=> error signing in: ", error)
            return false            
        }
    }
})

// Usefull for visual documentation
export { handler as GET, handler as POST}