"use client" 

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { useEffect, useRef, useState } from "react";
// import fetchAboutPage from '../../api/fetchAboutPage.ts'
import AboutPage from '@/components/AboutPage'
// import {
//   GitHubIcon,
//   InstagramIcon,
//   LinkedInIcon,
//   TwitterIcon,
// } from '@/components/SocialIcons'
// import portraitImage from '@/images/portrait.jpg'
// import { SocialMedia } from '@/components/SocialMedia'

import { groq } from "next-sanity";
import { sanityClient } from "@/sanity/lib/client";

export async function getAboutPage() {
  const query = groq`
  *[_type == "aboutPage"][0] {
    ...,
  }
  `;
const aboutPageData = await sanityClient.fetch(query)
console.log("ABOUT_PAGE_DATA", aboutPageData)
  return aboutPageData;
}


function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default  function About({}) {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);
  const section2ImageRef = useRef(null);
  const Section2TextCompRef = useRef(null); 
  
const section3ImageRef = useRef(null);
const section3TextCompRef = useRef(null); 


let section1 
let section2 
let section3

  useEffect(() => {
    const fetchData = async () => {
      try {
        const aboutPageData = await getAboutPage('aboutPage');
        setPageData(aboutPageData);
      
      } catch (error) {
        console.error("Error fetching About Page data:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    if (!pageData) {
      fetchData();
    }
  }, [pageData]);
        // section1 = pageData?.sections[0];
        // section2 = pageData?.sections[1];
        // section3 = pageData?.sections[2];
  if (loading) {
    return <div>Loading...</div>;
  }
// export default async function About({}) {
//   const aboutPageData = await getAboutPage('aboutPage')
//   // console.log("ABOUT_PAGE_DATA 2", aboutPageData)
// const [pageData, setPageData] = useState(null);
//   console.log("aboutPageData", aboutPageData)
//   useEffect(() => {
//       console.log("ABOUT_PAGE_DATA 2", aboutPageData)
//       setPageData(aboutPageData) 
// // }, [aboutPageData]);

 

 


  return (
   <AboutPage aboutPagedata={pageData}/>
  )
}
