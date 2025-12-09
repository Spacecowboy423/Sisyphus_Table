import { useState } from "react"

const Testimonial = () => {

    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Martin escobar",
            title: "Founder of meta",
            quote: "Our table arrived on 11/11 and I can’t stop enjoying it! It is relaxing, and amazingly incredible and so much better in person than watching it on the internet. My husband had no idea I helped with this and now he wants one for his office. This Kinetic Art Table – Sisyphus, is ROCKIN COOL !!! Love Love Love it! Thank you Bruce for thinking outside of the box!"
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Angela stian",
            title: "Product designer",
            quote: "My end table arrived yesterday unexpectedly, and was a pleasant surprise. Setup was simple and everything worked perfectly. I echo other comments on how amazing it is. You have to see it in person to truly appreciate it. The precision of the movements that creates layers in the designs, and how the designs come together is what truly makes it special."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Karim ahmed",
            title: "DevOp engineer",
            quote: "Our table arrived yesterday and it is absolutely incredible. Everything was packaged carefully and setup was easy but we needed to level the table thanks to our slightly slanted floor. Using the iOS app Sisyphus joined our wifi network the first time without any issues and we found the table responds very quickly to commands (pause/play, change LED brightness, etc). I look forward to future improvements to the app and ways to easily create and add custom designs."
        },
    ]

    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-indigo-600 font-semibold pb-6">What people are saying</h3>
                    <ul>
                        {
                            testimonials.map((item, idx) => (
                                currentTestimonial == idx ? (
                                    <li key={idx}>
                                        <figure>
                                            <blockquote>
                                                <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                                                    “{item.quote}“
                                                </p>
                                            </blockquote>
                                            <div className="mt-6">
                                                <img src={item.avatar} className="w-16 h-16 mx-auto rounded-full" />
                                                <div className="mt-3">
                                                    <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                    <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ) : ""
                            ))
                        }
                    </ul>
                </div>
                <div className="mt-6">
                    <ul className="flex gap-x-3 justify-center">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx}>
                                    <button className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${currentTestimonial == idx ? "bg-indigo-600" : "bg-gray-300"}`}
                                        onClick={() => setCurrentTestimonial(idx)}
                                    ></button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;