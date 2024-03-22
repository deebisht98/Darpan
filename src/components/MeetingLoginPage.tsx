import { ClerkLoaded, ClerkLoading, SignInButton } from "@clerk/nextjs";
import React from "react";
import Button, { buttonStyles } from "./Button";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MeetingLoginPage = () => {
  return (
    <div className="mx-auto w-fit space-y-3">
      <h1 className="text-center text-2xl font-bold">Join meeting</h1>
      <ClerkLoaded>
        <SignInButton>
          <Button className="w-44">Sign in</Button>
        </SignInButton>
        <Link
          href="?guest=true"
          className={cn(buttonStyles, "w-44 bg-gray-400 hover:bg-gray-500")}
        >
          {" "}
          Continue as guest
        </Link>
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className="mx-auto animate-spin" />
      </ClerkLoading>
    </div>
  );
};

export default MeetingLoginPage;
