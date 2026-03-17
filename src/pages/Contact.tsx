import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Linkedin, Calendar } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import locationImg from "@/assets/images/contact/location.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will get back to you shortly.");
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={locationImg} className="w-full h-full object-cover" alt="Our location" loading="eager" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="label-gold mb-6 block mx-auto w-fit">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
              Visit our office or reach out to us for any inquiries about our gold services.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <AnimatedSection direction="left">
              <span className="label-gold mb-4 block w-fit">Contact Information</span>
              <h2 className="text-4xl font-serif mb-8">Let's Talk</h2>

              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-primary/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-1">Phone</h3>
                    <a href="tel:8121865151" className="text-muted-foreground font-sans hover:text-primary transition-colors block">8121865151</a>
                    <a href="tel:8106855151" className="text-muted-foreground font-sans hover:text-primary transition-colors block">8106855151</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-primary/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-1">Email</h3>
                    <a href="mailto:info@ssgoldhub.com" className="text-muted-foreground font-sans hover:text-primary transition-colors">info@ssgoldhub.com</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-1">Address</h3>
                    <p className="text-muted-foreground font-sans">
                      202, Srinivasa Plaza,<br />
                      Sri Nagar Colony Main Road,<br />
                      Punjagutta – 500082
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="p-6 gold-border bg-card gold-glow mb-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-primary">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-primary/10">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary/60" />
                      <span className="font-sans text-sm">Monday – Friday</span>
                    </div>
                    <span className="font-sans text-sm font-bold text-primary">10 AM – 7 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-primary/10">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary/60" />
                      <span className="font-sans text-sm">Saturday</span>
                    </div>
                    <span className="font-sans text-sm font-bold text-primary">10 AM – 7 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground/40" />
                      <span className="font-sans text-sm text-muted-foreground">Sunday</span>
                    </div>
                    <span className="font-sans text-sm font-bold text-destructive">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right">
              <div className="p-8 md:p-10 gold-border bg-card">
                <h2 className="text-3xl font-serif mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground font-sans text-sm mb-8">Fill in the form and we'll respond within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-sans font-bold mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-muted border border-primary/10 px-4 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-sans font-bold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-muted border border-primary/10 px-4 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-sans font-bold mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-muted border border-primary/10 px-4 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-sans font-bold mb-2">Service Required <span className="text-destructive">*</span></label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-muted border border-primary/10 px-4 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="gold-buying">Gold Buying</option>
                      <option value="pledged-gold-release">Pledged Gold Release</option>
                      <option value="gold-valuation">Gold Valuation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-sans font-bold mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-muted border border-primary/10 px-4 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      placeholder="Tell us about your gold..."
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 section-darker">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="gold-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3041543584256!2d78.44726!3d17.4296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c9a8c5e3a1%3A0x2b0a1f1f1f1f1f1f!2sSrinivasa%20Plaza%2C%20Sri%20Nagar%20Colony%20Main%20Rd%2C%20Punjagutta%2C%20Hyderabad%2C%20Telangana%20500082!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SS Gold Hub - 202 Srinivasa Plaza, Punjagutta, Hyderabad"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Contact;
