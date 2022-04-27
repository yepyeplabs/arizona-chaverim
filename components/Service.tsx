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
        <div className="flex items-center justify-between w-full p-4 border border-sky-900 rounded-lg lg:w-1/6 md:w-1/2">
            <div className="w-1/2">
                <span
                    className={`flex items-center justify-center ${color} rounded-full w-14 h-14 mr-2`}
                >
                    {icon}
                </span>
            </div>
            <h3 className="text-2xl font-semibold ">{title}</h3>
        </div>
    );
}
