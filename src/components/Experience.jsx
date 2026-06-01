import { Button } from "./Button"
import { Svg } from "./Svg"
import usfLogo from "/src/assets/images/usf_logo.webp"

export function Experience() {
    return (
        <div className="flex flex-col gap-3">
            <Tabs/>
            <section className="border-5 border-lk-3 rounded-xl w-full h-128 overflow-auto scrollbar-none">
                <ExperienceItem/>
                <ExperienceItem/>
                <ExperienceItem/>
                <ExperienceItem/>
            </section>
        </div>
    )
}

function Tabs() {
    return (
        <div className="flex w-full justify-around items-center px-1 border-7 border-lk-3 rounded-xl bg-lk-3">
            <Button variant="tabular">Work</Button>
            <Button variant="tabular">Education</Button>
            <Button variant="tabular">Projects</Button>
        </div>
    )
}

function ExperienceItem() {
    return (
        <div className="flex">
            <div className="flex flex-col m-3">
                <img className="mask-radial-at-center mask-radial-from-70% mask-radial-to-70% mask-circle min-w-14 w-14 bg-white" src={usfLogo}/>
                <div className="flex h-full">
                    <div className="border-r-2 border-lk-2 w-1/2 my-3"></div>
                    <div className="border-l-2 border-lk-2 w-1/2 my-3"></div>
                </div>
            </div>
            <div className="flex flex-col m-3">
                <h1 className="text-xl text-lk-6 font-DigitalDiscoRegular">Employer</h1>
                <h2 className="text-lg text-lk-6 font-DigitalDiscoThin">Position</h2>
                <ul className="list-disc">
                    <li className="text-base ml-3 text-lk-6 font-DigitalDiscoThin">Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.</li>
                    <li className="text-base ml-3 text-lk-6 font-DigitalDiscoThin">Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.</li>
                    <li className="text-base ml-3 text-lk-6 font-DigitalDiscoThin">Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.</li>
                </ul>
            </div>
        </div>
    )
}