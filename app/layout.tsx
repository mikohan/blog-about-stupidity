import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Navbar } from "./components/Navbar"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen overflow-x-hidden bg-background font-sans antialiased",
          "antialiased",
          fontMono.variable,
          "font-sans",
          geist.variable
        )}
      >
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
