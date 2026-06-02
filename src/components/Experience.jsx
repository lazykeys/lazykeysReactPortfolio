import { Button } from "./Button";
import { Svg } from "./Svg";
import { Image } from "./Image";
import logo from "/src/assets/images/experience_icons/lionheartstudiosllc_logo.webp";
import { RadioButton } from "./RadioButton";
import { RadioButtonGroup } from "./RadioButtonGroup";
import experiences from "../assets/data/experiences.json"


export function Experience() {

    let radioButtons = [
        { id: 1, value: "Work", active: true, data: experiences.work },
        { id: 2, value: "Education", active: false, data: experiences.education },
        { id: 3, value: "Projects", active: false, data: experiences.projects }
    ];

    function setActiveRadioButton({ id }) {
        const idButton = radioButtons.filter(radioButton => radioButton.id === id);
        if (idButton.active) return;

        idButton.active = true;

        const otherButtons = radioButtons.filter(radioButton => radioButton.id !== id);
        otherButtons.forEach(button => button.active = false);
    }
    
    const activeRadioButton = radioButtons.filter(radioButton => radioButton.active)[0];
    
    return (
        <div className="flex flex-col gap-3">
            <RadioButtonGroup>
                {radioButtons.map(radioButton => (
                    <RadioButton 
                        key={radioButton.id} 
                        id={radioButton.id} 
                        group="tabs"
                        value={radioButton.value}
                        active={radioButton.active}
                        data={radioButton.data}
                        setActiveRadioButton={setActiveRadioButton}
                    >
                        {radioButton.value}
                    </RadioButton>
                ))}
            </RadioButtonGroup>
            <section className="border-5 border-lk-3 rounded-xl w-full h-fit">
                {activeRadioButton.data.map(data => (
                    <ExperienceItem 
                        key={data.id}
                        icon={data.icon}
                        header={data.employer}
                        subheader={data.position}
                        startDate={data.startDate}
                        endDate={data.endDate}
                        notes={data.notes}
                    />
                ))}
            </section>
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
                <div className="flex justify-between items-center">
                    <h2 className="text-lg text-lk-6 font-DigitalDiscoThin">{subheader}</h2>
                    <div className="flex w-fit justify-between gap-1">
                        <h3 className="text-md text-lk-6 font-DigitalDiscoThin text-nowrap">{startDate}</h3>
                        <h3 className="text-md text-lk-6 font-DigitalDiscoThin">-</h3>
                        <h3 className="text-md text-lk-6 font-DigitalDiscoThin text-nowrap">{endDate}</h3>
                    </div>
                </div>
                <ul className="list-disc">
                    {notes.map((note, index) => (
                        <li key={index} className="text-base ml-3 text-lk-6 font-DigitalDiscoThin">{note}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}