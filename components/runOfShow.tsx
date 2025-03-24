"use client";
import React from "react";
import { Clock } from "lucide-react";
import localFont from "next/font/local";

const Hacked_KerX = localFont({
  src: "../public/fonts/Hacked-KerX.ttf",
  variable: "--custom-font",
});

function App() {
  return (
    <div className="min-h-screen bg-background text-white p-8" id="runofshow">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl md:text-5xl  mb-4 ${Hacked_KerX.className} flex justify-center items-center mb-8`}
        >
          <span>Run </span> <span className="text-primary"> &nbsp;of Show</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Day 1 */}
          <div className="bg-[#161B22] rounded-lg p-6 border border-red-500/20">
            <h2 className="text-3xl font-bold mb-8 text-center text-red-500">
              DAY 1
            </h2>

            <div className="space-y-6">
              <TimeSlot name="Arrival" time="8:00 AM" location="Auditorium" />

              <TimeSlot
                name="Checkin"
                time="10:00 AM"
                location="Auditorium"
                highlight={true}
              />

              <TimeSlot
                name="Opening Ceremony"
                time="2:30 PM"
                location="Auditorium"
              />

              <TimeSlot
                name="Hacking Begins"
                time="4:00 PM"
                location="New Lecture Hall"
              />

              <TimeSlot
                name="Snack Time"
                time="5:30 - 6:00 PM"
                location="New Lecture Hall"
              />
              <TimeSlot
                name="Guest Talk"
                time="6:00 - 6:45 PM"
                location="New Lecture Hall"
              />

              <TimeSlot name="Dinner" time="7:45 PM" location="Mess" />
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-[#161B22] rounded-lg p-6 border border-red-500/20">
            <h2 className="text-3xl font-bold mb-8 text-center text-red-500">
              DAY 2
            </h2>

            <div className="space-y-6">
              <TimeSlot name="Breakfast" time="8:00 AM" location="Mess" />

              <TimeSlot
                name="Hacking Phase I"
                time="9:00 AM"
                location="New Lecture Hall"
              />

              <TimeSlot
                name="Mentor Shift I"
                time="10:00 AM - 11:00 AM"
                location="New Lecture Hall"
              />

              <TimeSlot
                name="Github Workshop"
                time="11:30 AM - 12:30 PM"
                location="New Lecture Hall"
              />

              <TimeSlot name="Lunch" time="12:30 - 2:00 PM" location="Mess" />
              <TimeSlot
                name="Hacking Phase II"
                time="2:00 PM"
                location="New Lecture Hall"
              />
              <TimeSlot
                name="Mentor Shift II"
                time="2:30 - 3:00 PM"
                location="New Lecture Hall"
              />
              <TimeSlot
                name="Evaluation Phase I"
                time="4:00 - 5:30 PM"
                location="New Lecture Hall"
                highlight={true}
              />
              <TimeSlot
                name="Snack Time"
                time="5:30 - 6:00 PM"
                location="New Lecture Hall"
              />
              <TimeSlot
                name="Guest Talk"
                time="6:30 - 7:30 PM"
                location="New Lecture Hall"
              />

              <TimeSlot name="Dinner" time="7:45 PM" location="Mess" />
            </div>
          </div>

          {/* Day 3 */}
          <div className="bg-[#161B22] rounded-lg p-6 border border-red-500/20">
            <h2 className="text-3xl font-bold mb-8 text-center text-red-500">
              DAY 3
            </h2>

            <div className="space-y-6">
              <TimeSlot name="Breakfast" time="7:45 AM" location="Mess" />

              <TimeSlot
                name="Soft Submission Deadline"
                time="9:00 AM"
                location="New Lecture Hall"
                highlight={true}
              />

              <TimeSlot
                name="Hard Submission"
                time="9:30 AM"
                location="New Lecture Hall"
                highlight={true}
              />
              <TimeSlot
                name="Final Evaluation"
                time="10:00 AM"
                location="New Lecture Hall"
                highlight={true}
              />

              <TimeSlot name="Lunch" time="1:00 PM" location="Mess" />

              <TimeSlot
                name="Buffer for Networking"
                time="2:30 - 3:00 PM"
                location="New Lecture Hall"
              />

              <TimeSlot
                name="Closing and Result"
                time="3:00 - 5:00 PM"
                location="Auditorium"
                highlight={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TimeSlotProps {
  name: string;
  time: string;
  location: string;
  highlight?: boolean;
}

function TimeSlot({ name, time, location, highlight = false }: TimeSlotProps) {
  return (
    <div
      className={`rounded-lg p-4 transition-all duration-300 hover:scale-[1.02] ${
        highlight ? "bg-red-500/10 border border-red-500/30" : "bg-[#1F2937]/30"
      }`}
    >
      <h3 className="font-semibold text-lg mb-2 text-gray-100">{name}</h3>
      <div className="flex items-center text-sm text-gray-400 mb-1">
        <Clock className="w-4 h-4 mr-2 text-red-500" />
        {time}
      </div>
      <div className="flex items-center text-sm text-gray-400">
        <svg
          className="w-4 h-4 mr-2 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        {location}
      </div>
    </div>
  );
}

export default App;
