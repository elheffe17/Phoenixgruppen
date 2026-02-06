import { CheckCircle2, Users, Award, TrendingUp, User } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Års erfaring', icon: Award },
  { value: '10+', label: 'Etablerte samarbeidspartnere', icon: Users },
  { value: '5', label: 'Dedikerte medarbeidere', icon: TrendingUp },
  { value: '100%', label: 'Forpliktelse', icon: CheckCircle2 },
];

const team = [
  {
    name: 'Robin Hermine Nicolaysen',
    role: 'Daglig leder',
    icon: User,
  },
  {
    name: 'Dagfinn Bartholdt',
    role: 'Driftsleder',
    icon: User,
  },
];

const values = [
  {
    title: 'Kvalitet i alle ledd',
    description: 'Vi leverer tjenester av høyeste kvalitet, med dokumenterte rutiner, strenge kvalitetskontroller og kontinuerlig forbedring.',
  },
  {
    title: 'Driftssikkerhet',
    description: 'Du kan stole på oss til å være der når du trenger oss. Vi tilbyr døgnåpen support og rask responstid på alle henvendelser.',
  },
  {
    title: 'Struktur og orden',
    description: 'Våre prosesser er systematiserte og dokumenterte. Dette sikrer forutsigbarhet og høy kvalitet i alle leveranser.',
  },
  {
    title: 'Etablerte samarbeidspartnere',
    description: 'Vi samarbeider med anerkjente aktører i bransjen for å sikre at du får den beste kvaliteten på alle tjenester.',
  },
];

export default function About() {
  return (
    <section id="om-oss" className="py-24 bg-neutral-950 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Om Oss
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Vi er{' '}
              <span className="text-gradient">Phoenix Gruppen</span>
            </h2>
            <p className="text-primary/60 text-lg leading-relaxed mb-6">
              Phoenix Gruppen AS er et driftsselskap med solid erfaring innen renhold, 
              facility management og eiendomsutvikling. Med mer enn 15 års erfaring 
              i bransjen har vi bygget et nettverk av etablerte samarbeidspartnere.
            </p>
            <p className="text-primary/50 leading-relaxed">
              Vår visjon er å levere driftssikre løsninger med fokus på kvalitet, 
              struktur og dokumenterte rutiner. Vi tilbyr skreddersydde løsninger 
              for bedrifter og offentlig sektor – fra små kontorer til store komplekser.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-black rounded-2xl p-6 border border-primary/20 text-center group hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-primary/50 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Vårt <span className="text-gradient">Ledelsesteam</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-black rounded-xl border border-primary/20 hover:border-primary/40 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <member.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{member.name}</h4>
                  <p className="text-primary/60">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Våre <span className="text-gradient">Verdier</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-black rounded-xl border border-primary/20 hover:border-primary/30 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">{value.title}</h4>
                  <p className="text-primary/50 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
