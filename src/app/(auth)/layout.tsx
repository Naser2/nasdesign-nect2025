import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import { Toaster } from 'sonner';
import '../globals.scss';

import SiteNavigation23 from '@/components/SiteNavigation23'
import { AppWrapper} from '../context';

import SideBar  from "@/components/SideBar";


export const metadata: Metadata = {
  title: 'NasDesign Web-app by @nassersanou',
  description: 'Generated with Next.js.',
};

export default function AuthRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    // <html lang="en">
      <ViewTransitions>
        <AppWrapper>   
      
        <div className="lg:py-0 px-0">
         <div className="grid lg:grid-cols-5 items-start gap-x-1 min-[1490px]:!flex">
          <div className="grid gap-1  md:col-span-1 lg:col-span-1 max-[1024px]:hidden">
             <SideBar />
            </div>
            <div className="lg:col-span-4 xl:w-full">
              <SiteNavigation23 />
              <ViewTransitions>
                {children}
              </ViewTransitions>
            </div>
          </div>
        </div>
     
       
        </AppWrapper>
        <Toaster position="top-right" richColors />
      </ViewTransitions>
    // </html>
  );
}



// import type { Metadata } from "next";
// import { ViewTransitions } from 'next-view-transitions';
// import { Toaster } from 'sonner';
// import "../globals.scss";

// import { AppWrapper } from "../context";

// export const metadata: Metadata = {
//   title: "NasDesign Web-app by @nassersanou",
//   description: "Generated with Next.js.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en"> 
//      <ViewTransitions>
  
//          <body>
//           <AppWrapper>
//             {children}
//           </AppWrapper>
//           <Toaster position="top-right" richColors />
//          </body>
//         </ViewTransitions>
//     </html>
//   );
// };
