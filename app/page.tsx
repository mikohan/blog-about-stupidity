import { Divider } from "./components/Devider"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { SecondSection } from "./components/SecondSection"

export default function Page() {
  return (
    <div className="flex flex-col justify-center gap-16 px-8 md:px-0">
      <div className="mt-16">
        <Hero />
      </div>
      <Divider />
      <div className="mt-0 md:mt-16">
        <SecondSection />
      </div>
    </div>
  )
}
