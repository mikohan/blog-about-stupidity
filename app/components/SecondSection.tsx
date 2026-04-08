import Image from "next/image"
import MoscowImage from "@/public/images/moscow.jpg"
import { CTAButton } from "./CTAButton"
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
          <CTAButton />
        </div>
      </div>
    </div>
  )
}
