export default function TalentExperience() {
    
    return (
        <div className="min-h-screen pt-20 px-6 bg-white" style={{ fontFamily: 'Arial, sans-serif' }}>
            <div className="max-w-5xl mx-auto py-16">     
                <h1 className="text-5xl font-bold mb-6 text-[#011123]">
                    Talent Experience
                </h1>
                <p className="text-xl mb-10 text-gray-600">
                    Discover the unique experiences and opportunities we offer to our talent community.
                </p>
                <div className="p-10 rounded-2xl shadow-md bg-gray-50">
                    <h2 className="text-2xl font-semibold mb-4 text-[#011123]">
                        Our Commitment to Talent
                    </h2>
                    <p className="text-lg text-gray-600">

                        At KIAQ, we prioritize the growth and satisfaction of our talent. We provide a supportive environment, continuous learning opportunities, and access to exciting projects that align with your skills and career goals.
                    </p>
                    <button
                        className="mt-8 py-3 px-8 rounded-xl font-semibold transition-all bg-[#ff4600] text-white"
                        style={{ fontFamily: 'Arial, sans-serif' }}
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}