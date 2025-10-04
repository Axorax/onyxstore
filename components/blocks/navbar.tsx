"use client";

import React from "react";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const links = [
    {
      label: "Products",
      href: "https://www.instagram.com/onyx.bd/",
    },
    {
      label: "Referral",
      href: "/referral",
    },
    {
      label: "Membership",
      href: "/membership",
    },
  ];

  return (
    <header
      className={cn(
        "sticky top-5 z-50",
        "mx-4 sm:mx-6 md:mx-auto w-auto md:w-full max-w-3xl",
        "rounded-lg border shadow",
        "bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-[7px]",
      )}
    >
      <nav className="mx-auto flex items-center justify-between p-1.5">
        <Link href="/">
          <div className="hover:bg-accent flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100">
            <img src={"/logo.svg"} className="size-5" />
            <p className="font-mono text-base font-bold">onyxbd</p>
          </div>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              className={buttonVariants({ variant: "ghost", size: "sm" })}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link href="https://www.instagram.com/onyx.bd/">
            <Button size="sm" className="cursor-pointer">
              Purchase
            </Button>
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setOpen(!open)}
              className="lg:hidden ml-2"
            >
              <MenuIcon className="size-4" />
            </Button>
            <SheetContent
              className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
              showClose={false}
              side="left"
            >
              <div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
                {links.map((link) => (
                  <Link
                    className={buttonVariants({
                      variant: "ghost",
                      className: "justify-start",
                    })}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <SheetFooter>
                <p className="text-center">onyxbd</p>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
