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
      quote: "Finally, a consultancy that understands Nairobi's market. Their tailored approach delivered exceptional results.",
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
              Engineering growth for Nairobi's most ambitious SMEs through strategic innovation and AI-powered solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-sailcraft-teal mb-6">Our Mission</h2>
              <p className="text-lg text-sailcraft-dark leading-relaxed mb-8">
                To empower Nairobi SMEs with innovative, AI-enhanced solutions for sustainable growth. We believe every business deserves access to world-class strategic thinking and cutting-edge technology.
              </p>
              <div className="w-16 h-1 bg-sailcraft-orange"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-sailcraft-teal mb-6">Our Vision</h2>
              <p className="text-lg text-sailcraft-dark leading-relaxed mb-8">
                To be the leading growth partner for SMEs across East Africa, setting the standard for strategic excellence and innovative solutions in emerging markets.
              </p>
              <div className="w-16 h-1 bg-sailcraft-orange"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Why Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <img src={compassIcon} alt="Compass Watermark" className="h-64 w-64" />
            </div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold text-sailcraft-teal mb-8">Our Why</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-sailcraft-dark leading-relaxed mb-8">
                  We understand Nairobi's unique market challenges and opportunities. From navigating regulatory environments to capitalizing on emerging consumer trends, our team brings deep local expertise combined with global best practices.
                </p>
                <p className="text-xl text-sailcraft-dark leading-relaxed">
                  Every strategy we craft is tailored specifically for the East African market, ensuring your business doesn't just survive—it thrives in one of the world's most dynamic economies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sailcraft-teal mb-4">Meet the Team</h2>
            <p className="text-xl text-sailcraft-dark">Strategic minds driving your success</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="card-sailcraft text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-sailcraft-teal rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  JD
                </div>
                <CardTitle className="text-sailcraft-teal text-2xl">Jane Doe</CardTitle>
                <CardDescription className="text-sailcraft-orange font-medium">CEO & Visionary Leader</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sailcraft-dark">
                  15 years in digital growth and strategic consulting. Jane has helped over 100 SMEs across East Africa scale their operations and maximize revenue through innovative strategies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-sailcraft text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-sailcraft-teal rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  JS
                </div>
                <CardTitle className="text-sailcraft-teal text-2xl">John Smith</CardTitle>
                <CardDescription className="text-sailcraft-orange font-medium">CTO & Tech Innovator</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sailcraft-dark">
                  AI and technology specialist with expertise in implementing cutting-edge solutions for business growth. John ensures our strategies are powered by the latest innovations.
                </p>
              </CardContent>
            </Card>
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
                  <blockquote className="text-sailcraft-dark italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-sailcraft-teal">{testimonial.author}</p>
                    <p className="text-sm text-sailcraft-dark">{testimonial.title}</p>
                  </div>
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