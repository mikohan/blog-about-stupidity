import { Divider } from "./components/Devider"
import { Hero } from "./components/Hero"
import { SecondSection } from "./components/SecondSection"

export default function Page() {
  return (
    <div className="flex flex-col gap-16">
      <div className="mt-16">
        <Hero />
      </div>
      <Divider />
      <div className="mt-16">
        <SecondSection />
      </div>
    </div>
  )
}
