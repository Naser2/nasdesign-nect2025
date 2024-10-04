

import type { UserProps } from "@/lib/Types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";
import { Bookmark, Clapperboard, Contact, Grid3X3 } from "lucide-react";


import { Button } from "@/components/ui/button"
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

// Define the structure for each tab
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
    title: "saved Information",
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

export function InstagramTabs() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}  
           {/* <div className="flex">
             <div className="flex items-center gap-x-1">
               <tab.Icon className="h-3 w-3" />
                  <p className="font-bold text-xs tracking-widest uppercase">
                    {tab.title}
                  </p>
                  </div>
               </div>   */}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <Card>
            <CardHeader>
              <CardTitle>{tab.title}</CardTitle>
              <CardDescription>{tab.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
            {tab.value === "bio" ?
                <div  className="space-y-1">
                  <p>{tab.content}</p>
                </div>
              :  tab.content.map((field) => (
                <div key={field.id} className="space-y-1">
                  
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <Input id={field.id} defaultValue={field.defaultValue || ""} type={field.type || "text"} />
                </div>
              ))}
              
              
            </CardContent>
            {/* <CardFooter>
              <Button>Save changes</Button>
            </CardFooter> */}
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  )
}

// const profileTabs = [
//   {
//     title: "Posts",
//     href: "",
//     Icon: Grid3X3,
//   },
//   {
//     title: "Reels",
//     href: "reels",
//     Icon: Clapperboard,
//   },
//   {
//     title: "Saved",
//     href: "saved",
//     Icon: Bookmark,
//   },
//   {
//     title: "Tagged",
//     href: "tagged",
//     Icon: Contact,
//   },
// ];

// function InstagramTabs({
//   profile,
//   isCurrentUser,
// }: {
//   profile: UserProps;
//   isCurrentUser: boolean;
// }) {
//   const pathname = usePathname();

//   return (
//     <Tabs defaultValue="posts" className="pt-14 md:pt-32 pb-16">
//       <TabsList className="p-px bg-zinc-300 dark:bg-neutral-800 h-px w-full gap-x-10">
//         {profileTabs
//           .filter((tab) => isCurrentUser || tab.href !== "saved")
//           .map((tab) => {
//             const profilePage = `/dashboard/${profile.username}`;
//             const isActive = tab.href === ""
//                 ? pathname === profilePage
//                 : pathname === `${profilePage}/${tab.href}`;

//             return (
//               <TabsTrigger
//                 key={tab.href}
//                 value={tab.href}
//                 className={cn(
//                   "flex-col mt-8 gap-4 !p-0 data-[state=active]:text-neutral-400",
//                   isActive
//                     ? "!text-neutral-700 dark:!text-white"
//                     : "text-neutral-400"
//                 )}
//                 asChild
//               >
//                 <Link href={`/dashboard/${profile.username}/${tab.href}`}>
//                   <Separator
//                     className={cn(
//                       "!h-px w-16",
//                       isActive
//                         ? "!bg-neutral-700 dark:!bg-white"
//                         : "dark:!bg-neutral-800 bg-zinc-300"
//                     )}
//                   />
//                   <div className="flex items-center gap-x-1">
//                     <tab.Icon className="h-3 w-3" />
//                     <p className="font-bold text-xs tracking-widest uppercase">
//                       {tab.title}
//                     </p>
//                   </div>
//                 </Link>
//               </TabsTrigger>
//             );
//           })}
//       </TabsList>
//     </Tabs>
//   );
// }

export  default InstagramTabs;
