export default function UseCases() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-8" style={{color: '#1e3a3a'}}>Use Cases</h1>
        <p className="text-xl mb-12" style={{color: '#6b7280'}}>
          Discover how companies leverage KIAQ for various business needs.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Startup Scaling</h3>
            <p className="mb-4">Scale your team rapidly with top talent from Africa's tech ecosystem.</p>
            <a href="/startup-scaling" className="text-teal-600 font-medium">Learn More →</a>
          </div>
          <div className="p-8 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Enterprise Projects</h3>
            <p className="mb-4">Large-scale development initiatives with dedicated teams.</p>
            <a href="/enterprise-projects" className="text-teal-600 font-medium">Learn More →</a>
          </div>
          <div className="p-8 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Digital Transformation</h3>
            <p className="mb-4">Modernize your technology stack with expert guidance.</p>
            <a href="/digital-transformation" className="text-teal-600 font-medium">Learn More →</a>
          </div>
        </div>
      </div>
    </div>
  );
}