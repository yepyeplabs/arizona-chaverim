export default function Service({
    color,
    icon,
    title,
}: {
    color: string;
    icon: JSX.Element;
    title: string;
}) {
    return (
        <div className="flex flex-col items-center justify-between w-full p-4 m-2 lg:w-1/6 md:w-1/2">
            <div className="w-1/2">
                <span
                    className={`flex items-center justify-center ${color} rounded-full w-14 h-14  `}
                >
                    {icon}
                </span>
            </div>
            <h3 className="mt-2 text-lg font-semibold ">{title}</h3>
        </div>
    );
}
