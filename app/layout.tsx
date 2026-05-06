import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Somos Familia",
  description: "Somos Familia",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}