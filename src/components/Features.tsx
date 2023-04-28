import Image from "next/image"
import Paragraph from "@/ui/Paragraph"
import Heading from "./ui/LargeHeading"
import { sectionbg1, sectionbg2 } from "@/assets"
import { newFeatures } from "@/constants"
import { Button } from "./ui/Button"

const Features = () => {
    const [feature1, feature2] = newFeatures;
  return (
    <div className="flex flex-1 flex-col mt-20 px-6">
        <div className="flex mobile:flex-row flex-col items-center">
            <Image src={sectionbg1} alt="analytics" width={632} height={363} className="mobile:order-first order-last mobile:mt-0 mt-4"/>
            <div className="flex flex-col w-[360px] mobile:w-[535px] ml-14 mobile:order-last order-first">
                <Paragraph size={'lg'} className="opacity-70 uppercase">{feature1.heading}</Paragraph>
                <Heading className="capitalize mt-4">{feature1.title}</Heading>
                <Paragraph className="mt-4">{feature1.subtitle}</Paragraph>
                <Button className="w-[244.49px] mobile:h-[66.66px] h-[43.71px] mt-4">{feature1.button}</Button>
            </div>
        </div>
        <div className="flex mobile:flex-row flex-col items-center mt-12">
            <div className="flex flex-col w-[360px] mobile:w-[535px] ml-14 mobile:order-last order-first">
                <Paragraph size={'lg'} className="opacity-70 uppercase">{feature2.heading}</Paragraph>
                <Heading className="capitalize mt-4">{feature2.title}</Heading>
                <Paragraph className="mt-4">{feature2.subtitle}</Paragraph>
                <Button className="w-[290.94px] mobile:h-[70.04px] h-[47.54px] mt-4">{feature2.button}</Button>
            </div>
            <Image src={sectionbg2} alt="analytics" width={563} height={384} className="mobile:order-first order-last mobile:mt-0 mt-4"/>
        </div>
    </div>
  )
}

export default Features