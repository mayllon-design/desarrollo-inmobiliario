import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-8 md:p-16 rounded-3xl bg-gradient-card border border-secondary/20 shadow-elevated relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <span className="text-secondary font-body text-sm uppercase tracking-wider mb-4 block">
                ¿Listo para estructurar?
              </span>
              
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                Solicita un diagnóstico de tu{" "}
                <span className="text-gradient-gold">proyecto</span>
              </h2>
              
              <p className="text-muted-foreground font-body text-lg mb-8 max-w-2xl mx-auto">
                Sin compromiso. Evaluamos la viabilidad de tu proyecto y te presentamos opciones de estructuración financiera.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button variant="hero">
                  Solicitar diagnóstico
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="heroOutline">
                  Descargar checklist
                </Button>
              </div>

              {/* Contact info */}
              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border">
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-secondary" />
                  <span className="font-body">+51 1 234 5678</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-secondary" />
                  <span className="font-body">contacto@prestaclub.pe</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="font-body">Lima, Perú</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
