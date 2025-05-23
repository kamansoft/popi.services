
import { ArrowRight, Phone, Mail, MapPin, CheckCircle, Wrench, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/268bf4e8-ced8-46de-939c-6dd855649a2c.png" 
              alt="Poultry & Pigs Services LLC" 
              className="h-12 w-12"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Poultry & Pigs Services LLC</h1>
              <p className="text-sm text-gray-600">Engineering Excellence Since 2024</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
          </nav>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">
            Get Quote
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-amber-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <img 
              src="/lovable-uploads/268bf4e8-ced8-46de-939c-6dd855649a2c.png" 
              alt="Poultry & Pigs Services LLC" 
              className="h-24 w-24 mx-auto mb-6"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Engineering Excellence for
              <span className="text-amber-600 block">Modern Agriculture</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Specialized engineering services for chicken and pork farming operations. 
              We design, optimize, and implement cutting-edge solutions for your agricultural success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Engineering Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive engineering solutions tailored for poultry and pork farming operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Facility Design</h3>
                <p className="text-gray-600">
                  Custom barn and facility designs optimized for animal welfare, operational efficiency, and regulatory compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">System Integration</h3>
                <p className="text-gray-600">
                  Advanced automation systems for feeding, climate control, waste management, and monitoring solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Compliance & Safety</h3>
                <p className="text-gray-600">
                  Ensuring all designs meet industry standards, environmental regulations, and safety requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Project Management</h3>
                <p className="text-gray-600">
                  End-to-end project management from initial consultation to final implementation and maintenance.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Equipment Optimization</h3>
                <p className="text-gray-600">
                  Performance analysis and optimization of existing equipment to maximize efficiency and reduce costs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Retrofitting Solutions</h3>
                <p className="text-gray-600">
                  Upgrading existing facilities with modern technology and improved systems for better performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Poultry & Pigs Services LLC</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2024, we are a specialized engineering firm dedicated to revolutionizing 
                agricultural operations through innovative design and cutting-edge technology solutions.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of experienced engineers understands the unique challenges facing modern 
                poultry and pork farming operations. We combine technical expertise with practical 
                agricultural knowledge to deliver solutions that improve efficiency, animal welfare, 
                and profitability.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Expert Team</h4>
                    <p className="text-gray-600">Licensed agricultural engineers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Proven Results</h4>
                    <p className="text-gray-600">Successful project implementations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">24/7 Support</h4>
                    <p className="text-gray-600">Ongoing maintenance and support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Custom Solutions</h4>
                    <p className="text-gray-600">Tailored to your specific needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <span className="text-gray-700">Specialized expertise in agricultural engineering</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <span className="text-gray-700">Focus on sustainable and efficient solutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <span className="text-gray-700">Comprehensive project management approach</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <span className="text-gray-700">Competitive pricing and flexible payment options</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <span className="text-gray-700">Long-term partnerships with ongoing support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get Started Today</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your agricultural operation? Contact us for a consultation and custom quote.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">Call us for immediate assistance</p>
                    <p className="text-amber-600 font-medium">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">Send us your project details</p>
                    <p className="text-green-600 font-medium">info@poultrypigs.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Service Area</h4>
                    <p className="text-gray-600">We serve agricultural operations nationwide</p>
                    <p className="text-blue-600 font-medium">Nationwide Service</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Request a Consultation</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Farm Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600">
                    <option>Select farm type</option>
                    <option>Poultry Farm</option>
                    <option>Pork Farm</option>
                    <option>Mixed Operation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                  <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600" placeholder="Tell us about your project needs..."></textarea>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/268bf4e8-ced8-46de-939c-6dd855649a2c.png" 
                  alt="Poultry & Pigs Services LLC" 
                  className="h-10 w-10"
                />
                <div>
                  <h3 className="text-lg font-bold">Poultry & Pigs Services LLC</h3>
                  <p className="text-sm text-gray-400">Est. 2024</p>
                </div>
              </div>
              <p className="text-gray-400">
                Engineering excellence for modern agricultural operations. 
                Specialized solutions for chicken and pork farming.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Facility Design</li>
                <li>System Integration</li>
                <li>Compliance & Safety</li>
                <li>Project Management</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@poultrypigs.com</p>
                <p>Service: Nationwide</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Poultry & Pigs Services LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
