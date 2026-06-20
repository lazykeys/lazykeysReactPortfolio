import { Image } from "./Image";

export function ProjectItem({ data }) {
    return (
        <div className="flex flex-col w-fit mx-3 mt-3">
            <a href={data.link}>
                <ThumbnailBorder image={data.image}/>
            </a>
            <div className="flex m-3 mt-0 h-full border-l-5 border-lk-2 pl-4 pt-4">
                <div className="flex-col w-full justify-center items-center">
                    <ProjectHeader
                        header={data.header} 
                        subheader={data.subheader}
                        year={data.year}
                        link={data.link}
                    />
                    <ul className="list-disc">
                        {data.notes.map((note, index) => (
                            <li key={index} className="text-base ml-3 text-lk-6 font-DigitalDiscoThin">{note}</li>
                        ))}
                    </ul>
                    <div className="flex gap-2 mt-2">
                        {data.tags.map((tag, index) => (
                            <span 
                                key={index} 
                                className="text-base text-lk-6 font-DigitalDiscoRegular border-2 border-lk-3 bg-lk-3 rounded-md px-1 text-center"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProjectHeader ({ header, subheader, year, link }) {
    return (
        <div>
            <h1>
                <a className="text-xl text-lk-6 font-DigitalDiscoRegular hover:underline" href={link}>{header}</a>
            </h1>
            <div className="flex flex-col justify-between">
                <h2 className="text-lg text-lk-6 font-DigitalDiscoThin">{subheader}</h2>
                <h3 className="text-md text-lk-6 font-DigitalDiscoThin">{year}</h3>
            </div>
        </div>
    );
}


function ThumbnailBorder({ image }) {
    return (
        <div className="flex flex-col m-3 mb-0">
            <Image variant="thumbnail" src={image}/>
        </div>
    )
}