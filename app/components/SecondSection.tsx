import Image from "next/image"
import MoscowImage from "@/public/images/moscow.jpg"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export function SecondSection() {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="flex gap-16">
        <div className="max-w-1/2">
          <Image src={MoscowImage} alt="future in LA" className="rounded-3xl" />
        </div>
        <div className="flex w-1/2 flex-col gap-8">
          <h1 className="mt-16 text-5xl font-black tracking-normal">
            Будущее России: Тьма Надвигается
          </h1>
          <p className="">
            Руины империи, голодные очереди и мёртвые города под серым небом.
            Эпоха упадка, тотального контроля и медленного умирания нации. Место
            Где мечты умерли, а выживание стало единственной целью.{" "}
          </p>
          <Button className="mt-12 w-sm py-8 text-2xl font-bold">
            <Link href="/blog/why-russians-calm">
              Why Russians are So Stupid
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
