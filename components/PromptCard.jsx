'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'

const PromptCard = ({ post, handleTagClick, handleEdit,
handleDelete }) => {
  const [copied, setCopied] = useState(false)

  return (
    <div className='prompt_card flex-1'>
      <div className='flex justify-between items-start '>
        <div className=' flex flex-3 justify-start items-center
        gap-3 cursor-pointer'> {/* cursor pointer to indicate its clickable */}
          <Image 
            src={post.creator.image}
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />
          <div className='flex flex-col'>
            <p className='font-satoshi font-semibold text-[20px]
            text-[#f3eeee] subpixel-antialiased'>
              {post.creator.username}
            </p>
            <p className='font-inter text-[13px]
            text-[#f3eeee] subpixel-antialiased'>
              {post.creator.email}
            </p>
          </div>
        </div>
        
        <div className='copy_btn absolute top-[5px] right-[5px]' onClick={() => {}}>
          <Image 
            src={copied === post.prompt
            ? '/assets/icons/tick.svg'
            : '/assets/icons/copy.svg'
            } 
            width={21}
            height={21}
          />
        </div>
      </div>
      <div className='flex justify-between items-start mt-3'>
        <div className='flex flex-col'>
          <p className='font-sans text-[#f8ecde] text-xs subpixel-antialiased'>
            {post.prompt}
          </p>
          <p className='font-sans text-[15px] subpixel-
          antialiased disabled:opacity-75 mt-3 text-[#ebebeb]'>
            {post.tag}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PromptCard