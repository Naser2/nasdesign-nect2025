import Message from '@/components/Message';
import clsx from 'clsx';
// import AgentComponent from "@/components/propertiesComponents/AgentPage.jsx";

// import { agentQuery } from '@/sanity/lib/queries';
// import { sanityClient } from "@/sanity/lib/client";


// Define the structure of an Agent
// interface Agent {
//   _id: string;
//   name: string;
//   email: string;
//   phone: string;
//   usernames: string;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
//   bio: string;
//   socials: {
//     platform: string;
//     url: string;
//   }[];
// }

export const revalidate = 0; // Optional: Revalidate the page every 60 seconds

export default async function AgentProfile({ params }: { params: { id: string } }) {
  // Fetch the agent data based on the provided ID
  // const agent = await sanityClient.fetch(agentQuery, {id:params.id}, {cache:"no-store"});

  if (!params.id) {
    return <div>No message found.</div>;
  }
  const message =  {
    id: 1,
    name: 'Emilia Gates',
    body: 'Sure! 8:30pm works great!',
    messageId:'66e84aeda0dbe956ae24b006',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
    link: '/messages/1',
    read:false,
    email:'test@gmail.com',
    phone:"123-345-3435",
   sender:{username:":@emiliyGates"}
  }

  return (
    <div className={clsx("min-h-[90vh] bg-[#1e1f20] relative justify-center w-full")}>
          <Message message={message}  />
      {/* <AgentComponent agent={agent} /> */}
    </div>
  );
}
