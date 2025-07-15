
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const SuccessStories = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  
  const filters = ["All", "Fashion/Retail", "Civic Tech", "Manufacturing", "Food & Beverage", "Legal Services"];
  
  const caseStudies = [
    {
      title: "Kenya Glamour Retail",
      industry: "Fashion/Retail",
      client: "A boutique fashion store in Nairobi expanding into online sales",
      challenge: "The brand struggled with poor online visibility, low in-store traffic, and inconsistent sales despite quality inventory.",
      solution: "We implemented an AI-driven digital marketing campaign, redesigned their e-commerce website, and integrated automated customer feedback systems across WhatsApp and Instagram.",
      results: [
        "70% increase in online-sales traffic within 3 months",
        "30% increase in in-store footfall", 
        "3X engagement on across all social pages",
        "Inventory turnover cycle shortened by 40%"
      ],
      testimonial: "Sailcraft didn't just design ads — they understood our culture and made it marketable. Our sales literally doubled.",
      coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop&auto=format"
    },
    {
      title: "Pollwise Transformation",
      industry: "Civic Tech",
      client: "A civic platform offering opinion polling and sentiment analysis tools",
      challenge: "Pollwise had robust tech but struggled with awareness and translating insights into revenue from clients like NGOs and media houses.",
      solution: "Sailcraft provided brand clarity, revamped their web presence, ran targeted B2B marketing, and added a dashboard subscription model.",
      results: [
        "3 new media clients onboarded in 60 days",
        "90% demo-to-subscription conversion",
        "New recurring revenue stream launched"
      ],
      testimonial: "We moved from a promising idea to a viable business with Sailcraft's direction.",
      coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&auto=format"
    },
    {
      title: "Thika Textiles",
      industry: "Manufacturing",
      client: "A mid-sized textile firm exporting fabrics to the East African region",
      challenge: "Manual processes led to delays, poor customer communication, and missed export orders. Their local presence wasn't matched online.",
      solution: "We digitized their inventory system, automated order tracking, launched a multilingual B2B portal, and improved their export pitch deck with brand visuals.",
      results: [
        "60% reduction in order fulfillment time",
        "3 new national supply contracts signed",
        "100% increase in RFQ (Request for Quotation) submissions via new portal"
      ],
      testimonial: "Sailcraft turned our back-office into a client-winning machine — our systems finally work for us, not against us.",
      coverImage: "https://images.unsplash.com/photo-1558618666-fcce8ea8b727?w=400&h=250&fit=crop&auto=format"
    },
    {
      title: "Kilimani Bites – From New Spot to Local Favorite",
      industry: "Food & Beverage",
      client: "A mid-range fast-casual restaurant in Kilimani, Nairobi",
      challenge: "Kilimani Bites had an excellent kitchen team and location — but zero online presence, unclear brand identity, and no system for customer tracking or retention.",
      solution: "We handled full-spectrum brand development: Designed the logo, color system, menus, signage, and interior branding. Set up a responsive, visually rich website with menu & ordering integration. Implemented a POS-linked CRM for loyalty tracking and feedback collection. Advised on early-stage hiring structure and growth roadmap.",
      results: [
        "70% increase in weekly online discovery within 90 days",
        "Customer rating jumped from 2.8 to 4.5 in under 2 months",
        "3.5× average monthly orders within 6 months",
        "A consistent walk-in base + corporate lunch deals secured"
      ],
      testimonial: "From a logo to a packed lunch rush—Sailcraft walked with us every step. It's like having your own marketing and ops team from day one.",
      coverImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop&auto=format"
    },
    {
      title: "S&P Mwangagi Advocates – Brand Modernization + Automation",
      industry: "Legal Services",
      client: "A law firm based in Upper Hill, Nairobi with a focus on commercial litigation and conveyancing",
      challenge: "S&P Advocates had a good client portfolio but lacked a clear brand voice. Internally, workflows were email-heavy, slow, and untracked — especially for client intake and file handoff.",
      solution: "Created a clean, modern visual identity (logo, firm colors, slide decks, letterhead). Developed a secure, branded client intake portal with e-signature and document tracking. Integrated task-based workflow automations (case assignment, reminders, internal SLAs) using legal project tools. Delivered a staff onboarding kit for consistent workflow across teams. Published a basic but credible website with team bios and practice focus.",
      results: [
        "Intake-to-file open time reduced by 70%",
        "Improved brand trust led to 4 institutional clients acquired in 3 months",
        "2x faster team onboarding for new hires",
        "Elevated firm's image in RFP submissions and networking"
      ],
      testimonial: "Sailcraft reshaped how we operate and how we're perceived — it's no longer just business as usual.",
      coverImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop&auto=format"
    }
  ];

  const filteredCases = selectedFilter === "All" 
    ? caseStudies 
    : caseStudies.filter(caseStudy => caseStudy.industry === selectedFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-sailcraft-teal mb-6 wave-animate">
              What Growth Looks Like
            </h1>
            <p className="text-xl text-sailcraft-dark max-w-3xl mx-auto">
              See how we've turned challenges into opportunities for East Africa's most ambitious SMEs. 
              Real businesses, real results, real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
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
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseStudy, index) => (
              <Collapsible key={index}>
                <div className="border-2 border-sailcraft-teal/20 rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:border-sailcraft-teal/60 hover:shadow-[0_0_20px_rgba(38,166,154,0.3)] h-full flex flex-col">
                  {/* Cover Image */}
                  <div className="w-full h-48">
                    <img 
                      src={caseStudy.coverImage} 
                      alt={caseStudy.client}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Card Preview Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-sailcraft-teal/10 text-sailcraft-teal">
                        {caseStudy.industry}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-sailcraft-teal mb-2">
                      {caseStudy.title}
                    </h3>
                    
                    <p className="text-sailcraft-dark mb-4 text-sm">
                      {caseStudy.client}
                    </p>
                    
                    <p className="text-sm text-sailcraft-dark/80 mb-4 flex-1">
                      {caseStudy.challenge}
                    </p>

                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full border-sailcraft-teal text-sailcraft-teal hover:bg-sailcraft-teal hover:text-white group"
                      >
                        <span>View Full Case Study</span>
                        <ChevronDown className="h-4 w-4 ml-2 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  
                  <CollapsibleContent>
                    <div className="border-t border-sailcraft-teal/20 p-6 bg-gray-50/50">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-sailcraft-teal mb-3">Our Solution</h4>
                          <p className="text-sailcraft-dark leading-relaxed">{caseStudy.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-sailcraft-orange mb-3">Results</h4>
                          <ul className="space-y-2">
                            {caseStudy.results.map((result, idx) => (
                              <li key={idx} className="text-sailcraft-dark font-medium flex items-start">
                                <span className="text-sailcraft-orange mr-2">•</span>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-sailcraft-teal/10">
                          <h4 className="text-lg font-semibold text-sailcraft-teal mb-3">Client Testimonial</h4>
                          <blockquote className="text-sailcraft-dark italic leading-relaxed">
                            "{caseStudy.testimonial}"
                          </blockquote>
                          <cite className="text-sm text-sailcraft-teal font-medium mt-2 block">
                            — {caseStudy.title}
                          </cite>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
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
        <div className="max-w-6xl mx-auto px-6">
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
        <div className="max-w-6xl mx-auto text-center px-6">
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
