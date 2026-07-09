import { Plus_Jakarta_Sans, Inter } from "next/font/google";

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700"], // SemiBold, Bold
  variable: "--font-heading",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"], // Regular, Medium
  variable: "--font-body",
  display: "swap",
});