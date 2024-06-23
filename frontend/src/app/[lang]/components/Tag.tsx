
interface Tag {
    text: string;
    iconUrl: string | null;
}

export default function Tag({ text, iconUrl }: Tag) {
    return (
        <p className=" flex flex-row items-center gap-1 border-primary border text-md w-fit rounded-full py-2 px-3 bg-[#F7F1FF] text-primary border-opacity-20">
            <img src={iconUrl || ""} alt={text} className="w-6  inline-block mr-2" />
            {text}
        </p>
    );
}
