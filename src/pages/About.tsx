import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Shield, Zap, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import officeImg from "@/assets/images/about/office.jpg";
import teamImg from "@/assets/images/about/team.jpg";
import processImg from "@/assets/images/about/process.jpg";
import aboutBg from "@/assets/images/about/aboutbg.png";

const values = [
  "Transparent pricing with zero hidden charges",
  "Live MCX market rate-based pricing",
  "Instant payment via cash or bank transfer",
  "Advanced XRF purity testing technology",
  "Over 10 years of industry experience",
  "Trusted by 5000+ customers",
];

const About = () => {
  return (
    <div className="theme-light bg-background text-foreground">
      {/* Hero — warm light with image */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutBg} className="w-full h-full object-cover" alt="About SS Gold Hub" loading="eager" />
          <div className="absolute inset-0 bg-white/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="label-gold mb-6 block w-fit">About Us</span>
              <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight text-foreground">
                The People Behind <span className="gold-gradient-text">SS Gold Hub</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                SS Gold Hub is a trusted gold-buying business offering fair prices, complete transparency, and instant payments across Telangana and Andhra Pradesh.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <AnimatedSection direction="left" className="lg:col-span-2">
              <div className="relative">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  src={teamImg}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                  alt="Our team"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-xl hidden lg:block" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" className="lg:col-span-3">
              <span className="label-gold mb-4 block w-fit">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Trusted Gold Buyers Since Day One</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                SS Gold Hub was founded with a simple mission: to provide honest, transparent, and fair gold buying services. We understand that selling gold is a significant financial decision, and we're committed to making the process as smooth and rewarding as possible.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of experienced professionals uses state-of-the-art XRF technology to accurately determine the purity of your gold, ensuring you receive the best possible price based on live market rates.
              </p>
              <Link to="/contact" className="btn-gold inline-flex items-center gap-2">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us — cards on light gray */}
      <section className="py-24 md:py-32 section-elevated">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="label-gold mb-4 block w-fit">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">The SS Gold Hub Advantage</h2>
              <ul className="space-y-3">
                {values.map((val, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-all"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{val}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                src={processImg}
                className="w-full h-[450px] object-cover rounded-2xl shadow-xl"
                alt="Our process"
                loading="lazy"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "5000+", label: "Happy Customers" },
              { num: "10+", label: "Years Experience" },
              { num: "₹50Cr+", label: "Gold Purchased" },
              { num: "100%", label: "Transparent" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">{stat.num}</div>
                <div className="text-muted-foreground text-sm tracking-wide">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="label-gold mb-4 block mx-auto w-fit">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">How We Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures you get the best value for your gold with minimal hassle.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Evaluation", desc: "Bring your gold or call us for a doorstep evaluation. We assess purity using XRF technology.", icon: Shield, img: teamImg },
              { num: "02", title: "Fair Pricing", desc: "We calculate the price based on live MCX market rates — completely transparent.", icon: Award, img: processImg },
              { num: "03", title: "Instant Payment", desc: "Once you agree, receive payment immediately via cash or direct bank transfer.", icon: Zap, img: officeImg },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative h-[380px] overflow-hidden rounded-2xl shadow-lg"
                >
                  <img src={item.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute bottom-0 p-8 text-left">
                    <span className="text-5xl font-serif font-bold text-white/20">{item.num}</span>
                    <h3 className="text-2xl font-serif mt-2 mb-3 text-white">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
