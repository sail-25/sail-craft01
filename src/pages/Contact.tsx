import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    lookingFor: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours. Thank you for your interest in Sailcraft Solutions.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "",
      lookingFor: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const trustIndicators = [
    "Reply within 24 hours",
    "Confidentiality guaranteed", 
    "Leveraging local expertise"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Page Header */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-sailcraft-teal mb-6 wave-animate">
              Let's Build Your Growth Engine
            </h1>
            <p className="text-xl text-sailcraft-dark max-w-3xl mx-auto">
              Tell us what you need. We'll show what's possible. Every great partnership starts with a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-sailcraft">
                <CardHeader>
                  <CardTitle className="text-sailcraft-teal text-2xl">Get Started Today</CardTitle>
                  <CardDescription className="text-sailcraft-dark">
                    Fill out the form below and we'll be in touch to discuss your growth potential.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sailcraft-dark">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sailcraft-dark">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sailcraft-dark">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+254 XXX XXX XXX"
                        className="mt-1"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sailcraft-dark">I am a... *</Label>
                        <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="owner">Business Owner</SelectItem>
                            <SelectItem value="manager">Manager</SelectItem>
                            <SelectItem value="consultant">Consultant</SelectItem>
                            <SelectItem value="public-figure">Public Figure</SelectItem>
                            <SelectItem value="sme">SME</SelectItem>
                            <SelectItem value="startup">Start Up</SelectItem>
                            <SelectItem value="service-agency">Service Agency</SelectItem>
                            <SelectItem value="manufacturer">Manufacturer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-sailcraft-dark">Looking for... *</Label>
                        <Select value={formData.lookingFor} onValueChange={(value) => handleInputChange("lookingFor", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your need" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="growth">Growth Strategy</SelectItem>
                            <SelectItem value="efficiency">Operational Efficiency</SelectItem>
                            <SelectItem value="strategy">Strategic Planning</SelectItem>
                            <SelectItem value="product-launch">Product Launch</SelectItem>
                            <SelectItem value="social-media">Social Media Management</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="ai-automation">AI Automation</SelectItem>
                            <SelectItem value="website">Website Development</SelectItem>
                            <SelectItem value="app-development">App Development</SelectItem>
                            <SelectItem value="custom-software">Custom Software</SelectItem>
                            <SelectItem value="branding">Branding</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sailcraft-dark">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your business goals, current challenges, or any specific questions you have..."
                        rows={4}
                        className="mt-1"
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="btn-cta pulse-cta w-full md:w-auto"
                    >
                      Launch My Growth Plan
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <div className="mt-8">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  {trustIndicators.map((indicator, index) => (
                    <div key={index} className="text-sailcraft-dark">
                      <div className="w-2 h-2 bg-sailcraft-teal rounded-full mx-auto mb-2"></div>
                      <p className="text-sm">{indicator}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card className="card-sailcraft">
                <CardHeader>
                  <CardTitle className="text-sailcraft-teal flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sailcraft-dark">+254 704 201 545</p>
                  <p className="text-sm text-sailcraft-dark/70 mt-1">Mon-Fri, 9AM-6PM EAT</p>
                </CardContent>
              </Card>

              <Card className="card-sailcraft">
                <CardHeader>
                  <CardTitle className="text-sailcraft-teal flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sailcraft-dark">info@sailcraftsolutions.com</p>
                  <p className="text-sm text-sailcraft-dark/70 mt-1">We respond within 24 hours</p>
                </CardContent>
              </Card>

              <Card className="card-sailcraft">
                <CardHeader>
                  <CardTitle className="text-sailcraft-teal">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sailcraft-dark">Nairobi, Kenya</p>
                  <p className="text-sm text-sailcraft-dark/70 mt-1">East Africa's business hub</p>
                  <div className="mt-4 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-sailcraft-dark/70 text-sm">Interactive Map</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-sailcraft-teal text-white">
                <CardHeader>
                  <CardTitle>Ready for Growth?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 text-sm mb-4">
                    Join 50+ SMEs who have transformed their businesses with Sailcraft Solutions.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <span>Free initial consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <span>Custom growth strategy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <span>Measurable results</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sailcraft-teal mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sailcraft-teal text-lg">How quickly can we start working together?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sailcraft-dark">
                  After our initial consultation, we can typically begin the discovery phase within 1-2 weeks, 
                  depending on your availability and the complexity of your needs.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-sailcraft-teal text-lg">What if my business doesn't meet your criteria?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sailcraft-dark">
                  We'll be honest about fit during our consultation. If we can't help effectively, 
                  we'll recommend alternative resources or suggest when to reconnect as your business grows.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-sailcraft-teal text-lg">Do you work with businesses outside Nairobi?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sailcraft-dark">
                  While our focus is Nairobi-based SMEs, we do work with select clients across East Africa 
                  who can benefit from our expertise and market knowledge.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;