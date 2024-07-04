"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import Logo from "./Logo";

interface FooterLink {
    id: number;
    url: string;
    newTab: boolean;
    text: string;
    social?: string;
}

interface CategoryLink {
    id: string;
    attributes: {
        name: string;
        slug: string;
    };
}

function FooterLink({ url, text }: FooterLink) {
    const path = usePathname();
    return (
        <li className="flex">
            <Link
                href={url}
                className={`text-gray-300 hover:text-gray-200 text-sm font-light ${path === url && "text-gray-400 border-gray-400"
                    }}`}
            >
                {text}
            </Link>
        </li>
    );
}

function CategoryLink({ attributes }: CategoryLink) {
    return (
        <li className="flex">
            <Link
                href={`/blog/${attributes.slug}`}
                className="text-gray-300 hover:text-gray-200 font-light"
            >
                {attributes.name}
            </Link>
        </li>
    );
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
    switch (social) {
        case "WEBSITE":
            return <CgWebsite />;
        case "TWITTER":
            return <AiFillTwitterCircle />;
        case "YOUTUBE":
            return <AiFillYoutube />;
        case "DISCORD":
            return <FaDiscord />;
        default:
            return null;
    }
}

export default function Footer({
    logoUrl,
    logoText,
    menuLinks,
    categoryLinks,
    legalLinks,
    socialLinks,
}: {
    logoUrl: string | null;
    logoText: string | null;
    menuLinks: Array<FooterLink>;
    categoryLinks: Array<CategoryLink>;
    legalLinks: Array<FooterLink>;
    socialLinks: Array<FooterLink>;
}) {

    return (
        <footer className="py-6 bg-dark-purple text-white">
            <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="flex flex-row justify-between items-center lg:flex-col gap-6 pb-6 md:pb-0">
                        <Logo src={logoUrl}>
                            {logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
                        </Logo>
                        <div className="flex justify-center lg:justify-start space-x-4 lg:pt-0">
                            {socialLinks.map((link: FooterLink) => {
                                return (
                                    <a
                                        key={link.id}
                                        rel="noopener noreferrer"
                                        href={link.url}
                                        title={link.text}
                                        target={link.newTab ? "_blank" : "_self"}
                                        className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-dark-purple hover:bg-gray-100 hover:text-dark-purple"
                                    >
                                        <RenderSocialIcon social={link.social} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex flex-wrap items-start flex-row justify-between gap-x-24 gap-y-4">
                        <div className="text-left p-2">
                            <p className="pb-3 text-md font-medium">Legal</p>
                            <ul className="flex flex-col gap-1">
                                {legalLinks.map((link: FooterLink) => (
                                    <li className="flex">
                                        <Link
                                            href={link.url}
                                            className=" text-sm font-light text-gray-300 hover:text-gray-200 mr-2"
                                            key={link.id}
                                        >
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="text-center md:text-left p-2">
                            <p className="pb-3 text-md font-medium">Categories</p>
                            <ul className="flex flex-col gap-1">
                                {categoryLinks.map((link: CategoryLink) => (
                                    <CategoryLink key={link.id} {...link} />
                                ))}
                            </ul>
                        </div>

                        <div className="text-center md:text-left p-2">
                            <p className="pb-3 text-md font-medium">Menu</p>
                            <ul className="flex flex-col gap-1">
                                {menuLinks.map((link: FooterLink) => (
                                    <FooterLink key={link.id} {...link} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-sm pt-6">
                    <span className="mr-2">
                        ©{new Date().getFullYear()} Moneyes All rights reserved
                    </span>
                </div>
            </div>
        </footer>
    );
}
