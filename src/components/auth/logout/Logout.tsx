'use client';

import { useRouter } from 'next/navigation';
import clientSupabase from '@/lib/supabase/client';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    console.log('LOGOUT_INVOKED');
    try {
      await clientSupabase.auth.signOut();
      console.log('LOGOUT_SUCCESSFUL');
      router.replace('/login'); // Redirect to login after successful logout
    } catch (error) {
      console.error('Could not sign out', error);
    }
  };

  return (
    <button className="ml-4 px-4 py-3" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;


// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import clientSupabase from '@/lib/supabase/client';
// import browserClient from "@/lib/supabase/client";

// interface Props {}

// const Logout = () => {
//     console.log("LOGOUT_INVOQUE");
//   const router = useRouter();

//   useEffect(() => {
//     const logOut = async () => {
      
//     //   const supabase = browserClient();
//       try {
//         // await supabase.auth.signOut();
//          await clientSupabase.auth.signOut()
//       } catch (error) {
//         console.error("Could not sign out", error);
//       } finally {
//         router.replace("/login");
//       }
//     };
//     console.log("LOGOUT_SUCCESSFUL");
//     logOut();
//   }, []);

//   return <></>;
// };

// export default Logout;


