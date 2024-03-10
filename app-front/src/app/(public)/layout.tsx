import type { Metadata } from "next";
import Header from "../../components/shared/header";
import Footer from "@/components/shared/footer";
import CustomNavbar from "@/components/shared/navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center flex-col">
      <div className="w-full">
        <CustomNavbar />
      </div>
      <div className="min-h-screen max-w-screen-lg">
        <Header />
        <div className="p-4">{children}</div>
        <Footer />
      </div>
    </div>
  );
}