'use client'
import Feed from '@components/Feed'
import { useLottie } from "lottie-react"
import robot_animated from '@assets/animations/robot_animated3.json'

import { TypeAnimation } from 'react-type-animation'
import { useState, useEffect } from 'react'

const RobotAnimation = () => {
    // const [windowSize, setWindowSize] = useState({
    //     winWidth: window.innerWidth,
    //     winHeight: window.innerHeight,
    // })

    // const detectSize = () => {
    //     setWindowSize({
    //         winWidth: window.innerWidth,
    //         winHeight: window.innerHeight,
    //     })
    // }

    // useEffect(() => {
    //     window.addEventListener('resize', detectSize)
    //     return () => {
    //         window.removeEventListener('resize', detectSize)
    //     }
    // }, [windowSize])

    // // Large robot animation
    // const style1 = {
    //     width: 450,
    //     height: 550,
    // }
    // // Small robot animation
    const style2 = {
        width: 650,
        height: 550,
    }

    const options = {
        animationData: robot_animated,
        loop: true,
        // autoplay: true,
    }

    // Check window size to determine which animation to use
    // if (windowSize.winWidth < 868) {
        // const { View } = useLottie(options, style1)
        // return View
    // } else {
    const { View } = useLottie(options, style2)
    return View
    // }
}

const Home = () => {
    return (
        // Using class below, so elements will be full below another
        <section className="w-full flex-center flex-col">
            <div className='flex space-x-4 py-8 flex-col lg:flex-row
                justify-between'>
                <div className='gap-3 self-center'>
                    <h1 className="head_text text-center ">
                        {/* <span> Discover & Find</span>  */}
                        <TypeAnimation
                            sequence={[
                                'Discover & Find', // Types 'Discover'
                                1000, // Waits 1s
                                'Discover & Find', // Types 'Discover'
                                1000, // Waits 1s
                                '', // Types ''
                                500, // Waits 0.5s
                                () => {
                                    console.log('Sequence completed')
                                },
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                        />
                    </h1>
                    <h1 className="subhead_text text-center ">
                        <span className="orange_gradient">
                            Best AI Prompts for Your Business
                        </span>
                    </h1>
                    <p className="desc text-center ">
                        PromptWorld is a platform for discovering and
                        sharing AI prompts.
                    </p>
                </div>

                <div className='animate-bounce-slow'>
                    <RobotAnimation />
                </div>
            </div>


            <Feed />
        </section>
    )
}

export default Home