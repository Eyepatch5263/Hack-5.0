"use client"
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: '',
        subject: '',
    })
    const handleSubmit=()=>{

    }

    const handleChange=(e:any)=>{
        setFormData({...formData, [e.target.name]: e.target.value })
    }
    return (
        <div className="mt-32 relative">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Have questions about HACK 5.0? We're here to help! Reach out to us through any of the channels below.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Form */}
                <div className="bg-sepia-black/50 rounded-xl p-8 border border-tango/20">
                    <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                                    className="w-full bg-sepia-black/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tango border border-gray-700"
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
                                    className="w-full bg-sepia-black/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tango border border-gray-700"
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
                                className="w-full bg-sepia-black/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tango border border-gray-700"
                                required
                            >
                                <option value="">Select a subject</option>
                                <option value="general">General Inquiry</option>
                                <option value="sponsorship">Sponsorship</option>
                                <option value="registration">Registration</option>
                                <option value="technical">Technical Support</option>
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
                                className="w-full bg-sepia-black/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tango border border-gray-700"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-tango hover:bg-fire transition-colors px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Send Message</span>
                        </button>
                    </form>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                    <div className="bg-sepia-black/50 rounded-xl p-8 text-center border border-tango/20 hover:border-tango/40 transition-colors">
                        <Mail className="w-8 h-8 text-tango mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                        <p className="text-gray-400 mb-4">Questions? Drop us a line</p>
                        <a href="mailto:hack@csec.com" className="text-tango hover:text-fire transition-colors">
                            hack@csec.com
                        </a>
                    </div>

                    <div className="bg-sepia-black/50 rounded-xl p-8 text-center border border-tango/20 hover:border-tango/40 transition-colors">
                        <MapPin className="w-8 h-8 text-tango mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Location</h3>
                        <p className="text-gray-400 mb-4">Join us at the venue</p>
                        <span className="text-tango">University Campus, Tech Block</span>
                    </div>

                    <div className="bg-sepia-black/50 rounded-xl p-8 text-center border border-tango/20 hover:border-tango/40 transition-colors">
                        <Phone className="w-8 h-8 text-tango mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                        <p className="text-gray-400 mb-4">Mon-Fri, 9am-5pm</p>
                        <a href="tel:+1234567890" className="text-tango hover:text-fire transition-colors">
                            +1 (234) 567-890
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact
