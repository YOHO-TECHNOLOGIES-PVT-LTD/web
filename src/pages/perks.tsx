export default function Perks() {
    
    return (    
        <div className="min-h-screen pt-20 px-6 bg-white" style={{ fontFamily: 'Arial, sans-serif' }}>
            <div className="max-w-5xl mx-auto py-16">     
                <h1 className="text-5xl font-bold mb-6 text-[#011123]">
                    Perks
                </h1>
                <p className="text-xl mb-10 text-gray-600">
                    Explore the exclusive perks and benefits available to our community members.
                </p>
                <div className="p-10 rounded-2xl shadow-md bg-gray-50">
                    <h2 className="text-2xl font-semibold mb-4 text-[#011123]">
                        Access Exclusive Benefits
                    </h2>
                    <p className="text-lg text-gray-600">
                        As a member of KIAQ, you gain access to a variety of perks designed to enhance your experience. Enjoy discounts on partner services, early access to events, and exclusive content tailored to your interests.
                    </p>
                    <button
                        className="mt-8 py-3 px-8 rounded-xl font-semibold transition-all bg-[#ff4600] text-white"
                        style={{ fontFamily: 'Arial, sans-serif' }}
                    >
                        Explore Perks
                    </button>
                </div>
            </div>
        </div>
    );
}