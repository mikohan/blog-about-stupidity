import Image from "next/image"
import LAImage from "@/public/images/la.jpg"
import { CTAButton } from "./CTAButton"
export function Hero() {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row md:gap-16">
        <div className="flex flex-col items-center justify-center gap-8 md:w-1/2 md:items-start">
          <h1 className="text-5xl font-black tracking-normal">
            Лос-Анджелес: Светлое Будущее
          </h1>
          <p className="">
            Город мечты 2050 года — где технологии, природа и процветание
            сливаются воединaо. В 2050 году Лос-Анджелес превратился в сияющий
            символ новой эры человечества — экологичный, высокотехнологичный и
            невероятно красивый мегаполис, где небоскрёбы с вертикальными лесами
            гармонично соседствуют с чистейшим Тихим океаном. Летающие
            электромобили, голографические парки и улицы, заполненные
            счастливыми людьми, отражают триумф инноваций, устойчивого развития
            и американской мечты. Здесь каждый житель дышит свободой,
            возможностями и надеждой на завтра, а город стал настоящим магнитом
            для талантов со всего мира.
          </p>
          <CTAButton />
        </div>
        <div className="mt-16 md:mt-0 md:max-w-1/2">
          <Image src={LAImage} alt="future in LA" className="rounded-3xl" />
        </div>
      </div>
    </div>
  )
}
