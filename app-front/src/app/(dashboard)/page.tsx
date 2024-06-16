"use client";
import isAuth from "@/components/auth/isAuth";

const Page = () => {
  return (
    <div>
      <button>test</button>
      Dashboard Home Page
    </div>
  );
};

export default isAuth(Page);
