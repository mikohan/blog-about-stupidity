import { Button } from "@/components/ui/button"
import Link from "next/link"
export function CTAButton() {
  return (
    <Button className="mt-12 w-sm py-8 text-2xl font-bold">
      <Link href="/blog/why-russians-calm">Why Crisis is Comming?</Link>
    </Button>
  )
}
