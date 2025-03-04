import { Globe, Lightbulb, Star } from 'lucide-react';
import React from 'react'

const achievements = [
    {
        icon: <Globe className="w-12 h-12 text-tango" />,
        title: "Global Impact",
        stats: [
            { value: "25+", label: "Countries" },
            { value: "100+", label: "Universities" },
        ],
        description:
            "Our hackathon brings together diverse talent from across the globe, fostering international collaboration and innovation.",
    },
    {
        icon: <Star className="w-12 h-12 text-tango" />,
        title: "Project Success",
        stats: [
            { value: "40+", label: "Startups Launched" },
            { value: "15M+", label: "in Funding" },
        ],
        description:
            "Previous participants have gone on to create successful startups and secure significant venture funding.",
    },
    {
        icon: <Lightbulb className="w-12 h-12 text-tango" />,
        title: "Innovation Metrics",
        stats: [
            { value: "200+", label: "Patents Filed" },
            { value: "1000+", label: "Prototypes" },
        ],
        description:
            "Our participants consistently push boundaries, creating novel solutions and advancing technology.",
    },
];
const Achievements = () => {
    return (
        <div className='w-screen min-h-screen border-gray-600 bg-gradient-to-b from-gray-800 to bg-black text-white'>
            <div className="  container mx-auto px-6 py-24 bg-sepia-black/30">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Over the years, HACK 5.0 has become a catalyst for innovation and
                        entrepreneurship, creating lasting impact in the tech ecosystem.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="bg-sepia-black/50 rounded-xl p-8 border border-tango/20 hover:border-tango/40 transition-all hover:transform hover:-translate-y-1"
                        >
                            <div className="mb-6">{achievement.icon}</div>
                            <h3 className="text-2xl font-semibold mb-6">
                                {achievement.title}
                            </h3>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {achievement.stats.map((stat, idx) => (
                                    <div key={idx} className="text-center">
                                        <div className="text-3xl font-bold text-gradient mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-gray-300">{achievement.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Achievements
