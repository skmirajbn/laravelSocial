import { Inter } from "next/font/google";
import "./../../public/fontawesome/css/all.min.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IsDB Connect",
  description: "Connect with you friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="logo.png" />
        {/* <link rel="stylesheet" href="fontawesome/css/all.min.css" /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
