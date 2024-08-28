import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SideBar from "@/components/SideBar/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "my app",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Header/>
             <div className="container">
                {children} 
             </div>
      
    
        <Footer/>
      </body>
    </html>
  );
}
