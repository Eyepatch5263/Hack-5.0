"use client";

import { useState, useMemo } from "react";
import { Filter } from "lucide-react";
import { pricedown } from "@/lib/fonts";
import { motion, AnimatePresence } from "framer-motion";
import TiltedInfoCard from "./TiltedInfoCard";

// Convert common Google Drive file-sharing URLs into embeddable thumbnail URLs.
// The Drive file must be accessible to anyone with the link.
function getImageSrc(src: string): string {
  if (!src) return "/placeholder.svg";

  try {
    const url = new URL(src);

    if (url.hostname === "drive.google.com") {
      // A folder is not an individual image. Use the specific photo's file link.
      if (url.pathname.includes("/folders/")) return "/placeholder.svg";

      const fileId =
        url.searchParams.get("id") ||
        url.pathname.match(/\/file\/d\/([^/]+)/)?.[1];

      if (fileId) {
        return `https://drive.google.com/thumbnail?id=${encodeURIComponent(fileId)}&sz=w1000`;
      }
    }

    // Ask Cloudinary to return a browser-friendly JPEG for HEIC uploads.
    // Other Cloudinary URLs are left unchanged.
    if (url.hostname === "res.cloudinary.com" && /\.heic(?:$|\?)/i.test(url.pathname)) {
      return src.replace("/image/upload/", "/image/upload/f_jpg,q_auto/");
    }
  } catch {
    // Keep local paths and other image URLs unchanged.
  }

  // Google Photos share pages are not direct image URLs.
  if (src.includes("photos.app.goo.gl/")) return "/placeholder.svg";

  return src;
}

interface TeamMember {
  name: string;
  batch: string;
  imgSrc: string;
  instagram?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [

  {
    name: "Isha",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080640/IMG_5198_xz4pzl.jpg",
  },
  {
    name: "Chhavi Thakur",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726944805/IMG-20240308-WA0077_nq107z.jpg",
  },
  {
    name: "Lakshay Lalia",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080749/IMG_20241101_171749_392_auyw2u.jpg",
  },
  {
    name: "Saksham Chhabra",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1741525859/IMG-20240323-WA0015_dcsbh7_exdrze.jpg",
  },
  {
    name: "Navdeep Singh",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726944985/IMG_4625-1_xkfqoy.jpg",
  },
  {
    name: "Piyush",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945016/24-09-20_14-31-12-521_nop1fo.jpg",
  },
  {
    name: "Prince Khandelwal",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945058/IMG-20240920-WA0013_l6p9tg.jpg",
  },
  {
    name: "Piyush Mishra",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738138149/IMG-20250112-WA0084_akkh6m.jpg",
  },
  {
    name: "Ayush Sharma",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945095/IMG-20240513-WA0233_jgmvog.jpg",
  },
  {
    name: "Avirat Mahajan",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945139/IMG-20240410-WA0016_eow17z.jpg",
  },
  {
    name: "Vansh Pal",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080858/WIN_20240415_20_11_54_Pro_zw1squ.jpg",
  },
  {
    name: "Sujal Choudhary",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738091293/sujal_sosrec_ghouip.jpg",
  },
  {
    name: "Anshuman Kapoor",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1728535411/anshuman_ugy7ne.jpg",
  },
  {
    name: "Abhay Chaudhary",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738081032/IMG-20240920-WA0002_kxrj0r.jpg",
  },
  {
    name: "Aanya Soni",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738082046/IMG_5200_uwq9wi.jpg",
  },
  {
    name: "Himanshu Mahajan",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945205/formal_oi5vpb.jpg",
  },
  {
    name: "Ishan Choudhary",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738082088/IMG_20240921_005315_qwh3dd.jpg",
  },
  {
    name: "Harsh Goel",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1731838897/WhatsApp_Image_2024-11-17_at_15.51.00_2b583045_kqcd5x.jpg",
  },
  {
    name: "pratyush pragyey",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1721114549/rptdgsgi7qzijyojnja0.jpg",
  },
  {
    name: "Rudesh Kumar",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738082144/photo_k91tqe.jpg",
  },

  {
    name: "Lavish",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/duezus2xn/image/upload/v1738075460/lavish_mupjh3.jpg",
  },
  {
    name: "Prashant Thakur",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/duezus2xn/image/upload/v1738075650/prashant_2_vsdpsb.jpg",
  },
  {
    name: "Aryan Sharma",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738087174/IMG_20241120_152145246_HDR_pavhc9.jpg",
  },
  {
    name: "Sanket Singh Sameer",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738087686/1000156654-01_ridyfs.jpg",
  },
  {
    name: "Raman Bansal",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088074/profile_badm2f.jpg",
  },
  {
    name: "Utkarsh Shukla",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088144/IMG-20241220-WA0110_qptedf.jpg",
  },
  {
    name: "Anshu Kumari",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134087/IMG_20250128_201927_kwt4vg.jpg",
  },
  {
    name: "Avadhi",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134129/20250128_204711_h36r6t.jpg",
  },
  {
    name: "Anilove",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088682/IMG20241110215944_qx4ejt.jpg",
  },
  {
    name: "Bhola Prasad Sah",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088411/1738076772514_ql73vg.jpg",
  },
  {
    name: "Tanmay Singh",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088737/IMG-20240919-WA0001_s3wwhi.jpg",
  },
  {
    name: "Chetna Singh",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134304/c823d071-af30-45a7-9182-a85015e0cb33_fn17g3.jpg",
  },


  // Batch of 2026
  {
    name: "Manmeet Singh",
    batch: "2026",
    imgSrc: "https://drive.google.com/file/d/168PIarf7Km_rEP8Y6OO3zE4w6Z_0jm2P/view?usp=drivesdk",
  },
  
  {
    name: "Himanshi Jethwani",
    batch: "2026",
    imgSrc: "https://drive.google.com/uc?export=view&id=18TdbW8wUmbSRYRF2nZvdxN6kt-JDARRX",
  },
  {
    name: "Harjot Singh",
    batch: "2026",
    imgSrc: "https://drive.google.com/uc?export=view&id=1By8UOOeiQDMxpltSJCbazVJEviSqFtJx",
  },
  {
    name: "Anshita",
    batch: "2026",
    imgSrc: "https://drive.google.com/uc?export=view&id=1riTIVmovb2fGT_eVXZGinx2V_A69oVIu",
  },
  
  {
    name: "Priyanshika",
    batch: "2026",
    imgSrc: "https://drive.google.com/uc?export=view&id=1Cxbsyw4Sh_6ZcC-Lv8dQFr7c1im1Of_z",
  },
  {
    name: "Angel Ahuja",
    batch: "2026",
    imgSrc: "https://drive.google.com/uc?export=view&id=1hjbB0fBTA_6YKxRkBVp8RNSv8vuWUQSm",
  },
  {
    name: "Chhavi",
    batch: "2026",
    imgSrc: "https://res.cloudinary.com/mfobah8r/image/upload/f_auto,q_auto/4aaa080e-0cbb-4fbe-b075-9ff697f8f6fc",
  },
  {
    name: "Pragun Dubey",
    batch: "2026",
    imgSrc: "https://drive.google.com/uc?export=view&id=1mG-muHqOvdoHPj19pqeZkf4uiDeXIKbT",
  },
  
  {
    name: "rounak",
    batch: "2026",
    imgSrc: "https://drive.google.com/file/d/1aLH5LemUUqCIfvK4KniHyKx-g3O6y_qp/view?usp=drivesdk",
  },
  {
    name: "Nilesh",
    batch: "2026",
    imgSrc: "https://res.cloudinary.com/hu3jn2im/image/upload/v1791719840/Professional_Studio_Headshot.png",
  },
  {
    name: "Swasti Sharma",
    batch: "2026",
    imgSrc: "https://res.cloudinary.com/ad80ycqj/image/upload/f_auto,q_auto/photo",
  },
  {
    name: "Swajal",
    batch: "2026",
    imgSrc: "https://drive.google.com/uc?export=view&id=14KlPEczXgOrCSLGRkjfDDUoeinZE2F6S",
  },
  {
    name: "Arush Pratap Singh",
    batch: "2026",
    imgSrc: "https://drive.google.com/uc?export=view&id=1E4_4QXUAW9IcWHM4Mubu4b-nhHG4B_y_",
  },
  {
    name: "Srrijan sharma",
    batch: "2026",
    imgSrc: "https://drive.google.com/uc?export=view&id=1F2Oh8s8gdoQgGHNa4wLxscIFVHq2aWEB",
  },
  {
    name: "Ipshita",
    batch: "2026",
    imgSrc: "https://drive.google.com/uc?export=view&id=16ffKPpqxu238lQlabradsB8odQNizVMB",
  },
  {
    name: "Aastha  Sharma",
    batch: "2026",
    imgSrc: "https://drive.google.com/file/d/1Px2APFrEKplTkYxXtq2hj1d-hl70ieW3/view?usp=drive_link",
  },
  {
    name: "Manav Chalotra",
    batch: "2026",
    imgSrc: "https://res.cloudinary.com/dtz0urit6/image/upload/q_auto:best,f_jpg/cloudinary-tools-uploads/wvlgpq1hphrjgipjmbke",
  },
  {
    name: "Abhinav Pratap Singh",
    batch: "2026",
    imgSrc: "https://drive.google.com/uc?export=view&id=1NySOZC2YMYqXbnOqwIkQ_JBAxS4uNIwS",
  },
  {
    name: "Parvesh Saini",
    batch: "2026",
    imgSrc: "https://drive.google.com/uc?export=view&id=1wEaY-HyJW0VdQjfU2yABmYC4dG_b8Yv3",
  },
  {
    name: "Jitisha Sharma",
    batch: "2026",
    imgSrc: "https://photos.app.goo.gl/yZG7qvKzf5dsL1ys7",
  },
  {
    name: "Mannat Sharma",
    batch: "2026",
    imgSrc: "https://drive.google.com/uc?export=view&id=1OorNQZKmK95UoHOAWsKT7xO0O-qtkXPI",
  },
  {
    name: "Divyanshi",
    batch: "2026",
    imgSrc: "https://drive.google.com/uc?export=view&id=1jP6gBu4n1ejXL2OiBe78CH2elc9BC4qV",
  },
  {
    name: "Cheshta",
    batch: "2026",
    imgSrc: "https://drive.google.com/uc?export=view&id=1HK9Y0nUl6K1kfUT1eszjsXi2dBbdKa6A",
  },
  {
    name: "Manish",
    batch: "2026",
    imgSrc: "https://drive.google.com/uc?export=view&id=1nmcS08x3qqGXRyWmmWpFElt5yp8eO5sF",
  },
  {
    name: "Anmol Sood",
    batch: "2026",
    imgSrc: "https://res.cloudinary.com/zcti5kqw/image/upload/f_auto,q_auto/1646",
  },
  {
    name: "Tanuj sharma",
    batch: "2026",
    imgSrc: "https://drive.google.com/drive/folders/1-waJb8hV_hMdc0_l2ns9ArxqEuiqGtHT",
  },
  {
    name: "harshit Kansal",
    batch: "2026",
    imgSrc: "https://drive.google.com/uc?export=view&id=1OoKhCJaAsgP5ffQLo07ighEUd2BHA4t_",
  },
  {
    name: "Kartika Sharma",
    batch: "2026",
    imgSrc: "https://drive.google.com/file/d/1YTzXqjI_yDfifsHixherwx97Z4IGljT1/view?usp=drivesdk",
  },
  {
    name: "Shishu Pal Kapoor",
    batch: "2026",
    imgSrc: "https://drive.google.com/uc?export=view&id=1JQpxftySDKkung9LfDPf7PLNmM4LTl51",
  },
  {
    name: "Parul Dhiman",
    batch: "2026",
    imgSrc: "https://drive.google.com/uc?export=view&id=1cIfBMFHLp68uYcCyqs1YH1uBDBnBf3sD",
  },
  
  // Batch of 2025 — imported from second.csv
  {
    name: "Lakshit Karwa",
    batch: "2025",
    imgSrc: "https://drive.google.com/file/d/1CQ_-AsdWmACIlZ6YijuOLuZKv2WiwwCM/view?usp=drivesdk",
    instagram: "https://www.instagram.com/karwalakshit/?__pwa=1",
    linkedin: "https://www.linkedin.com/in/lakshit-karwa-7982b6369/"
  },
  {
    name: "Bhanu Uday Singh Dattal",
    batch: "2025",
    imgSrc: "https://res.cloudinary.com/demdsaq9k/image/upload/v1787331588/IMG_0617.heic",
    instagram: "https://www.instagram.com/bhanu.rar?igsh=djk3cXN5aGM5cWJo&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/bhanu-uday-singh-dattal-5a135a275?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
  },
  {
    name: "Piyush Thakur",
    batch: "2025",
    imgSrc: "https://drive.google.com/file/d/1MDQXOzlXYZ-qurQCXiUAvqYuoePd9X3L/view?usp=drivesdk",
    instagram: "https://www.instagram.com/piyuxhthakur?igsh=bTFqaWp0YXB4ZWpy",
    linkedin: "https://www.linkedin.com/in/piyush-thakur-6a39943a4?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  
  {
    name: "Manvi Vyas",
    batch: "2025",
    imgSrc: "https://drive.google.com/file/d/1_6nhmQ2c4hTF6vqbiayK_yrRZjIXevEo/view?usp=drivesdk",
    instagram: "https://www.instagram.com/manvi.nith/",
    linkedin: "https://www.linkedin.com/in/manvi-vyas-914b05385?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  {
    name: "Naitik Verma",
    batch: "2025",
    imgSrc: "https://drive.google.com/file/d/1d-3ibh_nyvzQylarDBKZA0PQACEumeV7/view?usp=drivesdk",
    instagram: "https://www.instagram.com/naitikvr_",
    linkedin: "https://www.linkedin.com/in/naitik-verma-36601a381"
  },
  {
    name: "Akarsh",
    batch: "2025",
    imgSrc: "https://drive.google.com/file/d/1cENeQGt63PwpkoNZkeyBh7X8AgMJ6DW8/view?usp=drivesdk",
    instagram: "https://www.instagram.com/akarsh_10e1.84?igsi=cGxhOTU2MW9yeHps",
    linkedin: ""
  },
  {
    name: "Adarsh Babu",
    batch: "2025",
    imgSrc: "https://drive.google.com/file/d/1Ex7LYdqwlnHiYieHrxNPyzz9h9M_uXvf/view?usp=drive_link",
    instagram: "https://www.instagram.com/adarshhbabu?igsi=b24yNTJvaXhqZ3l4",
    linkedin: "https://www.linkedin.com/in/adarshhbabu?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  {
    name: "Vishal saini",
    batch: "2025",
    imgSrc: "https://drive.google.com/file/d/1KX6LQhmDqfP3d2ODnbXQCl1p6aH3Dd6-/view?usp=drivesdk",
    instagram: "https://www.instagram.com/_.vi5hal__?igsi=NTFiZjk4YjFybW1s",
    linkedin: "https://www.linkedin.com/in/vishalsainiii"
  },
  {
    name: "Daksh Chaudhary",
    batch: "2025",
    imgSrc: "https://drive.google.com/file/d/1SvOm0MdVX__USlJV_gvLNM3R55-6cDgk/view?usp=drivesdk",
    instagram: "https://www.instagram.com/dax.ksh/",
    linkedin: "https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BB3yLqvdqQDGdgPEzamtdzg%3D%3D"
  },
  {
    name: "Nirbhay Kumar",
    batch: "2025",
    imgSrc: "https://drive.google.com/file/d/1PriaA2oT7sOVW1wAXwgu0HwEc70FNwAs/view?usp=drivesdk",
    instagram: "https://www.instagram.com/nirbhay_.33?igsi=Y2s5b2I3dHNsMndn",
    linkedin: "https://www.linkedin.com/in/nirbhay-kumar-386872418?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  {
    name: "Krrish Verma",
    batch: "2025",
    imgSrc: "https://drive.google.com/file/d/1NrhDpagg1BfJ2vQz1NwcmGjG5hd-YTFd/view?usp=drivesdk",
    instagram: "https://www.instagram.com/verma_krrish_/",
    linkedin: ""
  },
  {
    name: "Harsh Garg",
    batch: "2025",
    imgSrc: "https://drive.google.com/file/d/1xM-00oXYQ_Y3D3yX0i4-TrARqDM8gI0U/view?usp=drive_link",
    instagram: "https://www.instagram.com/harsshhh__15/",
    linkedin: "https://www.linkedin.com/in/harsh-garg-85946a382/"
  },
  {
    name: "Mahesh Thakur ",
    batch: "2025",
    imgSrc: "https://drive.google.com/file/d/1bciIABygw6fXnn6lDIB193UFUPyMWD6Z/view?usp=drivesdk",
    instagram: "https://instagram.com/maheshthakur03?xtok=MWkwODd1N2M4dDM4dQ%3D%3D",
    linkedin: "https://www.linkedin.com/in/mahesh-thakur-060841412?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  {
    name: "Anubhav Singhal",
    batch: "2025",
    imgSrc: "https://drive.google.com/file/d/1AqUm7u5l2uan4nc1kfiinX2CkavoQWav/view?usp=drivesdk",
    instagram: "https://www.instagram.com/anubhav_singhal_7?igsi=cXl1aWJyczd6bm50",
    linkedin: "https://www.linkedin.com/in/anubhav-singhal-716332363?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  {
    name: "Anil Borana",
    batch: "2025",
    imgSrc: "https://drive.google.com/file/d/1fQ-uzoG4Z4Nyicy6gsw3dfBbPtda1Fiw/view?usp=drivesdk",
    instagram: "https://www.instagram.com/anii.vrse?igsi=MXBvbWdzNno1bWlxZQ==",
    linkedin: "https://www.linkedin.com/in/anil-borana-42b117383?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  {
    name: "DAVID THAKUR",
    batch: "2025",
    imgSrc: "https://drive.google.com/file/d/1sLPWB0rv1_A8siLnH7cIz_7rjwWrM47N/view?usp=drivesdk",
    instagram: "https://www.instagram.com/0david_thakur0?igsi=MXV2MGh6eTh5YmRsdQ==",
    linkedin: "https://www.linkedin.com/in/david-thakur-6a717a383?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  {
    name: "Priyansh Sood",
    batch: "2025",
    imgSrc: "https://drive.google.com/file/d/1EXptJLuGqW9jD6ZI28jAaKElN8wLP-Kt/view?usp=drivesdk",
    instagram: "https://www.instagram.com/priyansh.sood25?igsi=MTg4bXhxa3o0ZTQ4eA==",
    linkedin: "https://www.linkedin.com/in/priyansh-sood-57681a372"
  },
  {
    name: "Himanshi Mahajan",
    batch: "2025",
    imgSrc: "",
    instagram: "https://www.instagram.com/_mist_veil_?igsh=MTY2Y2ZudzN6OTh6OQ==",
    linkedin: "https://www.linkedin.com/in/himanshi-mahajan-567013388?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  {
    name: "Tanishka",
    batch: "2025",
    imgSrc: "",
    instagram: "https://www.instagram.com/tanishka_verma12?igsi=MXUxeXVyanF0aDhjdQ%3D%3D&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/tanishka-verma-71935b3a7?"
  },
  
  {
    name: "Aashi Aggarwal",
    batch: "2025",
    imgSrc: "https://drive.google.com/file/d/1nbrTjBa8PJsPKBfYnokMz-glmZRkjqeV/view?usp=sharing",
    instagram: "https://www.instagram.com/aaashhhii_?cplk=MXNuMmd5anlxYjN5&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/aashi-aggarwal-a9a118385"
  },
  {
    name: "SHIVANK AGGARWAL",
    batch: "2025",
    imgSrc: "",
    instagram: "https://www.instagram.com/shivaankkk__?igsh=MWU2N2Fod2JjbDI5ZA==&igsi=MWU2N2Fod2JjbDI5ZA==",
    linkedin: "www.linkedin.com/in/shivank009911"
  },
];

const batchThemes: Record<string, { accent: string; secondary: string; fileLabel: string }> = {
  "2023": { accent: "#00ffff", secondary: "#ff2a85", fileLabel: "CORE_LEAD" },
  "2024": { accent: "#b967ff", secondary: "#00ffff", fileLabel: "DEV_OPERATIVE" },
  "2025": { accent: "#ffd319", secondary: "#ff2a85", fileLabel: "JUNIOR_ENG" },
  "2026": { accent: "#00ff9d", secondary: "#ff2a85", fileLabel: "NEW_OPERATIVE" },
};

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  const theme = batchThemes[member.batch] || { accent: "#00ffff", secondary: "#ff2a85", fileLabel: "MEMBER" };

  return (
      <TiltedInfoCard rotateAmplitude={12} scaleOnHover={1.04} className="h-full">
        <div
            className="group relative flex flex-col h-full border-2 border-[#ff2a85]/70 bg-[#0e021c]/95 overflow-hidden select-none transition-all duration-300 hover:border-[#00ffff] hover:shadow-[0_0_25px_rgba(255,42,133,0.35)]"
            style={{
              boxShadow: `0 0 18px ${theme.accent}25`,
            }}
        >

          <div
              className="flex h-9 items-center justify-between border-b-2 border-[#ff2a85]/70 px-2.5 select-none bg-[#120224]"
              style={{
                background: `linear-gradient(90deg, ${theme.accent}22 0%, #120224 100%)`,
              }}
          >
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="h-2.5 w-2.5 border border-[#00ffff] bg-[#ff2a85] inline-block shrink-0" />
              <span className="font-mono text-[10px] font-black uppercase tracking-wider text-white truncate">
              {theme.fileLabel}_{String(index + 1).padStart(2, "0")}.EXE
            </span>
            </div>

            <div className="flex items-center gap-1 shrink-0 ml-2">
              <div className="flex h-4 w-4 items-center justify-center border border-[#a855f7] bg-black/70 text-[8px] font-bold text-[#c084fc]">
                _
              </div>
              <div className="flex h-4 w-4 items-center justify-center border border-[#a855f7] bg-black/70 text-[8px] font-bold text-[#c084fc]">
                □
              </div>
              <div
                  className="flex h-4 w-4 items-center justify-center border border-[#ff2a85] text-[8px] font-extrabold text-white"
                  style={{ backgroundColor: theme.accent }}
              >
                ×
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden bg-black p-2">
            <div className="relative w-full h-full overflow-hidden border border-[#a855f7]/50">
              <img
                  src={getImageSrc(member.imgSrc) || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
              />
            </div>
          </div>

          <div className="p-3 bg-[#07010f] border-t-2 border-[#ff2a85]/60 flex flex-col justify-between flex-1">
            <div className="mb-2">
              <h3 className="font-mono text-sm sm:text-base font-black text-white uppercase tracking-tight truncate">
                {member.name}
              </h3>
              <p
                  className="font-mono text-[11px] font-bold uppercase tracking-widest"
                  style={{ color: theme.accent }}
              >
                BATCH OF {member.batch}
              </p>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-400">
              <span>STATUS: ACTIVE</span>
              <span className="text-[#00c2cb] font-bold">ONLINE</span>
            </div>
          </div>
        </div>
      </TiltedInfoCard>
  );
}

export default function TeamSection() {
  const [selectedYear, setSelectedYear] = useState<string>("all");

  const yearFilters = useMemo(() => {
    return [
      { label: "ALL", value: "all", count: teamMembers.length },
      { label: "2023", value: "2023", count: teamMembers.filter((m) => m.batch === "2023").length },
      { label: "2024", value: "2024", count: teamMembers.filter((m) => m.batch === "2024").length },
      { label: "2025", value: "2025", count: teamMembers.filter((m) => m.batch === "2025").length },
      { label: "2026", value: "2026", count: teamMembers.filter((m) => m.batch === "2026").length },
    ];
  }, []);

  const filteredMembers = useMemo(() => {
    if (selectedYear === "all") return teamMembers;
    return teamMembers.filter((member) => member.batch === selectedYear);
  }, [selectedYear]);

  return (
      <section id="team" className="relative isolate z-10 min-h-screen py-24 px-4 sm:px-6 overflow-hidden bg-black text-white">
        <div className="container relative mx-auto max-w-7xl">

          <div className="mb-14">
            <div className="mb-12 flex items-center gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="shrink-0"
              >
                <h2 className={`whitespace-nowrap text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white [-webkit-text-stroke:2px_#000000] drop-shadow-[4px_4px_0px_rgba(0,0,0,0.9)] ${pricedown.className}`}>
                  MEET <span className="text-[#ff2a85]">THE TEAM</span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
                className="hidden sm:block flex-1 h-[2px] bg-white"
              />
            </div>
            <p className="max-w-3xl text-sm sm:text-base md:text-lg text-gray-300 font-bold leading-relaxed">
              The people behind HACK 6.0.
            </p>
          </div>

          <div className="mb-14">
            <div className="mx-auto max-w-7xl border-4 border-black bg-[#0a0a0a]/95 p-4 sm:p-5 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-sm relative">
              <div className="absolute left-0 right-0 top-0 h-2 bg-gradient-to-r from-[#00ffff] via-[#ff00aa] to-[#a200ff] border-b-2 border-black" />
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white">
                  <Filter size={15} className="text-[#00ffff]" />
                  <span>FILTER_BY_BATCH:</span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                  {yearFilters.map((filter) => {
                    const isActive = selectedYear === filter.value;
                    return (
                        <button
                            key={filter.label}
                            onClick={() => setSelectedYear(filter.value)}
                            className={`cursor-pointer border px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                                isActive
                                    ? "bg-[#ff00aa] text-black border-[#ff00aa] shadow-[0_0_14px_rgba(255,42,133,0.45)] -translate-y-0.5"
                                    : "bg-black/50 text-gray-300 border-white/20 hover:bg-[#a200ff]/15 hover:border-[#00ffff] hover:text-white"
                            }`}
                        >
                          <span>{filter.label}</span>
                          <span
                              className={`ml-1.5 px-1.5 py-0.2 text-[10px] font-bold ${
                                  isActive ? "bg-white text-[#ff2a85]" : "bg-[#eeeeee] text-[#555]"
                              }`}
                          >
                        {filter.count}
                      </span>
                        </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              layout
              className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 sm:gap-8"
            >
            <AnimatePresence>
              {filteredMembers.map((member, index) => (
                  <motion.div
                      key={member.name}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35, delay: index * 0.02 }}
                      className="h-full"
                  >
                    <MemberCard member={member} index={index} />
                  </motion.div>
              ))}
            </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
  );
}
