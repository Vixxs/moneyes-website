export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center">{children}</div>
    )
}
