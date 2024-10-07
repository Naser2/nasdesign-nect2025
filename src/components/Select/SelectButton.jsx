
import * as React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
// import { Label } from "@headlessui/react";
  
export default function SelectButton({ label, name, items, handleInputChange }) {
  const handleChange = (e) => {
          console.log("SelectButton onChange", e); // Log the event
          handleInputChange(e); // Call the parent handler
        };
      
  return (
    <Select onValueChange={(value) => handleChange({ target: { name, value } })}>
      <SelectTrigger className="gap-x-4 space-between h-14 lg:h-10 text-xl bg-white !max-w-34 text-sm peer/input w-full rounded-md shadow-sm transition-all text-foreground">
        <SelectValue placeholder={`${label}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {items.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
// export const SelectButton = ({ label, name, items, handleInputChange, value }) => {
//   return (
//     <div className="mb-4">
//       <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
//         {label}
//       </label>
//       <select
//         id={name}
//         name={name}
//         className="border rounded w-full py-2 px-3 xl:py-3 xl:px-4 "
//         value={value}
//         onChange={(e) => handleInputChange(e.target.value)} // Pass the selected value (role) as a string
//       >
//         {items.map((item, index) => (
//           <option key={index} value={item} className="px-2">
//             {item}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };




