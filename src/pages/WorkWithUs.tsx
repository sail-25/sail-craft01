import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const WorkWithUs = () => {
  const criteria = [
    {
      title: "Revenue",
      description: "$50K+ annual revenue demonstrates business viability and growth potential",
      icon: "💰",
      requirement: "$50K+ Annual"
    },
    {
      title: "Location", 
      description: "Nairobi-based businesses to leverage our local market expertise",
      icon: "📍",
      requirement: "Nairobi-Based"
    },
    {
      title: "Mindset",
      description: "Growth-oriented leadership committed to scaling and innovation",
      icon: "🚀", 
      requirement: "Growth-Oriented"
    },
    {
      title: "Commitment",
      description: "Ready to invest time, resources, and energy in transformational change",
      icon: "🎯",
      requirement: "Ready to Invest"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "Understand your business, challenges, and growth aspirations through comprehensive consultation",
      duration: "1-2 weeks"
    },
    {
      step: "02", 
      title: "Audit",
      description: "Assess current performance, identify opportunities, and evaluate market positioning",
      duration: "2-3 weeks"
    },
    {
      step: "03",
      title: "Strategy",
      description: "Develop customized growth strategy with clear milestones and success metrics",
      duration: "1-2 weeks"
    },
    {
      step: "04",
      title: "Retainer/Project",
      description: "Execute strategy through ongoing partnership or defined project engagement",
      duration: "3-12 months"
    },
    {
      step: "05",
      title: "Optimization", 
      description: "Continuous monitoring, refinement, and scaling based on performance data",
      duration: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-sailcraft-teal mb-6">
              Work With Us
            </h1>
            <p className="text-xl text-sailcraft-dark max-w-3xl mx-auto">
              We're selective about our partnerships. Here's what we look for and how we work together to engineer your growth.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sailcraft-teal mb-4">Who We Work With</h2>
            <p className="text-xl text-sailcraft-dark">Partnership criteria for mutual success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {criteria.map((criterion, index) => (
              <Card key={index} className="card-sailcraft text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{criterion.icon}</div>
                  <CardTitle className="text-sailcraft-teal">{criterion.title}</CardTitle>
                  <Badge variant="secondary" className="bg-sailcraft-orange/10 text-sailcraft-orange">
                    {criterion.requirement}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sailcraft-dark text-sm">
                    {criterion.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sailcraft-teal mb-4">Our Engagement Process</h2>
            <p className="text-xl text-sailcraft-dark">A structured approach to sustainable growth</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-sailcraft-teal/20 hidden lg:block"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1 lg:w-1/2">
                    <Card className={`card-sailcraft ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-12 h-12 bg-sailcraft-teal rounded-full flex items-center justify-center text-white font-bold">
                            {step.step}
                          </div>
                          <div>
                            <CardTitle className="text-sailcraft-teal">{step.title}</CardTitle>
                            <Badge variant="outline" className="border-sailcraft-orange text-sailcraft-orange">
                              {step.duration}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sailcraft-dark">
                          {step.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot for large screens */}
                  <div className="hidden lg:block w-4 h-4 bg-sailcraft-teal rounded-full border-4 border-white z-10"></div>
                  
                  <div className="flex-1 lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Fit Disclaimer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-sailcraft-teal">
            <h3 className="text-2xl font-bold text-sailcraft-teal mb-4">
              Only Clients We Can Help
            </h3>
            <p className="text-sailcraft-dark text-lg leading-relaxed">
              We partner exclusively with businesses where our expertise can drive measurable impact. 
              If we don't believe we can significantly improve your growth trajectory, we'll be honest about it. 
              Our reputation is built on results, not just revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Investment & Packages Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sailcraft-teal mb-4">Investment Levels</h2>
            <p className="text-xl text-sailcraft-dark">Flexible engagement models to match your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-sailcraft">
              <CardHeader>
                <CardTitle className="text-sailcraft-teal">Strategy Sprint</CardTitle>
                <CardDescription>Perfect for immediate strategic guidance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sailcraft-dark text-sm">
                  <li>• 2-week intensive strategy development</li>
                  <li>• Comprehensive business audit</li>
                  <li>• 90-day action plan</li>
                  <li>• Implementation roadmap</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-sailcraft border-sailcraft-orange">
              <CardHeader>
                <Badge className="bg-sailcraft-orange text-white mb-2 w-fit">Most Popular</Badge>
                <CardTitle className="text-sailcraft-teal">Growth Partnership</CardTitle>
                <CardDescription>Ongoing strategic partnership for sustained growth</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sailcraft-dark text-sm">
                  <li>• Monthly strategy sessions</li>
                  <li>• AI-powered performance monitoring</li>
                  <li>• Quarterly business reviews</li>
                  <li>• Priority support and guidance</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-sailcraft">
              <CardHeader>
                <CardTitle className="text-sailcraft-teal">Transformation Project</CardTitle>
                <CardDescription>Complete business transformation initiative</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sailcraft-dark text-sm">
                  <li>• 6-12 month comprehensive program</li>
                  <li>• Technology implementation</li>
                  <li>• Team training and development</li>
                  <li>• Process optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sailcraft-teal">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Book Your Discovery Call
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Take the first step toward engineering your growth. Let's explore if we're the right fit for your business.
          </p>
          <div className="space-y-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-sailcraft-orange hover:bg-sailcraft-orange/90 text-white text-lg px-8 py-6 pulse-cta"
            >
              <Link to="/contact">Schedule Discovery Call</Link>
            </Button>
            <p className="text-white/70 text-sm">
              Free 30-minute consultation • No obligation • Confidential discussion
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkWithUs;