import { getStrapiMedia } from "../utils/api-helpers";
import { Picture } from "../utils/model";
import Tag from "./Tag";

interface FeaturesProps {
    data: {
        tag: string;
        tagIcon: Picture;
        heading: string;
        description: string;
        feature: Feature[];
    };
}

interface Feature {
    id: string;
    title: string;
    description: string;
    media: Picture;
    reverse: boolean;
}

function Feature({ title, description, media, reverse }: Feature) {
    const mediaUrl = getStrapiMedia(media.data.attributes.url);
    return (
        <div className={`flex flex-col lg:flex-row justify-center max-lg:items-center ${reverse ? "" : "lg:flex-row-reverse"}`}>
            <div className={`flex gap-3 flex-col justify-center max-lg:rounded-t-[15px] max-w-[400px] bg-dark-purple text-white items-start py-8 px-11 ${reverse ? "lg:rounded-l-[15px]" : "lg:rounded-r-[15px]"}`}>
                <h3 className="text-2xl font-semibold max-w-[200px]">{title}</h3>
                <div className="text-md font-thin">
                    <p>{description}</p>
                </div>
            </div>
            <img src={mediaUrl || ""} alt={title} className={`max-w-full h-auto object-cover flex gap-3 flex-col max-lg:rounded-b-[15px] bg-primary text-white items-start  ${reverse ? "lg:rounded-r-[15px]" : "lg:rounded-l-[15px]"}`}>
            </img>
        </div>
    );
}

export default function Features({ data }: FeaturesProps) {
    const tagIconUrl = getStrapiMedia(data.tagIcon.data.attributes.url);
    return (
        <>
            <section className="bg-white text text-dark-purple p-6 m:py-12 lg:py-24 relative z-20">
                <div className="flex flex-col items-center justify-center gap-6 text-center mb-24">
                    <Tag text={data.tag} iconUrl={tagIconUrl} />
                    <h2 className="text-3xl font-bold">{data.heading}</h2>
                    <p className="text-md dark:text-gray-400 max-w-[700px]">{data.description}</p>
                </div>

                <div className="flex flex-col my-6 justify-center gap-32">
                    {data.feature.map((feature: Feature, index: number) => (
                        <Feature key={index} {...feature} reverse={index % 2 === 0} />
                    ))}
                </div>
            </section >
        </>
    );
}
