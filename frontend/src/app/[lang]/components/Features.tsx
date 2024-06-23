import { Picture } from "../utils/model";

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
}

function Feature({ title, description }: Feature) {
    return (
        <div className="flex flex-row justify-center items-center">
            <div className=" flex gap-3 flex-col max-w-[400px] bg-dark-purple text-white items-start py-8 px-11 rounded-l-[15px]">
                <h3 className="text-2xl font-semibold max-w-[100px]">{title}</h3>
                <div className="text-md font-thin">
                    <p>{description}</p>
                </div>
            </div>
            <div className=" flex gap-3 flex-col max-w-[400px] bg-primary text-white items-start py-8 px-11 rounded-r-[15px]">
                <h3 className="text-2xl font-semibold max-w-[100px]">{title}</h3>
                <div className="text-md font-thin">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default function Features({ data }: FeaturesProps) {
    return (
        <>
            <section className="bg-white text text-dark-purple m:py-12 lg:py-24 relative z-20">
                <div className="flex flex-col items-center justify-center gap-3 text-center mb-24">
                    <p className="border-primary border text-md w-fit rounded-full py-2 px-3 bg-[#F7F1FF] text-primary border-opacity-20">
                        {/* <img src={tagIconUrl || ""} alt={data.tag} className="w-6 h-6 inline-block mr-2" /> */}
                        {data.tag}
                    </p>
                    <h2 className="text-3xl font-bold">{data.heading}</h2>
                    <p className="text-md dark:text-gray-400 max-w-[700px]">{data.description}</p>
                </div>

                <div className="flex flex-col my-6 justify-center gap-32">
                    {data.feature.map((feature: Feature, index: number) => (
                        <Feature key={index} {...feature} />
                    ))}
                </div>
            </section >
        </>
    );
}
