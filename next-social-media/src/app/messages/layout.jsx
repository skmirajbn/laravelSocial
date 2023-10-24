/* eslint-disable @next/next/no-img-element */
import Header from "@/components/header";
import MessageOptions from "./messageOptions";
import MessageSidebar from "./messageSidebar";

export default function MessageLayout({ children }) {
  return (
    <div className="h-screen">
      <Header />
      <section className="flex flex-1">
        <MessageSidebar />
        {children}
        <MessageOptions />
      </section>
    </div>
  );
}
