import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

export const metadata = {
  title : 'nextjs with clerk'
}


export default function RootLayout({
  children,
}: { children: React.ReactNode })

{
  return (
    <ClerkProvider>
      <html>
        <body> {children} </body>
      </html>
    </ClerkProvider>
  )
}