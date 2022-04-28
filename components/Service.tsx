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
        <div className="flex flex-col items-center justify-between w-1/3 p-4 m-2 md:w-1/4 lg:w-1/6">
            <div className="flex items-center justify-center w-14 h-14">
                <div
                    className={`flex items-center justify-center ${color} rounded-full w-14 h-14  `}
                >
                    {icon}
                </div>
            </div>
            <h3 className="mt-2 text-lg font-semibold ">{title}</h3>
        </div>
    );
}
