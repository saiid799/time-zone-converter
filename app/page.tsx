import { Hero } from "./components/Hero";
import { auth } from "@clerk/nextjs/server";

export default function Home() {
  const { userId } = auth();

  return <Hero />;
}
