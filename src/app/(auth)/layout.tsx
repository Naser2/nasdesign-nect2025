import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import { Toaster } from 'sonner';
import '../globals.scss';
import { AppWrapper } from '../context';

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
          {children}
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
