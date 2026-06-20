import { Image } from "./Image";

export function ExperienceHeader ({ header, subheader, startDate, endDate}) {
    return (
        <div>
            <h1 className="text-xl text-lk-6 font-DigitalDiscoRegular">{header}</h1>
            <div className="flex flex-col justify-between">
                <h2 className="text-lg text-lk-6 font-DigitalDiscoThin">{subheader}</h2>
                <div className="flex w-fit justify-between gap-1">
                    <h3 className="text-md text-lk-6 font-DigitalDiscoThin text-nowrap">{startDate}</h3>
                    <h3 className="text-md text-lk-6 font-DigitalDiscoThin">-</h3>
                    <h3 className="text-md text-lk-6 font-DigitalDiscoThin text-nowrap">{endDate}</h3>
                </div>
            </div>
        </div>
    );
}

export function ExperienceItem({ data }) {
    return (
        <div className="flex h-fit">
            <IconBorder image={data.image}/>
            <div className="flex flex-col m-3 w-full">
                <ExperienceHeader 
                    header={data.header} 
                    subheader={data.subheader} 
                    startDate={data.startDate} 
                    endDate={data.endDate}
                />
                <ul className="list-disc">
                    {data.notes.map((note, index) => (
                        <li key={index} className="text-base ml-3 text-lk-6 font-DigitalDiscoThin">{note}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export function IconBorder ({ image }) {
    return (
        <div className="flex flex-col m-3">
            <Image variant="icon" src={image}/>
            <div className="flex h-full">
                <div className="border-r-2 border-lk-2 w-1/2 mb-2"></div>
                <div className="border-l-2 border-lk-2 w-1/2 mb-2"></div>
            </div>
        </div>
    )
}