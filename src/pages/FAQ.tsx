import { useState } from "react";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import faqHeroImg from "@/assets/images/faq/faq-hero.jpg";

const faqs = [
  {
    q: "How do you determine the price of gold?",
    a: "We use XRF (X-Ray Fluorescence) technology to determine exact purity without damaging your jewelry, paired with live MCX market rates. This ensures you get the most accurate and fair price for your gold.",
  },
  {
    q: "What types of gold do you buy?",
    a: "We buy all types of gold including jewelry (new and old), gold coins, gold bars, broken jewelry, and even gold with stones. We accept gold of all purities — 24K, 22K, 18K, and below.",
  },
  {
    q: "How long does the process take?",
    a: "The entire process — from evaluation to payment — typically takes 15-30 minutes. We value your time and ensure a quick, hassle-free experience.",
  },
  {
    q: "What is pledged gold release?",
    a: "If you have gold pledged in a bank or finance company, we help you release it by paying off the outstanding loan amount. Once released, we purchase the gold at live market rates and pay you the balance instantly.",
  },
  {
    q: "Do you provide doorstep service?",
    a: "Yes, we offer doorstep evaluation services for large quantities of gold. Our expert team will visit your location for gold evaluation and verification. Contact us to schedule a visit.",
  },
  {
    q: "Is my gold safe during the evaluation?",
    a: "Absolutely. Our XRF testing is completely non-destructive — your gold remains in its original condition throughout the testing process. The entire evaluation is done in your presence.",
  },
  {
    q: "What payment methods do you offer?",
    a: "We offer multiple payment options including instant cash, NEFT/RTGS bank transfer, UPI, and cheque. You can choose whichever method is most convenient for you.",
  },
  {
    q: "Are there any hidden charges?",
    a: "No, there are absolutely no hidden charges. The price we quote after evaluation is the final amount you receive. We believe in complete transparency in all our transactions.",
  },
  {
    q: "Which areas do you serve?",
    a: "We serve customers across Telangana and Andhra Pradesh, with our headquarters in Hyderabad. We also offer doorstep service for customers in nearby areas.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="theme-light bg-background text-foreground">
      {/* Hero — centered with image overlay */}
      <section className="relative py-36 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img src={faqHeroImg} className="w-full h-full object-cover" alt="Gold consultation" loading="eager" />
          <div className="absolute inset-0 bg-white/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 text-foreground">Got Questions?</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find answers to common questions about our gold buying and valuation services.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.04}>
                <div
                  className={`bg-card border border-border rounded-xl transition-all duration-300 shadow-sm hover:shadow-md ${
                    openIndex === i ? "shadow-md ring-1 ring-primary/20" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left gap-4"
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-primary/50 font-serif text-lg font-bold">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-serif text-lg md:text-xl text-foreground">{faq.q}</span>
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-primary shrink-0" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4 ml-12">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-elevated">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="bg-card border border-border rounded-2xl p-12 md:p-16 shadow-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-4xl font-serif mb-4 text-foreground">Still Have Questions?</h2>
              <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
                Our team is happy to help. Reach out to us anytime for personalized assistance.
              </p>
              <a href="tel:8121865151" className="btn-gold inline-block">Call Us → 8121865151</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
