"use client";
import { useState } from "react";
import Link from "next/link";
import { Terminal, Users, Filter } from "lucide-react";
import { useGlitch } from "react-powerglitch";
import localFont from "next/font/local";
import { motion } from "framer-motion";

const Hacked_KerX = localFont({
  src: "../../public/fonts/Hacked-KerX.ttf",
  variable: "--custom-font",
});

interface TeamMember {
  name: string;
  batch: string;
  linkedin: string;
  instagram: string;
  imgSrc: string;
}

const teamMembers: TeamMember[] = [
  // First Years

  {
    name: "Spriha Anand",
    batch: "2021",
    linkedin: "https://www.linkedin.com/in/spriha-anand-818672227/",
    instagram: "https://www.instagram.com/sprihaaaaa/",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738671955/1735050834340_abev1h.jpg",
  },
  {
    name: "Akshun Kuthiala",
    batch: "2021",
    linkedin: "https://www.linkedin.com/in/akshun-kuthiala/",
    instagram: "",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945521/pfp_berx6f.jpg",
  },
  {
    name: "Shivanshu Thakur",
    batch: "2021",
    linkedin: "https://www.linkedin.com/in/shivanshu-thakur/",
    instagram: "https://www.instagram.com/shivanshu.thakur/",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738079142/1000057046_didqtv.jpg",
  },
  {
    name: "Samadeep Sengupta",
    batch: "2021",
    linkedin: "linkedin.com/in/samadeep",
    instagram: "https://www.instagram.com/samadeep",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738079221/20240814_183427_ewtape.jpg",
  },
  {
    name: "Astitva Dubey",
    batch: "2021",
    linkedin: "linkedin.com/in/astitva-dubey",
    instagram: "",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738682236/1732718585347_xpzies.jpg",
  },
  {
    name: "Tushar Kaushal",
    batch: "2021",
    linkedin: "https://in.linkedin.com/in/tushar-kaushal",
    instagram: "https://www.instagram.com/_tushar._kaushal/",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738079283/20241019_151547_dzqf9k.jpg",
  },
  {
    name: "Shubham Jaswal",
    batch: "2021",
    linkedin: "https://www.linkedin.com/in/jaswal-shubham",
    instagram: "",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1739191092/shubham_lmgjmu_fimptc.webp",
  },
  {
    name: "Arushi Guleria",
    batch: "2021",
    linkedin: "https://www.linkedin.com/in/arushi-guleria-5662b122a",
    instagram: "https://www.instagram.com/arushi_gulerria/",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738079350/github_profile_image_anolqc.jpg",
  },
  {
    name: "Rehan Khan",
    batch: "2021",
    linkedin: "https://www.linkedin.com/in/rehan49",
    instagram: "https://www.instagram.com/reh_an_k/",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738682349/1713621660118_tb08ez.jpg",
  },
  {
    name: "Shreya Dhiman",
    batch: "2021",
    linkedin: "https://www.linkedin.com/in/shreya-dhiman-25a753247/",
    instagram: "https://www.instagram.com/shreya_d30",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738682225/1718310147522_n6cafu.jpg",
  },
  {
    name: "Adarsh Rao",
    batch: "2021",
    linkedin: "https://www.linkedin.com/in/adarsh100rao/",
    instagram: "",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738682231/1722013513960_bwdhha.jpg",
  },
  {
    name: "Rakesh Swami",
    batch: "2021",
    linkedin: "https://www.linkedin.com/in/rakesh-swami-635b87222",
    instagram: "https://www.instagram.com/rakesh_swami/",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738079501/IMG_20241206_142649946_HDR_AE_k17dne.jpg",
  },
  {
    name: "Tanishq Verma",
    batch: "2022",
    linkedin: "https://www.linkedin.com/in/tanishq-verma-nith",
    instagram:
      "https://www.instagram.com/tanishq_v010?igsh=MWZxMzh0aTZyZWx6Nw==",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945246/IMG_20240414_053937_668_nbxfaq.jpg",
  },
  {
    name: "Krishna Narzary",
    batch: "2022",
    linkedin: "https://www.linkedin.com/in/krishna-narzary-32b74a254/",
    instagram: "https://www.instagram.com/majuuu_/",
    imgSrc:
      "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1728579687/krishna_zp05q6.jpg",
  },
  {
    name: "Tanishq Chauhan",
    batch: "2022",
    linkedin: "www.linkedin.com/in/tanishq-chauhan-936b25258",
    instagram:
      "https://www.instagram.com/ii_tanzishh_2603?igsh=YTRwbHM5djl0eTBn",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945307/IMG_20231001_124926_evwtzl.jpg",
  },
  {
    name: "Shryansh",
    batch: "2022",
    linkedin: "https://www.linkedin.com/in/shryansh-chaudhary/",
    instagram: "https://www.instagram.com/shryansh107/",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738136152/csec_shry_kwh5tn.jpg",
  },
  {
    name: "Harshal",
    batch: "2022",
    linkedin: "https://www.linkedin.com/in/harshal-sakhare-008b93256/",
    instagram: "https://www.instagram.com/_23harsha.04/",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738079965/Harshal_1_ljrjiy.jpg",
  },
  {
    name: "Kirti Sharma",
    batch: "2022",
    linkedin: "https://www.linkedin.com/in/kirti-sharma-687926266/",
    instagram: "",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080065/IMG-20241110-WA0018_1_anaulw.jpg",
  },
  {
    name: "Arshita",
    batch: "2022",
    linkedin: "https://www.linkedin.com/in/arshita-kango-019917255/",
    instagram: "https://www.instagram.com/arshitakango/",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945377/IMG_20240920_223145_tc4rbp.jpg",
  },
  {
    name: "Prince Jaiswal",
    batch: "2022",
    linkedin: "https://www.linkedin.com/in/prince-jaiswal-6b4b48257/",
    instagram: "https://www.instagram.com/mrprince__019/",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945441/IMG_20230720_192947_flr5wg.jpg",
  },
  {
    name: "Aditya Kumar",
    batch: "2022",
    linkedin: "https://www.linkedin.com/in/aditya-kumar-405a94256/",
    instagram: "https://www.instagram.com/rjpt_aditya/",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080338/IMG_0237_beywm0.jpg",
  },
  {
    name: "Tanmay Sharma",
    batch: "2022",
    linkedin: "https://www.linkedin.com/in/tanmay-sharma-857137256/",
    instagram: "https://www.instagram.com/t.a.n.m.a.y..sharma/",
    imgSrc:
      "https://res.cloudinary.com/dnif0edly/image/upload/v1728535568/IMG-20240307-WA0033_mfojpp.jpg",
  },
  {
    name: "Ankush Thakur",
    batch: "2022",
    linkedin: "https://www.linkedin.com/in/ankush-thakur-aa408a273/",
    instagram:
      "https://www.instagram.com/invites/contact/?igsh=1q72x61j4qwr0&utm_content=dj1wnz3",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080439/IMG_20240720_122823_ikkncj.jpg",
  },
  {
    name: "Arnav Gupta",
    batch: "2022",
    linkedin: "http://linkedin.com/in/arnav-gupta-32469a228",
    instagram:
      "https://www.instagram.com/arnavgupta_ag?igsh=MXF3aWVnenJmcDBkcQ%3D%3D&utm_source=qr",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080697/e6a54564-6a33-48e1-ac19-e847758fd349_hqfhh8.jpg",
  },
  {
    name: "Avinash Sharma",
    batch: "2022",
    linkedin:
      "https://www.linkedin.com/in/avinash-sharma-97a2b625b/?originalSubdomain=in",
    instagram: "",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1739191084/AVIN_exe_uu0yqx_k2wamg.webp",
  },
  {
    name: "Himanshu Gupta",
    batch: "2022",
    linkedin: "https://www.linkedin.com/in/himanshu-g12/",
    instagram: "",
    imgSrc:
      "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1739194635/WhatsApp_Image_2025-02-10_at_18.19.54_eddb4d72_dah6jq.jpg",
  },
  {
    name: "Akash Kanwar",
    batch: "2022",
    linkedin: "https://www.linkedin.com/in/wosuxh",
    instagram: "https://www.instagram.com/wosu._.xh",
    imgSrc:
      "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1739960542/akash_bqdy3d.jpg",
  },
  {
    name: "Isha",
    batch: "2023",
    linkedin:
      "https://www.linkedin.com/in/isha-choudhary-53b6982b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    instagram:
      "https://www.instagram.com/iiiiissha?igsh=NG5pZGdkYTFiamI1&utm_source=qr",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080640/IMG_5198_xz4pzl.jpg",
  },
  {
    name: "Chhavi Thakur",
    batch: "2023",
    linkedin:
      "https://www.linkedin.com/in/chhavi-thakur-90ab72290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:
      "https://www.instagram.com/chavvviiii_thakur?igsh=a3NxN3ZqOWZ6cmI2",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726944805/IMG-20240308-WA0077_nq107z.jpg",
  },
  {
    name: "Lakshay Lalia",
    batch: "2023",
    linkedin: "https://www.linkedin.com/in/lakshay-lalia",
    instagram:
      "https://www.instagram.com/lakshaylalia?igsh=MWt6bzEwMWd2NXJlcg==",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080749/IMG_20241101_171749_392_auyw2u.jpg",
  },
  {
    name: "Saksham Chhabra",
    batch: "2023",
    linkedin: "https://www.linkedin.com/in/saksham-chhabra-2a034a280",
    instagram: "https://www.instagram.com/sakshamken?igsh=ZXAwZm85OThzaWkw",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1741525859/IMG-20240323-WA0015_dcsbh7_exdrze.jpg",
  },
  {
    name: "Navdeep Singh",
    batch: "2023",
    linkedin:
      "https://www.linkedin.com/in/navdeep-saini-a10536261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:
      "https://www.instagram.com/_itz.navdeepsaini?igsh=MWdzeHNzNDRwZDVrOQ==",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726944985/IMG_4625-1_xkfqoy.jpg",
  },
  {
    name: "Piyush",
    batch: "2023",
    linkedin:
      "https://www.linkedin.com/in/piyush-kumar18?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/piyusx_1",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945016/24-09-20_14-31-12-521_nop1fo.jpg",
  },
  {
    name: "Prince Khandelwal",
    batch: "2023",
    linkedin:
      "https://www.linkedin.com/in/prince-khandelwal-06147a1b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:
      "https://www.instagram.com/prince_khandelwal04?igsh=NWl5aDVlOW5hZDR1",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945058/IMG-20240920-WA0013_l6p9tg.jpg",
  },
  {
    name: "Piyush Mishra",
    batch: "2023",
    linkedin:
      "https://www.linkedin.com/in/piyush-mishra-8b6a4b2b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/piyush_mishra.?igsh=bGFla25qc2V4bzY1",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738138149/IMG-20250112-WA0084_akkh6m.jpg",
  },
  {
    name: "Ayush Sharma",
    batch: "2023",
    linkedin: "https://www.linkedin.com/in/ayush-sharma027",
    instagram: "https://www.instagram.com/._ayush...?igsh=MmFtaTFuY2NoenNv",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945095/IMG-20240513-WA0233_jgmvog.jpg",
  },
  {
    name: "Avirat Mahajan",
    batch: "2023",
    linkedin:
      "https://www.linkedin.com/in/avirat-mahajan-77911a289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/avirat.13?igsh=eGJ4Nmo1dTdqaXNk",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945139/IMG-20240410-WA0016_eow17z.jpg",
  },
  {
    name: "Vansh Pal",
    batch: "2023",
    linkedin:
      "https://www.linkedin.com/in/vansh-pal-06b88a289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/vanshpal921?utm_source=qr",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080858/WIN_20240415_20_11_54_Pro_zw1squ.jpg",
  },
  {
    name: "Sujal Choudhary",
    batch: "2023",
    linkedin: "http://linkedin.com/in/sujal-choudhary-0391212a2",
    instagram:
      "https://www.instagram.com/sujal._781?igsh=NWtvdHZqZmI3bHE3&utm_source=qr",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738091293/sujal_sosrec_ghouip.jpg",
  },
  {
    name: "Anshuman Kapoor",
    batch: "2023",
    linkedin: "http://www.linkedin.com/in/anshuman-singh-kapoor-5002592b8",
    instagram: "",
    imgSrc:
      "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1728535411/anshuman_ugy7ne.jpg",
  },
  {
    name: "Abhay Chaudhary",
    batch: "2023",
    linkedin:
      "https://www.linkedin.com/in/abhay-chaudhary-693b2a329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738081032/IMG-20240920-WA0002_kxrj0r.jpg",
  },
  {
    name: "Aanya Soni",
    batch: "2023",
    linkedin:
      "https://www.linkedin.com/in/aanya-soni-8060b32b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    instagram: "",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738082046/IMG_5200_uwq9wi.jpg",
  },
  {
    name: "Himanshu Mahajan",
    batch: "2023",
    linkedin: "http://www.linkedin.com/in/himanshu-mahajan-939b462b1",
    instagram:
      "https://www.instagram.com/himanshu._mhjn?igsh=MW82ZDN0c20wYjR1eQ%3D%3D&utm_source=qr",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945205/formal_oi5vpb.jpg",
  },
  {
    name: "Ishan Choudhary",
    batch: "2023",
    linkedin:
      "https://www.linkedin.com/in/ishan-choudhary-70470a32a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:
      "https://www.instagram.com/ishan_12_02?igsh=MWw3cHoydDB6NThsMw==",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738082088/IMG_20240921_005315_qwh3dd.jpg",
  },
  {
    name: "Harsh Goel",
    batch: "2023",
    linkedin: "https://www.linkedin.com/in/harsh-goel-90a742280",
    instagram: "https://www.instagram.com/harsh_.goel?igsh=YnNoeTlqMmR6c2hv",
    imgSrc:
      "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1731838897/WhatsApp_Image_2024-11-17_at_15.51.00_2b583045_kqcd5x.jpg",
  },
  {
    name: "pratyush pragyey",
    batch: "2023",
    linkedin: "https://www.linkedin.com/in/pratyush-pragyey-7a95a7258/",
    instagram: "https://www.instagram.com/eyepatch_5263/",
    imgSrc:
      "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1721114549/rptdgsgi7qzijyojnja0.jpg",
  },
  {
    name: "Rudesh Kumar",
    batch: "2023",
    linkedin: "https://www.linkedin.com/in/rudesh-kumar-40712b280/",
    instagram: "",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738082144/photo_k91tqe.jpg",
  },
  {
    name: "Lavish",
    batch: "2024",
    linkedin: "https://www.linkedin.com/in/lavish-awasthi-503259314",
    instagram:
      "https://www.instagram.com/lavish_awasthi._?igsh=MWQ4M3l0a2Y1bWgzYg==",
    imgSrc:
      "https://res.cloudinary.com/duezus2xn/image/upload/v1738075460/lavish_mupjh3.jpg",
  },
  {
    name: "Prashant Thakur",
    batch: "2024",
    linkedin: "https://www.linkedin.com/in/prashant-thakur-046678322/",
    instagram: "https://www.instagram.com/prashantt_2730",
    imgSrc:
      "https://res.cloudinary.com/duezus2xn/image/upload/v1738075650/prashant_2_vsdpsb.jpg",
  },
  {
    name: "Aryan Sharma",
    batch: "2024",
    linkedin: "https://www.linkedin.com/in/aryan-sharma-663278284",
    instagram: "https://www.instagram.com/5xdayz",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738087174/IMG_20241120_152145246_HDR_pavhc9.jpg",
  },
  {
    name: "Sanket Singh Sameer",
    batch: "2024",
    linkedin: "https://www.linkedin.com/in/sanket-singh-sameer",
    instagram: "https://www.instagram.com/sanket_singh_sameer",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738087686/1000156654-01_ridyfs.jpg",
  },
  {
    name: "Raman Bansal",
    batch: "2024",
    linkedin: "https://www.linkedin.com/in/-raman-bansal",
    instagram:
      "https://www.instagram.com/ramanbansal188?igsh=MXZ2cmJjOGkzdG9kMA==",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088074/profile_badm2f.jpg",
  },
  {
    name: "Utkarsh Shukla",
    batch: "2024",
    linkedin: "https://www.linkedin.com/in/utkarsh-shukla-034313329/",
    instagram: "https://www.instagram.com/_utkarsh.shukla_238",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088144/IMG-20241220-WA0110_qptedf.jpg",
  },
  {
    name: "Anshu Kumari",
    batch: "2024",
    linkedin: "https://www.linkedin.com/in/anshu-kumari-903948324",
    instagram: "https://www.instagram.com/ansdhiwan298",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134087/IMG_20250128_201927_kwt4vg.jpg",
  },
  {
    name: "Avadhi",
    batch: "2024",
    linkedin:
      "https://www.linkedin.com/in/avadhi-jain-01453b313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134129/20250128_204711_h36r6t.jpg",
  },
  {
    name: "Anilove",
    batch: "2024",
    linkedin: "https://www.linkedin.com/in/anilove-049a12324",
    instagram: "https://www.instagram.com/anilove._.5?igsh=YXlqYW95eHMzM2dr",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088682/IMG20241110215944_qx4ejt.jpg",
  },
  {
    name: "Bhola Prasad Sah",
    batch: "2024",
    linkedin:
      "https://www.linkedin.com/in/bhola-prasad-sah-869b13349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/bholey.1?igsh=MWUxeWx5djdwZ251eA==",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088411/1738076772514_ql73vg.jpg",
  },
  {
    name: "Tanmay Singh",
    batch: "2024",
    linkedin:
      "https://www.linkedin.com/in/tanmay-singh-89021b324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:
      "https://www.instagram.com/tanmay_singh_100?igsh=aWJydjA3Nm55eHBw",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134170/IMG-20240818-WA0002_dolerx.jpg",
  },
  {
    name: "Tanisha",
    batch: "2024",
    linkedin: "https://www.linkedin.com/in/tanisha-chandok-77a185349",
    instagram:
      "https://www.instagram.com/tanishaa.3006?utm_source=qr&igsh=ZDFkNWwyZXAyd3Nm",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088626/IMG_20241207_155127_mls1zh.jpg",
  },
  {
    name: "Aakriti",
    batch: "2024",
    linkedin: "www.linkedin.com/in/aakriti-rattan-bba62b319",
    instagram: "https://www.instagram.com/_aakriti.here?igsh=Yng3dnhrY3AwNHlt",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738089007/IMG_20250128_235644_197_yttpst.jpg",
  },
  {
    name: "Chetna Singh",
    batch: "2024",
    linkedin: "https://www.linkedin.com/in/chetna-singh-97166a322/",
    instagram: "https://www.instagram.com/mainhoonchetna/?hl=en",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134304/c823d071-af30-45a7-9182-a85015e0cb33_fn17g3.jpg",
  },
  {
    name: "Divyam",
    batch: "2024",
    linkedin: "www.linkedin.com/in/divyam-singh-duhoon",
    instagram: "https://www.instagram.com/btwimdivyam/",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134704/WhatsApp_Image_2024-11-10_at_10.47.39_PM_lpvlpg.jpg",
  },
  {
    name: "Sujal",
    batch: "2024",
    linkedin: "https://www.linkedin.com/in/sujalzombie01",
    instagram: "",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738089730/IMG_20241030_184111_nlzhqz.jpg",
  },
];

export default function Team() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const filteredMembers = selectedYear
    ? teamMembers.filter((member) => Number(member.batch) === selectedYear)
    : teamMembers;

  const glitch = useGlitch({
    timing: {
      duration: 3950,
    },
    shake: false,
  });

  return (
    <div
      id="team"
      className="min-h-screen  bg-background text-foreground text-white"
    >
      <nav className="container mx-auto px-6 flex items-center justify-between gap-x-4 fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md py-3 shadow-lg">
        <div className="flex items-center gap-x-4">
          {/* CSEC Logo */}
          <motion.a
            href="https://csec.nith.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/csec-RitzmBrgdmOMfzaijUqHFSmOVA4LzO.png"
              alt="CSEC Logo"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </motion.a>

          {/* Separator */}
          <div className="h-7 w-px bg-gray-500"></div>

          {/* HACK Logo */}
          <motion.a
            href="/"
            className="w-12 h-12 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2816%29_20250208_222328_0000-50pdDbAwyrTeA1mMlMT3c72vROO2oA.png"
              alt="HACK Logo"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </motion.a>
        </div>

        {/* HACK 5.0 Text */}
        <div className="flex items-center">
          <span
            className={`relative z-10 font-bold text-3xl md:text-5xl lg:text-6xl text-white ${Hacked_KerX.className}`}
          >
            <span ref={glitch.ref} className="text-primary inline-block">
              HACK
            </span>{" "}
            <span className={Hacked_KerX.className}>5.0</span>
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl mb-4 ${Hacked_KerX.className}`}>
            Team <span className="text-primary">CSEC</span>
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet the talented individuals who make up our diverse team. Filter
            by year to learn more about our members.
          </p>
        </div>

        {/* Year Filter */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            {/* Filter Label */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              <span className="text-gray-300">Filter by Year:</span>
            </div>

            {/* Year Buttons */}
            <div className="flex gap-2 sm:gap-4 overflow-x-auto sm:overflow-visible w-full sm:w-auto justify-center">
              {[null, 2021, 2022, 2023, 2024].map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 text-sm sm:text-base rounded-lg transition-colors whitespace-nowrap ${
                    selectedYear === year
                      ? "bg-primary text-white"
                      : "bg-dark-light/50 text-gray-300 hover:bg-primary/20"
                  }`}
                >
                  {year === null ? "All Years" : `${year}`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-dark-light/50 rounded-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 bg-primary/20 rounded-full text-sm">
                        {member.batch}
                      </span>

                      <div className="flex gap-2">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-primary transition-colors"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                        )}
                        {member.instagram && (
                          // <svg
                          //   className="w-5 h-5"
                          //   fill="currentColor"
                          //   viewBox="0 0 24 24"
                          // >
                          <a
                            href={member.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-primary transition-colors"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
