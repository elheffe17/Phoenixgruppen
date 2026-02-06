import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Phone, Mail, Sparkles, Building2, Home, Briefcase, Settings, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const servicesData: Record<string, {
  title: string;
  icon: React.ElementType;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
}> = {
  'renhold-drift': {
    title: 'Renhold & Drift',
    icon: Sparkles,
    description: 'Profesjonelt renhold for bedrifter, kontorer og offentlige bygg med dokumenterte standarder.',
    longDescription: `Våre renholdstjenester er skreddersydde for å møte dine spesifikke behov. 
    Enten du trenger daglig kontorrenhold, periodisk industrirenhold eller spesialiserte tjenester 
    som vindusvask og gulvbehandling, har vi ekspertisen og utstyret som skal til.
    
    Vi bruker miljøvennlige produkter og moderne utstyr for å sikre best mulig resultat 
    med minimal miljøpåvirkning. Våre ansatte er grundig opplært og sertifisert.
    
    Renhold utført etter dokumenterte standarder gjennom INSTA 800-sertifisert ledelse.`,
    features: [
      'Daglig kontorrenhold',
      'Industri- og lagerrenhold',
      'Vindusvask innvendig og utvendig',
      'Gulvbehandling og vedlikehold',
      'Sanitærrengjøring',
      'Trappevask',
    ],
    benefits: [
      'INSTA 800-sertifisert ledelse',
      'Dokumenterte kvalitetsrutiner',
      'Fornøydgaranti på alle oppdrag',
      'Miljøvennlige produkter',
      'Fleksible avtaler',
      'Døgnåpen support',
    ],
  },
  'facility-management': {
    title: 'Facility Management',
    icon: Building2,
    description: 'Komplett drift og vedlikehold av dine eiendommer med strukturerte prosesser.',
    longDescription: `Vår facility management-tjeneste gir deg en pålitelig partner for drift og 
    vedlikehold av dine eiendommer. Vi tar oss av alt fra daglig tilsyn og vedlikehold til 
    større rehabiliteringsprosjekter.
    
    Med Phoenix Gruppen som partner kan du fokusere på din kjernevirksomhet mens vi sørger 
    for at dine bygg og anlegg er i beste stand. Våre strukturerte prosesser sikrer 
    driftssikkerhet og forutsigbarhet.`,
    features: [
      'Teknisk vedlikehold',
      'Vaktmestertjenester',
      'Energioptimalisering',
      'Sikkerhetsløsninger',
      'HMS-oppfølging',
      'Driftsoptimalisering',
    ],
    benefits: [
      'Strukturerte driftsrutiner',
      'Reduserte driftskostnader',
      'Forlenget levetid på bygg',
      'Energieffektivisering',
      'Profesjonell rapportering',
      'Én dedikert kontaktperson',
    ],
  },
  'eiendom-utvikling': {
    title: 'Eiendom & Utvikling',
    icon: Home,
    description: 'Ekspertise innen eiendomsforvaltning og utvikling for optimal verdiskaping.',
    longDescription: `Vi tilbyr omfattende tjenester innen eiendomsforvaltning og utvikling. 
    Enten du eier en eller flere eiendommer, kan vi hjelpe deg å maksimere verdien og 
    optimalisere driften.
    
    Vårt team har lang erfaring med alt fra leietakeradministrasjon til komplekse 
    utviklingsprosjekter. Vi leverer skreddersydde løsninger basert på dine mål og behov.`,
    features: [
      'Eiendomsforvaltning',
      'Utviklingsprosjekter',
      'Leietakeradministrasjon',
      'Verdivurdering',
      'Kjøp og salg',
      'Prosjektledelse',
    ],
    benefits: [
      'Optimalisert eiendomsverdi',
      'Profesjonell forvaltning',
      'Strukturerte prosesser',
      'Risikoredusering',
      'Markedskunnskap',
    ],
  },
  'prosjekttjenester': {
    title: 'Prosjekt- & Tjenester',
    icon: Briefcase,
    description: 'Skreddersydde prosjektløsninger med fokus på kvalitet og struktur.',
    longDescription: `Vi tilbyr profesjonell prosjektledelse og gjennomføring av prosjekter 
    i alle størrelser. Fra planlegging til ferdigstillelse, vi er med deg hele veien.
    
    Våre prosjektledere har dokumentert erfaring med å levere prosjekter i tide, 
    innenfor budsjett og med høy kvalitet.`,
    features: [
      'Prosjektledelse',
      'Kvalitetssikring',
      'Rådgivning',
      'Gjennomføring',
      'Dokumentasjon',
      'Oppfølging',
    ],
    benefits: [
      'Strukturert prosjektledelse',
      'Tids- og kostnadsstyring',
      'Kvalitetssikring',
      'Risikohåndtering',
      'Dokumentert erfaring',
    ],
  },
  'skreddersydd': {
    title: 'Skreddersydde Løsninger',
    icon: Settings,
    description: 'Tilpassede løsninger som passer perfekt til din virksomhets behov.',
    longDescription: `Har du spesielle behov som ikke passer inn i standardløsninger? 
    Vi utvikler skreddersydde løsninger som passer perfekt til din virksomhet.
    
    Kontakt oss for en uforpliktende samtale om dine behov, så finner vi den beste 
    løsningen sammen.`,
    features: [
      'Tilpassede avtaler',
      'Fleksible løsninger',
      'Personlig kontakt',
      'Kontinuerlig oppfølging',
      'Skalerbare tjenester',
      'Spesialtilpasninger',
    ],
    benefits: [
      '100% tilpassede løsninger',
      'Fleksibilitet',
      'Personlig service',
      'Kostnadseffektivt',
      'Skalerbart',
    ],
  },
};

export default function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Tjeneste ikke funnet</h1>
          <Link to="/">
            <Button className="bg-primary text-black">Tilbake til forsiden</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-black via-neutral-950 to-black">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary/50 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Tilbake til forsiden
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <span className="text-primary text-sm font-medium">Vår tjeneste</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {service.title}
              </h1>
            </div>
          </div>
          
          <p className="text-xl text-primary/50 max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <div className="space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Om <span className="text-gradient">tjenesten</span>
                </h2>
                <p className="text-primary/50 leading-relaxed whitespace-pre-line">
                  {service.longDescription}
                </p>
              </div>

              {/* INSTA 800 Certification Badge - Only for renhold */}
              {serviceId === 'renhold-drift' && (
                <div className="bg-gradient-to-r from-primary/20 to-amber-500/20 rounded-2xl p-6 border border-primary/30">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        INSTA 800-sertifisert
                      </h3>
                      <p className="text-primary/60 text-sm">
                        Renhold utført etter dokumenterte standarder gjennom INSTA 800-sertifisert ledelse.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Dette tilbyr vi
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-primary/50">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Fordeler med oss
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-primary/50">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="bg-neutral-950 rounded-2xl p-6 border border-primary/20">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Har du spørsmål?
                </h3>
                <div className="space-y-3">
                  <a href="tel:+4791924855" className="flex items-center gap-3 text-primary/50 hover:text-primary transition-colors">
                    <Phone className="w-5 h-5" />
                    <span>919 24 855 (Dagfinn)</span>
                  </a>
                  <a href="mailto:Post@Phoenixgruppen.com" className="flex items-center gap-3 text-primary/50 hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>Post@Phoenixgruppen.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-neutral-950 rounded-2xl p-8 border border-primary/20 sticky top-24">
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Takk for din henvendelse!
                    </h3>
                    <p className="text-primary/50 mb-6">
                      Vi har mottatt din forespørsel og vil kontakte deg innen 24 timer.
                    </p>
                    <Link to="/">
                      <Button variant="outline" className="border-primary/50 text-primary">
                        Tilbake til forsiden
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Be om tilbud
                    </h3>
                    <p className="text-primary/50 mb-8">
                      Fyll ut skjemaet nedenfor, så kontakter vi deg for en uforpliktende prat.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Fornavn</Label>
                          <Input 
                            id="firstName" 
                            placeholder="Ditt fornavn"
                            className="bg-black border-primary/20 text-white"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Etternavn</Label>
                          <Input 
                            id="lastName" 
                            placeholder="Ditt etternavn"
                            className="bg-black border-primary/20 text-white"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-post</Label>
                        <Input 
                          id="email" 
                          type="email"
                          placeholder="din@epost.com"
                          className="bg-black border-primary/20 text-white"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input 
                          id="phone" 
                          type="tel"
                          placeholder="123 45 678"
                          className="bg-black border-primary/20 text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Bedrift (valgfritt)</Label>
                        <Input 
                          id="company" 
                          placeholder="Din bedrift"
                          className="bg-black border-primary/20 text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Melding</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Fortell oss om dine behov..."
                          className="bg-black border-primary/20 text-white min-h-[120px]"
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-6"
                      >
                        Send forespørsel
                      </Button>

                      <p className="text-xs text-primary/40 text-center">
                        Ved å sende inn godtar du at vi kontakter deg angående ditt behov.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
