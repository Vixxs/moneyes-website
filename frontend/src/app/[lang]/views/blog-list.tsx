import Image from "next/image";
import Link from "next/link";
import { formatDate, getStrapiMedia } from "../utils/api-helpers";

interface Article {
    id: number;
    attributes: {
        title: string;
        description: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        cover: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
        category: {
            data: {
                attributes: {
                    name: string;
                    slug: string;
                };
            };
        };
        authorsBio: {
            data: {
                attributes: {
                    name: string;
                    avatar: {
                        data: {
                            attributes: {
                                url: string;
                            };
                        };
                    };
                };
            };
        };
    };
}

export default function PostList({
    data: articles,
    children,
}: {
    data: Article[];
    children?: React.ReactNode;
}) {
    return (
        <section className="container mx-auto space-y-6 sm:space-y-12">
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-white">
                {articles.map((article) => {
                    const imageUrl = getStrapiMedia(
                        article.attributes.cover.data?.attributes.url
                    );

                    const category = article.attributes.category.data?.attributes;
                    const authorsBio = article.attributes.authorsBio.data?.attributes;

                    const avatarUrl = getStrapiMedia(
                        authorsBio?.avatar?.data?.attributes?.url
                    );

                    return (
                        <Link
                            href={`/blog/${category?.slug}/${article.attributes.slug}`}
                            key={article.id}
                            className="max-w-sm w-full mx-auto group hover:no-underline focus:no-underline lg:w-[300px] xl:min-w-[375px] rounded-2xl overflow-hidden shadow-lg bg-[#31213C] border border-opacity-10 border-white hover:border-opacity-30 hover:shadow-xl transition-all duration-200 hover:bg-gradient-to-b from-[#31213C] to-[#3D2C4D]"
                        >
                            <div className=" overflow-clip">
                                {imageUrl && (
                                    <Image
                                        alt="presentation"
                                        width="240"
                                        height="240"
                                        className="object-cover w-full h-44 group-hover:scale-105 transition-transform duration-200"
                                        src={imageUrl}
                                    />
                                )}
                            </div>
                            <div className="p-6 space-y-6 relative">
                                <div className="flex flex-col gap-2">
                                    {avatarUrl && (
                                        <Image
                                            alt="avatar"
                                            width="80"
                                            height="80"
                                            src={avatarUrl}
                                            className="rounded-full h-16 w-16 object-cover absolute -top-8 right-4"
                                        />
                                    )}
                                    <h3 className="text-2xl font-semibold">
                                        {article.attributes.title}
                                    </h3>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-gray-400">
                                            {formatDate(article.attributes.publishedAt)}
                                        </span>
                                        {authorsBio && (
                                            <span className="text-xs text-gray-400">
                                                {authorsBio.name}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <p className=" text-sm">{article.attributes.description}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
            {children && children}
        </section>
    );
}
