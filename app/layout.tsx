import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://localhost:3000"),

  title: {
    template: "%s | KaranPawar",
    default: "KaranPawar",
  },
  authors: {
    name: "KaranPawar",
  },
  icons:{
    icon:"/favicon.ico",
    apple:"/favicon.ico"
  },

  description:
    "Crafting captivating web applications in Bhopal, I merge creativity with technology to deliver seamless user experiences. Let's collaborate to build something remarkable.",
  openGraph: {
    title: "KaranPawar",
    description:
      "Crafting captivating web applications in Bhopal, I merge creativity with technology to deliver seamless user experiences. Let's collaborate to build something remarkable..",
    url: "https://localhost:3000",
    siteName: "KaranPawar",
    images: "/og.png",
    type: "website"
  },
  keywords: ["PortFolio", "KaranPawar", "personalweb"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={space_Grotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
