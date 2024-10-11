

import type { UserProps } from "@/lib/Types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";
import { Bookmark, Clapperboard, Contact, Grid3X3 } from "lucide-react";


import { Button } from "@/components/ui/button"
interface TabContentField {
  id: string;
  label: string;
  defaultValue: string;
  type?: string;
}

interface Tab {
  value: string;
  label: string;
  title: string;
  Icon: React.ComponentType<any>;
  description: string;
  content: string | TabContentField[];
}

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
    <Tabs defaultValue="account" className="min-w-[400px] w-full mt-12 lg:mt-24">
      <TabsList className="grid w-full grid-cols-3">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {/* {tab.label}   */}
           <div className="flex">
             <div className="flex items-center gap-x-1">
               <tab.Icon className="h-3 w-3" />
                  <p className="font-bold text-xs tracking-widest uppercase">
                    {tab.title}
                  </p>
                  </div>
               </div>  
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
              {/* Render `tab.content` conditionally based on its type */}
              {typeof tab.content === "string" ? (
                <div className="space-y-1">
                  <p>{tab.content}</p>
                </div>
              ) : (
                tab.content.map((field) => (
                  <div key={field.id} className="space-y-1">
                    <Label htmlFor={field.id}>{field.label}</Label>
                    <Input id={field.id} defaultValue={field.defaultValue || ""}/>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  )
}

export  default InstagramTabs;
