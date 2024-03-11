"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isBordered>
      <NavbarContent justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link
            className="flex items-center font-bold text-inherit"
            href="/"
            aria-current="page"
          >
            <Image src="/images/logo.png" alt="logo" width={48} height={48} />
            دیجی‌ایران‌تور
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            خانه
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<FaChevronDown />}
                radius="sm"
                variant="light"
              >
                اقامتگاه
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description=""
              //   startContent={icons.scale}
            >
              <Link href="/accommodations/hotel" aria-current="page">
                <p>هتل</p>
              </Link>
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description=""
              //   startContent={icons.activity}
            >
              <Link href="/accommodations/apartment" aria-current="page">
                <p>هتل آپارتمان</p>
              </Link>
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description=""
              //   startContent={icons.flash}
            >
              <Link href="/accommodations/ecotourism" aria-current="page">
                <p>بومگردی</p>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<FaChevronDown />}
                radius="sm"
                variant="light"
              >
                جاذبه‌ها
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="attractions-iran"
              description=""
              //   startContent={icons.scale}
            >
              <Link href="/attractions/iran" aria-current="page">
                <p>جاذبه‌های داخلی</p>
              </Link>
            </DropdownItem>
            <DropdownItem
              key="attractions-other-countries"
              description=""
              //   startContent={icons.activity}
            >
              <Link href="/attractions/other-countries" aria-current="page">
                <p>جاذبه‌های خارجی</p>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive>
          <Link href="/about" aria-current="page">
            درباره ما
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            تماس با ما
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          <Link href="/auth/login">ورود</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/auth/register"
            variant="flat"
          >
            ثبت نام
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            خانه
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<FaChevronDown />}
                radius="sm"
                variant="light"
              >
                اقامتگاه
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description=""
              //   startContent={icons.scale}
            >
              <Link href="/accommodations/hotel" aria-current="page">
                <p>هتل</p>
              </Link>
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description=""
              //   startContent={icons.activity}
            >
              <Link href="/accommodations/apartment" aria-current="page">
                <p>هتل آپارتمان</p>
              </Link>
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description=""
              //   startContent={icons.flash}
            >
              <Link href="/accommodations/ecotourism" aria-current="page">
                <p>بومگردی</p>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<FaChevronDown />}
                radius="sm"
                variant="light"
              >
                جاذبه‌ها
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="attractions-iran"
              description=""
              //   startContent={icons.scale}
            >
              <Link href="/attractions/iran" aria-current="page">
                <p>جاذبه‌های داخلی</p>
              </Link>
            </DropdownItem>
            <DropdownItem
              key="attractions-other-countries"
              description=""
              //   startContent={icons.activity}
            >
              <Link href="/attractions/other-countries" aria-current="page">
                <p>جاذبه‌های خارجی</p>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive>
          <Link href="/about" aria-current="page">
            درباره ما
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            تماس با ما
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};
export default CustomNavbar;
