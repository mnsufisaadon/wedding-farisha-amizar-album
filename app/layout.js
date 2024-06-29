import { Kaushan_Script } from "next/font/google";
import "./globals.css";

const inter = Kaushan_Script({ weight: '400',subsets: ["latin"] });

export const metadata = {
  title: "Wedding of Farisha & Amizar",
  description: "Upload your memories for this special day",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
