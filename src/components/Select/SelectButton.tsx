
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
interface SelectButtonProps {
  label: string;
  name: string;
  items: string[];
  value: string;
  handleInputChange: (value: string) => void;
}


const SelectButton = ({ label, name, items, value, handleInputChange }: SelectButtonProps) => {
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


export default SelectButton