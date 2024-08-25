"use client"
import React, { useState, useTransition } from "react"
import Image from "next/image"
import Tabbutton from "./tabbutton"
import { title } from "process"


const Aboutsection = () => {
    const TAB_DATA = [
        {
            title: "Skills",
            id: "skills",
            content: (
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-lg font-medium"></h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Market research and competitive analysis</li>
                            <li>Content creation and copy writing..</li>
                            <li>Marketing automation tools (HubSpot, Apollo)</li>
                            <li>Digital marketing strategy and execution</li>
                            <li>SEO/SEM optimization</li>
                            <li>Social media marketing and management</li>
                        </ul>
                    </div>

                </div>
            ),
        },
        {
            title: "Education",
            id: "education",
            content: (
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Education</h3>
                    <div className="space-y-2">
                        <h4 className="text-lg font-medium"> Electronics and communication engineering </h4>
                        <p className="text-base">Major: Information Technology</p>
                        <p className="text-base">Institution: Nandha Engineering College</p>
                        <p className="text-base">Graduated: 2024</p>
                    </div>
                </div>
            ),

        }, {
            title: "Experience",
            id: "experience",
            content: (
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Intern, Zauto</h3>
                    <p className="text-base">February – July(Present)</p>
                    <p className="text-base">
                        Played a key role in pivoting product strategy from conversational AI to a full-fledged marketing
                        automation platform
                        • Conducted extensive market research and competitor analysis to inform product development
                        and marketing strategies
                        • Created compelling content for product messaging, website copy, and marketing collateral
                    </p>
                </div>
            ),
        }





    ]

    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState('skills');

    function handlechange(id: string) {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className=" text-white bg-black">
            <div className="md:grid md:grid-cols-2 gap-8  items-center py-8  px-4  xl:gap-16 sm:py-16 ">
                <Image src="/images/about-image.png" alt="about" width={500} height={500} />
                <div className="mt-8 sm:py-2 md:mt-0  text-left  flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white ">About Me</h2>
                    <p className=" text-base lg:text-lg mt-1">Experienced Product Marketer with a proven track record in driving product growth and brand awareness. Skilled in market research, competitive analysis, and crafting compelling go-to-market strategies. Passionate about understanding customer needs and translating them into successful product launches and sustained market engagement. Adept at cross-functional collaboration and leveraging data-driven insights to optimize product positioning and messaging.. </p>
                    <div className="flex flex-row mt-8 space-x-4">
                        <Tabbutton selectTab={() => handlechange("skills")} active={tab === "skills"} >Skills</Tabbutton>

                        <Tabbutton selectTab={() => handlechange("education")} active={tab === "education"} >Education</Tabbutton>


                        <Tabbutton selectTab={() => handlechange("experience")} active={tab === "experience"} >Experience</Tabbutton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>


                </div>
            </div>
        </section >

    )
}
export default Aboutsection