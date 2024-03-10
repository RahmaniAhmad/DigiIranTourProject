"use client";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          ثبت نام در دیجی ایران تور
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              شماره موبایل
            </label>
            <div className="mt-2">
              <Input name="mobile" type="number" required />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              کلمه عبور
            </label>
            <div className="mt-2">
              <Input
                name="password"
                type={isVisible ? "text" : "password"}
                required
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <FaEye className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              تکرار کلمه عبور
            </label>
            <div className="mt-2">
              <Input
                name="password"
                type={isVisible ? "text" : "password"}
                required
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <FaEye className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="/forget-password"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  کلمه عبور را فراموش کرده‌ام!
                </a>
              </div>
              <div className="text-sm">
                <a
                  href="/auth/login"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  قبلا ثبت نام کرده‌ام
                </a>
              </div>
            </div>
          </div>
          <div>
            <p>
              استفاده از
              <a
                className="font-semibold text-indigo-600 hover:text-indigo-500"
                href="/auth/general-policy"
              >
                دیجی‌ایران‌تور
              </a>
              به معنی پذیرش قوانین و مقررات این سرویس است.
            </p>
          </div>
          <div>
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              ورود
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
