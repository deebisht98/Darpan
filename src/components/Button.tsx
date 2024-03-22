import { cn } from "@/lib/utils";
import React from "react";

export default function Button({
  className,
  ...props
}: React.ComponentPropsWithRef<"button">) {
  return <button className={cn(buttonStyles, className)} {...props} />;
}

export const buttonStyles =
  "flex items-center justify-center gap-2 rounded-full bg-blue-500 px-3 py-2 font-semibold text-white transition-colors hover:bg-blue-600 active:bg-blue-600 disabled:bg-gray-200";
