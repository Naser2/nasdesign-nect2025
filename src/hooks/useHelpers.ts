import dayjs from "dayjs";
import numeral from "numeral";
import { useState } from "react";
import clientSupabase from "@/lib/supabase/client";

export const useHelpers = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(undefined);
  const [selected, setSelected] = useState<any>(undefined);
  const [open, setOpen] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);

  const getDollars = (amount = 0) => {
    const hasDecimal = amount % 1 !== 0;
    return hasDecimal
      ? numeral(amount).format("$0,0.00")
      : numeral(amount).format("$0,0");
  };

  const openUrl = (link: string) => {
    if (!link) return;
    if (process.browser) window.open(link, "_blank");
  };

  const trimString = (str: string, limit = 22) => {
    if (!str) return;
    return str.length <= limit ? str : `${str.slice(0, limit)}...`;
  };

  const toDate = (date: Date) => {
    return dayjs(date.toString()).format("D MMMM YYYY");
  };

  // --------------- New Project, Comment, Ticket Functions --------------- //

  // Create a new project
  const createProject = async (projectData: any) => {
    try {
      setLoading(true);
      const { data, error } = await clientSupabase
        .from('projects')
        .insert(projectData);
      if (error) throw error;
      setSuccess("Project created successfully!");
      return data;
    } catch (error) {
      setError("Error creating project.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Update project stage (e.g., started, completed)
  const updateProjectStage = async (projectId: string, stage: string) => {
    try {
      setLoading(true);
      const { data, error } = await clientSupabase
        .from('projects')
        .update({ stage })
        .eq('id', projectId);
      if (error) throw error;
      setSuccess("Project stage updated successfully!");
      return data;
    } catch (error) {
      setError("Error updating project stage.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Post a comment on a project or ticket
  const postComment = async (commentData: any) => {
    try {
      setLoading(true);
      const { data, error } = await clientSupabase
        .from('comments')
        .insert(commentData);
      if (error) throw error;
      setSuccess("Comment posted successfully!");
      return data;
    } catch (error) {
      setError("Error posting comment.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Post a reply to a comment
  const postReply = async (replyData: any) => {
    try {
      setLoading(true);
      const { data, error } = await clientSupabase
        .from('replies')
        .insert(replyData);
      if (error) throw error;
      setSuccess("Reply posted successfully!");
      return data;
    } catch (error) {
      setError("Error posting reply.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Create or update a ticket
  const createOrUpdateTicket = async (ticketData: any, ticketId?: string) => {
    try {
      setLoading(true);
      let data;
      if (ticketId) {
        // Update ticket
        const { data: updatedData, error } = await clientSupabase
          .from('tickets')
          .update(ticketData)
          .eq('id', ticketId);
        if (error) throw error;
        data = updatedData;
      } else {
        // Create new ticket
        const { data: newData, error } = await clientSupabase
          .from('tickets')
          .insert(ticketData);
        if (error) throw error;
        data = newData;
      }
      setSuccess("Ticket saved successfully!");
      return data;
    } catch (error) {
      setError("Error saving ticket.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    open,
    disabled,
    selected,
    show,
    error,
    success,
    setData,
    setLoading,
    setOpen,
    setDisabled,
    setSelected,
    setShow,
    trimString,
    getDollars,
    openUrl,
    toDate,
    setError,
    setSuccess,
    createProject,
    updateProjectStage,
    postComment,
    postReply,
    createOrUpdateTicket
  };
};



// import dayjs from "dayjs";
// import numeral from "numeral";
// import { useState } from "react";

// export const useHelpers = () => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [data, setData] = useState<any>(undefined);
//   const [selected, setSelected] = useState<any>(undefined);
//   const [open, setOpen] = useState<boolean>(false);
//   const [disabled, setDisabled] = useState<boolean>(false);
//   const [show, setShow] = useState<boolean>(false);
//   const [error, setError] = useState<string | undefined>(undefined);

//   const getDollars = (amount = 0) => {
//     const hasDecimal = amount % 1 !== 0;
//     if (hasDecimal) {
//       return numeral(amount).format("$0,0.00");
//     }
//     return numeral(amount).format("$0,0");
//   };

//   const openUrl = (link: string) => {
//     if (!link) return;
//     if (process.browser) window.open(link, "_blank");
//   };

//   const trimString = (str: string, limit = 22) => {
//     if (!str) return;
//     return str.length <= limit ? str : `${str.slice(0, limit)}...`;
//   }

//   const toDate = (date: Date) => {
//     return dayjs(date.toString()).format("D MMMM YYYY");
//   }

//   return {
//     data,
//     loading,
//     open,
//     disabled,
//     selected,
//     show,
//     error,
//     setData,
//     setLoading,
//     setOpen,
//     setDisabled,
//     setSelected,
//     setShow,
//     trimString,
//     getDollars,
//     openUrl,
//     toDate,
//     setError
//   };
// };


