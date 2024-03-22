import React from "react";
import MeetingPage from "./left/MeetingPage";
import { Metadata } from "next";
import { currentUser } from "@clerk/nextjs";
import MeetingLoginPage from "@/components/MeetingLoginPage";

interface PageProps {
  params: { id: string };
  searchParams: { guest: string };
}

export function generateMetadata({ params: { id } }: PageProps): Metadata {
  return {
    title: `Meeting ${id}`,
  };
}
async function Page({ params: { id }, searchParams: { guest } }: PageProps) {
  const user = await currentUser();
  const guestMode = guest === "true";

  if (!user && !guestMode) {
    return <MeetingLoginPage />;
  }
  return <MeetingPage id={id} />;
}

export default Page;
