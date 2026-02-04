import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
            <Building2 className="w-5 h-5 text-secondary-foreground" />
          </div>
          <span className="font-display text-xl font-bold">Prestaclub</span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            Inicio
          </Link>
          <Link to="/deck" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            Deck Comercial
          </Link>
          <a href="#proceso" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            Proceso
          </a>
          <a href="#contacto" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contacto
          </a>
        </div>

        {/* CTA */}
        <Button variant="gold" size="sm">
          Solicitar diagnóstico
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
