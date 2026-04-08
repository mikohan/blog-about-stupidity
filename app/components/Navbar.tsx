"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/app/components/ThemeToggle"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/angara-lab.us", label: "About" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between px-4 md:px-32">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Angara Lab<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-lg font-medium transition-colors ${active ? "text-primary" : "text-muted-foreground hover:text-foreground"} `}
              >
                {item.label}

                {/* Animated underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary transition-all ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"} `}
                />
              </Link>
            )
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-8! w-8!" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-64 p-6">
              <nav className="mt-6 flex flex-col gap-6">
                {navItems.map((item) => {
                  const active = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-medium transition-colors ${active ? "text-primary" : "text-muted-foreground hover:text-foreground"} `}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
