import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ScoreCard social media app",
  description:
    "A social media app for golfers created by Graeme Gillies using Next.js, Clerk, React and PostgresQL",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
