import getConfig from "next/config";

import Layout from "@/components/Layout";
import Contact from "@/components/Contact";
import Footer from "../components/Footer";
import Service from "../components/Service";
import KeyIcon from "@/components/KeyIcon";
import FlatTireIcon from "@/components/FlatTireIcon";
import FuelGaugeIcon from "@/components/FuelGaugeIcon";
import EllipsisIcon from "@/components/EllipsisIcon";
import BatteryIcon from "@/components/BatteryIcon";
import { Toaster } from "react-hot-toast";
import PhoneIcon from "@/components/PhoneIcon";
const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
    return (
        <Layout>
            <>
                <Toaster position="top-right" />

                <section className="relative">
                    <div className="container relative flex flex-col items-center px-4 mx-auto mb-20 text-center">
                        <div className="w-1/2 p-8 mx-auto lg:w-1/4 ">
                            <img
                                className="mx-auto"
                                src="https://images.shulcloud.com/68/_preview/e6f6e04174b3cfc53308e9ec296a59c79d133749.png"
                                alt="Arizona Chaverim Emergency Services"
                            />
                        </div>
                        <div className="w-full">
                            <h1 className="mt-8 mb-8 text-4xl font-semibold text-sky-900 lg:mb-12 lg:text-6xl">
                                Friends you can count on.
                            </h1>
                            <p className="max-w-3xl mx-auto mb-8 text-xl opacity-50 lg:mb-12">
                                We are a volunteer services organization powered
                                by a dedicated team of altruistic volunteers.
                                Dispatchers and service members stand by 24/6 to
                                help take care of the needs of our community.
                                <br />
                                <br />
                                <strong>
                                    We are there for all your non-medical
                                    emergency needs.
                                </strong>
                            </p>
                            <div className="flex justify-center w-full mx-auto">
                                <a
                                    className="relative z-10 flex items-center px-8 py-4 mb-2 mr-4 text-sm font-medium leading-normal transition duration-200 bg-transparent border border-solid rounded border-sky-900 md:w-auto md:mb-0 hover:bg-sky-900 hover:text-white justfy-center"
                                    href="https://www.ahavastorah.org/payment.php"
                                    target="_blank"
                                >
                                    Donate
                                </a>
                                <a
                                    className="relative z-10 flex items-center justify-between px-8 py-4 mb-2 mr-4 text-sm font-medium leading-normal text-white transition duration-200 bg-red-700 rounded shadow-2xl md:w-auto md:mb-0 hover:bg-red-600 hover:shadow-lg"
                                    href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                                >
                                    <div className="w-1/5">
                                        <PhoneIcon classes="fill-white" />
                                    </div>
                                    <span className="w-3/4">
                                        {" "}
                                        Call for Assistance
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="px-4 mx-auto ">
                    <div className="flex flex-wrap justify-around px-20">
                        <Service
                            color="border-4 border-solid border-yellow-500"
                            icon={<KeyIcon />}
                            title="Lock Outs"
                        />
                        <Service
                            color="border-4 border-solid border-sky-600"
                            icon={<FlatTireIcon />}
                            title="Flat Tires"
                        />
                        <Service
                            color="border-4 border-solid border-orange-500"
                            icon={<FuelGaugeIcon />}
                            title="Low Fuel"
                        />
                        <Service
                            color="border-4 border-solid border-green-500"
                            icon={<BatteryIcon />}
                            title="Jump Starts"
                        />
                        <Service
                            color="border-4 border-solid border-yellow-500"
                            icon={<EllipsisIcon />}
                            title="And more!"
                        />
                    </div>
                </div>
                <Contact />
                <Footer />
            </>
        </Layout>
    );
};

export default Home;
