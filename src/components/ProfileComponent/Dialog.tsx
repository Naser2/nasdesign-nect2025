import { useState } from "react";
import type { ProjectDataType, SupabaseUserProfile } from "@/lib/Types";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Grid3X3, Bookmark, Clapperboard } from "lucide-react";
import React from "react";

interface ProjectProps {
    open: boolean; // State indicating whether the dialog is open
    setOpen: (open: boolean) => void; // Function to toggle the dialog state
    item: ProjectDataType; // Project data to be displayed in the dialog
  }
  
  const DialogComponent: React.FC<ProjectProps> = ({ item, open, setOpen }) => {
    return (
      <Dialog open={open} onOpenChange={setOpen}
       className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
        <DialogContent className="ixed left-[50%] top-[50%]  lg:top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 
        data-[state=open]:slide-in-from-top-[48%] h-[100vh] sm:min-h-[99vh] sm:rounded-lg md:max-w-md lg:max-w-lg xl:max-w-[80vw]">
          <div className="relative max-w-3xl w-full bg-white rounded-lg p-6 f">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{item?.title}</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full lg:w-1/2">
                <img
                  src={item?.projectdesign?.[0] || "/placeholder.png"}
                  alt={item?.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-sm text-gray-500">{item?.description || "No description available."}</p>
                <div className="mt-4">
                  <h4 className="font-semibold">Project Stats</h4>
                  <ul className="list-disc ml-4 mt-2 text-sm">
                    <li>Views: {item?.views || 0}</li>
                    <li>Likes: {item?.likes || 0}</li>
                    <li>Activities: {item?.activities?.length || 0}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default DialogComponent;