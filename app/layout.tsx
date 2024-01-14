import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import NavBar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppin",
});

export const metadata: Metadata = {
  title: "VeticMoto",
  description: "Welcome to VeticMoto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
