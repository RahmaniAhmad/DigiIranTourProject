"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useLayoutEffect, useState } from "react";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const pathname = usePathname();

  return (
    <div className="border-b dark:border-b-slate-500 sticky top-0 left-0 right-0 dark:bg-gray-900 dark:text-gray-400 bg-white backdrop-blur-md bg-opacity-50 z-10 px-4">
      <div className="py-5 flex items-center justify-between">
        <nav>
          <ul className="flex items-center gap-4 text-neutral-600">
            <li>
              <Link
                className={
                  pathname === "/dashboard" ? "font-bold text-neutral-400" : ""
                }
                href="/dashboard"
              >
                میز کار
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname.includes("/dashboard/province")
                    ? "font-bold text-neutral-400"
                    : ""
                }
                href="/dashboard/province"
              >
                استان
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex">
          <Link className="font-bold text-lg pl-2" href="/">
            دیجی ایران تور
          </Link>
          <button
            onClick={() =>
              theme == "dark" || theme == undefined
                ? setTheme("light")
                : setTheme("dark")
            }
          >
            {theme == "dark" || theme == undefined ? (
              <FaSun size={16} />
            ) : (
              <FaMoon size={16} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
