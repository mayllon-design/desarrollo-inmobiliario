import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import logo from '../assets/logopresta.png';

const styles = {
  logoImg: {
    height: '40px', // Ajusta el tamaño que desees
    width: 'auto'
  }
};

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo Desarrollo Inmobiliario" style={styles.logoImg} />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-body text-sm text-black hover:text-primary transition-colors">
            Inicio
          </Link>
          <Link to="/deck" className="font-body text-sm text-black hover:text-primary transition-colors">
            Deck Comercial
          </Link>
          <a href="#proceso" className="font-body text-sm text-black hover:text-primary transition-colors">
            Proceso
          </a>
          <a href="#contacto" className="font-body text-sm text-black hover:text-primary transition-colors">
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
