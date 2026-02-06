import { Link } from 'react-router-dom';
import { ArrowRight, Award, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with image and gradient overlay */}
      <div className="absolute inset-0">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
        />
        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/85 to-black/95" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
          <Award className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-medium">INSTA 800-sertifisert ledelse</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Phoenix Gruppen{' '}
          <span className="text-gradient">AS</span>
        </h1>

        <p className="text-lg sm:text-xl text-primary/70 max-w-2xl mx-auto mb-4">
          Profesjonelle tjenester innen renhold, facility management og eiendomsutvikling. 
          Vi leverer driftssikre løsninger med fokus på kvalitet og struktur.
        </p>

        <p className="text-base text-primary/50 max-w-xl mx-auto mb-12">
          Skreddersydde løsninger for bedrifter og offentlig sektor. 
          Fra daglig renhold til komplekse facility management-prosjekter.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/kontakt">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black px-8 py-6 text-lg font-semibold group">
              Be om tilbud
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <button 
            onClick={() => document.getElementById('tjenester')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 text-primary/70 hover:text-primary transition-colors"
          >
            Se våre tjenester
          </button>
        </div>

        {/* Trust badges */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-primary/70">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-sm">Dokumenterte standarder</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-primary/70">
            <Clock className="w-6 h-6 text-primary" />
            <span className="text-sm">Døgnåpen support</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-primary/70">
            <Award className="w-6 h-6 text-primary" />
            <span className="text-sm">Mer enn 15 års erfaring</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
