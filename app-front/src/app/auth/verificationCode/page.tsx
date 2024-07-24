"use client";
import { useAuth } from "@/hooks/mutations";
import { Button, Input, Spacer } from "@nextui-org/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function VerificationCode() {
  const [verificationCode, setVerificationCode] = useState("");

  const searchParams = useSearchParams();
  const mobile = searchParams.get("mobile");
  const { login } = useAuth();
  const handleLogin = () => {
    mobile &&
      login.mutate({ mobile: mobile, verificationCode: verificationCode });
  };
  const handleVerificationCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value);
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
              کد
            </label>
            <div className="mt-2">
              <Input
                name="mobile"
                type="number"
                required
                onChange={handleVerificationCodeChange}
              />
            </div>
            <span>{`کد ارسال شده به شماره همراه ${mobile} را وارد نمائید`}</span>
            <span></span>
          </div>

          <div>
            <Button className="w-full" color="primary" onClick={handleLogin}>
              ورود / ثبت نام
            </Button>
            <Spacer />
            <Button
              as={Link}
              href="/auth/login"
              className="w-full"
              color="default"
              onClick={handleLogin}
            >
              تغییر شماره همراه
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
