import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import compassIcon from "@/assets/compass-icon.png";

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
      quote: "Sailcraft transformed our revenue streams—their AI-driven approach is game-changing. Highly recommend!",
      author: "Sarah Kimani",
      title: "Local Retail Owner"
    },
    {
      quote: "The strategic planning session alone was worth the investment. Our operational efficiency improved by 35%.",
      author: "Michael Odhiambo", 
      title: "Manufacturing Director"
    },
    {
      quote: "Finally, a consultancy that understands East Africa's market. Their tailored approach delivered exceptional results.",
      author: "Grace Wanjiku",
      title: "Service Sector CEO"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <img src={compassIcon} alt="Compass" className="h-12 w-12 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-sailcraft-teal mb-6">About Sailcraft Solutions</h1>
            <p className="text-xl text-sailcraft-dark max-w-3xl mx-auto">
              Engineering growth for East Africa's most ambitious SMEs through strategic innovation and AI-powered solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-sailcraft-teal mb-6">Our Mission</h2>
              <p className="text-lg text-sailcraft-dark leading-relaxed mb-8">
                Empower East African SMEs with innovative growth solutions.
              </p>
              <div className="w-16 h-1 bg-sailcraft-orange"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-sailcraft-teal mb-6">Our Vision</h2>
              <p className="text-lg text-sailcraft-dark leading-relaxed mb-8">
                Lead SME growth across East Africa.
              </p>
              <div className="w-16 h-1 bg-sailcraft-orange"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Why Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 wave-texture opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <img src={compassIcon} alt="Compass Watermark" className="h-64 w-64" />
            </div>
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
        </div>
      </section>

      {/* Values & Differentiators Section */}
      <section className="py-20 bg-gray-50">
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
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-sailcraft-teal">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
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
      </section>
    </div>
  );
};

export default About;