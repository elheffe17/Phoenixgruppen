import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, Sparkles, Building2, Home, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefon',
    content: '919 24 855',
    href: 'tel:+4791924855',
    description: 'Dagfinn Bartholdt - Driftsleder',
  },
  {
    icon: Mail,
    title: 'E-post',
    content: 'Post@Phoenixgruppen.com',
    href: 'mailto:Post@Phoenixgruppen.com',
    description: 'Vi svarer innen 24 timer',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    content: 'Dokken 1, 2870 Dokka',
    href: 'https://maps.google.com',
    description: 'Besøk oss på kontoret',
  },
  {
    icon: Clock,
    title: 'Åpningstider',
    content: 'Man–Fre: 08:00–16:00',
    description: 'Support døgnet rundt',
  },
];

export default function Contact() {
  return (
    <section className="py-24 bg-black relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Kontakt Oss
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            La oss <span className="text-gradient">diskutere ditt behov</span>
          </h2>
          <p className="text-primary/60 text-lg max-w-2xl mx-auto">
            Har du spørsmål eller ønsker du et uforpliktende tilbud? 
            Vi er her for å hjelpe deg med skreddersydde løsninger.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">
              Kontaktinformasjon
            </h3>
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-start gap-4 p-4 bg-neutral-950 rounded-xl border border-primary/20 hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">{item.title}</h4>
                  <p className="text-primary font-semibold mb-1">{item.content}</p>
                  <p className="text-primary/50 text-sm">{item.description}</p>
                </div>
              </a>
            ))}

            {/* CTA */}
            <div className="pt-6">
              <Link to="/kontakt">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-black font-semibold group">
                  Gå til kontaktskjema
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Contact Form Preview */}
          <div className="bg-neutral-950 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold text-white mb-2">
              Hva kan vi hjelpe deg med?
            </h3>
            <p className="text-primary/50 mb-8">
              Fortell oss om ditt prosjekt, så tar vi kontakt innen 24 timer.
            </p>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-black rounded-xl border border-primary/20 hover:border-primary/40 transition-all cursor-pointer">
                  <Sparkles className="w-6 h-6 text-primary mb-3" />
                  <h4 className="text-white font-medium mb-1">Renhold</h4>
                  <p className="text-primary/50 text-sm">Kontor, industri, vinduer</p>
                </div>
                <div className="p-4 bg-black rounded-xl border border-primary/20 hover:border-primary/40 transition-all cursor-pointer">
                  <Building2 className="w-6 h-6 text-primary mb-3" />
                  <h4 className="text-white font-medium mb-1">Facility</h4>
                  <p className="text-primary/50 text-sm">Vedlikehold, drift</p>
                </div>
                <div className="p-4 bg-black rounded-xl border border-primary/20 hover:border-primary/40 transition-all cursor-pointer">
                  <Home className="w-6 h-6 text-primary mb-3" />
                  <h4 className="text-white font-medium mb-1">Eiendom</h4>
                  <p className="text-primary/50 text-sm">Utvikling, forvaltning</p>
                </div>
                <div className="p-4 bg-black rounded-xl border border-primary/20 hover:border-primary/40 transition-all cursor-pointer">
                  <Settings className="w-6 h-6 text-primary mb-3" />
                  <h4 className="text-white font-medium mb-1">Annet</h4>
                  <p className="text-primary/50 text-sm">Skreddersydde løsninger</p>
                </div>
              </div>

              <Link to="/kontakt">
                <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10">
                  Fyll ut fullt skjema
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
