import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Award, Zap, Users, CheckCircle, ArrowRight, MapPin, TrendingUp, Clock, Wallet, Eye, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/images/hero/hero-bg.jpg";
import goldBuying from "@/assets/images/services/gold-buying.jpg";
import pledgedGold from "@/assets/images/services/pledged-gold.jpg";
import goldValuation from "@/assets/images/services/gold-valuation.jpg";
import teamImg from "@/assets/images/about/team.jpg";

const stats = [
  { number: "5000+", label: "Happy Customers" },
  { number: "₹50Cr+", label: "Gold Processed" },
  { number: "10+", label: "Years Experience" },
  { number: "100%", label: "Satisfaction" },
];

const services = [
  { title: "Gold Buying", img: goldBuying, desc: "Instant liquidity for your jewelry with real-time market pricing and transparent valuation." },
  { title: "Pledged Gold Release", img: pledgedGold, desc: "We help you release your gold from banks or pawnbrokers quickly and hassle-free." },
  { title: "Instant Valuation", img: goldValuation, desc: "Scientific testing ensuring 100% accuracy in purity checks using XRF technology." },
];

const whyChoose = [
  { icon: Shield, title: "Transparent Process", desc: "No hidden charges. Every step is visible to you." },
  { icon: Award, title: "Best Market Rates", desc: "We offer prices based on live MCX gold rates." },
  { icon: Zap, title: "Instant Payment", desc: "Get paid immediately via cash or bank transfer." },
  { icon: Users, title: "Doorstep Service", desc: "We come to your location anywhere in TS & AP." },
];

const process = [
  { step: "01", title: "Evaluation of Pledge Ticket", desc: "Share your pledge ticket details with us for initial evaluation and loan amount verification." },
  { step: "02", title: "Physical Verification", desc: "Our team visits your doorstep for physical verification and documentation of your pledged gold." },
  { step: "03", title: "Get Advance Amount", desc: "Receive an advance payment to help release your gold from the bank or finance company." },
  { step: "04", title: "Purity Test", desc: "Professional purity testing of your gold to determine the exact market value and grade." },
  { step: "05", title: "Receive Balance Amount", desc: "Get instant payment for the balance amount via cash or direct bank transfer." },
];

const detailedFeatures = [
  { icon: MapPin, title: "Doorstep Service", desc: "We come to your location for evaluation and verification. No need to travel." },
  { icon: TrendingUp, title: "Best Market Gold Price", desc: "Get the highest market rates based on live gold prices. Fair and transparent pricing." },
  { icon: Clock, title: "No Waiting Time", desc: "Quick processing and instant decisions. Your time is valuable to us." },
  { icon: Wallet, title: "Instant Payment", desc: "Receive payment immediately via cash or direct bank transfer on the spot." },
  { icon: Eye, title: "Transparent Process", desc: "Complete transparency at every step. No hidden charges or surprises." },
];

const trustStats = [
  { value: "100%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Available Service" },
  { value: "30min", label: "Quick Process" },
  { value: "5000+", label: "Happy Customers" },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} className="w-full h-full object-cover scale-105" alt="Gold bars in vault" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-2xl"
          >
            <span className="label-gold mb-4 block w-fit">Serving Telangana &amp; Andhra Pradesh</span>
            <span className="label-gold mb-8 block w-fit">Trusted Gold Buyers</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.95] mb-8">
              Sell Your Gold{" "}
              <span className="gold-gradient-text italic block mt-3">For Instant Cash</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
              Get the best market value with a transparent, secure, and professional valuation process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-gold text-center">Sell Gold Now</Link>
              <Link to="/contact" className="btn-outline-gold text-center">Contact Us</Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 border border-primary/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-16 border-y border-primary/10 section-darker">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-xs text-muted-foreground tracking-wider uppercase">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
              <div>
                <span className="label-gold mb-4 block w-fit">What We Do</span>
                <h2 className="text-4xl md:text-5xl font-serif">Our Expertise</h2>
              </div>
              <div className="hidden md:block h-px bg-primary/20 flex-1 mx-12 mb-4" />
              <Link to="/services" className="text-primary text-sm tracking-wider uppercase font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.15} direction="scale">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative h-[450px] md:h-[500px] overflow-hidden gold-border"
                >
                  <img src={s.img} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt={s.title} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-crimson/90 via-background/30 to-transparent" />
                  <div className="absolute bottom-0 p-8">
                    <h3 className="text-2xl md:text-3xl font-serif mb-4">{s.title}</h3>
                    <p className="text-foreground/60 mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-sm">
                      {s.desc}
                    </p>
                    <div className="w-12 h-1 bg-primary rounded-full" />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 md:py-32 section-elevated">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="label-gold mb-4 block mx-auto w-fit">Why SS Gold Hub</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">The Gold Standard in Trust</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with decades of expertise to deliver an unmatched gold buying experience.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-8 gold-border bg-card hover:bg-muted/50 transition-all duration-300 group gold-glow-hover h-full">
                  <item.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-serif mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="label-gold mb-4 block mx-auto w-fit">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-serif">Our Simple Process</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.12} direction="up">
                <div className="relative p-6 text-center">
                  <div className="text-5xl font-serif font-bold text-primary/30 mb-4">{item.step}</div>
                  <h3 className="text-lg font-serif mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                  {i < process.length - 1 && (
                    <div className="hidden md:block absolute top-14 -right-3 w-6 h-px bg-primary/30" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED WHY CHOOSE */}
      <section className="py-24 md:py-32 section-darker border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="mb-10">
                <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                  Why Choose <span className="text-primary">SS Gold Hub?</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to providing the best gold release and buying services across Telangana and Andhra Pradesh with unmatched customer service and competitive pricing.
                </p>
              </div>

              <div className="space-y-8">
                {detailedFeatures.map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 bg-primary/10 p-2.5 h-fit gold-border">
                      <f.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl mb-1">{f.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4 mb-8">
                {trustStats.map((stat, i) => (
                  <div key={i} className="p-6 bg-card gold-border text-center">
                    <div className="text-2xl font-serif font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-gradient-to-br from-primary to-accent gold-border text-primary-foreground shadow-2xl">
                <h3 className="text-2xl font-serif font-bold mb-4">Trusted by Thousands</h3>
                <p className="text-sm mb-6 opacity-90">
                  Serving customers across Telangana and Andhra Pradesh with excellence.
                </p>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider opacity-80">(5-Star Rating)</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={teamImg} className="w-full h-full object-cover" alt="Professional consultation" loading="lazy" />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Ready to Sell Your Gold?</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Get the best value for your gold today. Our experts are standing by for a free, no-obligation valuation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8121865151" className="btn-gold text-center">Call Now → 8121865151</a>
              <Link to="/contact" className="btn-outline-gold text-center">Visit Our Office</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;
