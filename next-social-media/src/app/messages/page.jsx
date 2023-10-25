/* eslint-disable @next/next/no-img-element */
import MessageBody from "./messageBody";
import MessageOptions from "./messageOptions";

export default function Page() {
  return (
    <div className="flex w-3/4 px-4">
      <MessageBody />
      <MessageOptions />
    </div>
  );
}
