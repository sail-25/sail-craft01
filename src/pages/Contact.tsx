
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";
import compassIcon from "@/assets/compass-icon.png";
import { supabase } from "@/integrations/supabase/client";

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.role || !formData.lookingFor) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log('Attempting to send contact form:', formData);
      
      // Call Supabase edge function using the client
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      console.log('Supabase function response:', { data, error });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(error.message || 'Failed to send message');
      }


      toast({
        title: "Message Sent Successfully!",
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
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact us directly at info.sailcraft@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Page Header */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=600&fit=crop')` 
          }}
        ></div>
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <img src={compassIcon} alt="Compass" className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-6 compass-spin" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sailcraft-teal mb-6 wave-animate leading-tight">
              Let's Build Your Growth Engine
            </h1>
            <p className="text-lg sm:text-xl text-sailcraft-dark max-w-3xl mx-auto leading-relaxed">
              Tell us what you need. We'll show what's possible. Every great partnership starts with a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
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
                          className="mt-1 focus:ring-2 focus:ring-sailcraft-teal focus:border-sailcraft-teal transition-all"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sailcraft-dark font-medium">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          placeholder="your@email.com"
                          className="mt-1 border-sailcraft-teal/20 focus:ring-2 focus:ring-sailcraft-teal focus:border-sailcraft-teal transition-all hover:border-sailcraft-teal/40"
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
                        className="mt-1 focus:ring-2 focus:ring-sailcraft-teal focus:border-sailcraft-teal transition-all"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sailcraft-dark">I am a... *</Label>
                      <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                        <SelectTrigger className="mt-1 focus:ring-2 focus:ring-sailcraft-teal focus:border-sailcraft-teal">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sme">SME</SelectItem>
                          <SelectItem value="startup">Startup</SelectItem>
                          <SelectItem value="consultant">Consultant</SelectItem>
                          <SelectItem value="public-figure">Public Figure</SelectItem>
                          <SelectItem value="service-agency">Service Agency</SelectItem>
                          <SelectItem value="manufacturer">Manufacturer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-sailcraft-dark">Looking for... *</Label>
                      <Select value={formData.lookingFor} onValueChange={(value) => handleInputChange("lookingFor", value)}>
                        <SelectTrigger className="mt-1 focus:ring-2 focus:ring-sailcraft-teal focus:border-sailcraft-teal">
                          <SelectValue placeholder="Select your need" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="growth">Growth</SelectItem>
                          <SelectItem value="strategy">Strategy</SelectItem>
                          <SelectItem value="branding">Branding</SelectItem>
                          <SelectItem value="ai-automation">AI Automation</SelectItem>
                          <SelectItem value="app-development">App Development</SelectItem>
                          <SelectItem value="website">Website</SelectItem>
                          <SelectItem value="social-media">Social Media Management</SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
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
                        className="mt-1 focus:ring-2 focus:ring-sailcraft-teal focus:border-sailcraft-teal transition-all"
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="btn-cta pulse-cta w-full hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Launch My Growth Plan"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
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
                  <p className="text-sailcraft-dark">+254 731 060 641</p>
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
                  <p className="text-sailcraft-dark">info@sailcraftsolutions.co.ke</p>
                  <p className="text-sm text-sailcraft-dark/70 mt-1">We respond within 24 hours</p>
                </CardContent>
              </Card>

              <Card className="card-sailcraft">
                <CardHeader>
                  <CardTitle className="text-sailcraft-teal flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sailcraft-dark">Moi Avenue, Nairobi</p>
                  <p className="text-sm text-sailcraft-dark/70 mt-1">East Africa's business hub</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ready for Growth CTA */}
      <section className="py-20 mx-4 sm:mx-6 lg:mx-8 my-12">
        <div className="bg-sailcraft-teal rounded-2xl">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-4xl font-bold text-white mb-6">Ready for Growth?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join 50+ SMEs who have transformed their businesses with Sailcraft Solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-2 h-2 bg-white rounded-full mx-auto mb-2"></div>
                <span className="text-white">Free initial consultation</span>
              </div>
              <div className="text-center">
                <div className="w-2 h-2 bg-white rounded-full mx-auto mb-2"></div>
                <span className="text-white">Custom growth strategy</span>
              </div>
              <div className="text-center">
                <div className="w-2 h-2 bg-white rounded-full mx-auto mb-2"></div>
                <span className="text-white">Measurable results</span>
              </div>
            </div>
            <Button 
              asChild
              size="lg"
              className="bg-sailcraft-orange hover:bg-sailcraft-orange/90 text-white text-lg px-8 py-6 pulse-cta"
            >
              <a href="#contact-form" onClick={(e) => {
                e.preventDefault();
                document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Start Your Growth Journey
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-sailcraft-teal mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
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
                <CardTitle className="text-sailcraft-teal text-lg">Do you work with businesses outside East Africa?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sailcraft-dark">
                  While our focus is East Africa-based SMEs, we do work with select clients across the region 
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
