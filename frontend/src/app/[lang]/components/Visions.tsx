import Link from "next/link";
import { Picture } from "../utils/model";

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
    showLink: boolean;
    newTab: boolean;
    url: string;
    text: string;
}

function Vision({ name, description, showLink, newTab, url, text }: Vision) {
    return (
        <div className="flex flex-col items-center p-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 dark:text-violet-400"
            >
                <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">{name}</h3>
            <div className="space-y-1 leading-tight my-6">
                <p>{description}</p>
            </div>
            {showLink && url && text && (
                <div>
                    <Link
                        href={url}
                        target={newTab ? "_blank" : "_self"}
                        className="inline-block px-4 py-2 mt-4 text-sm font-semibold text-white transition duration-200 ease-in-out bg-violet-500 rounded-lg hover:bg-violet-600"
                    >
                        {text}
                    </Link>
                </div>
            )}
        </div>
    );
}

export default function Visions({ data }: VisionsProps) {
    return (
        <section className="text text-dark-purple m:py-12 lg:py-24">
            <div className="flex flex-col items-center justify-center gap-3 text-center mb-24">
                <p className="border-primary border text-md w-fit rounded-full py-2 px-3 bg-[#F7F1FF] text-primary border-opacity-20">
                    {/* <img src={tagIconUrl || ""} alt={data.tag} className="w-6 h-6 inline-block mr-2" /> */}
                    {data.tag}
                </p>
                <h2 className="text-3xl font-bold">{data.heading}</h2>
                <p className="text-md dark:text-gray-400 max-w-[700px]">{data.description}</p>
            </div>

            <div className="flex flex-col my-6 justify-center gap-32">
                {/* {data.feature.map((feature: Feature, index: number) => (
                    <Feature key={index} {...feature} />
                ))} */}
            </div>
        </section >
    );
}
