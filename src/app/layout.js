import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Youthful Whispers",
  description: "NIce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.classNameName}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
