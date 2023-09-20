"use client" // client-side rendering is must when using hooks

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { signIn, signOut, useSession,
getProviders } from 'next-auth/react'
import Loading from './Loading'

const Nav = () => {
  const { data: session} = useSession()

  const [providers, setProviders] = useState(null)
  const [toggleDropdown, setToggleDropdown] = useState(false)

  useEffect(() => {
    const setupProviders = async () => {
      const response = await getProviders()      
      setProviders(response)
    }

    setupProviders()

  }, [])

  return (
    <nav className='flex-between w-full mb-8 pt-3'>
      <Link href="/" className='flex gap-3 md:mr-5 flex-center'>
        {/* <Image 
          src="/assets/images/logo.svg"
          alt='PromptWorld Logo'
          width={30}
          height={30}
          className='object-contain'
        /> */}
        <p className='logo_text sm:mr-6'>PromptWorld</p>
      </Link>

      {/* Dekstop Navigation */}
      <div className='sm:flex hidden'>
        { !session?.user ? (
          <>
          {/* If we have access to providers, then we map over
          providers which come from providers fetch response*/}
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        ): (
          <div className='flex gap-3 md:gap-5'>
            {/* Create Prompt Btn */}
            <Link href='/create-prompt' className='black_btn'>
              Create Prompt
            </Link>

            {/* SignOut Btn */}
            <button type='button' onClick={signOut}
              className='outline_btn'>
              Sign Out
            </button>

            {/* User Profile Pic. */}
            <Link href='/profile'>
              <Image 
                src={session?.user?.image}
                width={44}
                height={44}
                className='rounded-full'
                alt='Profile'
              />
            </Link>
          </div>
        )}
      </div>
      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className="flex">
            <Image 
              src={session?.user.picture}
              width={44}
              height={44}
              className='rounded-full'
              alt='Profile'
              // Below will lead to an unxpected behaviour
              // onClick={() => setToggleDropdown(!toggleDropdown)}
              /* 
                Instead we use the following prev state method 
                to toggle previous state value :
              */
              onClick={() => setToggleDropdown((prev) => 
              !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false)
                    signOut()
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>  
            )}
          </div>
        ): (
          <>
          {/* If we have access to providers, then we map over
          providers which come from providers fetch response*/}
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav