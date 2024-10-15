import type { Metadata } from "next";
import { ViewTransitions } from 'next-view-transitions';
import { Toaster } from 'sonner';


export const metadata: Metadata = {
  title: "NasDesign Web-app by @nassersanou",
  description: "Login to the best website maker, better than wix",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
     <ViewTransitions>
      <body>
        {children}
        <Toaster position="top-right" richColors />
      </body>
        </ViewTransitions>
    </html>
  );
};
