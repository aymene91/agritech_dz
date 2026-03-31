import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, BarChart3, Zap, Leaf } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * AgriTech-DZ: AI-Driven Precision Agriculture
 * Design: Organic Tech Aesthetic
 * Color Scheme: Forest Green (#2D5016), Terracotta (#C85A3A), Lime Green (#9ACD32)
 * Typography: Playfair Display (headings) + Poppins (body)
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <span className="text-xl font-bold text-primary">AgriTech-DZ</span>
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
            <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Engineer the Future of Agriculture
            </h1>
            <p className="text-xl text-white/90 mb-8 font-light">
              AgriTech-DZ combines AI, IoT, and precision farming to help Algerian farmers maximize yields, conserve water, and embrace sustainable agriculture.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
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

      {/* Wave Divider */}
      <div className="wave-divider"></div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why AgriTech-DZ?</h2>
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
                AgriTech-DZ leverages the latest advancements in IoT sensors, machine learning, and cloud computing to deliver real-time agricultural intelligence.
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
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030816121/cskiKSwKZ7a4oDETY7KpWS/agritech_iot_sensors-oYVEcUqq8WAR3WxxHPrGdE.webp"
                alt="IoT Sensors"
                className="rounded-xl shadow-lg"
              />
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
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <p className="opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030816121/cskiKSwKZ7a4oDETY7KpWS/agritech_data_visualization-awRCzLYEVBRHdTaigPxZdS.webp"
                alt="Data Visualization"
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
                  "Weather forecasting & alerts",
                  "Automated irrigation scheduling",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent-foreground text-sm">✓</span>
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Built by Innovators</h2>
            <p className="text-lg opacity-90">
              A team of engineers and farmers working together to revolutionize agriculture.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030816121/cskiKSwKZ7a4oDETY7KpWS/agritech_team_impact-DCwzn3duKLfDc8sKFEnXXk.webp"
              alt="Team"
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
            Join the agricultural revolution. Start your free trial today and see how AgriTech-DZ can increase your yields while conserving resources.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6" />
                <span className="font-bold">AgriTech-DZ</span>
              </div>
              <p className="opacity-75">Empowering Algerian farmers with AI-driven precision agriculture.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 opacity-75">
                <li><a href="#" className="hover:opacity-100">Features</a></li>
                <li><a href="#" className="hover:opacity-100">Pricing</a></li>
                <li><a href="#" className="hover:opacity-100">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 opacity-75">
                <li><a href="#" className="hover:opacity-100">About</a></li>
                <li><a href="#" className="hover:opacity-100">Blog</a></li>
                <li><a href="#" className="hover:opacity-100">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 opacity-75">
                <li><a href="#" className="hover:opacity-100">Privacy</a></li>
                <li><a href="#" className="hover:opacity-100">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-75">
            <p>&copy; 2026 AgriTech-DZ. All rights reserved. Transforming agriculture in Algeria.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
