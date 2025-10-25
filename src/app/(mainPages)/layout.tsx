import Navbar from "@/src/components/Navbar";
import Link from "next/link";
import Image from 'next/image';

export default function MainPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return(
        <div className="h-full w-full flex flex-col overflow-hidden">
          <div className="sticky">
            <Navbar />
          </div>

          <div className="flex-1 overflow-y-auto">
            {children}
          </div>

        </div>
    );
}