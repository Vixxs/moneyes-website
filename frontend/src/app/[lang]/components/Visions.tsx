import { getStrapiMedia } from "../utils/api-helpers";
import { Picture } from "../utils/model";
import Tag from "./Tag";

interface VisionsProps {
    data: {
        tag: string;
        tagIcon: Picture;
        heading: string;
        description: string;
        vision: Vision[];
    };
}

interface Vision {
    id: string;
    name: string;
    description: string;
    icon: Picture;
}

function Vision({ name, description, icon }: Vision) {
    const iconUrl = getStrapiMedia(icon.data.attributes.url);
    return (
        <div className="text-center flex flex-col items-center p-4 ">
            <img src={iconUrl || ""} alt={name} className="w-10 h-10" />
            <h3 className="my-3 text-lg font-bold">{name}</h3>
            <div className="text-md dark:text-gray-400 leading-tight">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function Visions({ data }: VisionsProps) {
    const tagIconUrl = getStrapiMedia(data.tagIcon.data.attributes.url);
    return (
        <section className="mt-24 flex justify-center items-center flex-col relative -z-20 bg-white text text-dark-purple px-6 py-24">
            <div className="flex flex-col items-center justify-center gap-6 text-center">
                <Tag text={data.tag} iconUrl={tagIconUrl} />
                <h2 className="text-3xl font-bold">{data.heading}</h2>
                <p className="text-md dark:text-gray-400 max-w-[700px]">{data.description}</p>
            </div>

            <div className="max-w-[1200px] flex flex-col lg:flex-row my-6 justify-center  gap-10 lg:gap-32">
                {data.vision.map((vision: Vision, index: number) => (
                    <Vision key={index} {...vision} />
                ))}
            </div>
        </section >
    );
}
