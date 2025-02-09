import React from 'react'

const Timeline = () => {
    return (
        <div className="snap-start pt-12 px-12 pb-12 text-white bg-gradient-to-b from-gray-700/70 to bg-gray-900">
            <h3 className="md:text-5xl text-3xl text-white font-bold text-center mb-4">
                Timeline
            </h3>
            <p className="text-lg text-gray-200 text-center mb-12 max-w-2xl mx-auto">
                Follow the timeline of Hack 5.0 from its inception to becoming the largest hackathon
            </p>
            <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-tango/20"></div>
                <div className="space-y-12">
                    {[
                        {
                            year: "2020",
                            title: "First Edition",
                            description: "Started with 100 participants",
                        },
                        {
                            year: "2021",
                            title: "Going Global",
                            description: "Expanded to 20+ countries",
                        },
                        {
                            year: "2022",
                            title: "Major Growth",
                            description: "500+ participants, 5 tracks introduced",
                        },
                        {
                            year: "2023",
                            title: "Industry Partnership",
                            description: "50+ company partnerships established",
                        },
                        {
                            year: "2024",
                            title: "Innovation Hub",
                            description: "Became the largest student-run hackathon",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`relative ${index % 2 === 0 ? "md:ml-auto md:pl-32" : "md:mr-auto md:pr-32"} md:w-1/2`}
                        >
                            <div className="bg-sepia-black/50 rounded-xl p-6 border border-tango/20">
                                <div className="absolute left-1/2 md:left-auto transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-tango rounded-full"></div>
                                <span className="text-tango font-bold">{item.year}</span>
                                <h4 className="text-xl font-semibold mt-2">
                                    {item.title}
                                </h4>
                                <p className="text-gray-400 mt-2">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Timeline
