import type { Metadata } from "next";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={"h-full flex-1 flex flex-col p-10"}>{children}</div>;
}
