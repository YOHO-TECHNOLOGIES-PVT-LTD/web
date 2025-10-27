import { UI_CONSTANTS } from '../constants/colors'

export default function Talent() {
  const skills = [
    'React', 'Node.js', 'Python', 'Java', 'TypeScript', 'AWS', 'Docker', 'Kubernetes',
    'GraphQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Microservices', 'DevOps'
  ]

  return (
    <div className="pt-16">
      <section style={{ backgroundColor: UI_CONSTANTS.DARK }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 style={{ color: UI_CONSTANTS.WHITE }} className="text-5xl font-bold mb-6">
            World-class talent from Africa
          </h1>
          <p style={{ color: UI_CONSTANTS.WHITE }} className="text-xl opacity-90 max-w-3xl mx-auto">
            Access vetted software engineers, designers, and product managers with proven track records.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: UI_CONSTANTS.WHITE }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 style={{ color: UI_CONSTANTS.DARK }} className="text-4xl font-bold mb-6">
              Top skills in demand
            </h2>
            <p style={{ color: UI_CONSTANTS.DARK }} className="text-lg opacity-70">
              Our talent pool covers the latest technologies and frameworks
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {skills.map((skill, index) => (
              <span 
                key={index}
                style={{ 
                  backgroundColor: UI_CONSTANTS.PRIMARY,
                  color: UI_CONSTANTS.WHITE 
                }}
                className="px-6 py-3 rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center p-8 rounded-2xl shadow-lg">
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-200 rounded-full"></div>
                <h3 style={{ color: UI_CONSTANTS.DARK }} className="text-xl font-bold mb-4">
                  Senior Software Engineer
                </h3>
                <p style={{ color: UI_CONSTANTS.DARK }} className="opacity-70 mb-6">
                  5+ years experience in full-stack development with React and Node.js
                </p>
                <button 
                  style={{ 
                    border: `2px solid ${UI_CONSTANTS.PRIMARY}`,
                    color: UI_CONSTANTS.PRIMARY 
                  }}
                  className="px-6 py-2 rounded-full font-semibold hover:bg-orange-50"
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}