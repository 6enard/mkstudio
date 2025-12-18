import { Award, Users, Zap } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Years Experience', value: '10+' },
  { icon: Users, label: 'Happy Clients', value: '200+' },
  { icon: Zap, label: 'Projects Completed', value: '500+' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Studio Mkenya
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                We are a collective of creative minds passionate about pushing boundaries
                and delivering exceptional work across multiple disciplines.
              </p>
              <p>
                From the digital realm to physical spaces, we transform ideas into
                compelling visual experiences. Our team combines technical expertise with
                artistic vision to create work that stands out and makes an impact.
              </p>
              <p>
                Whether you need a complete brand overhaul, a captivating video campaign,
                or a stunning mural to transform your space, we bring the same level of
                dedication and creativity to every project.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex p-3 bg-gray-100 rounded-xl mb-3">
                    <stat.icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Studio workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gray-900 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
