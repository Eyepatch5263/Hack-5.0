import React from 'react'

const Success = () => {
    return (
        <div className='w-screen border-gray-600 px-24 bg-gradient-to-b from-gray-700 to bg-gray-900 text-white'>
            <div className="py-24">
                <h2 className="md:text-5xl text-3xl font-bold text-center mb-2">
                    Success Stories
                </h2>
                <p className="text-lg text-gray-200 text-center mb-12 max-w-2xl mx-auto">
                See what other has to say about Us
            </p>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-sepia-black/50 rounded-xl p-8 border border-tango/20">
                        <blockquote className="text-gray-300 mb-6">
                            "HACK 5.0 was the perfect launchpad for our startup. The
                            mentorship and resources we received were invaluable."
                        </blockquote>
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-tango/20 mr-4"></div>
                            <div>
                                <div className="font-semibold">Sarah Chen</div>
                                <div className="text-gray-400">Winner, AI/ML Track 2024</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-sepia-black/50 rounded-xl p-8 border border-tango/20">
                        <blockquote className="text-gray-300 mb-6">
                            "The collaborative environment and technical challenges helped
                            us push our limits and create something truly innovative."
                        </blockquote>
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-tango/20 mr-4"></div>
                            <div>
                                <div className="font-semibold">Alex Rivera</div>
                                <div className="text-gray-400">Winner, Web3 Track 2024</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success
