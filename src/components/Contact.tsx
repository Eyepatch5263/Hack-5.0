"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        subject: "",
    });

    const form = useRef<HTMLFormElement>(null)

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_td08y99', 'template_l4lxqnr', form.current, {publicKey:"3CF_8jifTQV-loMu_"})
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            (e.currentTarget as HTMLFormElement);
        }
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendEmail(e);
        console.log("Form submitted", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className=" pt-16 pb-16 bg-[#19171B]">


            <div className="text-center pb-16">
                <h2 className="text-4xl font-bold text-[#E63946]">Get in Touch</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mt-2">
                    Have questions about HACK 5.0? We're here to help! Reach out to us through any of the channels below.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Form */}
                <div className="bg-[#2B0307]/50 backdrop-blur-md border border-[#75020F]/50 shadow-lg rounded-xl p-10">
                    <h3 className="text-2xl text-gray-200 font-semibold mb-6">Send us a Message</h3>
                    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-[#19171B] text-white rounded-lg px-4 py-2 border border-gray-700 focus:ring-2 focus:ring-[#E63946] transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full text-white bg-[#19171B] rounded-lg px-4 py-2 border border-gray-700 focus:ring-2 focus:ring-[#E63946] transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                                Subject
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full bg-[#19171B] text-white rounded-lg px-4 py-2 border border-gray-700 focus:ring-2 focus:ring-[#E63946] transition-all"
                                required
                            >
                                <option className="text-white" value="">Select a subject</option>
                                <option className="text-white" value="general">General Inquiry</option>
                                <option className="text-white" value="sponsorship">Sponsorship</option>
                                <option className="text-white" value="registration">Registration</option>
                                <option className="text-white" value="technical">Technical Support</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full bg-[#19171B] text-white rounded-lg px-4 py-2 border border-gray-700 focus:ring-2 focus:ring-[#E63946] transition-all"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#E63946] text-white hover:bg-[#75020F] transition-all px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Send Message</span>
                        </button>
                    </form>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                    {[
                        { Icon: Mail, title: "Email Us", text: "Questions? Drop us a line", link: "mailto:hack.csec.nith25@gmail.com", linkText: "hack.csec.nith25@gmail.com" },
                        { Icon: MapPin, title: "Location", text: "Join us at the venue", link: "https://www.google.co.in/maps/place/National+Institute+of+Technology,+Hamirpur/@31.7091849,76.5245713,17z/data=!4m10!1m2!2m1!1sNIT+Hamirpur!3m6!1s0x3904d5487e12c4a1:0x395f92d3a202a7d0!8m2!3d31.7084291!4d76.5273526!15sCgxOSVQgSGFtaXJwdXKSAQNpdXTgAQA!16zL20vMGNybnJ4?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D", linkText: "NIT Hamirpur" },
                        { Icon: Phone, title: "Call Us", text: "Mon-Fri, 9am-5pm", links: [
                            { link: "tel:+916267531322", linkText: "+91 6267 531 322" },
                            { link: "tel:+917023326128", linkText: "+91 70233 26128" },
                            { link: "tel:+919767592787", linkText: "+91 97675 92787" }
                        ] }
                    ].map(({ Icon, title, text, link, linkText, links }, index) => (
                        <div
                            key={index}
                            className="bg-[#2B0307]/50 backdrop-blur-md border border-[#75020F]/50 shadow-lg rounded-xl p-8 text-center transition-all hover:scale-105"
                        >
                            <Icon className="w-8 h-8 text-[#E63946] mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-200">{title}</h3>
                            <p className="text-gray-200 mb-4">{text}</p>
                            {link ? (
                                <a href={link} className="text-gray-200 hover:text-[#E63946] transition-all">
                                    {linkText}
                                </a>
                            ) : links ? (
                                <div className="space-x-5 flex justify-center items-center ">
                                    {links.map(({ link, linkText }, idx) => (
                                        <a key={idx} href={link} className="block text-gray-200 hover:text-[#E63946] transition-all">
                                            {linkText}
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <span className="text-gray-200">{linkText}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;
