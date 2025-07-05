import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sailboat.jpg";
import compassIcon from "@/assets/compass-icon.png";

const Home = () => {
  const metrics = [
    { value: "40+", label: "Partnerships" },
    { value: "80%", label: "Average ROI" },
    { value: "20%", label: "Cost Efficiency" }
  ];

  const pillars = [
    {
      title: "Revenue Growth",
      description: "Maximize profits with data-driven sales tactics and AI-enhanced marketing strategies.",
      icon: "📈"
    },
    {
      title: "Operational Efficiency", 
      description: "Streamline processes for cost savings and improved productivity across your operations.",
      icon: "⚙️"
    },
    {
      title: "Strategic Planning",
      description: "Build a roadmap for long-term success with comprehensive growth strategies.",
      icon: "🎯"
    }
  ];

  const whyItems = [
    {
      title: "SME Strategy",
      description: "Craft bespoke strategies designed specifically for SME success in East Africa's market.",
      icon: "📊"
    },
    {
      title: "AI-Enhanced Ads", 
      description: "Leverage cutting-edge AI to boost your ad performance and maximize ROI.",
      icon: "🤖"
    },
    {
      title: "Client Focus",
      description: "Prioritize client needs with personalized support and dedicated partnership.",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-white overflow-hidden">
        <div className="absolute inset-0 wave-texture opacity-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <img src={compassIcon} alt="Compass" className="h-16 w-16 mx-auto mb-6 compass-spin" />
          <h1 className="text-5xl md:text-6xl font-bold text-sailcraft-teal mb-6 fade-in-up">
            We Engineer Growth—Not Just Campaigns
          </h1>
          <p className="text-xl md:text-2xl text-sailcraft-dark mb-8 fade-in-up" style={{ animationDelay: "0.2s" }}>
            Unlock your SME's potential with AI-driven strategies tailored for East Africa's dynamic market
          </p>
          <Button 
            asChild 
            size="lg" 
            className="btn-cta pulse-cta text-lg px-8 py-6 fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link to="/contact">Launch My Growth Plan</Link>
          </Button>
        </div>
      </section>

      {/* Why Sailcraft Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sailcraft-teal mb-4">Why Sailcraft?</h2>
            <p className="text-xl text-sailcraft-dark">Three pillars that set us apart</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyItems.map((item, index) => (
              <Card key={index} className="card-sailcraft text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <CardTitle className="text-sailcraft-teal">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sailcraft-dark text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-32 h-1 bg-sailcraft-teal mx-auto mb-6 wave-animate"></div>
            <h2 className="text-4xl font-bold text-sailcraft-teal mb-4">How We Help</h2>
            <p className="text-xl text-sailcraft-dark">Strategic growth across three key areas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-6">{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-sailcraft-teal mb-4">{pillar.title}</h3>
                <p className="text-sailcraft-dark text-lg leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Metrics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sailcraft-teal mb-4">Proven Results</h2>
            <p className="text-xl text-sailcraft-dark">From our work with East Africa's top SMEs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-sailcraft-orange mb-2">
                  {metric.value}
                </div>
                <div className="text-lg text-sailcraft-dark font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Success Stories Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sailcraft-teal mb-4">Success Stories</h2>
            <p className="text-xl text-sailcraft-dark">See how we've transformed businesses</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Retail Revival", snippet: "Increased sales by 150% through AI-optimized campaigns" },
              { title: "Service Sector Boost", snippet: "Streamlined operations reducing costs by 40%" },
              { title: "Manufacturing Excellence", snippet: "Strategic planning led to 200% revenue growth" }
            ].map((story, index) => (
              <Card key={index} className="card-sailcraft hover:border-sailcraft-orange cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-sailcraft-teal">{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sailcraft-dark">
                    {story.snippet}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-sailcraft-teal text-sailcraft-teal hover:bg-sailcraft-teal hover:text-white">
              <Link to="/success">View All Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="wave-texture rounded-lg p-12">
            <h2 className="text-4xl font-bold text-sailcraft-teal mb-6">
              Ready to Outperform Your Limits?
            </h2>
            <p className="text-xl text-sailcraft-dark mb-8">
              Join East Africa's top SMEs who trust Sailcraft for their growth journey
            </p>
            <Button 
              asChild 
              size="lg" 
              className="btn-cta pulse-cta text-lg px-8 py-6"
            >
              <Link to="/contact">Schedule a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;