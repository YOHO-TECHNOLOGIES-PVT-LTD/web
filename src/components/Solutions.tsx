import { UI_CONSTANTS } from '../constants/colors';

export default function Solutions() {
  const solutions = [
    {
      title: 'Staff Augmentation',
      description: 'Scale your team with vetted engineers who integrate seamlessly with your existing workflows.',
      icon: '👥'
    },
    {
      title: 'Dedicated Teams',
      description: 'Build dedicated product teams with the exact skills you need to bring your vision to life.',
      icon: '🚀'
    },
    {
      title: 'Project-Based',
      description: 'Complete specific projects with our expert teams who deliver on time and within budget.',
      icon: '📋'
    }
  ];

  return (
    <section style={{ backgroundColor: UI_CONSTANTS.WHITE }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 style={{ color: UI_CONSTANTS.DARK }} className="text-4xl lg:text-5xl font-bold mb-6">
            Solutions that scale with you
          </h2>
          <p style={{ color: UI_CONSTANTS.DARK }} className="text-xl opacity-70 max-w-3xl mx-auto">
            Whether you need to augment your team or build from scratch, we have the right solution for your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-6">{solution.icon}</div>
              <h3 style={{ color: UI_CONSTANTS.DARK }} className="text-2xl font-bold mb-4">
                {solution.title}
              </h3>
              <p style={{ color: UI_CONSTANTS.DARK }} className="opacity-70 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}