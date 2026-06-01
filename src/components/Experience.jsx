import { Button } from "./Button";
import { Svg } from "./Svg";
import { Image } from "./Image";
import experiences from "../assets/data/experiences.json"
import logo from "/src/assets/images/experience_icons/lionheartstudiosllc_logo.webp";

export function Experience() {
    return (
        <div className="flex flex-col gap-3">
            <Tabs/>
            <section className="border-5 border-lk-3 rounded-xl w-full h-fit">
                {experiences.work.map(experience => (
                    <ExperienceItem 
                        key={experience.id}
                        icon={experience.icon}
                        header={experience.employer}
                        subheader={experience.position}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        notes={experience.notes}
                    />
                ))}
            </section>
        </div>
    )
}

function Tabs() {
    return (
        <div className="flex w-full justify-around items-center border-7 border-lk-3 p-0.5 rounded-xl bg-lk-3">
            <Button variant="tabular">Work</Button>
            <Button variant="tabular">Education</Button>
            <Button variant="tabular">Projects</Button>
        </div>
    )
}

function ExperienceItem({ icon, header, subheader, startDate, endDate, notes }) {
    return (
        <div className="flex">
            <div className="flex flex-col m-3">
                <Image variant="icon" src={icon}/>
                <div className="flex h-full">
                    <div className="border-r-2 border-lk-2 w-1/2 mb-2"></div>
                    <div className="border-l-2 border-lk-2 w-1/2 mb-2"></div>
                </div>
            </div>
            <div className="flex flex-col m-3 w-full">
                <h1 className="text-xl text-lk-6 font-DigitalDiscoRegular">{header}</h1>
                <div className="flex justify-between">
                    <h2 className="text-lg text-lk-6 font-DigitalDiscoThin">{subheader}</h2>
                    <div className="flex w-fit justify-between items-center gap-1">
                        <h3 className="text-md text-lk-6 font-DigitalDiscoThin">{startDate}</h3>
                        <h3 className="text-md text-lk-6 font-DigitalDiscoThin">-</h3>
                        <h3 className="text-md text-lk-6 font-DigitalDiscoThin">{endDate}</h3>
                    </div>
                </div>
                <ul className="list-disc">
                    {notes.map(note => (
                        <li className="text-base ml-3 text-lk-6 font-DigitalDiscoThin">{note}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}