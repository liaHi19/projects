import { Jost, Caveat } from "next/font/google";
import "./globals.css";

const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

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
        className={`${jost.variable} ${caveat.variable} font-primary font-normal text-bg bg-text`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
