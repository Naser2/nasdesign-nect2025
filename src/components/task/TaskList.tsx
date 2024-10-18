import React from 'react';
import ListItem from './ListItem'; // Import the reusable component

interface TaskActivity {
    avatar: string;  // URL to the user's avatar image
    name: string;    // Name of the user
    email: string;   // Email of the user
    task: string;    // Task name
    status: string;  // Status of the task, e.g., "Completed" or "Started"
  }
  
  interface TasklistActivitiesProps {
    activities: TaskActivity[]; // Array of task activities
  }
  
  
// Mock data (replace with actual task data)
const tasks = [
  {
    avatar: "/avatars/01.png",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    task: "Define project scope and objectives",
    status: "Completed",
  },
  {
    avatar: "/avatars/02.png",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    task: "Gather technical requirements for the platform",
    status: "Started",
  },
  {
    avatar: "/avatars/03.png",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    task: "Design user interface wireframes",
    status: "Completed",
  },
  {
    avatar: "/avatars/04.png",
    name: "William Kim",
    email: "will@email.com",
    task: "Create attendee registration system",
    status: "Started",
  },
  {
    avatar: "/avatars/05.png",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    task: "Implement post-event analytics dashboard",
    status: "Completed",
  },
];

const TaskList = ({activities}:TasklistActivitiesProps) => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow col-span-3">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="font-semibold leading-none tracking-tight">Recently Completed Tasks</h3>
        <p className="text-sm text-muted-foreground">
          Here are the tasks that were completed or started recently.
        </p>
      </div>
      <div className="p-6 pt-0">
        <div className="space-y-8">
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              avatar={task.avatar}
              name={task.name}
              email={task.email}
              task={task.task}
              status={task.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
