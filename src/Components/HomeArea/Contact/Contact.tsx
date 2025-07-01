import "./Contact.css";
import {JSX, useState} from "react";
import {MailIcon} from "lucide-react";
import {SiLinkedin} from "react-icons/si";
import connectImage from "../../../assets/connectImage.png";
import {CgSpinner} from "react-icons/cg";
import {useForm} from "react-hook-form";
import {ContactMessage} from "../../../Models/ContactMessage.ts";
import contactService from "../../../Services/ContactService.ts";
import {toast} from "react-toastify";

export function Contact(): JSX.Element {

    const [loading, setLoading] = useState<boolean>(false);

    const {register, handleSubmit, formState: {errors}, reset} = useForm<ContactMessage>();

    const sendData = (data: ContactMessage) => {
        setLoading(true);
        // contactService.sendMessage(data)
        //     .then(() => {
        //         toast.success("Message Sent Successfully, Thank you!");
        //         reset();
        //     })
        //     .catch(err => {
        //         toast.error(err.response.data);
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     })
    }

    return (
        <section className="bg-[#0f172a] bg-gradient-to-b from-[#0f172a] to-[#0b1a3a] py-16 px-4">
            <div className="max-w-4xl mx-auto text-white">
                <div className="w-full flex justify-center">
                    <img src={connectImage} alt={"connect"}
                         className="w-100 aspect-square text-center text-[#10b981] mb-16 md:mb-8"/>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-12">

                    <div className="flex flex-col items-center md:items-center space-y-6 md:w-full">
                        {/*<div className="flex items-center space-x-3">*/}
                        {/*    <PhoneIcon className="w-6 h-6 text-[#10b981]" />*/}
                        {/*    <span>1234567890</span>*/}
                        {/*</div>*/}
                        <div className="flex items-center space-x-3">
                            <MailIcon className="w-6 h-6 text-white"/>
                            <span>tomer.jcb65@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <SiLinkedin className="w-6 h-6 text-[#0077B5]"/>
                            <span>/TomerJacob</span>
                        </div>

                    </div>

                    <form
                        onSubmit={handleSubmit(sendData)}
                        className="mt-8 md:mt-0 flex flex-col gap-6 md:w-full"
                    >
                        <div className="flex flex-col">
                            <label htmlFor="name" className="self-center md:self-start mb-2 font-medium">
                                Name*
                            </label>
                            <input
                                id="name"
                                type="text"
                                {...register("name")}
                                placeholder="Your Name"
                                className="bg-transparent border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#10b981] transition duration-300"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="self-center md:self-start mb-2 font-medium">
                                Email*
                            </label>
                            <input
                                id="email"
                                type="email"
                                {...register("email")}
                                placeholder="you@example.com"
                                className="bg-transparent border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#10b981] transition duration-300"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="message" className="self-center md:self-start mb-2 font-medium">
                                Message*
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                placeholder="Enter a message"
                                {...register("message")}
                                className="bg-transparent border border-gray-600 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#10b981] transition duration-300"
                                required
                            />
                        </div>
                        <button
                            disabled={loading}
                            type="submit"
                            className="w-45 cursor-pointer self-center md:self-start bg-[#10b981] hover:bg-[#0eab72] transition duration-300 ease-in text-white font-medium py-3 px-8 rounded-lg"
                        >
                            {loading ?
                                <div className="flex items-center gap-2">
                                    <CgSpinner className={"w-6 h-6 animate-spin"}/>
                                    <span>Processing..</span>
                                </div>
                                : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );

}
