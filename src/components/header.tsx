"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/content/nav";

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="px-4 pt-4">
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-transparent px-6 py-4 transition-all duration-500 animate-in fade-in slide-in-from-top-2",

            isScrolled &&
              "border border-white/10 bg-black/35 backdrop-blur-2xl shadow-[0_10px_60px_rgba(0,0,0,0.45)]"
          )}
        >
          {/* ========================= */}
          {/* Logo */}
          {/* ========================= */}

          <Link
            href="/"
            className="group flex items-center gap-3 transition-all duration-500"
          >
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                transition-all
                duration-500
                group-hover:scale-105
                group-hover:border-yellow-300/40
                group-hover:shadow-[0_0_30px_rgba(255,215,0,0.25)]
              "
            >
              <span className="gold-text text-lg font-bold">∞</span>
            </div>

            <div className="hidden sm:block">
              <h2
                className="
                  gold-text
                  text-sm
                  font-bold
                  tracking-[0.35em]
                  transition-all
                  duration-500
                  group-hover:scale-105
                "
              >
                OYA
              </h2>

              <p
                className="
                  mt-0.5
                  text-[10px]
                  uppercase
                  tracking-[0.28em]
                  text-white/55
                "
              >
                M. FARIQ FIRMANSYAH
              </p>
            </div>
          </Link>

          {/* ========================= */}
          {/* Desktop Navigation */}
          {/* ========================= */}

          <ul className="hidden items-center gap-10 lg:flex">
            {NAV_LINKS.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="
                    relative
                    text-sm
                    font-medium
                    text-white/60
                    transition-all
                    duration-300

                    hover:text-white

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:rounded-full
                    after:bg-yellow-300
                    after:transition-all
                    after:duration-300

                    hover:after:w-full
                  "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* ========================= */}
          {/* Desktop CTA */}
          {/* ========================= */}

          <div className="hidden lg:block">
            <Button
              asChild
              className="
                rounded-full
                px-7
                font-medium
                transition-all
                duration-500
                hover:scale-105
                hover:shadow-[0_0_35px_rgba(255,215,0,0.25)]
              "
            >
              <Link href="#contact">Let's Talk</Link>
            </Button>
          </div>

          {/* ========================= */}
          {/* Mobile Button */}
          {/* ========================= */}

          <button
            onClick={() => setMenuState(!menuState)}
            className="transition duration-300 lg:hidden"
          >
            {menuState ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* ========================= */}
        {/* Mobile Menu */}
        {/* ========================= */}

        {menuState && (
          <div
            className="
              mx-auto
              mt-4
              max-w-7xl
              rounded-2xl
              border
              border-white/10
              bg-black/40
              p-6
              backdrop-blur-2xl
              shadow-[0_10px_50px_rgba(0,0,0,0.4)]
              lg:hidden
            "
          >
            <ul className="space-y-6">
              {NAV_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuState(false)}
                    className="
                      block
                      text-lg
                      font-medium
                      text-white/70
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-yellow-300
                    "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="
                mt-8
                w-full
                rounded-full
                transition-all
                duration-500
                hover:scale-[1.02]
              "
            >
              <Link
                href="#contact"
                onClick={() => setMenuState(false)}
              >
                Let's Talk
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};