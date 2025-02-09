import React from 'react'

const About = () => {
    return (
        <div className='h-screen w-screen snap-center flex justify-between items-center bg-gradient-to-br from-gray-900 to-amber-900/90'>
            <div className='flex flex-col ml-10 space-y-10 w-1/2 my-10'>
                <h1 className=' text-3xl text-white md:text-5xl font-bold'>
                    ABOUT HACK 5.0
                </h1>
                <p className='md:text-2xl text-lg text-white'>
                Welcome to Hack 5.0 - Obsidian Saga, where ancient wisdom meets cutting-edge technology. This is not just a hackathon—it is a battle of creativity, a journey to forge the future.
                Join us as we bring together the brightest minds to solve real-world problems, push the boundaries of innovation, and create solutions that can change the world. Whether you're a seasoned hacker or a newcomer, there's a place for you in this epic saga.
                Get ready to collaborate, compete, and create in an environment that fosters learning, growth, and discovery. Let's make history together at Hack 5.0 - Obsidian Saga.
                </p>
                <button className='flex font-bold justify-center items-center bg-gray-300 p-4 md:text-2xl text-xl rounded-xl w-[10rem]'>
                    Join Now
                </button>
            </div>
            <div className='mx-20 w-1/2 my-10' >
                <img src='./hacks2.svg' className='opacity-80' width={800}/>
            </div>
            <div>

            </div>
        </div>
    )
}

export default About
