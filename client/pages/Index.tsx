import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import salesImg from "@/assets/sales.png";
import storyImg from "@/assets/story.png";
import team1Img from "@/assets/team1.png";
import team2Img from "@/assets/team2.png";
import team3Img from "@/assets/team3.png";


export default function Index() {
  return (
    <div className="w-full bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-bold text-lg">Closer</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-foreground hover:text-primary">
              Features
            </a>
            <a href="#story" className="text-sm text-foreground hover:text-primary">
              About
            </a>
            <a href="#team" className="text-sm text-foreground hover:text-primary">
              Team
            </a>
            <a href="#pricing" className="text-sm text-foreground hover:text-primary">
              Pricing
            </a>
          </nav>
          <Link to="/get-started">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                Wanting it shouldn't take forever.
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Build the sales powerhouse that's right for your business. Work with
                the flexibility you want in a platform built to be easy to use.
              </p>
              <div className="flex gap-4">
                <Link to="/get-started">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
                    Get Started Today
                  </Button>
                </Link>
                <Button variant="outline" className="px-6">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md w-full border border-border">
                <div className="mb-4 flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-5 h-5 bg-primary rounded-full" />
                  </div>
                  <span className="text-sm font-semibold text-primary">Getting Started</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Welcome to Closer</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Let's get your business details set up so we can personalize your experience.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <span className="text-sm">Business Details</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <span className="text-sm">Location & Currency</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <span className="text-sm">Connect WhatsApp</span>
                  </div>
                </div>
                <Link to="/get-started">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Continue Setup
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10k+</div>
              <p className="text-primary-foreground/80 text-sm">Active Users</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">N2.5B+</div>
              <p className="text-primary-foreground/80 text-sm">Revenue Processed</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">&lt;5secs</div>
              <p className="text-primary-foreground/80 text-sm">Response Time</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
              <p className="text-primary-foreground/80 text-sm">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to close sales</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform provides all the tools you need to manage your sales pipeline effectively
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📊",
                title: "Automated Sales",
                description: "Streamline your sales process with intelligent automation"
              },
              {
                icon: "⚡",
                title: "Instant Auto Response",
                description: "Never miss a lead with instant automated responses"
              },
              {
                icon: "🔐",
                title: "Sell on AutoPilot",
                description: "Let your system work for you 24/7"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-secondary/30 rounded-xl p-8 border border-secondary">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Selling Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={salesImg} 
                alt="Sales Process" 
                className="rounded-lg w-full h-96 object-cover shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Start selling in minutes</h2>
              <p className="text-muted-foreground mb-8">
                Our intuitive setup process gets you selling in just minutes, not hours or days.
              </p>
              <div className="space-y-4">
                {[
                  "Create your account",
                  "Add your products",
                  "Connect WhatsApp",
                  "Start closing sales"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white p-4 rounded-lg border border-border">
                  <div className="font-semibold text-primary mb-1">Lightning fast</div>
                  <p className="text-muted-foreground">See results immediately</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-border">
                  <div className="font-semibold text-primary mb-1">Fully secure</div>
                  <p className="text-muted-foreground">Enterprise-grade security</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by vendors across Africa</h2>
            <p className="text-muted-foreground">
              See what our customers have to say about transforming their sales
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ojiyi Ezemma",
                role: "Business Owner",
                avatar: "OE",
                text: "Closer has completely transformed how I manage my sales. It's simple, powerful, and gets the job done."
              },
              {
                name: "Tunde Adejare",
                role: "Sales Manager",
                avatar: "TA",
                text: "The automation features have saved us countless hours. Our team can focus on what matters most."
              },
              {
                name: "Amara Nwankwo",
                role: "Entrepreneur",
                avatar: "AN",
                text: "Finally, a platform built for African businesses. Closer understands our market perfectly."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-muted-foreground mb-8">Trusted by leading brands</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {["Brand 1", "Brand 2", "Brand 3", "Brand 4"].map((brand, i) => (
              <div key={i} className="text-gray-400 font-semibold">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Future of Commerce Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We're building the future of African commerce
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our mission is to empower African entrepreneurs with world-class sales tools that level the playing field and drive growth.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Closer was born from a simple frustration: existing sales tools weren't built for African businesses. They were expensive, complex, and ignored the unique challenges we face.
              </p>
              <p className="text-muted-foreground">
                We set out to build something different. A platform that's affordable, intuitive, and designed specifically for how African entrepreneurs do business. Today, we're proud to serve thousands of businesses across the continent.
              </p>
            </div>
            <img 
              src={storyImg}
              alt="Our Story"
              className="rounded-lg w-full h-64 object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Drives Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Accessibility",
                desc: "Tools that work for everyone, regardless of size"
              },
              {
                title: "Simplicity",
                desc: "Complex problems deserve elegant solutions"
              },
              {
                title: "Empowerment",
                desc: "Building tools that unlock human potential"
              },
              {
                title: "Impact",
                desc: "Creating real value for African businesses"
              }
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-primary rounded" />
                </div>
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Emmanuel Daniel", 
                role: "Founder & CEO",
                image: team1Img
              },
              { 
                name: "Chikaeze Anigbo", 
                role: "CTO",
                image: team2Img
              },
              { 
                name: "Fayemi Taiwo", 
                role: "Head of Product",
                image: team3Img
              }
            ].map((member, i) => (
              <div key={i} className="text-center">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover rounded-lg mb-6 shadow-md" />
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to close more sales?</h2>
          <Link to="/get-started">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="font-bold">Closer</span>
              </div>
              <p className="text-sm text-muted-foreground">Building the future of African commerce</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Features</a></li>
                <li><a href="#" className="hover:text-primary">Pricing</a></li>
                <li><a href="#" className="hover:text-primary">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Privacy</a></li>
                <li><a href="#" className="hover:text-primary">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Closer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
