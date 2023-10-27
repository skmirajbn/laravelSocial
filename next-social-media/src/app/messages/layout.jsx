/* eslint-disable @next/next/no-img-element */
import Header from "@/components/header";
import MessageSidebar from "./messageSidebar";

export const metadata = {
  title: "Message",
  description: "Send message to your Friend",
};

export default function MessageLayout({ children }) {
  return (
    <div className="h-screen">
      <Header />
      <section className="flex flex-1">
        <MessageSidebar />
        {children}
      </section>
    </div>
  );
}
