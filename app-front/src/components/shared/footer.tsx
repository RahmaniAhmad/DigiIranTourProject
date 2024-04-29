import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 py-8 gap-8 p-8">
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="logo" width={48} height={48} />
        <h4>دیجی‌ایران‌تور</h4>
      </div>
      <div className="grid gap-4">
        <h4 className="font-bold">قوانین سایت</h4>
        <ul className="grid gap-2">
          <li>
            <Link className="nav-link" href="#">
              قوانین فروشگاه
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="#">
              قوانین خرید تور
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="#">
              سوالات متداول
            </Link>
          </li>
        </ul>
      </div>
      <div className="grid gap-4">
        <h4 className="font-bold">شبکه های اجتماعی</h4>
        <div className="grid gap-2">
          <Link className="nav-link" href="#">
            اینستاگرام
          </Link>
          <Link className="nav-link" href="#">
            واتساپ
          </Link>
          <Link className="nav-link" href="#">
            تلگرام
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
