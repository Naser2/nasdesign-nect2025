import { useState, type SetStateAction } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Error from "@/components/Error";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useHelpers } from "../../hooks/useHelpers"; 

import ProjectSubmission from './ProjectSubmission';

// Convert the timeline input to a valid date format
const convertTimelineToDate = (timeline: string): string => {
  const currentDate: Date = new Date();

  // Handle different types of inputs
  if (timeline.toLowerCase().includes("month")) {
    const months: number = parseInt(timeline);
    if (!isNaN(months)) {
      currentDate.setMonth(currentDate.getMonth() + months);  // Add the number of months
    }
  } else if (timeline.toLowerCase().includes("week")) {
    const weeks: number = parseInt(timeline);
    if (!isNaN(weeks)) {
      currentDate.setDate(currentDate.getDate() + weeks * 7);  // Add weeks (7 days per week)
    }
  } else if (timeline.toLowerCase().includes("day")) {
    const days: number = parseInt(timeline);
    if (!isNaN(days)) {
      currentDate.setDate(currentDate.getDate() + days);  // Add the number of days
    }
  } else if (timeline.toLowerCase().includes("asap")) {
    return currentDate.toISOString();  // ASAP is just the current date, return ISO string
  } else {
    throw new globalThis.Error("Invalid timeline input"); 
  }

  return currentDate.toISOString();  // Return as a valid ISO timestamp
};


import SelectButton from '@/components/Select/SelectButton';
interface CreateFormProps {
  closeDialog: () => void;
  userId: string;
}


import  UploadFileForm  from './UploadFileForm'; // assuming you've exported it already
import { Select } from "@headlessui/react";

interface CreateFormProps {
  closeDialog: () => void;
  userId: string;
}

interface FormErrors {
  projectName?: string;
  description?: string;
  timeline?: string;
  budget?: string;
  fileUrl?: string;
}


export default function CreateProjectModal({ ...props }) {
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
      setOpen(false);
    };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)} className="bg-gray-200/90 rounded-md">
        <span className='text-md font-bold pr-2'>+ </span>
        Create Project</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="h-[99.9vh] w-full">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            <CreateForm closeDialog={closeDialog} {...props} userId={props.userId} />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={closeDialog}>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}




export const CreateForm = ({ closeDialog, userId }: CreateFormProps) => {
  console.log("USER_ID", userId);
  // const [fileUrl, setFileUrl] = useState<string>('');

  const [projectDesign, setProjectDesign] = useState<string[]>([]);  
  const [projectName, setProjectName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [timeline, setTimeline] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [hasDesign, setHasDesign] = useState<boolean | null>(null);
  const [needDesign, setNeedDesign] = useState<boolean>(false);
  const [projectType, setProjectType] = useState<string>(''); 
  const [stages, setStages] = useState<any[]>([]);

  const projectTypes = [
    'Website (default)',
    'Mobile App (iOS)',
    'Mobile App (Android)',
    'Native App',
    'E-commerce Platform',
    'SaaS Application',
    'Web Application',
    'Desktop Application',
    'API Development',
    'Blockchain Application',
    'Machine Learning Model',
    'AI Chatbot',
    'Data Science Project',
    'IoT Solution',
    'Augmented Reality App',
    'Virtual Reality App',
    'Game Development',
    'CRM System',
    'ERP System',
    'Content Management System',
    'Digital Marketing Platform',
    'Custom Plugin or Extension',
    'Social Media Platform',
    'Video Streaming App',
    'Automation Tool',
    'Inventory Management System',
    'Financial Software',
    'Healthcare App',
    'Education/Learning Platform',
    'Personal Portfolio'
  ];
  


  
  const { createProject, setLoading, loading, setError, error } = useHelpers(); // Use centralized API helpers

  const handleDesignChange = (e: { target: { value: string } }) => {
    const value = e.target.value === 'yes';
    setHasDesign(value);
    setNeedDesign(!value);
  };

  const validateForm = (): FormErrors => {
    let newErrors: FormErrors = {};
    if (!projectName) newErrors.projectName = 'Project Name is required';
    if (!description) newErrors.description = 'Description is required';
    if (!timeline) newErrors.timeline = 'Project timeline is required';
    if (!budget) newErrors.budget = 'Budget selection is required';
    if (!projectDesign && hasDesign) newErrors.fileUrl = 'Please upload the design';
    if (!projectDesign && !hasDesign && needDesign) newErrors.fileUrl = 'Upload an example is required';
    return newErrors;
  };

  console.log("PROJECT_FILE_URL", projectDesign, projectName, description, timeline, budget, hasDesign, needDesign);

  const handleProjectType = (selectedProjectType: string) => {
    setProjectType(selectedProjectType); // Correctly update the role state
  };



  // Map budget ranges to numeric values
const getBudgetValue = (budgetRange: string) => {
  switch (budgetRange) {
    case "under_25k":
      return 25000;
    case "25k-50k":
      return 50000;
    case "50k-100k":
      return 100000;
    case "100k_plus":
      return 100001;  // Use a high value to represent "100k+"
    default:
      return null;
  }
};

const handleSubmit = async (e: { preventDefault: () => void }) => {
  e.preventDefault();

  // Validate the form fields
  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  // Convert budget to numeric value
  const budgetValue = getBudgetValue(budget);

  if (!budgetValue) {
    setErrors({ budget: "Invalid budget selection" });
    return;
  }

  // Convert the timeline to a date
  const expectedCompletion = convertTimelineToDate(timeline);

  try {
    setLoading(true);
    console.log("AI_API_CALLING");

    // Call the API to generate phases and tasks
    const res = await fetch('/api/generate-tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ projectName, description }),
    });


    const addStatusFlagsToPhases = (phases: any[]) => {
          return phases.map(phase => ({
            ...phase,
            started: false,
            in_progress: false,
            completed: false,
            tasks: phase.tasks.map((task: any) => ({
              ...task,
              started: false,
              in_progress: false,
              completed: false,
            }))
          }));
        };
    
    const data = await res.json();
    if (!data) {
      setError("Invalid phases data from AI response");
    }
    const content = data.choices[0].message.content;
    const parsedContent = JSON.parse(content);
    const phases = addStatusFlagsToPhases(parsedContent.phases);

    console.log("AI_DATA_PHASES: ", phases);
   
 
    
    // Set the phases in the state
    setStages(phases);

    // Access the phases from the AI response
    // console.log("AI_DATA_PHASES_1: ", data)
    // const phases = data.project?.phases || [];
    // console.log("AI_DATA_PHASES: ", phases);

    // Set the phases in the state
  

    // Prepare project data including the phases
    const projectData = {
      project_owner: userId,
      title: projectName,
      description,
      long_description: "",
      budget: budgetValue,
      expected_completion: expectedCompletion,
      category: projectType,
      projectdesign: projectDesign,
      needdesign: needDesign,
      created_at: new Date().toISOString(),
      phases, // Adding the phases from the AI response here
    };

    console.log("PROJECT_DATA: ", projectData);
    // Send the project data to Supabase
    const result = await createProject(projectData);  // Use centralized createProject function
    if (result) {
      closeDialog();
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setLoading(false);
  }
};


  // const handleSubmit = async (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   const validationErrors = validateForm();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //     return;
  //   }
  // // Convert the budget range into a numeric value
  // const budgetValue = getBudgetValue(budget);

  // if (!budgetValue) {
  //   setErrors({ budget: "Invalid budget selection" });
  //   return;
  // }
  // const expectedCompletion = convertTimelineToDate(timeline);
  // try {
  //   console.log("AI_API_CALLING");
  //       const res = await fetch('/api/generate-tasks', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ projectName, description }),
  //       });
  //       const data = await res.json();
  //       console.log("AI_DATA: " + JSON.stringify(data.stages.phases ));
  //       setStages(data);
  //     } 
      
  //     catch (error) {
  //       console.error('Error:', error);
  //     } finally {
  //       setLoading(false);
  //     }
   
  //   const projectData = {
  //     project_owner: userId,
  //     title: projectName,
  //     description,
  //     long_description: "",
  //     budget: budgetValue,
  //     expected_completion: expectedCompletion,
  //     category: projectType,
  //     projectdesign: projectDesign,
  //     needdesign: needDesign,
  //     created_at: new Date().toISOString(),
  //     phases:stages // Adding the phases from the AI response here
  //   };
  
  //   // Send the data to Supabase
  //   // const result = await createProject(projectData);  // Use centralized createProject function
  //   // if (result) {
  //   //   closeDialog();
  //   // }
  // };
  
  return (
    <div
      className="pt-6 z-20 lg:pt-4 bg-white dark:bg-black z-50 bg-dash-sidebar flex flex-col fixed inset-y-0 h-full lg:h-screen border-l shadow-xl w-screen max-w-2xl h-full right-0 transition-all duration-100 ease-in"
      tabIndex={-1}
      style={{ pointerEvents: 'auto' }}
    >
      <div className="flex flex-row justify-between items-center"><div className="flex flex-row gap-3 items-center"><div className="ai-icon-animation-style_ai-icon__container__2aXBS [&amp;>div>div]:border-black dark:[&amp;>div>div]:border-white"><div className="ai-icon-animation-style_ai-icon__grid__Qrwxf"><div className="ai-icon-animation-style_ai-icon__grid__square__YU8EZ ai-icon-animation-style_ai-icon__grid__square--static__1tOM_"></div><div className="ai-icon-animation-style_ai-icon__grid__square__YU8EZ ai-icon-animation-style_ai-icon__grid__square--static__1tOM_"></div><div className="ai-icon-animation-style_ai-icon__grid__square__YU8EZ ai-icon-animation-style_ai-icon__grid__square--static__1tOM_"></div>
      <div className="ai-icon-animation-style_ai-icon__grid__square__YU8EZ ai-icon-animation-style_ai-icon__grid__square--static__1tOM_"></div></div>
      </div>
      <span  className="text-sm">
        <button onClick={closeDialog}
         data-size="tiny" type="button" className="hover:bg-gray-400 mr-4 relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover text-xs px-2.5 py-1 h-[26px]">
           <span className="truncate text-sm  text-gray-600  hover:text-white">Preview draft</span> </button></span></div> 
      <div className="flex gap-2">
        <button onClick={closeDialog}
         data-size="tiny" type="button" 
         className="mr-4 relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover text-xs px-2.5 py-1 h-[26px]">
           <span className="truncate">Cancel</span> </button></div></div>
      <div className="text-foreground text-2xl space-y-1 py-4 px-4 bg-dash-sidebar sm:px-6 border-b">
        Create Your Project
      </div>
      
      <div className="relative flex-1 overflow-y-auto">
        <div className="px-4 sm:px-6 space-y-10 py-6">
          
            <div className="text-sm grid gap-2 md:grid md:grid-cols-12">
            <div className="flex flex-col space-y-2 col-span-4">
              <label className="block text-foreground-light text-sm break-all" htmlFor="project_name">
              <h5>Select project type</h5>
              </label>
            </div>
            <div className="col-span-8">
              <div className="relative">
              <SelectButton 
                label="Website (default)"
                name="projectType"
                items={['Select project type', ...projectTypes]} // Pass the array of user types
                handleInputChange={handleProjectType} // This correctly updates the role state
                value={projectType} // Bind the selected role to the state
              />
              </div>
              {errors.projectName && <p className="text-red-900">{errors.projectName}</p>}
            </div>
          </div>
          <div className="text-sm grid gap-2 md:grid md:grid-cols-12">
            <div className="flex flex-col space-y-2 col-span-4">
              <label className="block text-foreground-light text-sm break-all" htmlFor="project_name">
                Name
              </label>
            </div>
            <div className="col-span-8">
              <div className="relative">
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground"
                  placeholder="Enter your project name"
                />
              </div>
              {errors.projectName && <p className="text-red-900">{errors.projectName}</p>}
            </div>
          </div>

          <div className="text-sm grid gap-2 md:grid md:grid-cols-12">
            <div className="flex flex-col space-y-2 col-span-4">
              <label className="block text-foreground-light text-sm break-all" htmlFor="project_description">
                Description
              </label>
            </div>
            <div className="col-span-8">
              <div className="relative">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[30vh] peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground"
                  placeholder="Describe your project"
                />
              </div>
              {errors.description && <p className="text-red-900">{errors.description}</p>}
            </div>
          </div>

          <div className="w-full h-px my-2 bg-border" />
          <legend className="block my-0 text-sm font-semibold leading-6 text-gray-900">
            Do you have a design already</legend>
          <h5 className="!mt-2">We&apos;ll make one for you if no</h5>
          <div className="!mt-4 space-y-1 space-x-4">
            <label className="inline-flex gap-x-2">
              <input
                type="radio"
                value="yes"
                checked={hasDesign === true}
                onChange={handleDesignChange}
              />
              Yes
            </label>
            <label className="inline-flex gap-x-2">
              <input
                type="radio"
                value="no"
                checked={hasDesign === false}
                onChange={handleDesignChange}
              />
              No
            </label>
          </div>

         
        {hasDesign && (
          <UploadFileForm
              projectDesign={projectDesign}
              setProjectDesign={setProjectDesign}
              title="Upload Design"
              openUploader={() => {}}
              closeUploader={() => {}}
          />
        )}

        {!hasDesign && needDesign && (
          <UploadFileForm
          projectDesign={projectDesign}
          setProjectDesign={setProjectDesign}
            title="Upload Example"
            openUploader={() => {}}
            closeUploader={() => {}}
          />
        )}

        {errors.fileUrl && <p className="error-text">{errors.fileUrl}</p>}

          <div className="w-full h-px my-2 bg-border" />
          <legend className="block my-0 text-sm font-semibold leading-6 text-gray-900">
            Deadline | Estimate urgency</legend>
          <h5 className="!my-2">Approximatly</h5>
          <input
            type="text"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="block w-full rounded-md shadow-sm"
            placeholder="e.g. 1 month, ASAP"
          />
          {errors.timeline && <p className="text-red-900">{errors.timeline}</p>}

          <div className="w-full h-px my-2 bg-border" />
    
          <fieldset className="sm:col-span-2">
            <legend className="block text-sm font-semibold leading-6 text-gray-900">Approximate budget</legend>
            <div className="mt-4 space-y-4 text-sm leading-6 text-gray-600">
              <div className="flex gap-x-2.5">
                <input
                  type="radio"
                  id="budget-under-25k"
                  name="budget"
                  value="under_25k"
                  checked={budget === 'under_25k'}
                  onChange={(e) => setBudget(e.target.value)}
                  className="mt-1 h-4 w-4 border-gray-300 text-custom-gradient shadow-sm focus:ring-pink-600"
                />
                <label htmlFor="budget-under-25k">Less than $25K</label>
              </div>
              <div className="flex gap-x-2.5">
                <input
                  type="radio"
                  id="budget-25k-50k"
                  name="budget"
                  value="25k-50k"
                  checked={budget === '25k-50k'}
                  onChange={(e) => setBudget(e.target.value)}
                  className="mt-1 h-4 w-4 border-gray-300 text-custom-gradient shadow-sm focus:ring-pink-600"
                />
                <label htmlFor="budget-25k-50k">$25K – $50K</label>
              </div>
              <div className="flex gap-x-2.5">
                <input
                  type="radio"
                  id="budget-50k-100k"
                  name="budget"
                  value="50k-100k"
                  checked={budget === '50k-100k'}
                  onChange={(e) => setBudget(e.target.value)}
                  className="mt-1 h-4 w-4 border-gray-300 text-custom-gradient shadow-sm focus:ring-pink-600"
                />
                <label htmlFor="budget-50k-100k">$50K – $100K</label>
              </div>
              <div className="flex gap-x-2.5">
                <input
                  type="radio"
                  id="budget-100k-plus"
                  name="budget"
                  value="100k_plus"
                  checked={budget === '100k_plus'}
                  onChange={(e) => setBudget(e.target.value)}
                  className="mt-1 h-4 w-4 border-gray-300 text-custom-gradient shadow-sm focus:ring-pink-600"
                />
                <label htmlFor="budget-100k-plus">$100K +</label>
              </div>
            </div>
          </fieldset>
          {errors.budget && <p className="text-red-900">{errors.budget}</p>}

        </div>
      </div>

      <div className="flex w-full justify-end space-x-3 border-t border-default px-3 py-4">
         <Button  onClick={closeDialog} className="mt-6 bg-gray-100 text-[#333] hover:bg-red-600 hover:text-white justify-center cursor-pointer text-xs" 
               type="submit">
               Cancel
        </Button>
    
        <Button onClick={handleSubmit} className="mt-6 bg-gray-100  bg-black hover:text-white justify-center cursor-pointer text-xs" 
               type="submit">
              {loading ? "Saving..." : "Create Project"}
        </Button>
        {/* <button type="submit" disabled={loading}  className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-xs">
          {loading ? "Saving..." : "Create Project"}
        </button> */}
        {/* <button
          onClick={handleSubmit}
          className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-xs"
        >
          Save
        </button> */}
      </div>
    </div>
  );
};

// export const CreateForm = ({ closeDialog }) => {
//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     // Perform form actions, then close the dialog
//     closeDialog();
//   };

//   return ( <div  className="z-20 pt-24 bg-white dark:bg-black  z-50 bg-dash-sidebar flex flex-col fixed inset-y-0 h-full lg:h-screen border-l shadow-xl  w-screen max-w-2xl h-full  right-0 data-open:animate-panel-slide-right-out data-closed:animate-panel-slide-right-in  transition-all duration-100 ease-in "
//     tabIndex={-1}
//     style={{ pointerEvents: "auto" }}
//   >
//     <header className="text-foreground text-2xl space-y-1 py-4 px-4 bg-dash-sidebar sm:px-6 border-b ">
//       Create  Your Project
//     </header>
//     <div className=" relative flex-1 overflow-y-auto ">
//       <div className="px-4 sm:px-6  space-y-10 py-6">
//       <h5>Select project type</h5>
//       <SelectProjectType/>
//         <div className="text-sm grid gap-2 md:grid md:grid-cols-12">
//           <div className="flex flex-col space-y-2 col-span-4">
//             <label
//               className="block text-foreground-light text-sm break-all"
//               htmlFor="project_name"
//             >
//               Name
//             </label>
//           </div>
//           <div className="col-span-8">
//             <div className="">
//               <div className="relative">
//                 <input
//                   data-size="medium"
//                   id=""
//                   name=""
//                   type="text"
//                   className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-foreground/[.026] border border-control text-sm px-4 py-2"
//                   data-testid="table-name-input"
//                   defaultValue="Enter your project name"
//                 />
//               </div>
//             </div>
//             <p
//               data-state="hide"
//               className="bg-alternative
//               text-red-900
//               transition-all
//               data-show:mt-2
//               data-show:animate-slide-down-normal
//               data-hide:animate-slide-up-normal
//               text-sm"
//             />
//           </div>
//         </div>
//         <div className="text-sm grid gap-2 md:grid md:grid-cols-12">
//           <div className="flex flex-col space-y-2 col-span-4">
//             <label
//               className="block text-foreground-light text-sm break-all"
//               htmlFor="project_description"
//             >
//               Description
//             </label>
//           </div>
//           <div className="col-span-8">
//             <div className="">
//               <div className="relative">
//                 <textarea
//                   data-size="medium"
//                   id=""
//                   name=""
//                   placeholder="Optional"
//                   type="text"
//                   className="min-h-[30vh] peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-foreground/[.026] border border-control text-sm px-4 py-2"
//                   defaultValue="Describe your project"
//                 />
//               </div>
//             </div>
//             <p
//               data-state="hide"
//               className="
//                 text-red-900
//                 transition-all
//                 data-show:mt-2
//                 data-show:animate-slide-down-normal
//                 data-hide:animate-slide-up-normal
//               text-sm"
//             />
//           </div>
//         </div>
//       </div>
//       <div className=" w-full h-px my-2 bg-border " />
  
//       {/* -----> */}
  
//       <div className=" w-full h-px my-2 bg-border " />
//   {/* ------------ */}
         
//       <div className=" w-full h-px my-2 bg-border " />
//       <div className="px-4 sm:px-6  py-6">
//         <div className="w-full space-y-4 ">
//           <h5>Upload use-case or User-story</h5>
        
//           <div>
//             <div className="items-center justify-between gap-x-2 flex border border-strong px-4 py-4 border-b-0 last:border-b first:rounded-t-md last:rounded-b-md">
//               <div className="flex flex-col gap-y-2">
//                 <div className="flex flex-col gap-y-1">
//                   <p
//                     title="user_profiles_user_id_fkey"
//                     className="text-xs text-foreground font-mono"
//                   >
//                     A user story explains what a user can do in your app
//                   </p>
//                   <div className="flex items-center gap-x-2">
//                     <p className="text-sm text-foreground-light text-gray-500">
//                     View some expamples:
//                     </p>
//                     <a
//                       data-size="tiny"
//                       type="button"
//                       title="auth.users"
//                       className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover text-xs h-[26px] py-0.5 px-1.5 font-mono"
//                       href="/dashboard/user-stories-examples"
//                     >
//                       <div className="[&_svg]:h-[14px] [&_svg]:w-[14px] text-foreground-lighter">
//                         <svg
//                           className="table-icon"
//                           width="20px"
//                           height="20px"
//                           viewBox="0 0 20 20"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                           style={{ width: 16, height: 16, strokeWidth: 1 }}
//                         >
//                           <g
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           >
//                             <g transform="translate(1.000000, 1.000000)">
//                               <rect
//                                 fill="#349969"
//                                 stroke="#133929"
//                                 strokeWidth={2}
//                                 x={0}
//                                 y={0}
//                                 width={18}
//                                 height={18}
//                                 rx={2}
//                               />
//                               <line
//                                 x1={0}
//                                 y1={6}
//                                 x2={18}
//                                 y2={6}
//                                 stroke="#133929"
//                                 strokeWidth={2}
//                               />
//                               <line
//                                 x1={0}
//                                 y1={12}
//                                 x2={18}
//                                 y2={12}
//                                 stroke="#133929"
//                                 strokeWidth={2}
//                               />
//                               <line
//                                 x1={6}
//                                 y1={18}
//                                 x2={6}
//                                 y2={6}
//                                 stroke="#133929"
//                                 strokeWidth={2}
//                               />
//                               <line
//                                 x1={12}
//                                 y1={18}
//                                 x2={12}
//                                 y2={6}
//                                 stroke="#133929"
//                                 strokeWidth={2}
//                               />
//                             </g>
//                           </g>
//                         </svg>
//                       </div>
//                       <span className="truncate">user.stories</span>
//                     </a>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-y-1">
//                   <div className="flex items-center gap-x-2">
//                     <code className="text-xs">user_id</code>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width={16}
//                       height={16}
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth={2}
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-arrow-right"
//                     >
//                       <path d="M5 12h14" />
//                       <path d="m12 5 7 7-7 7" />
//                     </svg>
//                     <code className="text-xs">auth.users.id</code>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-x-2">
//                 <button
//                   data-size="tiny"
//                   type="button"
//                   className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover text-xs px-2.5 py-1 h-[26px]"
//                 >
//                   {" "}
//                   <span className="truncate">view</span>{" "}
//                 </button>
      
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center justify-center rounded border border-strong border-dashed py-3">
//             <button
//               data-size="tiny"
//               type="button"
//               className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover text-xs px-2.5 py-1 h-[26px]"
//             >
//               {" "}
//               <span className="truncate">Add foreign key relation</span>{" "}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="flex w-full justify-end space-x-3 border-t border-default px-3 py-4">
//       <button onClick={()=>closeDialog()}
//         data-size="tiny"
//         type="button"
//         className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover text-xs px-2.5 py-1 h-[26px]"
//       >
//         {" "}
//         <span className="truncate">Cancel</span>{" "}
//       </button>
//       <button
//         data-size="tiny"
//         type="button"
//         className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-brand-400 dark:bg-brand-500 hover:bg-brand/80 dark:hover:bg-brand/50 text-foreground border-brand-500/75 dark:border-brand/30 hover:border-brand-600 dark:hover:border-brand focus-visible:outline-brand-600 data-[state=open]:bg-brand-400/80 dark:data-[state=open]:bg-brand-500/80 data-[state=open]:outline-brand-600 text-xs px-2.5 py-1 h-[26px]"
//       >
//         {" "}
//         <span className="truncate">Save</span>{" "}
//       </button>
//     </div>
//   </div>
//   );
// };




// export function UploadFileForm() {
//   const pathname = usePathname();
//   const isCreatePage = pathname === "/dashboard/create";
//   const router = useRouter();
//   const mount = useMount();
//   const form = useForm<z.infer<typeof CreatePost>>({
//     resolver: zodResolver(CreatePost),
//     defaultValues: {
//       caption: "",
//       fileUrl: undefined,
//     },
//   });
//   const fileUrl = form.watch("fileUrl");

//   if (!mount) return null;

//   return (
//     <div>
//       <Dialog
//         open={isCreatePage}
//         onOpenChange={(open) => !open && router.back()}
//       >
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Create new post</DialogTitle>
//           </DialogHeader>

//           <Form {...form}>
//             <form
//               onSubmit={form.handleSubmit(async (values) => {
//                 const res = await createPost(values);
//                 if (res) {
//                   return toast.error(<Error res={res} />);
//                 }
//               })}
//               className="space-y-4"
//             >
//               {!!fileUrl ? (
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
//                         <UploadButton
//                           endpoint="imageUploader"
//                           onClientUploadComplete={(res) => {
//                             form.setValue("fileUrl", res[0].url);
//                             toast.success("Upload complete");
//                           }}
//                           onUploadError={(error: Error) => {
//                             console.error(error);
//                             toast.error("Upload failed");
//                           }}
//                         />
//                       </FormControl>
//                       <FormDescription>
//                         Upload a picture to post.
//                       </FormDescription>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               )}

//               {!!fileUrl && (
//                 <FormField
//                   control={form.control}
//                   name="caption"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel htmlFor="caption">Additonal Notes</FormLabel>
//                       <FormControl>
//                         <Input
//                           type="caption"
//                           id="caption"
//                           placeholder="Adda note if needed"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               )}

//               <Button type="submit" disabled={form.formState.isSubmitting}>
//                 Save
//               </Button>
//             </form>
//           </Form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

