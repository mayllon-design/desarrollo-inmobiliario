import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Building2, X, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Slide data based on the document structure
const slides = [
  {
    id: 1,
    type: "cover",
    title: "Financiamiento Estructurado",
    subtitle: "para Desarrollo Inmobiliario",
    description: "Capital con garantía hipotecaria, estructurado por Prestaclub y otorgado por fondos de inversión."
  },
  {
    id: 2,
    type: "problem",
    title: "El problema central",
    content: {
      headline: "No es falta de acceso al crédito",
      subheadline: "Es estructura financiera vs. timing del proyecto",
      points: [
        "El proyecto sí tiene valor, pero el valor no es líquido",
        "El flujo de caja no calza con desembolsos bancarios",
        "El banco evalúa riesgo ex post; el desarrollador necesita capital ex ante",
        "La obra, permisos, IGV, acabados y contingencias no esperan"
      ]
    }
  },
  {
    id: 3,
    type: "solution",
    title: "Nuestra propuesta",
    content: {
      headline: "Financiamiento correctamente estructurado",
      description: "En función del activo, del flujo y del ciclo del proyecto",
      proposition: "Estructuramos financiamiento para proyectos de desarrollo inmobiliario, utilizando garantías hipotecarias y capital proveniente de fondos de inversión, con esquemas de plazo y pago flexibles."
    }
  },
  {
    id: 4,
    type: "useCases",
    title: "Casos de uso",
    cases: [
      { name: "Complemento bancario", desc: "Banco financia obra, pero no IGV / acabados / contingencias" },
      { name: "Pre-banca", desc: "Proyecto aún no calza en banca, pero el activo es sólido" },
      { name: "Reperfilamiento financiero", desc: "Reordenamiento de pasivos de corto plazo" },
      { name: "Continuidad de obra", desc: "Liquidez estructurada para evitar paralización" }
    ]
  },
  {
    id: 5,
    type: "guarantee",
    title: "Garantía hipotecaria",
    content: {
      headline: "Activos que califican",
      points: [
        "Terreno urbano con habilitación",
        "Proyecto en desarrollo con avance",
        "Inmueble terminado para respaldo",
        "Partida registral saneada"
      ],
      ltv: "Hasta 40% del valor de realización"
    }
  },
  {
    id: 6,
    type: "process",
    title: "El proceso",
    steps: [
      { num: "01", name: "Precalificación", desc: "Validación inicial del proyecto y garantía" },
      { num: "02", name: "Diagnóstico", desc: "Análisis de viabilidad financiera" },
      { num: "03", name: "Evaluación Legal", desc: "Revisión de garantía hipotecaria" },
      { num: "04", name: "Estructuración", desc: "Diseño del financiamiento" },
      { num: "05", name: "Term Sheet", desc: "Aprobación del fondo" },
      { num: "06", name: "Desembolso", desc: "Contratos y liberación de fondos" }
    ]
  },
  {
    id: 7,
    type: "conditions",
    title: "Condiciones típicas",
    items: [
      { label: "LTV", value: "Hasta 40% del valor de realización" },
      { label: "Plazos", value: "Desde 3 meses" },
      { label: "Esquemas", value: "Solo interés + balón / Cuota fija" },
      { label: "Moneda", value: "Soles o Dólares" },
      { label: "Ticket mínimo", value: "S/ 200,000 o equivalente USD" }
    ],
    disclaimer: "Condiciones sujetas a evaluación del proyecto y del fondo."
  },
  {
    id: 8,
    type: "funds",
    title: "Fondos de inversión",
    content: {
      headline: "Capital institucional formal",
      points: [
        "Tickets altos y estructurados",
        "Proceso de evaluación profesional",
        "Seguridad jurídica para ambas partes",
        "Alineación de intereses con el proyecto"
      ],
      role: "Prestaclub actúa como estructurador legal-financiero y nexo, no como prestamista."
    }
  },
  {
    id: 9,
    type: "notFor",
    title: "Esto NO es para",
    points: [
      "Proyectos sin activo definido",
      "Necesidades de largo plazo tipo hipotecario bancario",
      "Búsquedas de 'crédito fácil' o rápido",
      "Tickets menores a S/ 200,000",
      "Proyectos sin estrategia de repago clara"
    ]
  },
  {
    id: 10,
    type: "cta",
    title: "Siguiente paso",
    content: {
      headline: "Solicita un diagnóstico de tu proyecto",
      description: "Evaluamos la viabilidad de tu proyecto y te presentamos opciones de estructuración financiera.",
      cta: "Sin compromiso • Confidencial • Profesional"
    }
  }
];

const Deck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(false);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setShowThumbnails(false);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-card/50 backdrop-blur-lg">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 flex items-center justify-center">
            <Building2 className="w-4 h-4 text-slate-900" />
          </div>
          <span className="font-display text-lg font-bold">Prestaclub</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <span className="text-muted-foreground font-body text-sm">
            {currentSlide + 1} / {slides.length}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowThumbnails(!showThumbnails)}
          >
            {showThumbnails ? <X className="w-5 h-5" /> : <Grid3X3 className="w-5 h-5" />}
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {showThumbnails ? (
            <motion.div
              key="thumbnails"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-8 overflow-auto"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                {slides.map((s, index) => (
                  <button
                    key={s.id}
                    onClick={() => goToSlide(index)}
                    className={`aspect-video rounded-lg border-2 p-4 transition-all hover:scale-105 ${
                      index === currentSlide 
                        ? 'border-secondary bg-secondary/10' 
                        : 'border-border bg-card hover:border-secondary/50'
                    }`}
                  >
                    <div className="text-xs text-muted-foreground mb-1">{index + 1}</div>
                    <div className="text-sm font-display font-semibold truncate">{s.title}</div>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <SlideContent slide={slide} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Navigation */}
      <footer className="h-16 border-t border-border flex items-center justify-between px-6 bg-card/50 backdrop-blur-lg">
        <Button
          variant="ghost"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          Anterior
        </Button>

        {/* Progress bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>

        <Button
          variant="gold"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="gap-2"
        >
          Siguiente
          <ChevronRight className="w-5 h-5" />
        </Button>
      </footer>
    </div>
  );
};

// Slide content component
const SlideContent = ({ slide }: { slide: typeof slides[0] }) => {
  switch (slide.type) {
    case "cover":
      return (
        <div className="deck-slide items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-400 flex items-center justify-center mx-auto mb-8">
              <Building2 className="w-10 h-10 text-slate-900" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-2">{slide.title}</h1>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-gradient-gold mb-8">{slide.subtitle}</h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl">{slide.description}</p>
          </motion.div>
        </div>
      );

    case "problem":
      return (
        <div className="deck-slide">
          <span className="text-secondary font-body text-sm uppercase tracking-wider mb-4">El reto</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
          <div className="mt-8 max-w-3xl">
            <p className="text-xl md:text-2xl font-display mb-2">{slide.content?.headline}</p>
            <p className="text-secondary font-body text-lg mb-8">{slide.content?.subheadline}</p>
            <ul className="space-y-4">
              {slide.content?.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3 font-body text-lg"
                >
                  <span className="text-secondary mt-1">→</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      );

    case "solution":
      return (
        <div className="deck-slide">
          <span className="text-secondary font-body text-sm uppercase tracking-wider mb-4">La solución</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
          <div className="mt-8 max-w-3xl">
            <p className="text-2xl font-display text-gradient-gold mb-2">{slide.content?.headline}</p>
            <p className="text-muted-foreground font-body text-lg mb-8">{slide.content?.description}</p>
            <blockquote className="p-6 rounded-xl bg-card border border-secondary/30 shadow-[0_4px_30px_hsl(38_92%_50%_/_0.15)]">
              <p className="font-display text-lg md:text-xl italic">{slide.content?.proposition}</p>
            </blockquote>
          </div>
        </div>
      );

    case "useCases":
      return (
        <div className="deck-slide">
          <span className="text-secondary font-body text-sm uppercase tracking-wider mb-4">Aplicaciones</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">{slide.title}</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {slide.cases?.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-secondary/30 transition-colors"
              >
                <h3 className="font-display text-xl font-semibold mb-2">{c.name}</h3>
                <p className="text-muted-foreground font-body">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      );

    case "guarantee":
      return (
        <div className="deck-slide">
          <span className="text-secondary font-body text-sm uppercase tracking-wider mb-4">Respaldo</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
          <p className="text-xl font-display mb-8">{slide.content?.headline}</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <ul className="space-y-4">
              {slide.content?.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3 font-body text-lg"
                >
                  <span className="text-secondary mt-1">✓</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
            <div className="p-6 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-400/10 border border-secondary/30">
              <p className="text-muted-foreground font-body mb-2">Loan to Value</p>
              <p className="font-display text-3xl font-bold text-gradient-gold">{slide.content?.ltv}</p>
            </div>
          </div>
        </div>
      );

    case "process":
      return (
        <div className="deck-slide">
          <span className="text-secondary font-body text-sm uppercase tracking-wider mb-4">Flujo</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">{slide.title}</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl">
            {slide.steps?.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="p-4 rounded-lg bg-card border border-border"
              >
                <span className="text-secondary font-body text-sm">{step.num}</span>
                <h3 className="font-display text-lg font-semibold">{step.name}</h3>
                <p className="text-muted-foreground font-body text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      );

    case "conditions":
      return (
        <div className="deck-slide">
          <span className="text-secondary font-body text-sm uppercase tracking-wider mb-4">Términos</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">{slide.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mb-8">
            {slide.items?.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="p-4 rounded-lg bg-card border border-border"
              >
                <p className="text-muted-foreground font-body text-sm mb-1">{item.label}</p>
                <p className="font-display text-lg font-semibold">{item.value}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-muted-foreground font-body text-sm italic">{slide.disclaimer}</p>
        </div>
      );

    case "funds":
      return (
        <div className="deck-slide">
          <span className="text-secondary font-body text-sm uppercase tracking-wider mb-4">Capital</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
          <p className="text-xl font-display text-gradient-gold mb-8">{slide.content?.headline}</p>
          <ul className="space-y-4 mb-8 max-w-2xl">
            {slide.content?.points.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3 font-body text-lg"
              >
                <span className="text-secondary mt-1">→</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
          <div className="p-6 rounded-xl bg-card border border-secondary/30 max-w-2xl">
            <p className="font-body text-lg italic">{slide.content?.role}</p>
          </div>
        </div>
      );

    case "notFor":
      return (
        <div className="deck-slide">
          <span className="text-muted-foreground font-body text-sm uppercase tracking-wider mb-4">Importante</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">{slide.title}</h2>
          <ul className="space-y-4 max-w-2xl">
            {slide.points?.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3 font-body text-lg text-muted-foreground"
              >
                <span className="mt-1">✕</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      );

    case "cta":
      return (
        <div className="deck-slide items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
            <p className="text-2xl font-display text-gradient-gold mb-4">{slide.content?.headline}</p>
            <p className="text-muted-foreground font-body text-lg mb-8">{slide.content?.description}</p>
            <Button variant="hero" size="xl">
              Solicitar diagnóstico
            </Button>
            <p className="text-muted-foreground font-body text-sm mt-6">{slide.content?.cta}</p>
          </motion.div>
        </div>
      );

    default:
      return null;
  }
};

export default Deck;
