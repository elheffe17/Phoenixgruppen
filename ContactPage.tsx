import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
    title: 'Besøksadresse',
    content: 'Dokken 1, 2870 Dokka',
    href: 'https://maps.google.com',
    description: 'Man–Fre: 08:00–16:00',
  },
  {
    icon: Clock,
    title: 'Åpningstider',
    content: '08:00–16:00',
    description: 'Support døgnet rundt',
  },
];

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

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

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Kontakt <span className="text-gradient">oss</span>
          </h1>
          <p className="text-xl text-primary/50 max-w-2xl">
            Har du spørsmål eller ønsker du et uforpliktende tilbud? 
            Vi er her for å hjelpe deg med skreddersydde løsninger.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div className="space-y-12">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="p-6 bg-neutral-950 rounded-xl border border-primary/20 hover:border-primary/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-primary font-medium mb-1">{item.content}</p>
                    <p className="text-primary/50 text-sm">{item.description}</p>
                  </a>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-neutral-950 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Finn oss
                </h3>
                <div className="aspect-video bg-black rounded-xl flex items-center justify-center border border-primary/20">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-white font-medium">Phoenix Gruppen AS</p>
                    <p className="text-primary/50">Dokken 1, 2870 Dokka</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary text-sm hover:underline mt-2 inline-block"
                    >
                      Åpne i Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Emergency */}
              <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Akutt behov?
                </h3>
                <p className="text-primary/50 text-sm mb-4">
                  For avtalekunder tilbyr vi døgnåpen support. 
                  Ring Dagfinn for umiddelbar assistanse.
                </p>
                <a 
                  href="tel:+4791924855" 
                  className="inline-flex items-center gap-2 text-primary font-medium"
                >
                  <Phone className="w-5 h-5" />
                  919 24 855
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-neutral-950 rounded-2xl p-8 border border-primary/20">
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Takk for din henvendelse!
                    </h3>
                    <p className="text-primary/50 mb-6">
                      Vi har mottatt din melding og vil kontakte deg innen 24 timer.
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
                      Send oss en melding
                    </h3>
                    <p className="text-primary/50 mb-8">
                      Fyll ut skjemaet nedenfor, så tar vi kontakt så snart som mulig.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Fornavn *</Label>
                          <Input 
                            id="firstName" 
                            placeholder="Ditt fornavn"
                            className="bg-black border-primary/20 text-white"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Etternavn *</Label>
                          <Input 
                            id="lastName" 
                            placeholder="Ditt etternavn"
                            className="bg-black border-primary/20 text-white"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-post *</Label>
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
                        <Label htmlFor="company">Bedrift</Label>
                        <Input 
                          id="company" 
                          placeholder="Din bedrift"
                          className="bg-black border-primary/20 text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Tjeneste</Label>
                        <Select>
                          <SelectTrigger className="bg-black border-primary/20 text-white">
                            <SelectValue placeholder="Velg tjeneste (valgfritt)" />
                          </SelectTrigger>
                          <SelectContent className="bg-neutral-950 border-primary/20">
                            <SelectItem value="renhold">Renhold & Drift</SelectItem>
                            <SelectItem value="facility">Facility Management</SelectItem>
                            <SelectItem value="eiendom">Eiendom & Utvikling</SelectItem>
                            <SelectItem value="prosjekt">Prosjekt- & Tjenester</SelectItem>
                            <SelectItem value="skreddersydd">Skreddersydde Løsninger</SelectItem>
                            <SelectItem value="annet">Annet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Melding *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Fortell oss om dine behov..."
                          className="bg-black border-primary/20 text-white min-h-[150px]"
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-6"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send melding
                      </Button>

                      <p className="text-xs text-primary/40 text-center">
                        Ved å sende inn godtar du at vi kontakter deg angående din forespørsel.
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
