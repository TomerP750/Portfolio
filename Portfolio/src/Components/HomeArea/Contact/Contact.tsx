import "./Contact.css";
import {JSX} from "react";
import {MailIcon, PhoneIcon} from "lucide-react";

export function Contact(): JSX.Element {
    return (
        <section className="bg-[#0f172a] py-16 px-4">
            <div className="max-w-4xl mx-auto text-white">
                <h2 className="text-4xl font-bold text-center text-[#10b981] mb-8">
                    Get in Touch
                </h2>
                <div className="flex flex-col md:flex-row md:space-x-12">

                    <div className="flex flex-col space-y-6 md:w-1/3">
                        <div className="flex items-center space-x-3">
                            <PhoneIcon className="w-6 h-6 text-[#10b981]" />
                            <span>1234567890</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <MailIcon className="w-6 h-6 text-[#10b981]" />
                            <span>mail</span>
                        </div>
                    </div>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="mt-8 md:mt-0 flex flex-col gap-6 md:w-full"
                    >
                        <div className="flex flex-col">
                            <label htmlFor="name" className="mb-2 font-medium">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                className="bg-transparent border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#10b981] transition duration-300"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-2 font-medium">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="bg-transparent border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#10b981] transition duration-300"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="message" className="mb-2 font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                placeholder="Enter a message"
                                className="bg-transparent border border-gray-600 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#10b981] transition duration-300"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="cursor-pointer self-start bg-[#10b981] hover:bg-[#0eab72] transition duration-300 ease-in text-white font-medium py-3 px-8 rounded-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );

}
