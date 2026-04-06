import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, BarChart3, Zap, Leaf, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Drone3D from "@/components/Drone3D";

/**
 * AgriLoop: AI-Driven Precision Agriculture
 * Design: Organic Tech Aesthetic
 * Color Scheme: Forest Green (#2D5016), Terracotta (#C85A3A), Lime Green (#9ACD32)
 * Typography: Playfair Display (headings) + Poppins (body)
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [dronePosition, setDronePosition] = useState(0);
  const [showDrone, setShowDrone] = useState(false);
  const techSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Drone animation from hero to tech section
      if (techSectionRef.current) {
        const droneStart = 200; // Start showing drone at 200px scroll
        const droneEnd = techSectionRef.current.offsetTop; // End at tech section
        const currentScroll = window.scrollY;
        
        if (currentScroll >= droneStart && currentScroll <= droneEnd) {
          const scrollProgress = (currentScroll - droneStart) / (droneEnd - droneStart);
          setDronePosition(Math.min(scrollProgress * 100, 100));
          setShowDrone(true);
        } else if (currentScroll < droneStart) {
          setDronePosition(0);
          setShowDrone(false);
        } else {
          setDronePosition(100);
          setShowDrone(false);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
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
            <span className="text-xl font-bold text-primary">AgriLoop</span>
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
        <div className="absolute inset-0 -z-10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030816121/cskiKSwKZ7a4oDETY7KpWS/agritech_hero-kysKyiGakraEcm5VT2XPNo.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight drop-shadow-lg">
              Engineer the Future of Agriculture
            </h1>
            <p className="text-xl text-foreground mb-8 font-light drop-shadow-md">
              AgriLoop combines AI, IoT, and precision farming to help Algerian farmers maximize yields, conserve water, and embrace sustainable agriculture.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => setShowContactForm(true)}
              >
                Explore Platform <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Animated Drone */}
      <Drone3D dronePosition={dronePosition} showDrone={showDrone} />

      {/* Wave Divider */}
      <div className="wave-divider"></div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why AgriLoop?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Bridging traditional farming wisdom with cutting-edge technology to solve Algeria's agricultural challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 hover:bg-white/20 transition">
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6">
                <Droplets className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Smart Water Management</h3>
              <p className="opacity-90">
                Real-time soil moisture monitoring reduces water waste by up to 40% while maintaining optimal crop health.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 hover:bg-white/20 transition">
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI-Powered Insights</h3>
              <p className="opacity-90">
                Predictive analytics for crop disease detection, yield forecasting, and optimal harvest timing.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 hover:bg-white/20 transition">
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Automated Systems</h3>
              <p className="opacity-90">
                IoT-enabled irrigation automation and real-time alerts keep your farm running efficiently 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Built on Modern Technology</h2>
              <p className="text-lg text-muted-foreground mb-6">
                AgriLoop leverages the latest advancements in IoT sensors, machine learning, and cloud computing to deliver real-time agricultural intelligence.
              </p>
              <ul className="space-y-4">
                {[
                  "Advanced IoT Sensor Network",
                  "Machine Learning Models",
                  "Real-Time Data Processing",
                  "Mobile & Web Applications",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 flex items-center justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030816121/cskiKSwKZ7a4oDETY7KpWS/agriloop_iot_sensor_device-9z6kSWcocaadoBia3y9MMv.webp"
                  alt="AgriLoop IoT Sensor Device"
                  className="w-64 h-64 object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sensor Integration Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030816121/cskiKSwKZ7a4oDETY7KpWS/agriloop_drone_watering_crops-ZN3ZAYpXRWAe8Wj8SV6rVq.webp"
                alt="AgriLoop Drone Watering Crops"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Seamless Nature & Technology Integration</h2>
              <p className="text-lg opacity-90 mb-6">
                AgriLoop bridges the gap between traditional farming practices and modern digital systems. Our sensors work in harmony with nature, collecting real-time data from soil, water, and atmosphere.
              </p>
              <div className="space-y-4">
                {[
                  "Soil moisture & nutrient analysis",
                  "Real-time water flow monitoring",
                  "Environmental data collection",
                  "Automated decision-making algorithms",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent-foreground text-sm">✓</span>
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transforming Agriculture in Algeria</h2>
            <p className="text-lg opacity-90">
              Our mission is to empower farmers with technology that drives sustainability and prosperity.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "+40%", label: "Water Savings" },
              { number: "+35%", label: "Yield Increase" },
              { number: "24/7", label: "Monitoring" },
              { number: "100%", label: "Organic Ready" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold mb-2 text-secondary-foreground">{stat.number}</div>
                <p className="opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030816121/cskiKSwKZ7a4oDETY7KpWS/agritech_iot_sensors_6a1e4c08.png"
                alt="AgriLoop IoT Sensors and Mobile Dashboard"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Real-Time Analytics Dashboard</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Monitor every aspect of your farm from your smartphone or desktop. Get actionable insights delivered instantly.
              </p>
              <div className="space-y-4">
                {[
                  "Soil moisture & temperature tracking",
                  "Crop health monitoring via satellite imagery",
                  "Predictive disease alerts",
                  "Automated irrigation scheduling",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section ref={techSectionRef} className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powered by Innovation</h2>
            <p className="text-lg opacity-90">
              AgriLoop integrates cutting-edge technologies to deliver unmatched agricultural insights.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030816121/cskiKSwKZ7a4oDETY7KpWS/agriloop_abstract_tech-GHGM3f8yzUSA4g42ykX2fq.webp"
              alt="Technology Stack"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Ready to Transform Your Farm?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the agricultural revolution. Start your free trial today and see how AgriLoop can increase your yields while conserving resources.
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

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold text-primary">Get Started with AgriLoop</h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">✓</div>
                  <p className="text-lg font-semibold text-primary">Thank you!</p>
                  <p className="text-gray-600">We'll be in touch shortly.</p>
                </div>
              ) : (
                <>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    Send Message
                  </Button>
                </>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">AgriLoop</h4>
              <p className="opacity-90">Transforming agriculture through AI and IoT innovation.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 opacity-90">
                <li><a href="#features" className="hover:opacity-100">Features</a></li>
                <li><a href="#technology" className="hover:opacity-100">Technology</a></li>
                <li><a href="#impact" className="hover:opacity-100">Impact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 opacity-90">
                <li><a href="#" className="hover:opacity-100">About</a></li>
                <li><a href="#" className="hover:opacity-100">Blog</a></li>
                <li><a href="#" className="hover:opacity-100">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 opacity-90">
                <li><a href="#" className="hover:opacity-100">Privacy</a></li>
                <li><a href="#" className="hover:opacity-100">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center opacity-90">
            <p>&copy; 2026 AgriLoop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
