import { getStrapiMedia, getStrapiURL } from "../utils/api-helpers";
import { Picture } from "../utils/model";
import Tag from "./Tag";

interface ArticlesProps {
    data: {
        tag: string;
        tagIcon: Picture;
        title: string;
        description: string;
        articles: {
            data: {
                attributes: Article;
            }[]
        };
    };
}

interface Article {
    title: string;
    description: string;
    slug: string;
    cover: Picture;
    category: {
        data: {
            attributes: {
                name: string;
            }

        }
    }
}

function Article({ title, description, cover, slug, category }: Article) {
    const coverUrl = getStrapiMedia(cover?.data?.attributes?.url) || '';
    const arrowUrl = getStrapiMedia(getStrapiURL("/uploads/arrow_forward_4f3543627e.png")) || '';
    const categoryName = category.data.attributes.name;
    return (
        <a href={`/blog/${categoryName}/${slug}`}
            className="cursor-pointer relative flex text-white flex-col justify-between min-w-[475px] w-[475px] h-[300px] rounded-[15px] bg-dark-purple p-8">
            <div></div>
            <div className="flex flex-row justify-between items-center z-10">
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p className="text-md">{description}</p>
                </div>
                <img src={arrowUrl} alt="arrow" className="w-6 h-6" />
            </div>
            <img src={coverUrl} alt="cover" className="shadow-inner  absolute z-0 top-0 right-0 bottom-0 left-0 w-full h-full object-cover rounded-[15px]" />
        </a>
    );
}

export default function Articles({ data }: ArticlesProps) {
    const tagIconUrl = getStrapiMedia(data.tagIcon?.data?.attributes?.url);
    return (
        <>
            <section className="bg-white text text-dark-purple m:py-12 lg:py-24 relative z-20">
                <div className="flex flex-col items-center justify-center gap-6 text-center mb-24">
                    <Tag text={data.tag} iconUrl={tagIconUrl} />
                    <h2 className="text-3xl font-bold">{data.title}</h2>
                    <p className="text-md dark:text-gray-400 max-w-[700px]">{data.description}</p>
                </div>

                <div className="flex flex-row pl-10 my-6 gap-10 overflow-x-hidden">
                    {data.articles.data.map((article, index: number) =>
                    (
                        <Article key={index} {...article.attributes} />
                    ))}
                </div>
            </section >
        </>
    );
}
