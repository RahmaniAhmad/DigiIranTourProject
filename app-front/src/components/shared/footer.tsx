import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="logo" width={48} height={48} />
        <h4>دیجی‌ایران‌تور</h4>
      </div>
      <div>
        <h4>قوانین سایت</h4>
        <ul>
          <li>قوانین فروشگاه</li>
          <li>قوانین خرید تور</li>
          <li>سوالات متداول</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h4>شبکه های اجتماعی</h4>
        <Link className="nav-link" href="/about">
          <span className="oi oi-home" aria-hidden="true"></span> Instagram
        </Link>
        <Link className="nav-link" href="/about">
          <span className="oi oi-home" aria-hidden="true"></span> WhatsApp
        </Link>
        <Link className="nav-link" href="/about">
          <span className="oi oi-home" aria-hidden="true"></span> Telegram
        </Link>
      </div>
    </div>
  );
};
export default Footer;
