export default function AboutUs() {
    return (
        <div className="w-11/12 mx-auto mt-10 min-h-screen bg-white flex flex-col items-center px-6 py-16">
            {/* Header */}
            <div className="max-w-3xl text-center space-y-4">
                <h1 className="text-4xl font-bold text-green-700">About Us</h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                    We are dedicated to giving your pets the love, care, and attention they
                    deserve. Our mission is simple — making pet care stress-free, safe,
                    and full of joy.
                </p>
            </div>

            {/* Mission Section */}
            <div className="max-w-3xl mt-12 space-y-6 text-center">
                <h2 className="text-2xl font-semibold text-green-700">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                    At PetCare Hub, we believe every pet deserves the best. Whether it's a
                    daily dog walk, weekend sitting, or full grooming package — our team is
                    trained, trusted, and passionate about providing premium care.
                </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mt-14 w-full">
                {/* Card 1 */}
                <div className="p-6 rounded-2xl shadow border bg-white text-center space-y-2">
                    <h3 className="text-lg font-semibold text-green-700">Trusted Care</h3>
                    <p className="text-gray-600 text-sm">
                        Every service is handled with professionalism and compassion.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="p-6 rounded-2xl shadow border bg-white text-center space-y-2">
                    <h3 className="text-lg font-semibold text-green-700">Experienced Team</h3>
                    <p className="text-gray-600 text-sm">
                        Our caretakers are trained and certified for pet handling.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="p-6 rounded-2xl shadow border bg-white text-center space-y-2">
                    <h3 className="text-lg font-semibold text-green-700">Safe & Loving</h3>
                    <p className="text-gray-600 text-sm">
                        We ensure safety, comfort, and a loving environment for every pet.
                    </p>
                </div>
            </div>

            {/* Footer Note */}
            <div className="max-w-2xl mt-14 text-center text-gray-600">
                <p>
                    Thank you for trusting us with your furry friends. We are committed to
                    keeping them happy, healthy, and loved.
                </p>
            </div>
        </div>
    );
}
