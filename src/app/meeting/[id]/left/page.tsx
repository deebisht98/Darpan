import { buttonStyles } from "@/components/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface PageProps {
  params: { id: string };
}

const Page = ({ params: { id } }: PageProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="font-bold">You left this meeting.</p>
      <Link
        href={`/meeting/${id}`}
        className={cn(buttonStyles, "bg-gray-500 hover:bg-gray-600")}
      >
        Rejoin
      </Link>
    </div>
  );
};

export default Page;
