export default function Contact() {
    return (
        <div className="w-11/12 mx-auto mt-10 min-h-screen bg-white flex flex-col items-center px-6 py-16">
            {/* Header */}
            <div className="max-w-3xl text-center space-y-4">
                <h1 className="text-4xl font-bold text-green-700">Contact Us</h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Have questions or need help booking a service? We’d love to hear from you!
                    Our team is always here to assist you and your furry friends.
                </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mt-14 w-full">
                {/* Phone */}
                <div className="p-6 rounded-2xl shadow border border-black/10 bg-white text-center space-y-2 hover:-translate-y-1.5 duration-300 ease-in-out">
                    <h3 className="text-lg font-semibold text-green-700">Phone</h3>
                    <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                </div>

                {/* Email */}
                <div className="p-6 rounded-2xl shadow border border-black/10 bg-white text-center space-y-2 hover:-translate-y-1.5 duration-300 ease-in-out">
                    <h3 className="text-lg font-semibold text-green-700">Email</h3>
                    <p className="text-gray-600 text-sm">support@petcarehub.com</p>
                </div>

                {/* Location */}
                <div className="p-6 rounded-2xl shadow border border-black/10 bg-white text-center space-y-2 hover:-translate-y-1.5 duration-300 ease-in-out">
                    <h3 className="text-lg font-semibold text-green-700">Location</h3>
                    <p className="text-gray-600 text-sm">123 Pet Street, Animal City</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl bg-white shadow-md border border-black/10 rounded-2xl p-8 mt-16 w-full">
                <h2 className="text-2xl font-semibold text-green-700 text-center mb-6">Send Us a Message</h2>

                <form className="space-y-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full rounded-xl"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full rounded-xl"
                    />

                    <textarea
                        placeholder="Your Message"
                        className="textarea textarea-bordered w-full rounded-xl h-32"
                    ></textarea>

                    <button className="btn bg-green-700 hover:bg-green-500 text-white rounded-xl w-full">
                        Send Message
                    </button>
                </form>
            </div>

            {/* Footer Note */}
            <div className="max-w-2xl mt-14 text-center text-gray-600">
                <p>We usually respond within 24 hours. Thank you for reaching out!</p>
            </div>
        </div>
    );
}
