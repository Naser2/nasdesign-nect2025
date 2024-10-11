"use client" 

export default  function About({}) {
  const profile = {
    name: 'Nasser Sanou',
    imageUrl: '/path/to/nas_singing_portrait.jpg',
    coverImageUrl: '/path/to/backgroundGif.gif',
  };

return  <>
<div className="mt-14 flex h-full -mb-44">
  <div className="relative flex-1 overflow-hidden">
    <main className="relative flex-1 lg:px-64 overflow-y-auto focus:outline-none xl:order-last">
      <article>
        {/* <ProfileHeader profile={profile} /> */}
        {/* <Tabs tabs={tabs} setCurrentTab={setCurrentTab} /> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-1">
          {/* <SocialMediaGallery collection={socialMedia} /> */}
          <video controls className="md:rounded-xl px-4 md:mt-0 max-[1200px]:hidden aspect-[6/4]" src={'/promo-trimed.mp4'} />
        </div>
      </article>
    </main>
  </div>
</div>
</>

  // return (
  //  <AboutPage aboutPagedata={pageData}/>
  // )
}


// components/Tabs.js
import { classNames } from '@/utils/classNames';

export const Tabs = ({ tabs, setCurrentTab }) => {
  return (
    <div className="mt-6 sm:mt-2 2xl:mt-5">
      <div className="border-b border-t border-gray-200">
        <nav className="max-[600px]:justify-center -mb-px flex space-x-1" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setCurrentTab(tab.name)}
              className={classNames(
                tab.current
                  ? 'border-sky-500  text-gray-900 dark:border-indigo-500 dark:text-gray-200'
                  : 'border-gray-100 dark:border-gray-600 text-gray-500 hover:border-gray-200 hover:text-gray-700',
                'whitespace-nowrap border-b-2 py-1 px-10 text-sm font-medium dark:text-gray-300'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              <div>
                <div className="text-slate-900 pt-1 font-bold text-md dark:text-white">{tab.name}</div>
                <div className="mt-0.5 font-bold text-gray-400 leading-6">{tab.data}</div>
              </div>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};


// components/ProfileHeader.js

export const ProfileHeader = ({ profile }) => {
  return (
    <div id="USER_BACKGROUND Profile and CTA">
      <div id="about-background-wrapper">
        <img
          className="landing-hero-background h-44 w-full object-cover lg:h-64"
          src={backgroundGif.src}
          alt=""
        />
      </div>
      <div className="rmx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="inline-flex" id="profile-image-wrapper">
            <img
              className="h-24 w-24 rounded-full ring-4 ring-blue-400 dark:ring-indigo-500 sm:h-32 sm:w-32"
              src={profile.imageUrl}
              alt=""
            />
          </div>
          <span className="absolute mt-3 top-12 ml-5 sm:top-20 sm:left-36">
            <h1 className="inline-flex truncate text-2xl font-bold text-gray-900 dark:text-white">
              {profile.name}
              <svg className="ml-2 mr-1.5 mt-2 h-5 w-5 flex-shrink-0 text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </h1>
            <div className="font-semibold text-slate-700 dark:text-gray-400">Artist &amp; Software Engineer</div>
          </span>
        </div>
      </div>
    </div>
  );
};



// import fetchAboutPage from '../../api/fetchAboutPage.ts'
// import AboutPage from '@/components/AboutPage'
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




// components/SocialMediaGallery.js
export const SocialMediaGallery = ({ collection }) => {
  return (
    <div className="mt-10 bg-white">
      {/* map over collection to display images */}
    </div>
  );
};





// const About = () => {
//   const [tabs, setTabs] = useState(tabsPanel);
//   const [currentTab, setCurrent] = useState('Women');

//   const setCurrentTab = (tabName) => {
//     const tabsState = tabs.map((tab) => ({
//       ...tab,
//       current: tab.name === tabName
//     }));
//     setTabs(tabsState);
//     setCurrent(tabName);
//   };

//   const profile = {
//     name: 'Nasser Sanou',
//     imageUrl: '/path/to/nas_singing_portrait.jpg',
//     coverImageUrl: '/path/to/backgroundGif.gif',
//   };

//   return (
//     <>
//       <div className="mt-14 flex h-full -mb-44">
//         <div className="relative flex-1 overflow-hidden">
//           <main className="relative flex-1 lg:px-64 overflow-y-auto focus:outline-none xl:order-last">
//             <article>
//               <ProfileHeader profile={profile} />
//               <Tabs tabs={tabs} setCurrentTab={setCurrentTab} />
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-1">
//                 <SocialMediaGallery collection={socialMedia} />
//                 <video controls className="md:rounded-xl px-4 md:mt-0 max-[1200px]:hidden aspect-[6/4]" src={'/promo-trimed.mp4'} />
//               </div>
//             </article>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;
