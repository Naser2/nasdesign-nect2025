
import type { SupabaseUserProfile, UserProps } from "@/lib/Types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";
import { Bookmark, Clapperboard, Contact, Grid3X3 } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import React, { useState } from "react";
import DialogComponent from "./Dialog";
import clsx from "clsx";


interface InstagramTabsProps {
  profile: SupabaseUserProfile;
  isCurrentUser: boolean;
  projects: any[];  // Add projects as a prop
}
// Define the structure for each tab
// interface Tab {
//   value: string;
//   label: string;
//   title: string;
//   Icon: React.ComponentType<any>;
//   description: string;
//   content: string | TabContentField[];
// }
interface InstagramTabsProps {
  profile: SupabaseUserProfile;
  isCurrentUser: boolean;
}
const tabs = [
  {
    value: "bio",
    label: "Bio",
    title: "About",
    Icon: Clapperboard,
    description: "Make changes to your account here. Click save when you're done.",
    content: "usernam @peduarte"
  },
  {
    value: "projects",
    label: "Project",
    title: "Project",
    Icon: Grid3X3,
    description: "Make changes to your account here. Click save when you're done.",
    content: [
      { id: "name", label: "Name", defaultValue: "Pedro Duarte" },
      { id: "username", label: "Username", defaultValue: "@peduarte" }
    ]
  },
  {
    value: "saved",
    label: "Saved",
    title: "Saved ",
    Icon: Bookmark,
    description: "Update your profile details such as bio, website, and gender.",
    content: [
      { id: "first_name", label: "First Name", defaultValue: "John" },
      { id: "last_name", label: "Last Name", defaultValue: "Doe" },
      { id: "bio", label: "Bio", defaultValue: "Bodybuilding enthusiast" },
      { id: "gender", label: "Gender", defaultValue: "Male" }
    ]
  }
]
const InstagramTabs: React.FC<InstagramTabsProps> = ({ profile, isCurrentUser, projects }) => {
  const [open, setOpen] = useState(false); // Modal state
  const [selectedProject, setSelectedProject] = useState<any>(null); // Selected project data

  // Function to open modal with project details
  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setOpen(true); // Open the dialog/modal
  };
// small hidden  max-[1100px]:hidden cursor-not-allowed data-[active]:shadow 
  console.log("projects", projects)
  return (
    <Tabs defaultValue="bio" className="min-w-[400px] w-full mt-12 lg:mt-24 ">
      <TabsList className="grid w-full grid-cols-3 gap-x-4 bg-white dark:bg-black ">
        {tabs.map((tab) => (
          <>
            <TabsTrigger key={tab.value} value={tab.value}
              className="border-transparent dark:border-gray-800 text-gray-600 border-black  dark:text-gray-400 max-[1100px]:hidden
               data-[active]:text-black 
               dark:data-[state=active]:!bg-[#1b1e22]
               dark:data-[state=active]:!text-white
               dark:data-[active]:!border-b-2
               dark:data-[state=active]:!border-[#3d4146]
               border-gray-400
               system:border-mutted
               whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm font-mono"
            >
              {tab.title}
          </TabsTrigger>
         {/* max-lg:rounded-[0px]  */}
          <TabsTrigger key={tab.value} value={tab.value} className="min-[1100px]:hidden 
            bg-muted max-[1100px]:bg-muted  bg-white/15 dark:bg-[rgb(27,30,34)]
             dark:text-slate-100 dark:hover:text-white
            dark:data-[active]:!bg-white dark:data-[active]:!text-black 
            dark:data-[hover]:text-black hover:bg-white/15
            font-bold text-[#333]
            relative inline-flex items-center justify-center 
            px-4 py-[calc(theme(spacing.3)-1px)] rounded-full
            border border-transparent 
            shadow-md ring-1 ring-[#D15052]/15 after:absolute after:inset-0 
            after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d] 
            whitespace-nowrap text-base font-medium text-gray-950  
           ">
            <div className="flex">
              <div className="flex items-center gap-x-1">
                <tab.Icon className="h-3 w-3" />
                <p className="font-bold text-xs tracking-widest uppercase">
                  {tab.title}
                </p>
              </div>
            </div>
          </TabsTrigger></>
        ))}
      </TabsList>
      <DialogComponent item={selectedProject} open={open} setOpen={setOpen}/>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <Card>
            <CardHeader>
              <CardTitle>{tab.title}</CardTitle>
              <CardDescription>{tab.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 p-0" >
              {tab.value === "projects" ? (
                // If it's the Projects tab, display the projects or a placeholder
                projects.length > 0 ? (
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 md:gap-4">
                    {projects.map((project) => (
                      <div   onClick={() => handleProjectClick(project)}
                           key={project.id} className="border lg:rounded-lg shadow p-1  md:p-4">
                        <img
                          src={project.projectdesign[0] || '/placeholder.png'}
                          alt={project.title}
                          className="w-full h-32 object-cover mb-2 lg:rounded-lg"
                        />
                        <h3 className="font-bold text-lg max-md:hidden">{project.title}</h3>
                        {/* <p className="text-sm text-gray-500">{project.description}</p> */}
                      </div>
                  
                    ))}
                  </div>
                ) : (
                  <div className="text-center">
                    <p>No projects available yet. Start a new one!</p>
                  </div>
                )
              ) : (
                // Handle other tab contents as previously
                typeof tab.content === "string" ? (
                  <div className="space-y-1">
                    <p>{tab.content}</p>
                  </div>
                ) : (
                  tab.content.map((field) => (
                    <div key={field.id} className="space-y-1">
                      <Label htmlFor={field.id}>{field.label}</Label>
                      <Input id={field.id} defaultValue={field.defaultValue || ""} />
                    </div>
                  ))
                )
              )}
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default InstagramTabs;

// import type { SupabaseUserProfile, UserProps } from "@/lib/Types";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Separator } from "../ui/separator";
// import { Bookmark, Clapperboard, Contact, Grid3X3 } from "lucide-react";


// import { Button } from "@/components/ui/button"
// interface TabContentField {
//   id: string;
//   label: string;
//   defaultValue: string;
//   type?: string;
// }

// interface Tab {
//   value: string;
//   label: string;
//   title: string;
//   Icon: React.ComponentType<any>;
//   description: string;
//   content: string | TabContentField[];
// }
// interface InstagramTabsProps {
//   profile: SupabaseUserProfile;
//   isCurrentUser: boolean;
// }
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs"
// import React from "react";

// // Define the structure for each tab
// const tabs = [
//   {
//     value: "bio",
//     label: "Bio",
//     title: "About",
//     Icon: Clapperboard,
//     description: "Make changes to your account here. Click save when you're done.",
//     content: "usernam @peduarte"
//   },
//   {
//     value: "projects",
//     label: "Project",
//     title: "Project",
//     Icon: Grid3X3,
//     description: "Make changes to your account here. Click save when you're done.",
//     content: [
//       { id: "name", label: "Name", defaultValue: "Pedro Duarte" },
//       { id: "username", label: "Username", defaultValue: "@peduarte" }
//     ]
//   },
//   {
//     value: "saved",
//     label: "Saved",
//     title: "saved Information",
//     Icon: Bookmark,
//     description: "Update your profile details such as bio, website, and gender.",
//     content: [
//       { id: "first_name", label: "First Name", defaultValue: "John" },
//       { id: "last_name", label: "Last Name", defaultValue: "Doe" },
//       { id: "bio", label: "Bio", defaultValue: "Bodybuilding enthusiast" },
//       { id: "gender", label: "Gender", defaultValue: "Male" }
//     ]
//   }
// ]
//  const InstagramTabs: React.FC<InstagramTabsProps>  = ({ profile, isCurrentUser }) => {
//   return (
//     <Tabs defaultValue="account" className="min-w-[400px] w-full mt-12 lg:mt-24">
//       <TabsList className="grid w-full grid-cols-3 gap-x-4 bg-white">
//         {tabs.map((tab) => (
//           <TabsTrigger key={tab.value} value={tab.value} className="bg-muted">
//             {/* {tab.label}   */}
//            <div className="flex">
//              <div className="flex items-center gap-x-1">
//                <tab.Icon className="h-3 w-3" />
//                   <p className="font-bold text-xs tracking-widest uppercase">
//                     {tab.title}
//                   </p>
//                   </div>
//                </div>  
//           </TabsTrigger>
//         ))}
//       </TabsList>
      
//       {tabs.map((tab) => (
//         <TabsContent key={tab.value} value={tab.value}>
//           <Card>
//             <CardHeader>
//               <CardTitle>{tab.title}</CardTitle>
//               <CardDescription>{tab.description}</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-2">
//               {/* Render `tab.content` conditionally based on its type */}
//               {typeof tab.content === "string" ? (
//                 <div className="space-y-1">
//                   <p>{tab.content}</p>
//                 </div>
//               ) : (
//                 tab.content.map((field) => (
//                   <div key={field.id} className="space-y-1">
//                     <Label htmlFor={field.id}>{field.label}</Label>
//                     <Input id={field.id} defaultValue={field.defaultValue || ""}/>
//                   </div>
//                 ))
//               )}
//             </CardContent>
//           </Card>
//         </TabsContent>
//       ))}
//     </Tabs>
//   )
// }

// export  default InstagramTabs;
