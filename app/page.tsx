import DashboardPage from "@/components/layouts/dashboardLayout";
import { Issue } from "@/utils/types";
import React from "react";

const HomePage = async () => {
  try {
    const res = await fetch("https://pastebin.com/raw/Jr57XaFy");

    if (!res.ok) {
      throw new Error(
        `Failed to fetch issues: ${res.status} ${res.statusText}`
      );
    }

    const issues: Issue[] = await res.json();

    return <DashboardPage issues={issues} />;
  } catch (error: unknown) {
    console.error("Error fetching issues:", error);
    return <div>Error loading issues. Please try again later.</div>;
  }
};

export default HomePage;
