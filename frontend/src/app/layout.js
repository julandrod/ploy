import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SingleNavbar from "@/components/SingleNavbar";
import Providers from "./Providers";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ploy",
  description: "Busqueda de empleo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
            <section className="min-h-screen bg-footer">{children}</section>
        </Providers>
      </body>
    </html>
  );
}
