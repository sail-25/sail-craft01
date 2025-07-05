import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import compassIcon from "@/assets/compass-icon.png";

const Services = () => {
  const services = [
    {
      title: "Financial Planning",
      description: "Comprehensive financial strategies to secure your SME's future",
      miniNote: "Expert guidance for budgeting and investments",
      icon: "💰"
    },
    {
      title: "Marketing Optimization", 
      description: "Elevate your brand with targeted marketing",
      miniNote: "Enhance visibility with strategic campaigns",
      icon: "📈"
    },
    {
      title: "Operational Streamlining",
      description: "Optimize processes for efficiency",
      miniNote: "Reduce costs with streamlined workflows",
      icon: "⚙️"
    },
    {
      title: "HR Solutions",
      description: "Build a strong team foundation",
      miniNote: "Tailored talent acquisition and training",
      icon: "👥"
    },
    {
      title: "Technology Development",
      description: "Innovative tech for growth",
      miniNote: "Custom software and website solutions",
      icon: "💻"
    },
    {
      title: "Legal Compliance",
      description: "Navigate regulations with ease",
      miniNote: "Expert advice for compliance",
      icon: "⚖️"
    },
    {
      title: "Customer Support Enhancement",
      description: "Improve client satisfaction",
      miniNote: "Tailored support strategies",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 wave-texture opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <img src={compassIcon} alt="Compass" className="h-16 w-16 mx-auto mb-6 compass-spin" />
            <h1 className="text-5xl font-bold text-sailcraft-teal mb-6 fade-in-up">
              Our Services
            </h1>
            <p className="text-xl text-sailcraft-dark max-w-3xl mx-auto fade-in-up" style={{ animationDelay: "0.2s" }}>
              Comprehensive solutions tailored for East African SMEs. From strategic planning to technology implementation, 
              we engineering growth across every aspect of your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-32 h-1 bg-sailcraft-teal mx-auto mb-6 wave-animate"></div>
            <h2 className="text-4xl font-bold text-sailcraft-teal mb-4">What We Deliver</h2>
            <p className="text-xl text-sailcraft-dark">Strategic expertise across seven core business areas</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-sailcraft text-center h-full border-2 border-transparent hover:border-sailcraft-teal/20 transition-all duration-300 group">
                <CardHeader>
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-sailcraft-teal text-xl mb-2 group-hover:text-sailcraft-orange transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sailcraft-dark font-medium text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-end">
                  <div className="w-full">
                    <div className="h-px bg-sailcraft-teal/20 w-full mb-4"></div>
                    <p className="text-sm text-sailcraft-dark/80 italic">
                      {service.miniNote}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <img src={compassIcon} alt="Compass Watermark" className="h-64 w-64" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sailcraft-teal mb-4">Why Our Services Work</h2>
            <p className="text-xl text-sailcraft-dark">Built for East African markets with global expertise</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sailcraft-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-sailcraft-teal mb-3">Local Market Expertise</h3>
              <p className="text-sailcraft-dark">
                Deep understanding of East African business landscape, regulations, and consumer behavior.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sailcraft-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-sailcraft-teal mb-3">AI-Powered Solutions</h3>
              <p className="text-sailcraft-dark">
                Cutting-edge technology integration that scales with your business growth trajectory.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sailcraft-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-sailcraft-teal mb-3">Measurable Results</h3>
              <p className="text-sailcraft-dark">
                Data-driven approach with clear KPIs and regular performance tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sailcraft-teal">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Choose the services that align with your growth goals. We'll craft a customized approach that delivers measurable results.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-sailcraft-orange hover:bg-sailcraft-orange/90 text-white text-lg px-8 py-6 pulse-cta"
          >
            <Link to="/contact">Launch My Growth Plan</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;