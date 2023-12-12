import useAuth from "@root/hooks/useAuth";
import Link from "next/link";
import React from "react";

export default function AuthLayout({ children }: any) {
  const { isAuthenticated } = useAuth();

  return (
    <React.Fragment>
      {" "}
      {!isAuthenticated && (
        <div className=" text-center text-f26 py-2">
          <Link href="/auth/login" className=" underline">
            Login
          </Link>
        </div>
      )}
      {children}
    </React.Fragment>
  );
}
