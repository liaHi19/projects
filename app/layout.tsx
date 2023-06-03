import { Jost, Caveat } from "next/font/google";
import "./globals.css";

const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Nataliia Hirniak",
  description: "Projects made by Nataliia Hirniak",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${caveat.variable} font-primary font-normal text-bg bg-text dark:bg-bg dark:text-text`}
      >
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
