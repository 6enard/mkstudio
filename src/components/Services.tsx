import { Palette, Video, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'From brand identity to digital assets, we craft visual stories that resonate. Logo design, marketing materials, social media content, and everything in between.',
    features: ['Brand Identity', 'Print Design', 'Digital Graphics', 'Social Media Assets'],
  },
  {
    icon: Video,
    title: 'Video & Audio Production',
    description: 'Professional video production and audio engineering services. Music videos, commercials, podcasts, and immersive soundscapes that captivate audiences.',
    features: ['Video Production', 'Audio Engineering', 'Post-Production', 'Sound Design'],
  },
  {
    icon: Sparkles,
    title: 'Graffiti Commissions',
    description: 'Transform spaces with bold, custom graffiti art. From murals to installations, we bring urban artistry to your walls with creativity and precision.',
    features: ['Mural Art', 'Custom Pieces', 'Interior Design', 'Commercial Spaces'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Full-service creative studio ready to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-gray-900 transition-colors duration-300"
            >
              <div className="mb-6">
                <div className="inline-flex p-3 bg-white rounded-xl group-hover:bg-gray-800 transition-colors">
                  <service.icon className="w-8 h-8 text-gray-900 group-hover:text-white transition-colors" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 group-hover:text-gray-300 mb-6 transition-colors">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-500 group-hover:text-gray-400 flex items-center transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-gray-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
