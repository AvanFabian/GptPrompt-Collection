'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Form from '@components/Form'
import { set } from 'mongoose'
import session from 'express-session'

const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false)
    /* modifying the state object without creating a new object 
    can lead to unexpected behavior. React relies on immutability to 
    efficiently track changes and trigger re-renders, and creating a 
    new object (or we call it SPREAD the state) with the updated 
    property ensures that React can accurately detect the change and 
    update the component accordingly
    */
    const[post, setPost] = useState({
        prompt: '',
        tag: '',
    })

    const createPrompt = async (e) => {
        e.preventDefault()
        setSubmitting(true) // later we can use this as a loader

        try {
            // we're getting the data using fetch API and POST method
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify(
                    {
                        prompt: post.prompt,
                        userId: session?.user.id,
                        tag: post.tag,
                    }
                ),
            })

            if(response.ok){
                /* This method pushes a new entry into the history 
                stack, so when the user clicks the browser back button 
                they will be taken to the previous URL.
                */
                router.push('/')
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <Form 
        type='Create'
        post={post} // post is a prop with "Dictionary" type
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt