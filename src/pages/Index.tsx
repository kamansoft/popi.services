
import { ArrowRight, Phone, Mail, MapPin, CheckCircle, Wrench, Building, Users, ChevronRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

const Index = () => {
  

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted to-accent py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <img 
              src="/lovable-uploads/beb88fc3-292f-41b6-9623-6c8272e1fd23.png" 
              alt="Poultry & Pigs Services LLC" 
              className="h-32 w-32 mx-auto mb-6"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Engineering Excellence for
              <span className="text-primary block">Modern Agriculture</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Specialized engineering services for chicken and pork farming operations. 
              We design, optimize, and implement cutting-edge solutions for your agricultural success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-muted-foreground text-foreground hover:bg-accent">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Engineering Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive engineering solutions tailored for poultry and pork farming operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Facility Design</h3>
                <p className="text-muted-foreground">
                  Custom barn and facility designs optimized for animal welfare, operational efficiency, and regulatory compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">System Integration</h3>
                <p className="text-muted-foreground">
                  Advanced automation systems for feeding, climate control, waste management, and monitoring solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Compliance & Safety</h3>
                <p className="text-muted-foreground">
                  Ensuring all designs meet industry standards, environmental regulations, and safety requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Project Management</h3>
                <p className="text-muted-foreground">
                  End-to-end project management from initial consultation to final implementation and maintenance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Equipment Optimization</h3>
                <p className="text-muted-foreground">
                  Performance analysis and optimization of existing equipment to maximize efficiency and reduce costs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Retrofitting Solutions</h3>
                <p className="text-muted-foreground">
                  Upgrading existing facilities with modern technology and improved systems for better performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our innovative agricultural engineering projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <Card className="bg-card overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Modern Poultry Facility" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Modern Poultry Facility</h3>
                <p className="text-muted-foreground mb-4">
                  Complete design and implementation of a state-of-the-art poultry barn with automated climate control.
                </p>
                <Button variant="outline" className="text-primary border-primary hover:bg-accent">
                  View Project
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Portfolio Item 2 */}
            <Card className="bg-card overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Feed Management System" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Feed Management System</h3>
                <p className="text-muted-foreground mb-4">
                  Custom software integration for optimized feed distribution and inventory management.
                </p>
                <Button variant="outline" className="text-primary border-primary hover:bg-accent">
                  View Project
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Portfolio Item 3 */}
            <Card className="bg-card overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Sustainable Pork Farm" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Sustainable Pork Farm</h3>
                <p className="text-muted-foreground mb-4">
                  Energy-efficient facility design with waste management solutions for environmental compliance.
                </p>
                <Button variant="outline" className="text-primary border-primary hover:bg-accent">
                  View Project
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Company News Section */}
      <section id="news" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Company News</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest developments and industry insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <Card className="bg-card overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="Industry Conference" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">May 15, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  PO&PISE Presents at Agricultural Innovation Summit
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our team showcased new ventilation technology for modern poultry barns at this year's summit.
                </p>
                <Button variant="ghost" className="text-primary hover:bg-accent px-4">
                  Read More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* News Item 2 */}
            <Card className="bg-card overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Team Expansion" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">April 28, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Welcoming New Agricultural Engineers to Our Team
                </h3>
                <p className="text-muted-foreground mb-4">
                  PO&PISE expands with three new specialized engineers to meet growing client demand.
                </p>
                <Button variant="ghost" className="text-primary hover:bg-accent px-4">
                  Read More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* News Item 3 */}
            <Card className="bg-card overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="New Technology" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">March 10, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Launching New Monitoring Software for Livestock Operations
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our proprietary software provides real-time insights into farm operations and animal welfare.
                </p>
                <Button variant="ghost" className="text-primary hover:bg-accent px-4">
                  Read More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View All News
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">About Poultry & Pigs Services LLC</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2024, we are a specialized engineering firm dedicated to revolutionizing 
                agricultural operations through innovative design and cutting-edge technology solutions.
              </p>
              <p className="text-muted-foreground mb-8">
                Our team of experienced engineers understands the unique challenges facing modern 
                poultry and pork farming operations. We combine technical expertise with practical 
                agricultural knowledge to deliver solutions that improve efficiency, animal welfare, 
                and profitability.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Expert Team</h4>
                    <p className="text-muted-foreground">Licensed agricultural engineers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Proven Results</h4>
                    <p className="text-muted-foreground">Successful project implementations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">24/7 Support</h4>
                    <p className="text-muted-foreground">Ongoing maintenance and support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Custom Solutions</h4>
                    <p className="text-muted-foreground">Tailored to your specific needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Specialized expertise in agricultural engineering</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Focus on sustainable and efficient solutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Comprehensive project management approach</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Competitive pricing and flexible payment options</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Long-term partnerships with ongoing support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Get Started Today</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your agricultural operation? Contact us for a consultation and custom quote.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">Call us for immediate assistance</p>
                    <p className="text-primary font-medium">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">Send us your project details</p>
                    <p className="text-primary font-medium">info@poultrypigs.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Service Area</h4>
                    <p className="text-muted-foreground">We serve agricultural operations nationwide</p>
                    <p className="text-primary font-medium">Nationwide Service</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-accent/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Request a Consultation</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-border bg-card text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-border bg-card text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-border bg-card text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Farm Type</label>
                  <select className="w-full px-3 py-2 border border-border bg-card text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Select farm type</option>
                    <option>Poultry Farm</option>
                    <option>Pork Farm</option>
                    <option>Mixed Operation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Description</label>
                  <textarea rows={4} className="w-full px-3 py-2 border border-border bg-card text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tell us about your project needs..."></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/beb88fc3-292f-41b6-9623-6c8272e1fd23.png" 
                  alt="Poultry & Pigs Services LLC" 
                  className="h-12 w-12"
                />
                <div>
                  <h3 className="text-lg font-bold">Poultry & Pigs Services LLC</h3>
                  <p className="text-sm text-secondary-foreground/70">Est. 2024</p>
                </div>
              </div>
              <p className="text-secondary-foreground/70">
                Engineering excellence for modern agricultural operations. 
                Specialized solutions for chicken and pork farming.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-secondary-foreground/70">
                <li>Facility Design</li>
                <li>System Integration</li>
                <li>Compliance & Safety</li>
                <li>Project Management</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-secondary-foreground/70">
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@poultrypigs.com</p>
                <p>Service: Nationwide</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/70">
            <p>&copy; 2024 Poultry & Pigs Services LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
