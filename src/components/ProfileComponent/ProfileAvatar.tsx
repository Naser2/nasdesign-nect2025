"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import useMount from "@/hooks/useMount";
// import { updateProfile } from "../lib/actions";
import type {SupabaseUserProfile} from "@/lib/Types";
// import { UpdateUser } from "../../lib/schemas";
import { UploadButton } from "@/lib/uploadthing";
// import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
// import { z } from "zod";
import SubmitButton from "../SubmitButton";
import UserAvatar from "./UserAvatar";
import { Form } from "@/components/ui/form";
import { useHelpers } from "@/hooks/useHelpers";


interface UserFormData {
  id: string;             // User's unique ID
  image: string;          // Profile picture URL
  name: string;           // Full name of the user
  username: string;       // Username of the user
  bio?: string;           // Short bio about the user
  email?: string;         // Email address of the user
  website?: string;       // Website link if provided
  created_at?: string;    // Date when the profile was created
  updated_at?: string;    // Date when the profile was last updated
  user_role?: string;     // The role of the user (e.g., admin, member)
}



function ProfileAvatar({
  user,
  children,
}: {
  user: SupabaseUserProfile;
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const { saveUser , setLoading} = useHelpers(); // Use saveUser from useHelpers
  const isCurrentUser = session?.user.id === user.id;

  // UseForm with appropriate initial values
  const form = useForm<UserFormData>({
    defaultValues: {
      id: user.id,
      image: user.image || "",
      name: user.first_name || "",
      username: user.username || "",
    },
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const mount = useMount();

  if (!mount || !session) return null;

  if (!isCurrentUser)
    return <UserAvatar user={user} className="w-20 h-20 md:w-36 md:h-36" />;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="dialogContent">
        <DialogHeader>
          <DialogTitle className="mx-auto font-medium text-xl py-5">
            Change Profile Photo
          </DialogTitle>
        </DialogHeader>

        {isCurrentUser && (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(async (values) => {
                saveUser({setLoading, metadata: values});
                // toast(message);

                setOpen(false);
              })}
            >
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <UploadButton
                        className="text-sm h-11 ut-button:bg-transparent border-y border-zinc-300 dark:border-neutral-700 ut-button:text-blue-500 ut-button:font-bold ut-allowed-content:hidden ut-button:ring-0 ut-button:focus-visible:ring-0 ut-button:ring-offset-0 ut-button:w-full"
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                          form.setValue("image", res[0].url);

                          if (inputRef.current) {
                            inputRef.current.click();
                          }
                        }}
                        onUploadError={(error: Error) => {
                          console.error(error);
                          toast.error("Upload failed");
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {user.image && (
                <SubmitButton
                  className="text-red-500 border-b border-zinc-300 dark:border-neutral-700 font-bold disabled:cursor-not-allowed w-full text-sm p-3"
                  onClick={() => {
                    form.setValue("image", "");
                    if (inputRef.current) {
                      inputRef.current.click();
                    }
                  }}
                  disabled={form.formState.isSubmitting}
                >
                  Remove Current Photo
                </SubmitButton>
              )}

              <input type="submit" hidden ref={inputRef} />
            </form>
          </Form>
        )}

        <DialogClose className="postOption border-0 w-full p-3">
          Cancel
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

export default ProfileAvatar;
