import { getStrapiMedia } from "../utils/api-helpers";
import { Picture } from "../utils/model";
import Tag from "./Tag";

interface RoadmapsProps {
    data: {
        tag: string;
        tagIcon: Picture;
        title: string;
        description: string;
        roadmap: Roadmap[];
    };
}

interface Roadmap {
    id: string;
    title: string;
    description: string;
    date: string;
    current: boolean | null;
    side: 'left' | 'right';
    colored: boolean;
}

function Roadmap({ title, description, date, side, colored, current }: Roadmap) {
    return (
        <div className={`last:py-0 relative flex flex-row justify-between gap-8 items-center w-full ${side === 'left' ? "flex-row-reverse lg:pb-[150px] lg:pr-10" : "lg:pt-[150px] lg:pl-10"}`}>
            <div className="border rounded-[15px] bg-[#31213C] border-white border-opacity-20 flex flex-col gap-2 items-start p-6 ">
                <div className="flex flex-row justify-between w-full">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="text-md dark:text-gray-400">{date}</p>
                </div>
                <div className="text-md dark:text-gray-400">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default function Roadmaps({ data }: RoadmapsProps) {
    const tagIconUrl = getStrapiMedia(data.tagIcon.data.attributes.url);
    const roadmap = data.roadmap;
    const currentRoadmapIndex = roadmap.findIndex((roadmap) => roadmap.current);

    return (
        <section className="text-white mt-24 flex justify-center items-center flex-col relative bg-dark-purple px-6 py-24">
            <div className="flex flex-col items-center justify-center gap-6 text-center">
                <Tag text={data.tag} iconUrl={tagIconUrl} variant="dark" />
                <h2 className="text-3xl font-bold">{data.title}</h2>
                <p className="text-md dark:text-gray-400 max-w-[700px]">{data.description}</p>
            </div>
            <div className="relative my-12">
                <div className="z-0 absolute h-full w-[1px] rounded-full bg-white bg-opacity-20 left-1/2 top-0 transform -translate-x-1/2" />
                <div className="relative z-10 gap-24 lg:gap-0 max-w-[1200px] my-10 justify-center grid grid-cols-1 lg:grid-cols-2">
                    {data.roadmap.map((roadmap: Roadmap, index: number) => (
                        <Roadmap key={index} {...roadmap} side={index % 2 === 0 ? 'left' : 'right'} colored={index <= currentRoadmapIndex} />
                    ))}
                </div>
            </div>
        </section >
    );
}
