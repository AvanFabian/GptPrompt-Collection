'use client'

import { useState, useEffect} from 'react'

import PromptCard from './PromptCard'
import { useSession } from 'next-auth/react'

const PromptCardList = ({ data, handleTagClick }) => {

  return (
    // Show the data and create a cards
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard 
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const { data: session} = useSession()
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])

  const handleSearchChange = (e) => {
    e.preventDefault()
    setSearchText(e.target.value)
  }

  // fetch the data
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json()
      setPosts(data)
      console.log(data)
    }

    fetchPost()
  }, [])
  

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input 
          type="text" 
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      {session?.user ? (
        <PromptCardList 
          data={posts}
          handleTagClick={() => {}}
        />
      ):(
        <div></div>
      )}
    </section>
  )
}

export default Feed