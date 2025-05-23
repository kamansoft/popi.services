
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
      <section className="bg-gradient-to-br from-background to-accent/30 py-20">
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
              We're passionate about delivering top-notch engineering services to the poultry and swine industries. 
              Our team of experts is committed to innovation and efficiency, helping our clients improve productivity and animal welfare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-accent">
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
              Comprehensive and sustainable solutions to the poultry and swine industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-accent/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Design and Construction</h3>
                <p className="text-muted-foreground">
                  Specialized design and construction of poultry and swine farms optimized for animal welfare and operational efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-accent/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Technical Services</h3>
                <p className="text-muted-foreground">
                  Technical services and consulting for poultry and swine operations, offering solutions for all your agricultural needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-accent/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Engineering Systems</h3>
                <p className="text-muted-foreground">
                  Engineering for feeding, hydration, lighting, heating and ventilation systems tailored to your specific requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-accent/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Energy Efficiency</h3>
                <p className="text-muted-foreground">
                  Energy efficiency analysis and process optimization to reduce costs and improve sustainability.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-accent/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Control Systems</h3>
                <p className="text-muted-foreground">
                  Design and implementation of control and monitoring systems for precise management of your operations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-accent/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Maintenance Services</h3>
                <p className="text-muted-foreground">
                  Maintenance of installations and equipment to ensure your operations run smoothly and efficiently.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our innovative agricultural engineering projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <Card className="bg-card border border-primary/10 overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300">
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
            <Card className="bg-card border border-primary/10 overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300">
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
            <Card className="bg-card border border-primary/10 overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300">
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

      {/* About Section */}
      <section id="about" className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Poultry and Pig Services, we're passionate about delivering top-notch 
                engineering services to the poultry and swine industries. Our team of experts is 
                committed to innovation and efficiency, helping our clients improve productivity 
                and animal welfare.
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-8">
                Provide comprehensive and sustainable solutions to the poultry and swine 
                industries through cutting-edge technology, innovative design, and attention to detail. 
                We strive to establish ourselves as trusted partners for our clients, delivering 
                high-quality services that enhance their competitiveness and sustainability.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Innovation</h4>
                    <p className="text-muted-foreground">Researching and developing new technologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Quality</h4>
                    <p className="text-muted-foreground">Meeting the highest standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Sustainability</h4>
                    <p className="text-muted-foreground">Minimizing environmental impact</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Collaboration</h4>
                    <p className="text-muted-foreground">Creating effective solutions together</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg border border-primary/10">
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Over 9 years of experience in the poultry and swine industry</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Team of skilled and committed professionals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Cutting-edge technology and innovative solutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Focus on sustainability and animal welfare</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Specialized expertise in agricultural engineering</span>
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              If you'd like to know more about how we can help you, please don't hesitate to contact us. 
              We're looking forward to working with you!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/50 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">Call us for immediate assistance</p>
                    <p className="text-primary font-medium">+573207082015</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/50 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">Send us your project details</p>
                    <p className="text-primary font-medium">jqnlfnz@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/50 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Website</h4>
                    <p className="text-muted-foreground">Visit our website</p>
                    <p className="text-primary font-medium">www.popise.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card/80 p-8 rounded-lg border border-primary/10">
              <h3 className="text-2xl font-bold text-foreground mb-6">Request a Consultation</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Farm Type</label>
                  <select className="w-full px-3 py-2 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Select farm type</option>
                    <option>Poultry Farm</option>
                    <option>Pork Farm</option>
                    <option>Mixed Operation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Description</label>
                  <textarea rows={4} className="w-full px-3 py-2 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tell us about your project needs..."></textarea>
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
      <footer className="bg-card text-foreground py-12 border-t border-primary/20">
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
                  <h3 className="text-lg font-bold">Poultry & Pigs Services</h3>
                  <p className="text-sm text-muted-foreground">Engineering Excellence</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                We're passionate about delivering top-notch engineering services to the poultry and swine industries.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Design and construction of farms</li>
                <li>Technical services and consulting</li>
                <li>Engineering for feeding systems</li>
                <li>Energy efficiency analysis</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Phone: +573207082015</p>
                <p>Email: jqnlfnz@gmail.com</p>
                <p>Website: www.popise.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary/20 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Poultry & Pigs Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
