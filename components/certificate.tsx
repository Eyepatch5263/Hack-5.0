"use client";
import React, { useState } from 'react';
import { User, Users, Loader } from 'lucide-react';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Certificate from '../components/ui/certificate';
import localFont from "next/font/local";

const Hacked_KerX = localFont({
  src: "../public/fonts/Hacked-KerX.ttf",
  variable: "--custom-font",
});

interface CertificateFormProps {
  onSubmit: (name: string, teamName: string) => void;
  error: string | null;
}

interface CertificateData {
  id: string;
  name: string;
  teamName: string;
}

const CertificateForm: React.FC<CertificateFormProps> = ({ onSubmit, error }) => {
  const [name, setName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [touched, setTouched] = useState({ name: false, teamName: false });
  const [formError, setFormError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [certificateData, setCertificateData] = useState<CertificateData | null>(null);

  const fetchCertificate = async (name: string, teamName: string) => {
    setLoading(true);
    try {
      const userInfo = JSON.stringify({ name, teamName });
      const response = await fetch('/api/validateUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: userInfo,
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Successful", data);
        setFormError(false);
        setCertificateData(data);
        console.log(certificateData);

      } else {
        console.log("Error", data);
        setFormError(true);
        setCertificateData(null);
      }
    } catch (err: any) {
      console.log(err.message);
      setFormError(true);
      setCertificateData(null);
    }
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && teamName.trim()) {
      fetchCertificate(name, teamName);
    } else {
      setTouched({ name: true, teamName: true });
    }
  };

  const isNameValid = name.trim().length > 0;
  const isTeamNameValid = teamName.trim().length > 0;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.section 
    className="container mx-auto px-4 py-8 flex flex-col items-center mb-4"
    id = "certificate"
    ref={ref}
    variants={container}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}>
      <h2 className={`text-3xl md:text-5xl mb-4 ${Hacked_KerX.className}`}>
        Participation <span className="text-primary">Certificate</span>
      </h2>

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-md border border-gray-700 shadow-lg rounded-xl mt-4"
      >
        <form onSubmit={handleSubmit} className="space-y-6 flex flex-col gap-6 mt-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setTouched({ ...touched, name: true })}
                className={`bg-gray-900/50 border block w-full pl-10 pr-3 py-2 ${touched.name && !isNameValid ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500`}
                placeholder="Your Name"
                disabled={loading}
              />
            </div>
            {touched.name && !isNameValid && (
              <p className="mt-2 text-sm text-red-600">Please enter your name</p>
            )}
          </div>

          {/* Team Name Input */}
          <div>
            <label htmlFor="teamName" className="block text-sm font-medium text-gray-700 mb-1">
              Team Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Users className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="teamName"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                onBlur={() => setTouched({ ...touched, teamName: true })}
                className={`bg-gray-900/50 border block w-full pl-10 pr-3 py-2 ${touched.teamName && !isTeamNameValid ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-amber-500 focus:border-primary`}
                placeholder="Team Name"
                disabled={loading}
              />
            </div>
            {touched.teamName && !isTeamNameValid && (
              <p className="mt-2 text-sm text-red-600">Please enter your team name</p>
            )}
          </div>

          {/* Error Message */}
          {formError && (
            <div className="p-3 rounded-md bg-red-50 border border-red-200">
              <p className="text-sm text-red-600">User not found or Invalid Team name</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 hover:scale-105 transition-all duration-400"
          >
            {loading ? (
              <>
                <Loader className="animate-spin h-5 w-5" />
                Verifying...
              </>
            ) : (
              'Verify & Generate Certificate'
            )}
          </button>
        </form>
      </motion.div>

      {/* Certificate Display */}
      {certificateData && (
        <Certificate
          name={certificateData.name}
          teamName={certificateData.teamName}
          id={certificateData.id}
        />
      )}
    </motion.section>

  );
};

export default CertificateForm;