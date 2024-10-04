import type { Metadata } from "next";
import { ViewTransitions } from 'next-view-transitions';
import { Toaster } from 'sonner';
import "../globals.scss";
import { AppWrapper } from "./context";

export const metadata: Metadata = {
  title: "NasDesign Web-app by @nassersanou",
  description: "Generated with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ViewTransitions>
          <AppWrapper>
            {children}
          </AppWrapper>
          <Toaster position="top-right" richColors />
        </ViewTransitions>
      </body>
    </html>
  );
};
