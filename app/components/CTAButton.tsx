import { Button } from "@/components/ui/button"
import Link from "next/link"
export function CTAButton() {
  return (
    <Button className="mt-4 w-xs py-8 text-2xl font-bold md:mt-12 md:w-sm">
      <Link href="/blog/why-russians-calm">Why Crisis is Comming?</Link>
    </Button>
  )
}
