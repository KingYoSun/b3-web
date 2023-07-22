import BskyAgentContextProvider from "@/contexts/bsty-agent";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AlertMsgProvider from "@/contexts/alert-msg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ATProtocol PDS Client for boobee.blue",
  description: "ATProtocol PDS Client for boobee.blue",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BskyAgentContextProvider>
          <AlertMsgProvider>{children}</AlertMsgProvider>
        </BskyAgentContextProvider>
      </body>
    </html>
  );
}
