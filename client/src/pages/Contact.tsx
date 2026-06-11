import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, MapPin, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Let's Connect</h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Have a project in mind or want to discuss an opportunity?
                I'm always open to new challenges and collaborations.
              </p>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center p-8 bg-card rounded-3xl border border-border shadow-lg"
                >
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary mb-4">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Email</h3>
                  <a href="mailto:ybrundareddy2006@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm break-all">ybrundareddy2006@gmail.com</a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center p-8 bg-card rounded-3xl border border-border shadow-lg"
                >
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary mb-4">
                    <Linkedin className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/brundareddy/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">linkedin.com/in/brundareddy</a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center p-8 bg-card rounded-3xl border border-border shadow-lg"
                >
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary mb-4">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Location</h3>
                  <p className="text-muted-foreground text-sm">Tirupati, India</p>
                </motion.div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card rounded-3xl border border-border shadow-lg p-8 text-left"
              >
                <h2 className="text-2xl font-bold font-display mb-6 text-center">Send a Message</h2>
                <form action="https://formspree.io/f/maqzpydw" method="POST" className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
