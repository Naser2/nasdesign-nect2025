interface ListItemProps {
    avatar: string;
    name: string;
    email: string;
    task: string;
    status: string;
  }
  
  const ListItem: React.FC<ListItemProps> = ({ avatar, name, email, task, status }) => {
    return (
      <div className="flex items-center">
        <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
          <img className="aspect-square h-full w-full" alt="Avatar" src={avatar} />
        </span>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{name}</p>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>
        <div className="ml-auto text-sm font-medium">
          {/* Trimmed task name */}
          {task.length > 30 ? `${task.substring(0, 30)}...` : task} <br />
          <span className="text-xs text-muted-foreground">{status}</span>
        </div>
      </div>
    );
  };
  
  export default ListItem;
  