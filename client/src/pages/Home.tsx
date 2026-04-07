import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, BarChart3, Zap, Leaf, X } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Verda AI: AI-Driven Precision Agriculture
 * Design: Organic Tech Aesthetic (Simplified)
 * Color Scheme: Forest Green (#2D5016), Terracotta (#C85A3A), Lime Green (#9ACD32)
 * Typography: Playfair Display (headings) + Poppins (body)
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setShowContactForm(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">Verda AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition">
              Features
            </a>
            <a href="#technology" className="text-foreground hover:text-primary transition">
              Technology
            </a>
            <a href="#impact" className="text-foreground hover:text-primary transition">
              Impact
            </a>
            <Button className="bg-primary hover:bg-primary/90" onClick={() => setShowContactForm(true)}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Engineer the Future of Agriculture
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              Verda AI combines AI, IoT, and precision farming to help Algerian farmers maximize yields, conserve water, and embrace sustainable agriculture.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90"
                onClick={() => setShowContactForm(true)}
              >
                Explore Platform <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => setShowContactForm(true)}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider"></div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Verda AI?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm hover:bg-white/20 transition">
              <Droplets className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-2xl font-bold mb-3">Smart Water Management</h3>
              <p className="text-primary-foreground/90">
                Real-time soil moisture monitoring reduces water waste by up to 40% while maintaining optimal crop health.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm hover:bg-white/20 transition">
              <BarChart3 className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-2xl font-bold mb-3">AI-Powered Insights</h3>
              <p className="text-primary-foreground/90">
                Predictive analytics for crop disease detection, yield forecasting, and optimal harvest timing.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm hover:bg-white/20 transition">
              <Zap className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-2xl font-bold mb-3">Automated Systems</h3>
              <p className="text-primary-foreground/90">
                IoT-enabled irrigation automation and real-time alerts keep your farm running efficiently 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider"></div>

      {/* Technology Section */}
      <section id="technology" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Built on Modern Technology</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.example.com/iot-sensor.png" 
                alt="IoT Sensor Device" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Verda AI leverages the latest advancements in IoT sensors, machine learning, and cloud computing to deliver real-time agricultural intelligence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Advanced IoT Sensor Network</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Machine Learning Models</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Real-Time Data Processing</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Mobile & Web Applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider"></div>

      {/* Sensor Integration Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Seamless Nature & Technology Integration</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.example.com/drone-watering.png" 
                alt="Drone Watering Crops" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Verda AI bridges the gap between traditional farming practices and modern digital systems. Our sensors work in harmony with nature, collecting real-time data from soil, water, and atmosphere.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Soil moisture & nutrient analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Real-time water flow monitoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Environmental data collection</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Automated decision-making algorithms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider"></div>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Transforming Agriculture in Algeria</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">+40%</div>
              <p className="text-primary-foreground/90">Water Savings</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">+35%</div>
              <p className="text-primary-foreground/90">Yield Increase</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-primary-foreground/90">Monitoring</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-primary-foreground/90">Organic Ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider"></div>

      {/* Analytics Dashboard Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Real-Time Analytics Dashboard</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.example.com/dashboard.png" 
                alt="Analytics Dashboard" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Monitor every aspect of your farm from your smartphone or desktop. Get actionable insights delivered instantly.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Soil moisture & temperature tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Crop health monitoring via satellite imagery</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Predictive disease alerts</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Automated irrigation scheduling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider"></div>

      {/* Technology Stack Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">Powered by Innovation</h2>
          <p className="text-center text-primary-foreground/90 max-w-2xl mx-auto mb-12">
            Verda AI integrates cutting-edge technologies to deliver unmatched agricultural insights.
          </p>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider"></div>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Farm?</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join the agricultural revolution. Start your free trial today and see how Verda AI can increase your yields while conserving resources.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => setShowContactForm(true)}
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setShowContactForm(true)}
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider"></div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#features" className="hover:text-primary-foreground transition">Features</a></li>
                <li><a href="#technology" className="hover:text-primary-foreground transition">Technology</a></li>
                <li><a href="#impact" className="hover:text-primary-foreground transition">Impact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition">About</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition">Blog</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition">Privacy</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition">Twitter</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2026 Verda AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-bold">Get Started with Verda AI</h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                <p className="text-gray-600">We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Submit
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
