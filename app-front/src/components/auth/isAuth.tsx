"use client";
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { isAuthenticated } from "@/utils/auth";

const isAuth = (Component: any) => {
  return function IsAuth(props: any) {
    const auth = isAuthenticated;

    useEffect(() => {
      debugger;
      var accessToke = localStorage.getItem("accessToken");
      if (!accessToke) {
        return redirect("/auth/login");
      }
    }, []);

    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default isAuth;
