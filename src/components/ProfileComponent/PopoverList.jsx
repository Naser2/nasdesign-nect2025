import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
export function PopoverList() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline white">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 z-50 bg-[#27272a]">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-2 items-center gap-4">
   <button
  type="button"
  role="tab"
  aria-selected="true"
  aria-controls="radix-:r2aj:-content-overview"
  data-state="active"
  id="radix-:r2aj:-trigger-overview"
  className="dark:bg-black inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all 
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
   disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground 
   data-[state=active]:shadow"
  tabIndex={-1}
  data-orientation="horizontal"
  data-radix-collection-item=""
>
  Create Post
</button>
<button
  type="button"
  role="tab"
  aria-selected="true"
  aria-controls="radix-:r2aj:-content-overview"
  data-state="active"
  id="radix-:r2aj:-trigger-overview"
  className="dark:bg-black inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all 
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
   disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground 
   data-[state=active]:shadow"
  tabIndex={-1}
  data-orientation="horizontal"
  data-radix-collection-item=""
>
  Create Goal
</button>
            
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
            <button
  type="button"
  role="tab"
  aria-selected="true"
  aria-controls="radix-:r2aj:-content-overview"
  data-state="active"
  id="radix-:r2aj:-trigger-overview"
  className="dark:bg-black inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all 
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
   disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground 
   data-[state=active]:shadow"
  tabIndex={-1}
  data-orientation="horizontal"
  data-radix-collection-item=""
>
  Create Task
</button>
<button
  type="button"
  role="tab"
  aria-selected="true"
  aria-controls="radix-:r2aj:-content-overview"
  data-state="active"
  id="radix-:r2aj:-trigger-overview"
  className="dark:bg-black inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all 
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
   disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground 
   data-[state=active]:shadow"
  tabIndex={-1}
  data-orientation="horizontal"
  data-radix-collection-item=""
>
  Create Post
</button>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
            <button
  type="button"
  role="tab"
  aria-selected="true"
  aria-controls="radix-:r2aj:-content-overview"
  data-state="active"
  id="radix-:r2aj:-trigger-overview"
  className="dark:bg-black inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all 
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
   disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground 
   data-[state=active]:shadow"
  tabIndex={-1}
  data-orientation="horizontal"
  data-radix-collection-item=""
>
Fiend Friends
</button>
<button
  type="button"
  role="tab"
  aria-selected="true"
  aria-controls="radix-:r2aj:-content-overview"
  data-state="active"
  id="radix-:r2aj:-trigger-overview"
  className="dark:bg-black inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all 
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
   disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground 
   data-[state=active]:shadow"
  tabIndex={-1}
  data-orientation="horizontal"
  data-radix-collection-item=""
>
Create a Reel
</button>
          
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
            <button
  type="button"
  role="tab"
  aria-selected="true"
  aria-controls="radix-:r2aj:-content-overview"
  data-state="active"
  id="radix-:r2aj:-trigger-overview"
  className="dark:bg-black inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all 
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
   disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground 
   data-[state=active]:shadow"
  tabIndex={-1}
  data-orientation="horizontal"
  data-radix-collection-item=""
>
Create A Project
</button>
          
<button
  type="button"
  role="tab"
  aria-selected="true"
  aria-controls="radix-:r2aj:-content-overview"
  data-state="active"
  id="radix-:r2aj:-trigger-overview"
  className="dark:bg-black inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all 
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
   disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground 
   data-[state=active]:shadow"
  tabIndex={-1}
  data-orientation="horizontal"
  data-radix-collection-item=""
>
 Create TasksList
</button>
          
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}