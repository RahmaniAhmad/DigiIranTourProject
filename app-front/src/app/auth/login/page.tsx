"use client";
import { useSignIn } from "@/hooks/user/useSignIn";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const router = useRouter();

  const { verificationCode } = useSignIn();
  const handleSignIn = () => {
    verificationCode.mutate(mobile);
    router.push(`/auth/verificationCode?mobile=${mobile}`);
  };
  const handleMobileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMobile(e.target.value);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          ورود یا ثبت نام
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              شماره تلفن همراه
            </label>
            <div className="mt-2">
              <Input
                isRequired
                name="mobile"
                type="number"
                required
                onChange={handleMobileChange}
              />
            </div>
            <span className="text-gray-500">
              پیامک حاوی کد به شماره همراه وارد شده ارسال خواهد شد
            </span>
          </div>

          <div>
            <Button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSignIn}
            >
              دریافت کد ورود
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
