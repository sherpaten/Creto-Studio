import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import TechWorldIntro from "@/components/TechWorldIntro";
import { SoundProvider } from "@/components/SoundProvider";

export const metadata = {
  title: "Creto Studio — Next-Gen Digital Engineering",
  description: "We design and build scalable software, immersive interfaces, and resilient systems for companies engineering their next decade of growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SoundProvider>
          <TechWorldIntro />
          {<CustomCursor /> }
          <ScrollProgress />
          {children}
        </SoundProvider>
      </body>
    </html>
  );
}