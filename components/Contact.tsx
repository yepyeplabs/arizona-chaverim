export default function Contact() {
    return (
        <section className="py-20">
            <div className="container px-4 ">
                <h2 className="mb-6 text-3xl font-semibold text-center lg:text-5xl">
                    Contact
                </h2>
                <div className="flex flex-wrap ">
                    <div className="w-full px-4 lg:w-1/2 lg:mx-auto">
                        <form action="#">
                            <div className="relative flex flex-wrap mb-6">
                                <input
                                    className="relative w-full py-4 pl-4 mb-2 text-sm border rounded md:mb-0"
                                    type="text"
                                    placeholder="Daniel"
                                />
                                <span className="absolute top-0 left-0 inline-block px-1 ml-4 -mt-2 text-xs text-gray-500 bg-white">
                                    Name
                                </span>
                            </div>
                            <div className="relative flex flex-wrap mb-6">
                                <input
                                    className="relative w-full py-4 pl-4 mb-2 text-sm border rounded md:mb-0"
                                    type="email"
                                    placeholder="e.g hello@shuffle.dev"
                                />
                                <span className="absolute top-0 left-0 inline-block px-1 ml-4 -mt-2 text-xs text-gray-500 bg-white">
                                    Your email address
                                </span>
                            </div>
                            <div className="relative flex flex-wrap mb-6">
                                <textarea
                                    className="relative w-full py-4 pl-4 mb-2 text-sm border rounded resize-none md:mb-0"
                                    id="1"
                                    cols={30}
                                    rows={10}
                                    placeholder="Message..."
                                    defaultValue={""}
                                />
                                <span className="absolute top-0 left-0 inline-block px-1 ml-4 -mt-2 text-xs text-gray-500 bg-white">
                                    Your message
                                </span>
                            </div>
                            <button className="inline-block w-full px-6 py-4 text-sm text-white transition duration-200 bg-sky-900 rounded hover:bg-sky-700">
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
