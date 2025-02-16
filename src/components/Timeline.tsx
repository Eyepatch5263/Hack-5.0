

'use client'; // Add this line to mark the component as a Client Component

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Milestone, Clock, Globe, Users, Building, Award } from 'lucide-react';

const Timeline = () => {
  const timelineData = [
    {
      year: "2020",
      title: "First Edition",
      description: "Started with 100 participants",
      icon: <Milestone className="w-6 h-6" />,
      color: "#E63946"
    },
    {
      year: "2021",
      title: "Going Global",
      description: "Expanded to 20+ countries",
      icon: <Globe className="w-6 h-6" />,
      color: "#E63946"
    },
    {
      year: "2022",
      title: "Major Growth",
      description: "500+ participants, 5 tracks introduced",
      icon: <Users className="w-6 h-6" />,
      color: "#E63946"
    },
    {
      year: "2023",
      title: "Industry Partnership",
      description: "50+ company partnerships established",
      icon: <Building className="w-6 h-6" />,
      color: "#E63946"
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Became the largest student-run hackathon",
      icon: <Award className="w-6 h-6" />,
      color: "#E63946"
    }
  ];

  return (
    <div className="pt-12 px-4 pb-12 bg-gradient-to-b bg-[#19171B]">
      <h3 className="md:text-5xl text-3xl text-[#E63946] font-bold text-center mb-4">
        Timeline
      </h3>
      <p className="text-lg text-gray-200 text-center mb-12 max-w-2xl mx-auto">
        Follow the timeline of Hack 5.0 from its inception to becoming the largest hackathon
      </p>

      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            contentStyle={{
              background: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
              border: '1px solid rgba(255, 107, 0, 0.2)',
              borderRadius: '0.75rem'
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.5)' }}
            date={item.year}
            iconStyle={{ background: item.color, color: '#fff' }}
            icon={item.icon}
          >
            <h4 className="text-xl font-semibold mt-0 mb-2">
              {item.title}
            </h4>
            <p className="text-gray-400 m-0">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;