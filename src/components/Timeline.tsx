'use client';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Milestone, Clock, Globe, Users, Building, Award } from 'lucide-react';

const Timeline = () => {
  const timelineData = [
    {
      year: "21 Feb 2025",
      title: "Regestration Opens",
      description: "Register yourself for the Hack-5.0",
      icon: <Milestone className="w-6 h-6" />,
      color: "#E63946"
    },
    {
      year: "21 Feb 2025",
      title: "Regestration Closes",
      description: "Last date to register yourself fot the Hack-5.0",
      icon: <Milestone className="w-6 h-6" />,
      color: "#E63946"
    },
    {
      year: "22 Mar 2025",
      title: "Screening Round",
      description: "Screening round for the Hack-5.0",
      icon: <Users className="w-6 h-6" />,
      color: "#E63946"
    },
    {
      year: "4 Apr 2025",
      title: "Day-0",
      description: "Hack-5.0 starts",
      icon: <Award className="w-6 h-6" />,
      color: "#E63946"
    },
    {
      year: "5 Apr 2025",
      title: "Day-1",
      description: "Hack-5.0 continues | Day-1 of Hack-5.0",
      icon: <Award className="w-6 h-6" />,
      color: "#E63946"
    },
    {
      year: "6 Apr 2025",
      title: "Day-2",
      description: "Hack-5.0 continues | Day-2 of Hack-5.0",
      icon: <Award className="w-6 h-6" />,
      color: "#E63946"
    }
  ];

  return (
    <div id='schedule' className="pt-12 px-4 pb-12 bg-gradient-to-b bg-[#19171B]">
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