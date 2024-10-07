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
    <button id="LOGOUT_BUTTON" onClick={handleLogout}>
 <div className="border-b py-5 px-6 border-default">
  <ul className="space-y-1">
    <li
      role="menuitem"
      className="cursor-pointer flex space-x-3 items-center outline-none focus-visible:ring-1 ring-foreground-muted focus-visible:z-10 group py-1 font-normal border-default group-hover:border-foreground-muted"
      style={{ marginLeft: "0rem" }}
    >
      <div className="transition truncate text-sm text-foreground-lighter group-hover:text-foreground-light min-w-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={14}
          height={14}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-log-out"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1={21} x2={9} y1={12} y2={12} />
        </svg>
      </div>
      <span className="transition truncate text-sm w-full text-foreground-light group-hover:text-foreground">
        Log out
      </span>
    </li>
  </ul>
</div>

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


