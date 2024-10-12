import { useState } from 'react';
import { LoadingDots, AlertCircleIcon } from '@/components/icons';
import { useHelpers } from '../../hooks/useHelpers'; // Centralized API helpers
import { type MouseEvent } from 'react';

export default function ProjectSubmission({ userId, projectData, closeDialog }: { userId: string; projectData: any; closeDialog: () => void; }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { createProject } = useHelpers();

  const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Call API to create project
    const result = await createProject({ ...projectData, userId });

    if (result) {
      window.location.reload();
      setIsSubmitting(false);
      setError('');
      closeDialog(); // Close the dialog after successful submission
    } else {
      setError('Failed to create project');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400">
      <div className="rounded-[14px] bg-[#111111] p-4 text-white w-[26rem]">
        <h1 className="text-lg font-bold text-center">Submitting Your Project</h1>
        <p className="mt-2 text-sm">
          Please wait while we submit your project. This may take a few seconds.
        </p>
        <button
          type="button"
          onClick={onClick}
          className="mt-4 text-white text-[13px] font-mono bg-black border border-[#333333] hover:border-white transition-all rounded-md w-full h-[40px] flex items-center justify-center whitespace-nowrap"
          disabled={isSubmitting}
        >
          {isSubmitting ? <LoadingDots color="white" /> : 'Submit Project'}
        </button>

        {error && (
          <div className="mt-4 text-red-500 text-sm flex items-center space-x-1">
            <AlertCircleIcon className="w-4 h-4" />
            <p>
              <span className="font-bold">Error: </span>
              {error}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
