import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const SuccessStories = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  
  const filters = ["All", "Retail", "Professional Services", "Manufacturing"];
  
  const caseStudies = [
    {
      title: "Retail Revival: From Struggling to Thriving",
      industry: "Retail",
      challenge: "Low online visibility and declining foot traffic in their Nairobi store",
      solution: "AI-driven digital marketing campaign with localized targeting and inventory optimization",
      result: "200% increase in online traffic, 150% boost in sales, 40% improvement in inventory turnover",
      testimonial: "Incredible results! Sailcraft didn't just improve our numbers—they transformed our entire approach to business.",
      client: "Fashion Forward Boutique"
    },
    {
      title: "Service Sector Boost: Operational Excellence",
      industry: "Professional Services", 
      challenge: "Inefficient processes leading to high operational costs and client dissatisfaction",
      solution: "Comprehensive process audit, AI-powered workflow optimization, and client management system",
      result: "35% reduction in operational costs, 60% faster service delivery, 95% client satisfaction rate",
      testimonial: "The strategic planning session alone was worth the investment. Our efficiency improved dramatically.",
      client: "Nairobi Legal Associates"
    },
    {
      title: "Manufacturing Excellence: Strategic Growth",
      industry: "Manufacturing",
      challenge: "Limited market reach and outdated production processes affecting competitiveness",
      solution: "Market expansion strategy, production line optimization, and strategic partnerships",
      result: "300% revenue growth, 50% reduction in production costs, expansion to 3 new markets",
      testimonial: "Sailcraft's strategic insight helped us scale beyond our wildest expectations.",
      client: "Kenya Craft Industries"
    },
    {
      title: "Digital Transformation Success",
      industry: "Professional Services",
      challenge: "Manual processes and lack of digital presence limiting growth potential",
      solution: "Complete digital transformation with custom software solutions and online marketing",
      result: "400% increase in online leads, 70% process automation, doubled monthly revenue",
      testimonial: "Finally, a consultancy that understands both technology and business strategy.",
      client: "Nairobi Accounting Solutions"
    },
    {
      title: "Retail Chain Expansion",
      industry: "Retail",
      challenge: "Single location business wanting to expand but lacking strategic framework",
      solution: "Franchise model development, location analysis, and brand standardization",
      result: "Successful launch of 5 new locations, 250% brand recognition increase, streamlined operations",
      testimonial: "From one store to six in just 18 months. Sailcraft made expansion seamless.",
      client: "Mama's Kitchen Chain"
    },
    {
      title: "Manufacturing Automation",
      industry: "Manufacturing", 
      challenge: "High labor costs and quality control issues affecting profitability",
      solution: "AI-powered quality control systems and semi-automated production processes",
      result: "45% reduction in defects, 30% lower labor costs, 80% faster production cycles",
      testimonial: "The ROI was immediate. Our quality and efficiency reached new heights.",
      client: "Precision Parts Kenya"
    }
  ];

  const filteredCases = selectedFilter === "All" 
    ? caseStudies 
    : caseStudies.filter(caseStudy => caseStudy.industry === selectedFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-sailcraft-teal mb-6 wave-animate">
              What Growth Looks Like
            </h1>
            <p className="text-xl text-sailcraft-dark max-w-3xl mx-auto">
              See how we've turned challenges into opportunities for Nairobi's most ambitious SMEs. 
              Real businesses, real results, real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter)}
                className={selectedFilter === filter 
                  ? "bg-sailcraft-teal hover:bg-sailcraft-teal/90" 
                  : "border-sailcraft-teal text-sailcraft-teal hover:bg-sailcraft-teal hover:text-white"
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredCases.map((caseStudy, index) => (
              <Card key={index} className="card-sailcraft">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-sailcraft-teal/10 text-sailcraft-teal">
                      {caseStudy.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-sailcraft-teal text-xl mb-2">
                    {caseStudy.title}
                  </CardTitle>
                  <CardDescription className="text-sailcraft-dark">
                    {caseStudy.client}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sailcraft-teal mb-2">Challenge</h4>
                    <p className="text-sailcraft-dark text-sm">{caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sailcraft-teal mb-2">Solution</h4>
                    <p className="text-sailcraft-dark text-sm">{caseStudy.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sailcraft-orange mb-2">Results</h4>
                    <p className="text-sailcraft-dark text-sm font-medium">{caseStudy.result}</p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <blockquote className="text-sailcraft-dark italic text-sm">
                      "{caseStudy.testimonial}"
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredCases.length === 0 && (
            <div className="text-center py-12">
              <p className="text-sailcraft-dark text-lg">
                No case studies found for the selected filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-sailcraft-teal mb-4">Our Impact by Numbers</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-sailcraft-orange mb-2">50+</div>
              <div className="text-sailcraft-dark">SMEs Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sailcraft-orange mb-2">250%</div>
              <div className="text-sailcraft-dark">Average Revenue Growth</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sailcraft-orange mb-2">40%</div>
              <div className="text-sailcraft-dark">Cost Reduction Achieved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sailcraft-orange mb-2">95%</div>
              <div className="text-sailcraft-dark">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="py-20 bg-sailcraft-teal">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Your Story Belongs Here
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ready to become our next success story? Let's discuss your growth potential.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-sailcraft-orange hover:bg-sailcraft-orange/90 text-white text-lg px-8 py-6 pulse-cta"
          >
            <Link to="/work-with-us">Start Your Journey</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;