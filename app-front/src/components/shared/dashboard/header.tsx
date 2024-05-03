"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";

interface HeaderProps {
  onSingOut: () => void;
}
const Header = ({ onSingOut }: HeaderProps) => {
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
            <li>
              <Link
                className={
                  pathname.includes("/dashboard/city")
                    ? "font-bold text-neutral-400"
                    : ""
                }
                href="/dashboard/city"
              >
                شهر
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname.includes("/dashboard/accommodationType")
                    ? "font-bold text-neutral-400"
                    : ""
                }
                href="/dashboard/accommodationType"
              >
                نوع اقامت
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname.includes("/dashboard/accommodation")
                    ? "font-bold text-neutral-400"
                    : ""
                }
                href="/dashboard/accommodation"
              >
                اقامت
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex align-middle justify-center">
          <Link className="font-bold text-lg pl-2" href="/">
            دیجی ایران تور
          </Link>
          <button onClick={onSingOut}>
            <FaSignOutAlt color="red" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
