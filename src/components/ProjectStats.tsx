import React from "react";
import StatsCard from "./StatsCard"; // Import the reusable component
import { PhasesIcon, PeoplesdIcon, MoneyIcon, ActivityIcons } from "./icons/projectIcons"; // Assume you have custom icons or SVGs
// TasksIcon, CompletedIcon, PendingIcon 
const ProjectStats = ({ phases, tasks }) => {
    console.log("PHASES", phases, tasks);

  const totalPhases = phases.length;
  const completedTasks = tasks.filter((task: { completed: any; }) => task.completed).length;
  const pendingTasks = tasks.filter((task: { completed: any; }) => !task.completed).length;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* Total Phases Card */}
      <StatsCard
        title="Total Phases"
        value={totalPhases}
        icon={<PhasesIcon />} // Assuming you have an icon component or SVG
        percentage={20.1} // You can dynamically calculate this
        description="+20.1% from last week"
      />

      {/* Completed Tasks Card */}
      <StatsCard
        title="Completed"
        value={completedTasks}
        icon={<MoneyIcon />} // Assuming you have an icon component or SVG
        percentage={19} // You can dynamically calculate this
        description="+19% from last week"
      />

      {/* Pending Tasks Card */}
      <StatsCard
        title="Pending Now"
        value={pendingTasks}
        icon={<ActivityIcons />} // Assuming you have an icon component or SVG
        percentage={5} // Example calculation
        description="5 tasks pending"
      />

      {/* Example: Total Tasks Card */}
      <StatsCard
        title="Total Tasks"
        value={tasks.length}
        icon={<PeoplesdIcon />} // Assuming you have an icon component or SVG
        percentage={15} // Example percentage
        description="+15% from last week"
      />
    </div>
  );
};

export default ProjectStats;
