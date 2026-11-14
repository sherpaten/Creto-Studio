import { redirect } from "next/navigation";

export const metadata = {
  title: "Our Team | Creto Studio",
  description: "Meet the people behind Creto Studio on the About page.",
};

export default function TeamPage() {
  redirect("/about#team");
}
