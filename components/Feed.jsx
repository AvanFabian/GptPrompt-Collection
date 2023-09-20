'use client'

import { useState, useEffect} from 'react'

import PromptCard from './PromptCard'
import { useSession } from 'next-auth/react'

const PromptCardList = ({ data, handleTagClick, 
  filteredTagPosts, filteredSearchInputPosts }) => {

  return (
    // Show the data and create a cards
    <div className='mt-16 prompt_layout'>
      {/* First check if user has clicked on a tag */}
      {filteredTagPosts.length !== 0 ? (
        filteredTagPosts.map((post) => (
          <PromptCard 
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))
        // If not, check if user has typed in the search input
        ): (filteredSearchInputPosts.length !== 0) ? (
          filteredSearchInputPosts.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleTagClick={handleTagClick}
            />
          ))
        // If not, show all the posts
        ) : (
          data.map((post) => (
            <PromptCard 
              key={post._id}
              post={post}
              handleTagClick={handleTagClick}
            />
          ))
        )
      }
    </div>
  )
}

const Feed = () => {
  const { data: session} = useSession()
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])


  // Filter Posts Based on Selected Tag:
  const filteredTagPosts = selectedTag
  ? posts.filter((post) => post.tags.includes(selectedTag))
  : posts;

  // Filter Posts Based on Search input Text:
  const filterPosts = (posts, searchText) => {
    return posts.filter((post) => {
      // Check if the post's tags include the search text
      const tagMatch = post.tags.some((tag) =>
        tag.toLowerCase().includes(searchText.toLowerCase())
      );
      // Check if the post's username includes the search text
      const usernameMatch = post.username?.toLowerCase().includes(searchText.toLowerCase());
      return tagMatch || usernameMatch;
    });
  };  

  // Filter the posts based on the search input
  const filteredSearchInputPosts = filterPosts(posts, searchText);

  // handle the search Value
  const handleSearchChange = (e) => {
    e.preventDefault()
    setSearchText(e.target.value)
  }

  // handle the enter key press on the search input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setSelectedTag(searchText)
      setSearchText('')
    }
  }

  // fetch the posts from the database
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
          onKeyDown={handleKeyPress}
          required
          className='search_input peer'
        />
      </form>

      {session?.user ? (
        <PromptCardList 
          data={posts}
          filteredTagPosts={filteredTagPosts}
          filteredSearchInputPosts={filteredSearchInputPosts}
          handleTagClick={
            (e, tag) => {
              e.preventDefault()
              setSelectedTag(tag)
            }
          }
        />
      ):(
        <div className='flex my-10 flex-center'>
          <div>
            <p className='font-satoshi text-[#fff2f2] font-semibold text-[20px]'>
              Please sign in to view the feed
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Feed