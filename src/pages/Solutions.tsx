import { UI_CONSTANTS } from '../constants/colors'

export default function Solutions() {
  return (
    <div className="pt-16">
      <section style={{ backgroundColor: UI_CONSTANTS.DARK }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 style={{ color: UI_CONSTANTS.WHITE }} className="text-5xl font-bold mb-6">
            Solutions for every stage of growth
          </h1>
          <p style={{ color: UI_CONSTANTS.WHITE }} className="text-xl opacity-90 max-w-3xl mx-auto">
            From startups to enterprises, we have the right talent solution for your business needs.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: UI_CONSTANTS.WHITE }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 style={{ color: UI_CONSTANTS.DARK }} className="text-4xl font-bold mb-6">
                Staff Augmentation
              </h2>
              <p style={{ color: UI_CONSTANTS.DARK }} className="text-lg opacity-70 mb-8">
                Scale your existing team with vetted engineers who integrate seamlessly with your workflows and culture.
              </p>
              <button 
                style={{ backgroundColor: UI_CONSTANTS.PRIMARY, color: UI_CONSTANTS.WHITE }}
                className="px-8 py-3 rounded-full font-semibold hover:opacity-90"
              >
                Learn More
              </button>
            </div>
            <div style={{ backgroundColor: UI_CONSTANTS.PRIMARY }} className="h-64 rounded-2xl"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div style={{ backgroundColor: UI_CONSTANTS.DARK }} className="h-64 rounded-2xl"></div>
            <div>
              <h2 style={{ color: UI_CONSTANTS.DARK }} className="text-4xl font-bold mb-6">
                Dedicated Teams
              </h2>
              <p style={{ color: UI_CONSTANTS.DARK }} className="text-lg opacity-70 mb-8">
                Build complete product teams with designers, engineers, and product managers working exclusively on your projects.
              </p>
              <button 
                style={{ backgroundColor: UI_CONSTANTS.PRIMARY, color: UI_CONSTANTS.WHITE }}
                className="px-8 py-3 rounded-full font-semibold hover:opacity-90"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 style={{ color: UI_CONSTANTS.DARK }} className="text-4xl font-bold mb-6">
                Project-Based
              </h2>
              <p style={{ color: UI_CONSTANTS.DARK }} className="text-lg opacity-70 mb-8">
                Complete specific projects with our expert teams who deliver on time and within budget.
              </p>
              <button 
                style={{ backgroundColor: UI_CONSTANTS.PRIMARY, color: UI_CONSTANTS.WHITE }}
                className="px-8 py-3 rounded-full font-semibold hover:opacity-90"
              >
                Learn More
              </button>
            </div>
            <div style={{ backgroundColor: UI_CONSTANTS.PRIMARY }} className="h-64 rounded-2xl"></div>
          </div>
        </div>
      </section>
    </div>
  )
}