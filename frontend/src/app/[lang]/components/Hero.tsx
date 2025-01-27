import Link from "next/link";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";
import HighlightedText from "./HighlightedText";
import Tag from "./Tag";

interface Button {
    id: string;
    url: string;
    text: string;
    type: string;
    newTab: boolean;
}

interface Picture {
    data: {
        id: string;
        attributes: {
            url: string;
            name: string;
            alternativeText: string;
        };
    };
}

interface HeroProps {
    data: {
        id: string;
        tagIcon: Picture;
        tag: string;
        title: string;
        description: string;
        picture: Picture;
        buttons: Button[];
    };
}

export default function Hero({ data }: HeroProps) {
    const imgUrl = getStrapiMedia(data.picture?.data?.attributes?.url);
    const tagIconUrl = getStrapiMedia(data.tagIcon?.data?.attributes?.url);
    return (
        <>
            <section className="relative text-white min-h-[calc(100vh-96px)] flex justify-center max-lg:overflow-clip overflow-x-clip">
                <div className="absolute min-h-[calc(100vh)] top-0 bottom-0 w-[200vw] lg:w-screen -z-10 mt-40 lg:-mt-[96px] lg:ml-[50%] animate-pulse duration-0" style={
                    {
                        background: "radial-gradient(circle, rgba(74,48,221,1) 1%, rgba(255,255,255,0) 60%)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }
                }></div>
                <div className="flex w-full flex-col items-center justify-center p-6 mx-auto sm:py-10 lg:py-26 lg:flex-row lg:justify-between max-w-[1200px]">

                    <div className="flex flex-col justify-center items-center lg:items-start sm:p-6 text-center rounded-lg lg:max-w-md xl:max-w-lg lg:text-left">
                        <Tag className="mb-6" text={data.tag} iconUrl={tagIconUrl} variant="dark" />
                        <HighlightedText
                            text={data.title}
                            tag="h1"
                            className="text-3xl font-bold !leading-[1.3] sm:text-5xl mb-6"
                            color="dark:text-violet-400"
                        />

                        <HighlightedText
                            text={data.description}
                            tag="p"
                            className="tmt-6 mb-6 text-md sm:mb-12"
                            color="dark:text-violet-400"
                        />
                        <div className="flex justify-center gap-3 mb-6">
                            {data.buttons.map((button: Button, index: number) => (
                                <Link
                                    key={index}
                                    href={button.url}
                                    target={button.newTab ? "_blank" : "_self"}
                                    className={`flex justify-center items-center font-semibold ${renderButtonStyle(button.type)}`}
                                >
                                    {button.text}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <img
                        className="-mb-[200px] lg:mb-0"
                        src={imgUrl || ""}
                        alt={
                            data.picture.data?.attributes?.alternativeText || "none provided"
                        }
                        width={271}
                    />
                </div>
            </section >
        </>
    );
}
