import "./globals.css";
import type { Metadata } from "next";
import { Inter, Manrope, Poppins, Raleway } from "next/font/google";
import { UserPageContext } from "./components/UserPageContext";
import UserPageProvider from "./components/UserPageContext";
import Header from "./components/globals/Header";
export const metadata: Metadata = {
  title: "Gaze",
  description: "Push notifications for verified NFT collections",
};

import { useRouter, usePathname } from "next/navigation";

const openSans = Raleway({
  weight: ["400", "700", "100", "300", "200", "500", "600", "800", "900"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-opensans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /*  const path = usePathname(); */

  return (
    <html lang="en">
      <UserPageProvider>
        <body>
          <div className={` fixed w-full z-40 top-0`}>
            <Header></Header>
          </div>
          {children}
        </body>
      </UserPageProvider>
    </html>
  );
}

// className={`${openSans.variable}  relative mx-auto  `}
