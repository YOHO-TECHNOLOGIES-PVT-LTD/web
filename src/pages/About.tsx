import { UI_CONSTANTS } from '../constants/colors'

export default function About() {
  return (
    <div className="pt-16">
      <section style={{ backgroundColor: UI_CONSTANTS.DARK }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 style={{ color: UI_CONSTANTS.WHITE }} className="text-5xl font-bold mb-6">
            Connecting Global Innovation with African Excellence
          </h1>
          <p style={{ color: UI_CONSTANTS.WHITE }} className="text-xl opacity-90 max-w-3xl mx-auto">
            KIAQ bridges the gap between global companies seeking top-tier tech talent and Africa's most skilled DevOps engineers, data scientists, and AI specialists.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: UI_CONSTANTS.WHITE }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 style={{ color: UI_CONSTANTS.DARK }} className="text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p style={{ color: UI_CONSTANTS.DARK }} className="text-lg opacity-70 mb-6">
                To unlock Africa's vast technology potential by connecting the continent's most skilled professionals with global opportunities in DevOps, Data Science, and AI.
              </p>
              <p style={{ color: UI_CONSTANTS.DARK }} className="text-lg opacity-70">
                We believe Africa is home to exceptional tech talent that can drive innovation worldwide. KIAQ creates the bridge that connects this talent with companies ready to embrace global collaboration.
              </p>
            </div>
            <div style={{ backgroundColor: UI_CONSTANTS.PRIMARY }} className="h-80 rounded-2xl"></div>
          </div>

          <div className="text-center mb-16">
            <h2 style={{ color: UI_CONSTANTS.DARK }} className="text-4xl font-bold mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8">
                <div style={{ color: UI_CONSTANTS.PRIMARY }} className="text-5xl mb-4">🎯</div>
                <h3 style={{ color: UI_CONSTANTS.DARK }} className="text-xl font-bold mb-4">Excellence</h3>
                <p style={{ color: UI_CONSTANTS.DARK }} className="opacity-70">
                  We maintain the highest standards in everything we do
                </p>
              </div>
              <div className="p-8">
                <div style={{ color: UI_CONSTANTS.PRIMARY }} className="text-5xl mb-4">🤝</div>
                <h3 style={{ color: UI_CONSTANTS.DARK }} className="text-xl font-bold mb-4">Collaboration</h3>
                <p style={{ color: UI_CONSTANTS.DARK }} className="opacity-70">
                  We believe in the power of working together
                </p>
              </div>
              <div className="p-8">
                <div style={{ color: UI_CONSTANTS.PRIMARY }} className="text-5xl mb-4">🚀</div>
                <h3 style={{ color: UI_CONSTANTS.DARK }} className="text-xl font-bold mb-4">Innovation</h3>
                <p style={{ color: UI_CONSTANTS.DARK }} className="opacity-70">
                  We continuously push boundaries and embrace change
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}