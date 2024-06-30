import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Dashboard } from "./components/Dashboard";

export default function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  return <Dashboard />;
}
