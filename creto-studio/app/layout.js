import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import TechWorldIntro from "@/components/TechWorldIntro";

export const metadata = {
  title: "Creto Studio — Next-Gen Digital Engineering",
  description: "We design and build scalable software, immersive interfaces, and resilient systems for companies engineering their next decade of growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TechWorldIntro />
        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}