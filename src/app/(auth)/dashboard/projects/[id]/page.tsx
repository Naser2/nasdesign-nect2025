// "use client"
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
import clientSupabase from '@/lib/supabase/client';

 async function ProjectDetailsPage({ params }: { params: { id: string } }) {
    // let params = new URLSearchParams()
  // const router = useRouter();
  const { id } = params; // Get the project id from the URL

  console.log("PARAMETERS", params.id);

  // const [project, setProject] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   if (!id) return;

  //   const fetchProject = async () => {
  //     try {
  //       setLoading(true);

  //       const { data, error } = await clientSupabase
  //         .from("projects")
  //         .select("*")
  //         .eq("id", id) // Filter by the project id
  //         .single(); // Fetch a single project

  //       if (error) throw error;

  //       setProject(data);
  //     } catch (err) {
  //       setError(err.message || "Failed to load project.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProject();
  // }, [id]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {/* <h1>{project.title}</h1>
      <p>{project.description}</p>
      <h2>Phases</h2>
      {project.phases && project.phases.length > 0 ? (
        <ul>
          {project.phases.map((phase, phaseIndex) => (
            <li key={phaseIndex}>
              <h3>{phase.title}</h3>
              <ul>
                {phase.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>
                    {task.task} - {task.completed ? "Completed" : "Pending"}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No phases available</p>
      )} */}
    </div>
  );
};

export default ProjectDetailsPage;
