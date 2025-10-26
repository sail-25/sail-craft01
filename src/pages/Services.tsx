
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CaretDown, Megaphone, Desktop, Palette, Gear, Briefcase, ChartBar, Users, Scales, Headphones } from "phosphor-react";
import { useState } from "react";
import compassIcon from "@/assets/compass-icon.png";
import servicesHeroImage from "@/assets/services-hero.jpg";

const Services = () => {
  const [openCards, setOpenCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setOpenCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const services = [
    {
      title: "Digital Marketing",
      description: "Elevate your brand with digital marketing campaigns, digital content creation, graphic design, social media management, marketing automation, advert design and publication, brand design, and growth optimization strategies.",
      miniServices: ["Digital campaigns", "Content creation", "Graphic design", "Social media management", "Marketing automation", "Advert design & publishing", "Brand design", "Growth strategies"],
      icon: Megaphone
    },
    {
      title: "Technology Solutions",
      description: "Lead digitally with custom software development, responsive website design, AI-driven e-commerce platforms, robust IT support, and AI design and system implementation.",
      miniServices: ["Software development", "Website design", "AI e-commerce", "IT support", "AI systems & implementation"],
      icon: Desktop
    },
    {
      title: "Creative Suite",
      description: "Transform your presence with AI-driven content creation, brand design, social PR, influencer management, creative strategy, and growth-focused campaigns.",
      miniServices: ["Content creation", "Brand design", "Social PR", "Influencer management", "Public figure branding", "Creative strategy", "Campaign growth"],
      icon: Palette
    },
    {
      title: "Operational Improvement",
      description: "Optimize operations with AI-driven process optimization, workflow automation, resource management, efficiency audits, and operational analytics for peak performance.",
      miniServices: ["AI process optimization", "Workflow automation", "Resource management", "Efficiency audits", "Operational analytics"],
      icon: Gear
    },
    {
      title: "Financial Services",
      description: "Master your finances with expert auditing, tax preparation and returns, compliance management, and precise accounting for seamless operations.",
      miniServices: ["Auditing", "Tax preparation & returns", "Compliance management", "Accounting"],
      icon: Briefcase
    },
    {
      title: "Business Development",
      description: "Propel growth with strategic planning, market analysis, partnership development, and innovative scaling strategies for long-term success.",
      miniServices: ["Strategic planning", "Market analysis", "Partnership development", "Scaling strategies"],
      icon: ChartBar
    },
    {
      title: "Human Resources",
      description: "Strengthen your team with comprehensive HR services, HR system implementation, talent acquisition, and tailored training programs.",
      miniServices: ["HR services", "HR systems", "Talent acquisition", "Team training"],
      icon: Users
    },
    {
      title: "Legal and Compliance",
      description: "Stay compliant with expert legal advisory, automated compliance tracking, contract management, and regulatory guidance.",
      miniServices: ["Legal advisory", "Compliance tracking", "Contract management", "Regulatory support"],
      icon: Scales
    },
    {
      title: "Customer Service Improvement",
      description: "Boost loyalty with AI-powered CRM integration, personalized support strategies, real-time feedback systems, and customer experience optimization.",
      miniServices: ["CRM integration", "Personalized support", "Feedback systems", "Customer experience design"],
      icon: Headphones
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 wave-texture opacity-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${servicesHeroImage})` }}
        ></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <img src={compassIcon} alt="Compass" className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-6 compass-spin" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sailcraft-teal mb-6 fade-in-up leading-tight">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-sailcraft-dark max-w-3xl mx-auto fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Comprehensive solutions tailored for East African SMEs. From strategic planning to technology implementation, 
              we engineer growth across every aspect of your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="w-32 h-1 bg-sailcraft-teal mx-auto mb-6 wave-animate"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-sailcraft-teal mb-4">What We Deliver</h2>
            <p className="text-lg sm:text-xl text-sailcraft-dark">Strategic expertise across nine core business areas</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Collapsible key={index} open={openCards.includes(index)} onOpenChange={() => toggleCard(index)}>
                <Card className="card-sailcraft text-left h-full border-2 border-transparent hover:border-sailcraft-teal/20 transition-all duration-300 group touch-manipulation">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-sailcraft-teal hover:text-sailcraft-orange transition-all duration-300 hover:scale-110 cursor-pointer" />
                      <CardTitle className="text-sailcraft-orange text-lg sm:text-xl group-hover:text-sailcraft-teal transition-colors duration-300 leading-tight">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-sailcraft-dark font-medium text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow pt-0">
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full border-sailcraft-teal text-sailcraft-teal hover:bg-sailcraft-teal hover:text-white group/btn min-touch-target touch-manipulation"
                      >
                        <span>View Services</span>
                        <CaretDown className={`h-4 w-4 ml-2 transition-all duration-300 hover:text-sailcraft-orange hover:scale-110 ${
                          openCards.includes(index) ? 'rotate-180' : ''
                        }`} />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="mt-4 pt-4 border-t border-sailcraft-teal/20">
                        <div className="space-y-2">
                          {service.miniServices.map((miniService, idx) => (
                            <p key={idx} className="text-xs sm:text-sm text-sailcraft-dark/80 italic leading-relaxed">
                              • {miniService}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CollapsibleContent>
                  </CardContent>
                </Card>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <img src={compassIcon} alt="Compass Watermark" className="h-48 w-48 sm:h-64 sm:w-64" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-sailcraft-teal mb-4">Why Our Services Work</h2>
            <p className="text-lg sm:text-xl text-sailcraft-dark">Built for East African markets with global expertise</p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
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
      <section className="py-20 mx-4 sm:mx-6 lg:mx-8 my-12">
        <div className="bg-sailcraft-teal rounded-2xl max-w-4xl mx-auto">
          <div className="text-center px-4 sm:px-6 lg:px-8 py-20">
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
        </div>
      </section>
    </div>
  );
};

export default Services;
