import Link from "next/link"

interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

const footerSections: FooterSection[] = [
  {
    title: "Navigation",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
]

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              ANGARA LAB
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Building high-performance marketing systems for the US market.
            </p>
          </div>

          {/* Dynamic Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold tracking-wider uppercase">
                {section.title}
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {year} Angara Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
