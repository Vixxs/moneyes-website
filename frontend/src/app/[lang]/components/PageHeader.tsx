import { StaticImageData } from "next/image";
import Tag from "./Tag";

interface PageHeaderProps {
    heading: string,
    text?: string,
    tagIcon?: string | null | StaticImageData;
}

export default function PageHeader({ heading, text, tagIcon }: PageHeaderProps) {
    return (
        <div className="my-16 w-full flex flex-col justify-center items-center text-center text-white">
            {text && <Tag variant="dark" text={text} className=" font-bold" iconUrl={tagIcon} />}
            <h2 className="text-4xl my-4 font-bold font-heading">{heading}</h2>
            <p className="text-md dark:text-gray-400 max-w-[700px]">
                Moneyes a pour ambition de révolutionner la gestion financière personnelle en offrant des outils simples, intuitifs et puissants. Notre roadmap illustre notre engagement à
            </p>
        </div>
    );
}
