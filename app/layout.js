//import localFont from "next/font/local";
import {Inter, Outfit} from "next/font/google";
import "./globals.css";
import { ClerkProvider, GoogleOneTap } from "@clerk/nextjs";
// import {ClerkProvider} from "@clerk/nextjs";


const inter = Outfit({subsets :["latin"] });

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    
    <ClerkProvider>
    <html lang="en">
      <body
        className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
