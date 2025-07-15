import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-sailboat.jpg";
import compassIcon from "@/assets/compass-icon.png";

const Home = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => clearInterval(autoplay);
  }, [api]);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const metrics = [
    { value: "40+", label: "Partnerships" },
    { value: "80%", label: "ROI" },
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
      title: "Holistic Solutions",
      description: "A one-stop shop for all SME needs, reducing complexity.",
      icon: "🏢"
    },
    {
      title: "Customized Approach", 
      description: "Tailored strategies designed to meet specific business goals.",
      icon: "🎯"
    },
    {
      title: "Proven Results",
      description: "A track record of empowering SMEs to achieve sustainable growth.",
      icon: "📈"
    },
    {
      title: "Local Advantage",
      description: "Deep understanding of Kenya's business environment, ensuring relevance and impact.",
      icon: "🌍"
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
            <p className="text-xl text-sailcraft-dark">Four pillars that set us apart</p>
          </div>
          <Carousel 
            setApi={setApi}
            className="w-full max-w-4xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {whyItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="card-sailcraft text-center h-full">
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
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Carousel indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {whyItems.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  current === index ? 'bg-sailcraft-teal' : 'bg-gray-300'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
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
          <div className="relative bg-gray-50 rounded-lg p-8 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-sailcraft-teal/20 to-sailcraft-orange/20"></div>
            <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Kenya Glamour Retail", snippet: "Increased sales by 150% through strategic campaigns" },
                { title: "Pollwise Transformation", snippet: "Streamlined operations reducing costs by 40%" },
                { title: "Thika Textiles", snippet: "Strategic planning led to 200% revenue growth" }
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