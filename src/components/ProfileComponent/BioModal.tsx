"use client";

import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from '@/components/button'

interface BioModalProps {
  bio: string;
  isBioOpen: boolean;
  isBioClosed: () => void;
  saveBio: (bio: string) => void;
}

const BioModal: React.FC<BioModalProps> = ({ bio, isBioOpen, isBioClosed, saveBio }) => {
  const [newBio, setNewBio] = useState(bio || '');

  const handleSave = () => {
    saveBio(newBio);
    isBioClosed(); // Close the modal after saving
  };

  return (
    <Dialog open={isBioOpen} onOpenChange={(open) => !open && isBioClosed()}>
      <DialogTrigger asChild>
        <Button onClick={() => {}} className="hidden">Update Bio</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Bio</DialogTitle>
        </DialogHeader>
        <div className="p-4">
          <TextareaAutosize
            name="description"
            onInput={(e) => setNewBio((e.target as HTMLTextAreaElement).value)}
            className="mt-1 w-full max-w-2xl px-0 text-sm tracking-wider leading-6 text-white bg-black font-mono border-0 border-b border-gray-800 focus:border-white resize-none focus:outline-none focus:ring-0"
            placeholder="Enter a short bio about yourself... (Markdown supported)"
            value={newBio}
          />
          <div className="flex justify-end w-full max-w-2xl mt-2">
            <p className="text-gray-400 font-mono text-sm">
              {newBio.length}/256
            </p>
          </div>
          <DialogFooter>
            <Button onClick={isBioClosed} variant="secondary" className="mr-2">
              Cancel
            </Button>
            <Button onClick={handleSave} variant="primary">
              Save
            </Button>
          </DialogFooter>
        </div>
        <DialogClose className="absolute right-4 top-4">
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default BioModal;
