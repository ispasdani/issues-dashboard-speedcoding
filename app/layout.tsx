import { ReactNode } from "react";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";

export const metadata = {
  title: "Supplier Issues Dashboard",
  description: "Manage and monitor issues related to suppliers",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
