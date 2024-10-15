
import { UploadButton } from "@/lib/uploadthing";

import { useState } from "react";

import Error from "@/components/Error";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "postcss";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import BlurImage from "../blur-image";
import { z } from "zod";

// const MyUploadButton = UploadButton();
const fileUploadSchema = z.object({
  projectDesign: z.array(z.string()).optional(),  // Project design should be an array of URLs
});


interface UploadFileFormProps {
  projectDesign: string[];  // Array of image URLs
  setProjectDesign: (url: string[]) => void;  // Function that accepts an array of URLs
  title: string;
  openUploader: () => void;
  closeUploader: () => void;
}
export default function UploadFileForm({ projectDesign, setProjectDesign, title, openUploader, closeUploader }: UploadFileFormProps) {
  const [loading, setLoading] = useState(false);
  

  const form = useForm({
    resolver: zodResolver(fileUploadSchema),
    defaultValues: {
      projectDesign: [],  // Set the default to an empty array
    },
  });

  const handleFileUpload = (res: any[]) => {
    const uploadedUrls: string[] = res.map((file: any) => file.url);  // Ensure `uploadedUrls` is a string array
  
    // Directly update the state without using the function form
    setProjectDesign([...projectDesign, ...uploadedUrls]);  // Append new URLs to the existing array
  
    toast.success("Upload complete");
    closeUploader();
    toast.success("Upload complete");
    closeUploader();
  };

  return (
    <div>
      <h3>{projectDesign.length > 0 ? <p className="text-center py-4 block text-sm font-semibold leading-6 text-gray-900">Design Uploaded:</p> : title}</h3>

      {projectDesign.length > 0 ? (
        <div>
          {projectDesign.map((url, index) => (
            <div key={index} className="h-96 md:h-[450px] overflow-hidden rounded-md mb-4">
              <AspectRatio ratio={1 / 1} className="relative h-full">
                <BlurImage
                  src={url}
                  alt={`Design preview ${index + 1}`}
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
          ))}
          <Button onClick={() => setProjectDesign([])} className="mt-6 bg-gray-100 text-[#333] hover:bg-black hover:text-white" type="button" disabled={form.formState.isSubmitting}>
            Change files
          </Button>
        </div>
      ) : (
        <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((values) => {
                if (values.projectDesign) {
                  setProjectDesign(values.projectDesign);  // Set the array of URLs if defined
                }
              })}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="projectDesign"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel htmlFor="design">Upload Design</FormLabel>
                    <FormControl>
                      <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                        <div className="col-span-4 space-y-4 rounded-lg border border-dashed border-[#333] p-6 text-center">
                          <UploadButton
                            endpoint="imageUploader"
                            onClientUploadComplete={handleFileUpload}
                            onUploadError={(error: Error) => {
                              console.error(error);
                              toast.error("Upload failed");
                            }}
                          />
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </>
      )}
    </div>
  );
}
// export default function UploadFileForm({ projectDesign, setProjectDesign, title, openUploader, closeUploader }:UploadFileFormProps) {
//   const [loading, setLoading] = useState(false);

//  const handleFileUpload = (file: { url: string; }) => {
//     setLoading(true);
//     setProjectDesign(file.url); // Pass the file URL to the parent component
//     setLoading(false);
//     closeUploader();
//   };
//   const form = useForm({
//     resolver: zodResolver(fileUploadSchema),
//     defaultValues: {
//       fileUrl: undefined,
//     },
//   });

//   return (
//     <div>
//       <h3>{ fileUrl?  <p className="text-center py-4 block text-sm font-semibold leading-6 text-gray-900">File uploaded: </p>: title }</h3>
//       {fileUrl ? (
//         <div>
         
//           <div className="h-96 md:h-[450px] overflow-hidden rounded-md">
//                   <AspectRatio ratio={1 / 1} className="relative h-full">
//                     <BlurImage 
//                       src={fileUrl}
//                       alt="Post preview"
//                       fill
//                       className="rounded-md object-cover"
                    
//                     />
//                   </AspectRatio>
//                 </div>
              

//               <Button  onClick={() => setProjectDesign('')} className="mt-6 bg-gray-100 text-[#333] hover:bg-black hover:text-white" type="submit" disabled={form.formState.isSubmitting}>
//               Change file
//               </Button>
//           {/* <button className="py-6 hover:bg-blacj hover:!hidden" onClick={() => setFileUrl('')}>Change file ?</button> */}
//         </div>
//       ) : (<>
//        <Form {...form}>
//             <form
//               onSubmit={form.handleSubmit(async (values) => {
//                 if (values.fileUrl) {
//                   setProjectDesign(values.fileUrl); // Only pass fileUrl if it is defined
//                 }
//               })}
//               className="space-y-4"
//             >
//               {fileUrl ? (
//                 <div className="h-96 md:h-[450px] overflow-hidden rounded-md">
//                   <AspectRatio ratio={1 / 1} className="relative h-full">
//                     <BlurImage 
//                       src={fileUrl}
//                       alt="Post preview"
//                       fill
//                       className="rounded-md object-cover"
//                       width={500} height={500}
//                     />
//                   </AspectRatio>
//                 </div>
//               ) : (
//                 <FormField
//                   control={form.control}
//                   name="fileUrl"
//                   render={({ field, fieldState }) => (
//                     <FormItem>
//                       <FormLabel htmlFor="picture">Picture</FormLabel>
//                       <FormControl>
//                       <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
//                         <div className="col-span-4 space-y-4 rounded-lg border border-dashed border-[#333] p-6 text-center">
//                           <div className="space-y-1">
//                           </div>
//                             <span className="truncate">Upload Design</span>
//                                 <UploadButton className=""
//                                   endpoint="imageUploader"
//                                   onClientUploadComplete={(res) => {
//                                     const uploadedUrls = res.map((file: any) => file.url);  // Map through the response to get URLs
//                                     setProjectDesign((prevDesign) => [...prevDesign, ...uploadedUrls]);  // Append new files to the existing array
//                                     toast.success("Upload complete");
//                                   }}
//                                   //   onClientUploadComplete={(res) => {
//                                   //   setFileUrl( res[0].url);
//                                   //   // form.setValue("fileUrl", res[0].url);
//                                   //   toast.success("Upload complete");
//                                   // }}
//                                     onUploadError={(error: Error) => {
//                                     console.error(error);
//                                     toast.error("Upload failed");
//                                   }}
//                                 />
//                             </div>
//                           </div>

                          
//                         </FormControl>
//                       {/* <FormDescription>
//                         Upload a picture to post.
//                       </FormDescription> */}
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               )}
//             </form>
//           </Form>
       
//      </> )}
//     </div>
//   );
// }
// export default function UploadFileForm({fileUrl, setFileUrl, title, openUploader, closeUploader} ) {
//     const [open, setOpen] = useState(false);

//     const closeDialog = () => {
//       setOpen(false);
//     };
//     // const pathname = usePathname();
//     // const isCreatePage = pathname === "/dashboard/create";
//     // const router = useRouter();
//     // const mount = useMount();
//     const form = useForm<z.infer<typeof CreatePost>>({
//       resolver: zodResolver(CreatePost),
//       defaultValues: {
//         caption: "",
//         fileUrl: undefined,
//       },
//     });
//     const fileUrl = form.watch("fileUrl");
  
//     if (!mount) return null;
  
//     return (
//       <div>
//         <Dialog
//           open={open}
//           onOpenChange={(open) => !open && router.back()}
//         >
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Create new post</DialogTitle>
//             </DialogHeader>
  
//             <Form {...form}>
//               <form
//                 onSubmit={form.handleSubmit(async (values) => {
//                   const res = await createPost(values);
//                   if (res) {
//                     return toast.error(<Error res={res} />);
//                   }
//                 })}
//                 className="space-y-4"
//               >
//                 {!!fileUrl ? (
//                   <div className="h-96 md:h-[450px] overflow-hidden rounded-md">
//                     <AspectRatio ratio={1 / 1} className="relative h-full">
//                       <BlurImage
//                         src={fileUrl}
//                         alt="Post preview"
//                         fill
//                         className="rounded-md object-cover"
//                         width={500} height={500}
//                       />
//                     </AspectRatio>
//                   </div>
//                 ) : (
//                   <FormField
//                     control={form.control}
//                     name="fileUrl"
//                     render={({ field, fieldState }) => (
//                       <FormItem>
//                         <FormLabel htmlFor="picture">Picture</FormLabel>
//                         <FormControl>
//                           <UploadButton
//                             endpoint="imageUploader"
//                             onClientUploadComplete={(res) => {
//                               form.setValue("fileUrl", res[0].url);
//                               toast.success("Upload complete");
//                             }}
//                             onUploadError={(error: Error) => {
//                               console.error(error);
//                               toast.error("Upload failed");
//                             }}
//                           />
//                         </FormControl>
//                         <FormDescription>
//                           Upload a picture to post.
//                         </FormDescription>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 )}
  
//                 {!!fileUrl && (
//                   <FormField
//                     control={form.control}
//                     name="caption"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel htmlFor="caption">Additonal Notes</FormLabel>
//                         <FormControl>
//                           <Input
//                             type="caption"
//                             id="caption"
//                             placeholder="Adda note if needed"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 )}
  
//                 <Button type="submit" disabled={form.formState.isSubmitting}>
//                   Save
//                 </Button>
//               </form>
//             </Form>
//           </DialogContent>
//         </Dialog>
//       </div>
//     );
//   }
  
  