import Image from "next/image"
import MoscowImage from "@/public/images/moscow.jpg"
import LAImage from "@/public/images/la.jpg"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export function Hero() {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="flex gap-16">
        <div className="flex w-1/2 flex-col gap-8">
          <h1 className="mt-16 text-5xl font-black tracking-normal">
            The bright future that wait us in LA!
          </h1>
          <p className="">You may now add components and start building.</p>
          <Button className="mt-12 w-sm py-8 text-2xl font-bold">
            <Link href="/blog/why-russians-calm">
              Why Russians are So Stupid
            </Link>
          </Button>
        </div>
        <div className="max-w-1/2">
          <Image src={LAImage} alt="future in LA" className="rounded-3xl" />
        </div>
      </div>
    </div>
  )
}
