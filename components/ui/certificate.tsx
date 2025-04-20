"use client";
import React, { useEffect } from 'react';
import html2canvas from 'html2canvas';

interface CertificateProps {
  name: string;
  teamName: string;
  id: string;
}

const Certificate: React.FC<CertificateProps> = ({ name, teamName, id }) => {
  const generateCertificate = async () => {
    // Create a temporary div to render the certificate
    const certificateDiv = document.createElement('div');
    certificateDiv.style.position = 'absolute';
    certificateDiv.style.left = '-9999px';
    certificateDiv.innerHTML = `
      <div style="width: 1123px; height: 794px; position: relative;">
        <img 
          src="https://res.cloudinary.com/dmiq1mtz7/image/upload/v1745153675/Screenshot_2025-04-20_182155_gbhiae.png" 
          style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;"
          crossorigin="anonymous"
        />
        <div style="position: absolute; top: 24px; right: 32px; text-align: right;">
          <p style="font-size: 14px; font-weight: 900; color: #1f2937;">${id}</p>
        </div>
        <div style="position: absolute; top: 51%; left: 48%; transform: translate(-50%, -50%); text-align: center; width: 100%; padding: 0 48px;">
          <h2 style="font-size: 22px; font-weight: 700; color: #4b4563; margin-bottom: 16px; ">
            ${name}
          </h2>
          <p style="font-size: 18px; color: #4b4563;">
            <span style="font-weight: 600;">${teamName}</span>
          </p>
        </div>
      </div>
    `;

    document.body.appendChild(certificateDiv);

    try {
      const canvas = await html2canvas(certificateDiv, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: null,
      });

      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `HACK5.0-Certificate-${id.split('-')[1]}.png`;
      link.click();
    } catch (error) {
      console.error('Error generating certificate:', error);
    } finally {
      document.body.removeChild(certificateDiv);
    }
  };

  useEffect(() => {
    generateCertificate();
  }, [name, teamName, id]);

  return null;
};

export default Certificate;