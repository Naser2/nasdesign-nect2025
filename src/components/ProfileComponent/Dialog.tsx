import { useState } from "react";
import type { ProjectDataType, SupabaseUserProfile } from "@/lib/Types";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Grid3X3, Bookmark, Clapperboard } from "lucide-react";
import React from "react";
import ProjectStats from "../ProjectStats";
import TaskList from "../task/TaskList";
import GraphComponent from "../GraphComponent";
import { mockDailyData, mockMonthlyData } from "./graph/graphsConstants";

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
        data-[state=open]:slide-in-from-top-[48%] h-[100vh] sm:min-h-[99vh] sm:rounded-lg  max-w-[80vw]">
          <div className="relative max-w-7xl w-full bg-white rounded-lg p-6 f">
            
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full lg:w-1/2">
                <img
                  src={item?.projectdesign?.[0] || "/placeholder.png"}
                  alt={item?.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="w-full lg:w-1/2">
              <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{item?.title}</DialogTitle>
              </DialogHeader>
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
             <ProjectOverview item={item} />
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  


  interface ProjectOverviewProps {
    item: ProjectDataType; // Project data to be displayed in the dialog
  }
  const ProjectOverview = ({item}:ProjectOverviewProps ) => {
    const { phases } = item;
    const tasks = phases.flatMap((phase) => phase.tasks); 
    console.log("ITEMS", item);


    return( 
      <div  data-state="active"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:Rl9uukv9u6ja:-trigger-overview"
            id="radix-:Rl9uukv9u6ja:-content-overview"
            tabIndex={0}
            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4"
            style={{ animationDuration: "09s" }} >
            <ProjectStats phases={phases} tasks={tasks} />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <GraphComponent daily={mockDailyData} monthly={mockMonthlyData} />
              <TaskList activities={[]}  />
          </div>
        </div>
       )
  }

//   const GraphActivity = () => {
//     return   <div className="rounded-xl border bg-card text-card-foreground shadow col-span-4">
//     <div className="flex flex-col space-y-1.5 p-6">
//       <h3 className="font-semibold leading-none tracking-tight">Overview</h3>
//     </div>
//     <div className="p-6 pt-0 pl-2">
//       <div
//         className="recharts-responsive-container"
//         style={{ width: "100%", height: 350, minWidth: 0 }}
//       >
//         <div
//           className="recharts-wrapper"
//           style={{
//             position: "relative",
//             cursor: "default",
//             width: "100%",
//             height: "100%",
//             maxHeight: 350,
//             maxWidth: 685
//           }}
//         >
//           <svg
//             className="recharts-surface"
//             width={685}
//             height={350}
//             viewBox="0 0 685 350"
//             style={{ width: "100%", height: "100%" }}
//           >
//             <title />
//             <desc />
//             <defs>
//               <clipPath id="recharts1-clip">
//                 <rect x={65} y={5} height={310} width={615} />
//               </clipPath>
//             </defs>
//             <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
//               <g className="recharts-cartesian-axis-ticks">
//                 <g className="recharts-layer recharts-cartesian-axis-tick">
//                   <text
//                     stroke="none"
//                     fontSize={12}
//                     orientation="bottom"
//                     width={615}
//                     height={30}
//                     x="90.625"
//                     y={323}
//                     className="recharts-text recharts-cartesian-axis-tick-value"
//                     textAnchor="middle"
//                     fill="#888888"
//                   >
//                     <tspan x="90.625" dy="0.71em">
//                       Jan
//                     </tspan>
//                   </text>
//                 </g>
//                 <g className="recharts-layer recharts-cartesian-axis-tick">
//                   <text
//                     stroke="none"
//                     fontSize={12}
//                     orientation="bottom"
//                     width={615}
//                     height={30}
//                     x="141.875"
//                     y={323}
//                     className="recharts-text recharts-cartesian-axis-tick-value"
//                     textAnchor="middle"
//                     fill="#888888"
//                   >
//                     <tspan x="141.875" dy="0.71em">
//                       Feb
//                     </tspan>
//                   </text>
//                 </g>
//                 <g className="recharts-layer recharts-cartesian-axis-tick">
//                   <text
//                     stroke="none"
//                     fontSize={12}
//                     orientation="bottom"
//                     width={615}
//                     height={30}
//                     x="193.125"
//                     y={323}
//                     className="recharts-text recharts-cartesian-axis-tick-value"
//                     textAnchor="middle"
//                     fill="#888888"
//                   >
//                     <tspan x="193.125" dy="0.71em">
//                       Mar
//                     </tspan>
//                   </text>
//                 </g>
//                 <g className="recharts-layer recharts-cartesian-axis-tick">
//                   <text
//                     stroke="none"
//                     fontSize={12}
//                     orientation="bottom"
//                     width={615}
//                     height={30}
//                     x="244.375"
//                     y={323}
//                     className="recharts-text recharts-cartesian-axis-tick-value"
//                     textAnchor="middle"
//                     fill="#888888"
//                   >
//                     <tspan x="244.375" dy="0.71em">
//                       Apr
//                     </tspan>
//                   </text>
//                 </g>
//                 <g className="recharts-layer recharts-cartesian-axis-tick">
//                   <text
//                     stroke="none"
//                     fontSize={12}
//                     orientation="bottom"
//                     width={615}
//                     height={30}
//                     x="295.625"
//                     y={323}
//                     className="recharts-text recharts-cartesian-axis-tick-value"
//                     textAnchor="middle"
//                     fill="#888888"
//                   >
//                     <tspan x="295.625" dy="0.71em">
//                       May
//                     </tspan>
//                   </text>
//                 </g>
//                 <g className="recharts-layer recharts-cartesian-axis-tick">
//                   <text
//                     stroke="none"
//                     fontSize={12}
//                     orientation="bottom"
//                     width={615}
//                     height={30}
//                     x="346.875"
//                     y={323}
//                     className="recharts-text recharts-cartesian-axis-tick-value"
//                     textAnchor="middle"
//                     fill="#888888"
//                   >
//                     <tspan x="346.875" dy="0.71em">
//                       Jun
//                     </tspan>
//                   </text>
//                 </g>
//                 <g className="recharts-layer recharts-cartesian-axis-tick">
//                   <text
//                     stroke="none"
//                     fontSize={12}
//                     orientation="bottom"
//                     width={615}
//                     height={30}
//                     x="398.125"
//                     y={323}
//                     className="recharts-text recharts-cartesian-axis-tick-value"
//                     textAnchor="middle"
//                     fill="#888888"
//                   >
//                     <tspan x="398.125" dy="0.71em">
//                       Jul
//                     </tspan>
//                   </text>
//                 </g>
//                 <g className="recharts-layer recharts-cartesian-axis-tick">
//                   <text
//                     stroke="none"
//                     fontSize={12}
//                     orientation="bottom"
//                     width={615}
//                     height={30}
//                     x="449.375"
//                     y={323}
//                     className="recharts-text recharts-cartesian-axis-tick-value"
//                     textAnchor="middle"
//                     fill="#888888"
//                   >
//                     <tspan x="449.375" dy="0.71em">
//                       Aug
//                     </tspan>
//                   </text>
//                 </g>
//                 <g className="recharts-layer recharts-cartesian-axis-tick">
//                   <text
//                     stroke="none"
//                     fontSize={12}
//                     orientation="bottom"
//                     width={615}
//                     height={30}
//                     x="500.625"
//                     y={323}
//                     className="recharts-text recharts-cartesian-axis-tick-value"
//                     textAnchor="middle"
//                     fill="#888888"
//                   >
//                     <tspan x="500.625" dy="0.71em">
//                       Sep
//                     </tspan>
//                   </text>
//                 </g>
//                 <g className="recharts-layer recharts-cartesian-axis-tick">
//                   <text
//                     stroke="none"
//                     fontSize={12}
//                     orientation="bottom"
//                     width={615}
//                     height={30}
//                     x="551.875"
//                     y={323}
//                     className="recharts-text recharts-cartesian-axis-tick-value"
//                     textAnchor="middle"
//                     fill="#888888"
//                   >
//                     <tspan x="551.875" dy="0.71em">
//                       Oct
//                     </tspan>
//                   </text>
//                 </g>
//                 <g className="recharts-layer recharts-cartesian-axis-tick">
//                   <text
//                     stroke="none"
//                     fontSize={12}
//                     orientation="bottom"
//                     width={615}
//                     height={30}
//                     x="603.125"
//                     y={323}
//                     className="recharts-text recharts-cartesian-axis-tick-value"
//                     textAnchor="middle"
//                     fill="#888888"
//                   >
//                     <tspan x="603.125" dy="0.71em">
//                       Nov
//                     </tspan>
//                   </text>
//                 </g>
//                 <g className="recharts-layer recharts-cartesian-axis-tick">
//                   <text
//                     stroke="none"
//                     fontSize={12}
//                     orientation="bottom"
//                     width={615}
//                     height={30}
//                     x="654.375"
//                     y={323}
//                     className="recharts-text recharts-cartesian-axis-tick-value"
//                     textAnchor="middle"
//                     fill="#888888"
//                   >
//                     <tspan x="654.375" dy="0.71em">
//                       Dec
//                     </tspan>
//                   </text>
//                 </g>
//               </g>
//             </g>
//             <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
//               <g className="recharts-cartesian-axis-ticks">
//                 <g className="recharts-layer recharts-cartesian-axis-tick">
//                   <text
//                     stroke="none"
//                     fontSize={12}
//                     orientation="left"
//                     width={60}
//                     height={310}
//                     x={57}
//                     y={315}
//                     className="recharts-text recharts-cartesian-axis-tick-value"
//                     textAnchor="end"
//                     fill="#888888"
//                   >
//                     <tspan x={57} dy="0.355em">
//                       $0
//                     </tspan>
//                   </text>
//                 </g>
//                 <g className="recharts-layer recharts-cartesian-axis-tick">
//                   <text
//                     stroke="none"
//                     fontSize={12}
//                     orientation="left"
//                     width={60}
//                     height={310}
//                     x={57}
//                     y="237.5"
//                     className="recharts-text recharts-cartesian-axis-tick-value"
//                     textAnchor="end"
//                     fill="#888888"
//                   >
//                     <tspan x={57} dy="0.355em">
//                       $1500
//                     </tspan>
//                   </text>
//                 </g>
//                 <g className="recharts-layer recharts-cartesian-axis-tick">
//                   <text
//                     stroke="none"
//                     fontSize={12}
//                     orientation="left"
//                     width={60}
//                     height={310}
//                     x={57}
//                     y={160}
//                     className="recharts-text recharts-cartesian-axis-tick-value"
//                     textAnchor="end"
//                     fill="#888888"
//                   >
//                     <tspan x={57} dy="0.355em">
//                       $3000
//                     </tspan>
//                   </text>
//                 </g>
//                 <g className="recharts-layer recharts-cartesian-axis-tick">
//                   <text
//                     stroke="none"
//                     fontSize={12}
//                     orientation="left"
//                     width={60}
//                     height={310}
//                     x={57}
//                     y="82.5"
//                     className="recharts-text recharts-cartesian-axis-tick-value"
//                     textAnchor="end"
//                     fill="#888888"
//                   >
//                     <tspan x={57} dy="0.355em">
//                       $4500
//                     </tspan>
//                   </text>
//                 </g>
//                 <g className="recharts-layer recharts-cartesian-axis-tick">
//                   <text
//                     stroke="none"
//                     fontSize={12}
//                     orientation="left"
//                     width={60}
//                     height={310}
//                     x={57}
//                     y={9}
//                     className="recharts-text recharts-cartesian-axis-tick-value"
//                     textAnchor="end"
//                     fill="#888888"
//                   >
//                     <tspan x={57} dy="0.355em">
//                       $6000
//                     </tspan>
//                   </text>
//                 </g>
//               </g>
//             </g>
//             <g className="recharts-layer recharts-bar fill-primary">
//               <g className="recharts-layer recharts-bar-rectangles">
//                 <g className="recharts-layer">
//                   <g className="recharts-layer recharts-bar-rectangle">
//                     <path
//                       x="70.125"
//                       y="82.96499999999997"
//                       width={41}
//                       height="232.03500000000003"
//                       radius="4,4,0,0"
//                       fill="currentColor"
//                       className="recharts-rectangle fill-primary"
//                       name="Jan"
//                       d="M70.125,86.96499999999997A 4,4,0,0,1,74.125,82.96499999999997L 107.125,82.96499999999997A 4,4,0,0,1,
// 111.125,86.96499999999997L 111.125,315L 70.125,315Z"
//                     />
//                   </g>
//                   <g className="recharts-layer recharts-bar-rectangle">
//                     <path
//                       x="121.375"
//                       y="185.42000000000002"
//                       width={41}
//                       height="129.57999999999998"
//                       radius="4,4,0,0"
//                       fill="currentColor"
//                       className="recharts-rectangle fill-primary"
//                       name="Feb"
//                       d="M121.375,189.42000000000002A 4,4,0,0,1,125.375,185.42000000000002L 158.375,185.42000000000002A 4,4,0,0,1,
// 162.375,189.42000000000002L 162.375,315L 121.375,315Z"
//                     />
//                   </g>
//                   <g className="recharts-layer recharts-bar-rectangle">
//                     <path
//                       x="172.625"
//                       y="142.2783333333333"
//                       width={41}
//                       height="172.7216666666667"
//                       radius="4,4,0,0"
//                       fill="currentColor"
//                       className="recharts-rectangle fill-primary"
//                       name="Mar"
//                       d="M172.625,146.2783333333333A 4,4,0,0,1,176.625,142.2783333333333L 209.625,142.2783333333333A 4,4,0,0,1,
// 213.625,146.2783333333333L 213.625,315L 172.625,315Z"
//                     />
//                   </g>
//                   <g className="recharts-layer recharts-bar-rectangle">
//                     <path
//                       x="223.875"
//                       y="183.25"
//                       width={41}
//                       height="131.75"
//                       radius="4,4,0,0"
//                       fill="currentColor"
//                       className="recharts-rectangle fill-primary"
//                       name="Apr"
//                       d="M223.875,187.25A 4,4,0,0,1,227.875,183.25L 260.875,183.25A 4,4,0,0,1,
// 264.875,187.25L 264.875,315L 223.875,315Z"
//                     />
//                   </g>
//                   <g className="recharts-layer recharts-bar-rectangle">
//                     <path
//                       x="275.125"
//                       y="252.06999999999996"
//                       width={41}
//                       height="62.930000000000035"
//                       radius="4,4,0,0"
//                       fill="currentColor"
//                       className="recharts-rectangle fill-primary"
//                       name="May"
//                       d="M275.125,256.06999999999994A 4,4,0,0,1,279.125,252.06999999999996L 312.125,252.06999999999996A 4,4,0,0,1,
// 316.125,256.06999999999994L 316.125,315L 275.125,315Z"
//                     />
//                   </g>
//                   <g className="recharts-layer recharts-bar-rectangle">
//                     <path
//                       x="326.375"
//                       y="156.95166666666668"
//                       width={41}
//                       height="158.04833333333332"
//                       radius="4,4,0,0"
//                       fill="currentColor"
//                       className="recharts-rectangle fill-primary"
//                       name="Jun"
//                       d="M326.375,160.95166666666668A 4,4,0,0,1,330.375,156.95166666666668L 363.375,156.95166666666668A 4,4,0,0,1,
// 367.375,160.95166666666668L 367.375,315L 326.375,315Z"
//                     />
//                   </g>
//                   <g className="recharts-layer recharts-bar-rectangle">
//                     <path
//                       x="377.625"
//                       y="226.54666666666668"
//                       width={41}
//                       height="88.45333333333332"
//                       radius="4,4,0,0"
//                       fill="currentColor"
//                       className="recharts-rectangle fill-primary"
//                       name="Jul"
//                       d="M377.625,230.54666666666668A 4,4,0,0,1,381.625,226.54666666666668L 414.625,226.54666666666668A 4,4,0,0,1,
// 418.625,230.54666666666668L 418.625,315L 377.625,315Z"
//                     />
//                   </g>
//                   <g className="recharts-layer recharts-bar-rectangle">
//                     <path
//                       x="428.875"
//                       y="40.54666666666668"
//                       width={41}
//                       height="274.4533333333333"
//                       radius="4,4,0,0"
//                       fill="currentColor"
//                       className="recharts-rectangle fill-primary"
//                       name="Aug"
//                       d="M428.875,44.54666666666668A 4,4,0,0,1,432.875,40.54666666666668L 465.875,40.54666666666668A 4,4,0,0,1,
// 469.875,44.54666666666668L 469.875,315L 428.875,315Z"
//                     />
//                   </g>
//                   <g className="recharts-layer recharts-bar-rectangle">
//                     <path
//                       x="480.125"
//                       y="107.97166666666669"
//                       width={41}
//                       height="207.0283333333333"
//                       radius="4,4,0,0"
//                       fill="currentColor"
//                       className="recharts-rectangle fill-primary"
//                       name="Sep"
//                       d="M480.125,111.97166666666669A 4,4,0,0,1,484.125,107.97166666666669L 517.125,107.97166666666669A 4,4,0,0,1,
// 521.125,111.97166666666669L 521.125,315L 480.125,315Z"
//                     />
//                   </g>
//                   <g className="recharts-layer recharts-bar-rectangle">
//                     <path
//                       x="531.375"
//                       y="228.3033333333333"
//                       width={41}
//                       height="86.69666666666669"
//                       radius="4,4,0,0"
//                       fill="currentColor"
//                       className="recharts-rectangle fill-primary"
//                       name="Oct"
//                       d="M531.375,232.3033333333333A 4,4,0,0,1,535.375,228.3033333333333L 568.375,228.3033333333333A 4,4,0,0,1,
// 572.375,232.3033333333333L 572.375,315L 531.375,315Z"
//                     />
//                   </g>
//                   <g className="recharts-layer recharts-bar-rectangle">
//                     <path
//                       x="582.625"
//                       y="119.69999999999999"
//                       width={41}
//                       height="195.3"
//                       radius="4,4,0,0"
//                       fill="currentColor"
//                       className="recharts-rectangle fill-primary"
//                       name="Nov"
//                       d="M582.625,123.69999999999999A 4,4,0,0,1,586.625,119.69999999999999L 619.625,119.69999999999999A 4,4,0,0,1,
// 623.625,123.69999999999999L 623.625,315L 582.625,315Z"
//                     />
//                   </g>
//                   <g className="recharts-layer recharts-bar-rectangle">
//                     <path
//                       x="633.875"
//                       y="198.18166666666664"
//                       width={41}
//                       height="116.81833333333336"
//                       radius="4,4,0,0"
//                       fill="currentColor"
//                       className="recharts-rectangle fill-primary"
//                       name="Dec"
//                       d="M633.875,202.18166666666664A 4,4,0,0,1,637.875,198.18166666666664L 670.875,198.18166666666664A 4,4,0,0,1,
// 674.875,202.18166666666664L 674.875,315L 633.875,315Z"
//                     />
//                   </g>
//                 </g>
//               </g>
//               <g className="recharts-layer" />
//             </g>
//           </svg>
//         </div>
//       </div>
//     </div>
//   </div>
//   }
  export default DialogComponent;