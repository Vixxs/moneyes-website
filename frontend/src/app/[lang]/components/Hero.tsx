import Link from "next/link";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";
import HighlightedText from "./HighlightedText";

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
        title: string;
        description: string;
        picture: Picture;
        buttons: Button[];
    };
}

export default function Hero({ data }: HeroProps) {
    const imgUrl = getStrapiMedia(data.picture.data.attributes.url);
    return (
        <>
            <svg className="-z-10 absolute top-0 right-0 left-0 min-h-[840px]" viewBox="0 0 2000 842" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 841.5L2000 550.851V0H0V841.5Z" fill="url(#paint0_radial_397_1329)" />
                <defs>
                    <radialGradient id="paint0_radial_397_1329" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1467.36 461) rotate(-178.247) scale(1242.25 884.138)">
                        <stop stop-color="#4A30DD" />
                        <stop offset="1" stop-color="#1A0826" />
                    </radialGradient>
                </defs>
            </svg>
            <section className="text-white">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-26 lg:flex-row lg:justify-between max-w-[1200px]">
                    <div className="flex flex-col justify-center p-6 text-center rounded-lg lg:max-w-md xl:max-w-lg lg:text-left">
                        <HighlightedText
                            text={data.title}
                            tag="h1"
                            className="text-2xl font-bold !leading-[1.3] sm:text-5xl mb-8"
                            color="dark:text-violet-400"
                        />

                        <HighlightedText
                            text={data.description}
                            tag="p"
                            className="tmt-6 mb-8 text-md sm:mb-12"
                            color="dark:text-violet-400"
                        />
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            {data.buttons.map((button: Button, index: number) => (
                                <Link
                                    key={index}
                                    href={button.url}
                                    target={button.newTab ? "_blank" : "_self"}
                                    className={renderButtonStyle(button.type)}
                                >
                                    {button.text}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <img
                        src={imgUrl || ""}
                        alt={
                            data.picture.data.attributes.alternativeText || "none provided"
                        }
                        width={271}
                    />
                </div>
            </section>
        </>
    );
}
