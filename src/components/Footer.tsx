import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-navy-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <Building2 className="w-5 h-5 text-secondary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">Prestaclub</span>
            </Link>
            <p className="text-muted-foreground font-body text-sm max-w-md">
              Financiamiento estructurado para desarrollo inmobiliario. 
              Capital con garantía hipotecaria, otorgado por fondos de inversión.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground font-body text-sm hover:text-secondary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/deck" className="text-muted-foreground font-body text-sm hover:text-secondary transition-colors">
                  Deck Comercial
                </Link>
              </li>
              <li>
                <a href="#proceso" className="text-muted-foreground font-body text-sm hover:text-secondary transition-colors">
                  Proceso
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground font-body text-sm">
                  Términos y condiciones
                </span>
              </li>
              <li>
                <span className="text-muted-foreground font-body text-sm">
                  Política de privacidad
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground font-body text-sm">
            © {new Date().getFullYear()} Prestaclub. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground font-body text-xs">
            Condiciones sujetas a evaluación. Capital otorgado por fondos de inversión.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
