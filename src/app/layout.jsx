import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import SessionProvider from "@/components/SessionProvider";
import Redirecter from "@/components/Redirecter";
import Navbar from "@/components/NavBar";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "AcadVault 2.0",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.class}>
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          <div className="relative h-full w-full bg-slate-950">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          </div>
        </div>
        <SessionProvider>
          <Redirecter>
            <Toaster position="top-center" reverseOrder={false} />
            <Navbar />
            {children}
          </Redirecter>
        </SessionProvider>
      </body>
    </html>
  );
}
