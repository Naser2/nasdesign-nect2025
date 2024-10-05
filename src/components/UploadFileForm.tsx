
import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";
import { DialogTitle } from "@headlessui/react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UploadButton } from "@/lib/uploadthing";
import BlurImage from "./blur-image";
import { toast } from "sonner";
import { useState } from "react";

export default function UploadFileForm({fileUrl, setFileUrl, title, openUploader, closeUploader} ) {
    const [open, setOpen] = useState(false);

    const closeDialog = () => {
      setOpen(false);
    };
    // const pathname = usePathname();
    // const isCreatePage = pathname === "/dashboard/create";
    // const router = useRouter();
    // const mount = useMount();
    // const form = useForm<z.infer<typeof CreatePost>>({
    //   resolver: zodResolver(CreatePost),
    //   defaultValues: {
    //     caption: "",
    //     fileUrl: undefined,
    //   },
    // });
    // const fileUrl = form.watch("fileUrl");
  
    // if (!mount) return null;
  
    return (
      <div>
        <Dialog
          open={open}
          onOpenChange={(open) => !open && router.back()}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create new post</DialogTitle>
            </DialogHeader>
  
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(async (values) => {
                  const res = await createPost(values);
                  if (res) {
                    return toast.error(<Error res={res} />);
                  }
                })}
                className="space-y-4"
              >
                {!!fileUrl ? (
                  <div className="h-96 md:h-[450px] overflow-hidden rounded-md">
                    <AspectRatio ratio={1 / 1} className="relative h-full">
                      <BlurImage
                        src={fileUrl}
                        alt="Post preview"
                        fill
                        className="rounded-md object-cover"
                        width={500} height={500}
                      />
                    </AspectRatio>
                  </div>
                ) : (
                  <FormField
                    control={form.control}
                    name="fileUrl"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel htmlFor="picture">Picture</FormLabel>
                        <FormControl>
                          <UploadButton
                            endpoint="imageUploader"
                            onClientUploadComplete={(res) => {
                              form.setValue("fileUrl", res[0].url);
                              toast.success("Upload complete");
                            }}
                            onUploadError={(error: Error) => {
                              console.error(error);
                              toast.error("Upload failed");
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          Upload a picture to post.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
  
                {!!fileUrl && (
                  <FormField
                    control={form.control}
                    name="caption"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="caption">Additonal Notes</FormLabel>
                        <FormControl>
                          <Input
                            type="caption"
                            id="caption"
                            placeholder="Adda note if needed"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
  
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  Save
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
  
  