import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Email = {
    name: string;
    email: string;
    message: string;
};
const schema = yup
    .object({
        name: yup.string().required(),
        email: yup.string().email("Please use a valid email.").required(),
        message: yup.string().required(),
    })
    .required();

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Email>({ resolver: yupResolver(schema) });

    const onSubmit = async (formData: any, e: any) => {
        try {
            let response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <section className="py-20" id="contact">
            <div className="container px-4 ">
                <h2 className="mb-6 text-3xl font-semibold text-center lg:text-5xl">
                    Contact
                </h2>
                <div className="flex flex-wrap ">
                    <div className="w-full px-4 lg:w-1/2 lg:mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="relative flex flex-wrap mb-6">
                                <input
                                    {...register("name", { required: true })}
                                    className={`relative w-full py-4 pl-4 mb-2 text-sm border rounded md:mb-0  ${
                                        errors.name ? "border-red-500 " : ""
                                    }`}
                                    type="text"
                                    placeholder="Your Name"
                                />
                                <span
                                    className={`absolute top-0 left-0 inline-block px-1 ml-4 -mt-2 text-xs ${
                                        errors.name
                                            ? "text-red-500"
                                            : "text-gray-500"
                                    } bg-white`}
                                >
                                    {errors.name ? errors.name.message : "Name"}
                                </span>
                            </div>
                            <div className="relative flex flex-wrap mb-6">
                                <input
                                    {...register("email", { required: true })}
                                    className={`relative w-full py-4 pl-4 mb-2 text-sm border rounded md:mb-0  ${
                                        errors.name ? "border-red-500 " : ""
                                    }`}
                                    type="email"
                                    placeholder="name@email.com"
                                />
                                <span
                                    className={`absolute top-0 left-0 inline-block px-1 ml-4 -mt-2 text-xs ${
                                        errors.email
                                            ? "text-red-500"
                                            : "text-gray-500"
                                    } bg-white`}
                                >
                                    {errors.email
                                        ? errors.email.message
                                        : "Email"}
                                </span>
                            </div>
                            <div className="relative flex flex-wrap mb-6">
                                <textarea
                                    {...register("message", { required: true })}
                                    className={`relative w-full py-4 pl-4 mb-2 text-sm border rounded md:mb-0  ${
                                        errors.message ? "border-red-500 " : ""
                                    }`}
                                    id="1"
                                    cols={30}
                                    rows={10}
                                    placeholder="Message..."
                                    defaultValue={""}
                                />
                                <span
                                    className={`absolute top-0 left-0 inline-block px-1 ml-4 -mt-2 text-xs  bg-white ${
                                        errors.message
                                            ? "text-red-500"
                                            : "text-gray-500"
                                    } bg-white"`}
                                >
                                    {errors.message
                                        ? errors.message.message
                                        : "Message"}
                                </span>
                            </div>
                            <button className="inline-block w-full px-6 py-4 text-sm text-white transition duration-200 rounded bg-sky-900 hover:bg-sky-700">
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
