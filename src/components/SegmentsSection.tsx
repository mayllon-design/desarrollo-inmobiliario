import { motion } from "framer-motion";
import { Building2, Users, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const segments = [
  {
    icon: Building2,
    tier: "Tier A",
    title: "Desarrollador institucional",
    subtitle: "Tickets > S/ 500,000",
    characteristics: [
      "2-5 proyectos activos",
      "Relación bancaria existente",
      "Decisiones rápidas"
    ],
    message: "Optimiza tu estructura financiera sin frenar obra ni comercialización",
    priority: "Máxima prioridad"
  },
  {
    icon: Users,
    tier: "Tier B",
    title: "Desarrollador patrimonial",
    subtitle: "Tickets > S/ 200,000",
    characteristics: [
      "Socios personas naturales",
      "Uso intensivo de activos propios",
      "1-3 proyectos"
    ],
    message: "Obtén liquidez con tu activo inmobiliario sin perder control del proyecto",
    priority: "Prioridad media"
  },
  {
    icon: Target,
    tier: "Tier C",
    title: "Constructor oportunista",
    subtitle: "Project-based",
    characteristics: [
      "Proyecto puntual",
      "Alta urgencia",
      "Garantía clara"
    ],
    message: "Liquidez con garantía para sacar adelante tu proyecto",
    priority: "Inbound calificado"
  }
];

const SegmentsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-body text-sm uppercase tracking-wider mb-4 block">
            Segmentación
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            ¿Quién <span className="text-gradient-gold">califica</span>?
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            No todos los desarrolladores son clientes potenciales. Trabajamos con desarrolladores que cumplen criterios específicos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-gold ${
                index === 0 
                  ? 'bg-gradient-card border-secondary/30 shadow-gold' 
                  : 'bg-card border-border hover:border-secondary/30'
              }`}
            >
              {/* Tier badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-body mb-4 ${
                index === 0 
                  ? 'bg-secondary/20 text-secondary' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                <span className="font-semibold">{segment.tier}</span>
                <span>•</span>
                <span>{segment.priority}</span>
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                index === 0 ? 'bg-secondary/20' : 'bg-muted'
              }`}>
                <segment.icon className={`w-6 h-6 ${index === 0 ? 'text-secondary' : 'text-muted-foreground'}`} />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold mb-1">{segment.title}</h3>
              <p className={`text-sm font-body mb-4 ${index === 0 ? 'text-secondary' : 'text-muted-foreground'}`}>
                {segment.subtitle}
              </p>

              {/* Characteristics */}
              <ul className="space-y-2 mb-6">
                {segment.characteristics.map((char) => (
                  <li key={char} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                    <span className="text-secondary">•</span>
                    {char}
                  </li>
                ))}
              </ul>

              {/* Message */}
              <div className={`p-4 rounded-lg ${index === 0 ? 'bg-secondary/10' : 'bg-muted/50'}`}>
                <p className="text-sm font-body italic">"{segment.message}"</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="lg">
            Evaluar mi proyecto
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SegmentsSection;
