import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Boat } from "phosphor-react";

const About = () => {
  const values = [
    {
      title: "AI Insight",
      description: "Harness the power of artificial intelligence to drive data-driven decisions and optimize performance.",
      icon: "🧠"
    },
    {
      title: "Client Selectivity", 
      description: "We choose partners we can truly impact, ensuring every engagement delivers meaningful results.",
      icon: "✓"
    },
    {
      title: "Results Guarantee",
      description: "Measurable success or we refine our approach until your goals are achieved.",
      icon: "🏆"
    }
  ];

  const testimonials = [
  {
    quote: "We needed more than ads—we needed clarity. Sailcraft helped us position our restaurant brand and guided us through every growth milestone.",
    author: "Susan Muiruri",
    title: "Founder, Kilimani Bites Restaurant"
  },
  {
    quote: "From identity to internal systems, Sailcraft helped us structure our legal firm into a digital-first, modern practice.",
    author: "Peter Maina",
    title: "Partner, S & P Advocates"
  },
  {
    quote: "Their understanding of East African business dynamics is unmatched. Our online visibility and customer conversion doubled in just three months.",
    author: "Irene Njoki",
    title: "CEO, Thika Textiles"
  }
];


  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2834&q=80" 
            alt="East African Business Landscape" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Boat className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-6 sm:mb-8 text-sailcraft-teal hover:text-sailcraft-orange transition-all duration-300 hover:scale-110 cursor-pointer" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-sailcraft-teal mb-6 sm:mb-8 leading-tight">About Sailcraft Solutions</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-sailcraft-teal max-w-4xl mx-auto leading-relaxed">
            Engineering growth for East Africa's most ambitious SMEs through strategic innovation and AI-powered solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sailcraft-teal mb-4">Our Purpose</h2>
            <p className="text-xl text-sailcraft-dark">Driving transformation across East Africa</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-sailcraft-teal/10 rounded-full mb-8">
                <div className="text-3xl">🎯</div>
              </div>
              <h3 className="text-2xl font-bold text-sailcraft-teal mb-6">Mission</h3>
              <p className="text-base text-sailcraft-dark leading-relaxed mb-8">
                To accelerate SME growth in East Africa through data-driven strategy, intelligent design, and scalable digital innovation.
              </p>
              <div className="w-20 h-1 bg-sailcraft-orange mx-auto"></div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-sailcraft-orange/10 rounded-full mb-8">
                <div className="text-3xl">🚀</div>
              </div>
              <h3 className="text-2xl font-bold text-sailcraft-teal mb-6">Vision</h3>
              <p className="text-base text-sailcraft-dark leading-relaxed mb-8">
                To be East Africa's most trusted partner for digital transformation and sustainable business excellence.
              </p>
              <div className="w-20 h-1 bg-sailcraft-orange mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Why Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 wave-texture opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold text-sailcraft-teal mb-8">Our Why</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-sailcraft-dark leading-relaxed mb-8">
                We understand East Africa's unique market challenges and opportunities. From navigating regulatory environments to capitalizing on emerging consumer trends, our team brings deep local expertise combined with global best practices.
              </p>
              <p className="text-xl text-sailcraft-dark leading-relaxed">
                Every strategy we craft is tailored specifically for the East African market, ensuring your business doesn't just survive—it thrives in one of the world's most dynamic economies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Differentiators Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sailcraft-teal mb-4">Our Values & Differentiators</h2>
            <p className="text-xl text-sailcraft-dark">What makes us different</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-sailcraft text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle className="text-sailcraft-teal">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sailcraft-dark text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Block */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sailcraft-teal mb-4">What Our Clients Say</h2>
            <p className="text-xl text-sailcraft-dark">Real results from real businesses</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-sailcraft-teal border-l-4">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-sailcraft-teal rounded-full flex items-center justify-center text-white font-bold text-sm overflow-hidden">
                      <img 
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.author}&backgroundColor=26A69A&textColor=ffffff`} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-sailcraft-teal">{testimonial.author}</p>
                      <p className="text-sm text-sailcraft-dark">{testimonial.title}</p>
                    </div>
                  </div>
                  <blockquote className="text-sailcraft-dark italic">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 mx-4 sm:mx-6 lg:mx-8 my-12">
        <div className="bg-sailcraft-teal rounded-2xl">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's explore how Sailcraft can engineer your next growth phase
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-sailcraft-orange hover:bg-sailcraft-orange/90 text-white text-lg px-8 py-6"
            >
              <Link to="/work-with-us">Explore Partnership</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
