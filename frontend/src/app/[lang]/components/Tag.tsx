
interface Tag {
    className?: string;
    text: string;
    iconUrl: string | null;
    variant?: 'dark' | 'light';
}

const getTagColor = (variant: Tag['variant']) => {
    return variant === 'dark' ? 'bg-white text-primary bg-opacity-10 text-white border-white border-opacity-20' : 'bg-[#F7F1FF] text-primary border-opacity-20 border-primary';
}


export default function Tag({ className, text, iconUrl, variant = 'light' }: Tag) {
    return (
        <p className={`flex flex-row items-center justify-center gap-1  text-md w-fit rounded-full py-2 px-4 border ${getTagColor(variant)} ${className}`}>
            <img src={iconUrl || ""} alt={text} className="w-5 inline-block mr-2" />
            {text}
        </p>
    );
}
