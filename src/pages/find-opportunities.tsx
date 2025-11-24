import { UI_CONSTANTS } from "../constants/colors";

export default function FindOpportunities() {
    return (
        <div 
            className="min-h-screen pt-20 px-6"
            style={{ backgroundColor: UI_CONSTANTS.WHITE, fontFamily: UI_CONSTANTS.FONT_FAMILY }}
        >
            <div className="max-w-5xl mx-auto py-16">

                <h1 
                    className="text-5xl font-bold mb-6"
                    style={{ color: UI_CONSTANTS.DARK }}
                >
                    Find Opportunities
                </h1>

                <p 
                    className="text-xl mb-10"
                    style={{ color: '#6b7280' }}
                >
                    Explore various opportunities available to you. Stay tuned for updates!
                </p>

                <div 
                    className="p-10 rounded-2xl shadow-md"
                    style={{ backgroundColor: "#f9fafb" }}
                >
                    <h2 
                        className="text-2xl font-semibold mb-4"
                        style={{ color: UI_CONSTANTS.DARK }}
                    >
                        Coming Soon
                    </h2>

                    <p 
                        className="text-lg"
                        style={{ color: '#6b7280' }}
                    >
                        We are working on bringing you the best opportunities. Check back soon for updates!
                    </p>

                    <button
                        className="mt-8 py-3 px-8 rounded-xl font-semibold transition-all"
                        style={{
                            backgroundColor: UI_CONSTANTS.PRIMARY,
                            color: UI_CONSTANTS.WHITE,
                            fontFamily: UI_CONSTANTS.FONT_FAMILY
                        }}
                    >
                        Notify Me
                    </button>
                </div>
            </div>
        </div>
    );
}
