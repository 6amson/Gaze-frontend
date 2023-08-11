import "./globals.css";
import type { Metadata } from "next";
import { Inter, Manrope, Poppins, Raleway } from "next/font/google";
import Header from "./components/globals/Header";
export const metadata: Metadata = {
  title: "Gaze",
  description: "Push notifications for verified NFT collections",
};

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
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

// className={`${openSans.variable}  relative mx-auto  `}