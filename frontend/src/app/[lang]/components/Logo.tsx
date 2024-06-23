import Link from "next/link";

export default function Logo({
    src,
    children,
}: {
    src: string | null;
    children?: React.ReactNode;
}) {
    return (
        <Link
            href="/"
            aria-label="Back to homepage"
            className="flex items-center p-2"
        >
            {src && <img src={src} width={180} alt="logo" />}
            <div className="ml-2">{children}</div>
        </Link>
    );
}
