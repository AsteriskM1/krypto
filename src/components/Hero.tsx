import Heading from "@/ui/LargeHeading"
import { hero } from "@/constants"
import Paragraph from "@/ui/Paragraph";
import { Button } from "@/ui/Button";
import Image from "next/image";
import { herobg } from "@/assets";


const Hero = () => {
  const [{ title, subtitle, buttons }] = hero;
  const [buyButton, sellButton] = buttons;
  
  return (
    <div className="relative flex flex-col justify-center mt-24">
      <div className="flex mobile:flex-row flex-col justify-between z-10">
        <div className="mobile:w-[430px] smMobile:w-[330px] w-[220px]">
          <Heading className="">{title}</Heading>
          <div className="mt-9">
            <Paragraph>{subtitle}</Paragraph>
          </div>
          <div className="flex smMobile:flex-row flex-col mt-4 mobile:mt-3">
            <Button className="lg:w-[244.49px] mobile:w-[213px] mobile:h-[66.66px] smMobile:w-[140px] h-[50px] text-base smMobile:mt-0" style={{ flexShrink: 0 }}>{buyButton.title}</Button>
            <Button variant={"nofill"} className="smMobile:ml-8 ml-0 lg:w-[244.49px] mobile:w-[213px] mobile:h-[66.66px] smMobile:w-[140px] h-[50px] text-base smMobile:mt-0 mt-4" style={{ flexShrink: 0 }}>{sellButton.title}</Button>
          </div>
        </div>
        <div className="flex flex-row mobile:mt-0 mt-10">
          <Image 
            src={herobg}
            alt="computer"
            width={513}
            height={415}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
