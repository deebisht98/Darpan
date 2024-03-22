import { Metadata } from "next";
import MyMeetingPage from "./MyMeetingPage";

export const metadata: Metadata = {
  title: "My Meetings",
};

const Page = () => {
  return <MyMeetingPage />;
};

export default Page;
