import type { Metadata } from "next";
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
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="flex items-center justify-center flex-col max-w-screen-xl w-full">
        <div className="w-full">
          <CustomNavbar />
        </div>
        <div className="w-full grid md:grid-cols-4 sm:grid-cols-1 min-h-screen">
          <div className="md:col-span-3 sm:col-span-1 w-full p-2">
            {children}
          </div>
          <div className="md:col-span-1 sm:col-span-1 w-full p-2 bg-red-50">
            ads
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
