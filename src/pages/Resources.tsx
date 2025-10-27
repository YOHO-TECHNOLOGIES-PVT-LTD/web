import { UI_CONSTANTS } from '../constants/colors'

export default function Resources() {
  const articles = [
    {
      title: 'The Future of Remote Work in Africa',
      excerpt: 'How African talent is reshaping the global tech landscape',
      date: 'Dec 15, 2024',
      category: 'Insights'
    },
    {
      title: 'Building High-Performance Remote Teams',
      excerpt: 'Best practices for managing distributed engineering teams',
      date: 'Dec 10, 2024',
      category: 'Guide'
    },
    {
      title: 'Scaling Your Startup with Global Talent',
      excerpt: 'How to leverage international talent for rapid growth',
      date: 'Dec 5, 2024',
      category: 'Case Study'
    }
  ]

  return (
    <div className="pt-16">
      <section style={{ backgroundColor: UI_CONSTANTS.DARK }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 style={{ color: UI_CONSTANTS.WHITE }} className="text-5xl font-bold mb-6">
            Resources & Insights
          </h1>
          <p style={{ color: UI_CONSTANTS.WHITE }} className="text-xl opacity-90 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in global talent management.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: UI_CONSTANTS.WHITE }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-2xl shadow-lg">
              <div style={{ color: UI_CONSTANTS.PRIMARY }} className="text-4xl mb-4">📚</div>
              <h3 style={{ color: UI_CONSTANTS.DARK }} className="text-xl font-bold mb-4">Blog</h3>
              <p style={{ color: UI_CONSTANTS.DARK }} className="opacity-70">
                Industry insights and thought leadership
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl shadow-lg">
              <div style={{ color: UI_CONSTANTS.PRIMARY }} className="text-4xl mb-4">📊</div>
              <h3 style={{ color: UI_CONSTANTS.DARK }} className="text-xl font-bold mb-4">Case Studies</h3>
              <p style={{ color: UI_CONSTANTS.DARK }} className="opacity-70">
                Real success stories from our clients
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl shadow-lg">
              <div style={{ color: UI_CONSTANTS.PRIMARY }} className="text-4xl mb-4">🎯</div>
              <h3 style={{ color: UI_CONSTANTS.DARK }} className="text-xl font-bold mb-4">Guides</h3>
              <p style={{ color: UI_CONSTANTS.DARK }} className="opacity-70">
                Practical guides for hiring and scaling
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 style={{ color: UI_CONSTANTS.DARK }} className="text-3xl font-bold mb-8">Latest Articles</h2>
            <div className="space-y-8">
              {articles.map((article, index) => (
                <div key={index} className="border-b border-gray-200 pb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span 
                      style={{ 
                        backgroundColor: UI_CONSTANTS.PRIMARY,
                        color: UI_CONSTANTS.WHITE 
                      }}
                      className="px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {article.category}
                    </span>
                    <span style={{ color: UI_CONSTANTS.DARK }} className="opacity-60 text-sm">
                      {article.date}
                    </span>
                  </div>
                  <h3 style={{ color: UI_CONSTANTS.DARK }} className="text-2xl font-bold mb-3">
                    {article.title}
                  </h3>
                  <p style={{ color: UI_CONSTANTS.DARK }} className="opacity-70 mb-4">
                    {article.excerpt}
                  </p>
                  <button 
                    style={{ color: UI_CONSTANTS.PRIMARY }}
                    className="font-semibold hover:underline"
                  >
                    Read More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}