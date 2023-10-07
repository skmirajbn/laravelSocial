/* eslint-disable @next/next/no-img-element */
import Header from "@/components/header";
import MessageBody from "./messageBody";
import MessageOptions from "./messageOptions";
import MessageSidebar from "./messageSidebar";

export default function Page() {
  return (
    <div className="h-screen">
      <Header />
      <section className="flex flex-1">
        <MessageSidebar />
        <MessageBody />
        <MessageOptions />
      </section>
    </div>
  );
}
