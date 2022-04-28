import PhoneIcon from "./PhoneIcon";

export default function Footer() {
    return (
        <footer className="py-20">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap items-center justify-between -mx-4">
                    <div className="w-full px-4 lg:w-2/6">
                        <p className="hidden text-sm text-gray-500 lg:block">
                            <a
                                className="inline-block mb-6 text-lg font-semibold text-sky-700"
                                href="/"
                            >
                                Arizona Chaverim
                            </a>
                            <br />A project of{" "}
                            <a
                                href="https://ahavastorah.org/"
                                target="_blank"
                                className="border-b-2 border-yellow-500 border-solid hover:bg-yellow-500 hover:text-black"
                            >
                                Ahavas Torah Scottsdale
                            </a>
                            .
                            <br />
                            Designed and built by{" "}
                            <a
                                href="https://www.irasanchez.com"
                                target="_blank"
                                className="border-b-2 border-yellow-500 border-solid hover:bg-yellow-500 hover:text-black"
                            >
                                Ira Sanchez
                            </a>
                            .
                        </p>
                    </div>
                    <div className="w-full px-4 lg:w-4/6">
                        <div className="flex items-center">
                            <a
                                className="flex items-center w-full px-8 py-4 mr-4 text-sm font-medium transition duration-200 bg-transparent border border-solid rounded border-sky-900 md:w-auto md:mb-0 hover:bg-sky-900 hover:text-white justfy-center md:ml-auto"
                                href="https://www.ahavastorah.org/payment.php"
                                target="_blank"
                            >
                                Donate
                            </a>
                            <a
                                className="flex items-center justify-between w-full px-8 py-4 text-sm font-medium text-white bg-red-700 rounded md:w-1/3 lg:mr-0 hover:bg-red-600"
                                href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                            >
                                <div className="h-full mr-2 w-14">
                                    <PhoneIcon classes="fill-white" />
                                </div>
                                <span className="min-w-fit">
                                    Call for Assistance
                                </span>
                            </a>
                        </div>
                        <p className="mt-12 text-sm text-gray-500 lg:hidden">
                            <a
                                className="inline-block mb-6 text-lg font-semibold text-sky-700"
                                href="/"
                            >
                                Arizona Chaverim
                            </a>
                            <br />A project of{" "}
                            <a
                                href="https://ahavastorah.org/"
                                target="_blank"
                                className="border-b-2 border-yellow-500 border-solid hover:bg-yellow-500 hover:text-black"
                            >
                                Ahavas Torah Scottsdale
                            </a>
                            .
                            <br />
                            Designed and built by{" "}
                            <a
                                href="https://www.irasanchez.com"
                                target="_blank"
                                className="border-b-2 border-yellow-500 border-solid hover:bg-yellow-500 hover:text-black"
                            >
                                Ira Sanchez
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
