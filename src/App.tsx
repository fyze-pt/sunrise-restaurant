import { motion } from "motion/react";
import { 
  Utensils, 
  Waves, 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  ChevronRight,
  Quote,
  Users,
  Award,
  Globe
} from "lucide-react";
import { useState, useEffect } from "react";
import { translations } from "./translations";
import sunriseFront from "./img/sunriseFront.png";
import logoPng from "./img/logopng.png";
import restaurantL2 from "./img/l2.jpg";
import specialtyC2 from "./img/c2.jpg";
import specialtyC4 from "./img/c4.png";
import specialtyC9 from "./img/c9.jpg";
import chefC3 from "./img/c3.jpg";

// --- Components ---

const Navbar = ({ lang, setLang, t }: { lang: 'pt' | 'en', setLang: (l: 'pt' | 'en') => void, t: any }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-sunrise-stone/85 backdrop-blur-md h-20 shadow-[0_10px_40px_rgba(39,83,92,0.08)] border-b border-sunrise-deep/10" : "bg-white/20 backdrop-blur-sm h-24 border-b border-white/20"}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        <div className="h-full py-2">
          <img src={logoPng} alt="Sunrise" className="h-full w-auto object-contain" />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium text-sunrise-deep">
          <a href="#inicio" className="hover:text-sunrise-orange transition-colors">{t.nav.home}</a>
          <a href="#sobre" className="hover:text-sunrise-orange transition-colors">{t.nav.about}</a>
          <a href="#menu" className="hover:text-sunrise-orange transition-colors">{t.nav.menu}</a>
          <a href="#contacto" className="hover:text-sunrise-orange transition-colors">{t.nav.contact}</a>
          
          <div className="flex items-center gap-2 border-l border-sunrise-deep/15 pl-8">
            <button 
              onClick={() => setLang('pt')} 
              className={`transition-colors ${lang === 'pt' ? 'text-sunrise-orange' : 'text-sunrise-deep/45 hover:text-sunrise-deep'}`}
            >
              PT
            </button>
            <span className="text-sunrise-deep/20">/</span>
            <button 
              onClick={() => setLang('en')} 
              className={`transition-colors ${lang === 'en' ? 'text-sunrise-orange' : 'text-sunrise-deep/45 hover:text-sunrise-deep'}`}
            >
              EN
            </button>
          </div>
        </div>

        <button className="bg-sunrise-orange hover:bg-sunrise-red text-white px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-lg shadow-sunrise-orange/15">
          {t.nav.reserve}
        </button>
      </div>
    </nav>
  );
};

const Hero = ({ t }: { t: any }) => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${sunriseFront})` }}
          aria-label="Costa de Caparica Sunset"
          role="img"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sunrise-stone/10 via-sunrise-stone/40 to-sunrise-stone"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight text-sunrise-deep drop-shadow-[0_12px_35px_rgba(255,248,236,0.55)]">
            Sunrise
            <span className="block text-2xl md:text-3xl font-sans font-light tracking-[0.3em] uppercase mt-4 text-sunrise-orange">
              {t.hero.subtitle}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-sunrise-deep/80 mb-10 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-[0_6px_20px_rgba(255,248,236,0.5)]">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-sunrise-orange hover:bg-sunrise-red text-white px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-xl shadow-sunrise-orange/20 flex items-center justify-center gap-2 group">
              {t.hero.cta_reserve} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white/55 hover:bg-white/75 backdrop-blur-md border border-white/80 text-sunrise-deep px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-[0_18px_45px_rgba(39,83,92,0.08)]">
              {t.hero.cta_menu}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 right-10 hidden lg:flex items-center gap-4 glass-card p-4"
      >
        <div className="bg-sunrise-orange p-3 rounded-full">
          <Star className="w-6 h-6 text-white fill-current" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-sunrise-deep/55">{t.hero.google_review}</p>
          <p className="text-xl font-bold text-sunrise-deep">4.4 {t.hero.stars}</p>
        </div>
      </motion.div>
    </section>
  );
};

const About = ({ t }: { t: any }) => {
  return (
    <section id="sobre" className="py-24 px-6 bg-sunrise-stone relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sunrise-orange uppercase tracking-[0.3em] text-sm font-bold mb-4 block">{t.about.tag}</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            {t.about.title}
          </h2>
          <div className="space-y-6 text-sunrise-deep/70 leading-relaxed text-lg">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p className="italic font-serif text-sunrise-orange text-xl">
              "{t.about.quote}"
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-sunrise-orange/12 flex items-center justify-center text-sunrise-orange shadow-[0_10px_30px_rgba(242,138,46,0.12)]">
                <Waves className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold">{t.about.feature1_title}</h4>
                <p className="text-sm text-sunrise-deep/55">{t.about.feature1_desc}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-sunrise-orange/12 flex items-center justify-center text-sunrise-orange shadow-[0_10px_30px_rgba(242,138,46,0.12)]">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold">{t.about.feature2_title}</h4>
                <p className="text-sm text-sunrise-deep/55">{t.about.feature2_desc}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white/70">
            <img 
              src={restaurantL2} 
              alt="Restaurant Interior" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white/70 hidden md:block">
            <img 
              src={chefC3} 
              alt="Chef at work" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Menu = ({ t }: { t: any }) => {
  const specialties = [
    {
      ...t.menu.items[0],
      tag: t.menu.tags.critic,
      image: specialtyC2
    },
    {
      ...t.menu.items[1],
      tag: t.menu.tags.chef,
      image: specialtyC4
    },
    {
      ...t.menu.items[2],
      tag: t.menu.tags.recommended,
      image: specialtyC9
    }
  ];

  return (
    <section id="menu" className="py-24 px-6 bg-sunrise-stone-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sunrise-orange uppercase tracking-[0.3em] text-sm font-bold mb-4 block">{t.menu.tag}</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t.menu.title}</h2>
          <p className="text-sunrise-deep/65 max-w-2xl mx-auto">{t.menu.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card overflow-hidden group"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-sunrise-orange text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full">
                  {item.tag}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-bold">{item.name}</h3>
                  <span className="text-sunrise-orange font-bold">{item.price}</span>
                </div>
                <p className="text-sunrise-deep/65 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white/55 p-12 rounded-3xl border border-white/70 relative overflow-hidden shadow-[0_24px_60px_rgba(39,83,92,0.08)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sunrise-orange/10 blur-3xl rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-6 italic">{t.menu.drinks_title}</h3>
              <p className="text-sunrise-deep/65 mb-8">{t.menu.drinks_desc}</p>
              <div className="grid grid-cols-2 gap-6">
                {t.menu.drinks_list.map((drink: any, i: number) => (
                  <div key={i} className="flex flex-col">
                    <span className="font-bold text-sunrise-orange">{drink.name}</span>
                    <span className="text-xs text-sunrise-deep/45 uppercase tracking-wider">{drink.type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-transparent border-2 border-sunrise-orange text-sunrise-orange hover:bg-sunrise-orange hover:text-white px-10 py-4 rounded-full font-bold transition-all duration-300 uppercase tracking-widest text-sm">
                {t.menu.cta_pdf}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews = ({ t }: { t: any }) => {
  return (
    <section className="py-24 px-6 bg-sunrise-stone relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-4">{t.reviews.title}</h2>
            <p className="text-sunrise-deep/65">{t.reviews.subtitle}</p>
          </div>
          <div className="flex items-center gap-6 glass-card p-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-sunrise-orange">4.4</p>
              <div className="flex gap-1 justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3 h-3 ${i < 4 ? "fill-sunrise-orange text-sunrise-orange" : "text-sunrise-deep/20"}`} />
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-sunrise-deep/10"></div>
            <div>
              <p className="font-bold text-lg">{t.reviews.google_reviews}</p>
              <p className="text-xs text-sunrise-deep/45 uppercase tracking-widest">{t.reviews.based_on}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.reviews.items.map((review: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-sunrise-orange/12" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-sunrise-orange text-sunrise-orange" />)}
              </div>
              <p className="text-lg italic mb-8 leading-relaxed text-sunrise-deep/80">
                {review.text}
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${i === 0 ? 'bg-sunrise-orange/20' : 'bg-sunrise-red/20'}`}></div>
                <div>
                  <p className="font-bold">{review.author}</p>
                  <p className="text-xs text-sunrise-deep/45 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = ({ t }: { t: any }) => {
  const members = [
    { name: "Ricardo Santos", role: "Chef Executivo", img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=400" },
    { name: "Ana Costa", role: "Maître", img: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&q=80&w=400" },
    { name: "Miguel Silva", role: "Sommelier", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section className="py-24 px-6 bg-sunrise-stone-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sunrise-orange uppercase tracking-[0.3em] text-sm font-bold mb-4 block">{t.team.tag}</span>
          <h2 className="text-4xl font-serif font-bold mb-6">{t.team.title}</h2>
          <p className="text-sunrise-deep/65 max-w-2xl mx-auto">{t.team.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {members.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center group"
            >
              <div className="aspect-square rounded-full overflow-hidden mb-6 border-4 border-sunrise-orange/20 group-hover:border-sunrise-orange transition-colors duration-500 max-w-[240px] mx-auto">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-bold mb-1">{member.name}</h4>
              <p className="text-sunrise-orange text-sm uppercase tracking-widest">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ t }: { t: any }) => {
  return (
    <footer id="contacto" className="bg-[#fff8ee] pt-24 pb-12 px-6 border-t border-sunrise-deep/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="h-16 mb-8">
              <img src={logoPng} alt="Sunrise" className="h-full w-auto object-contain" />
            </div>
            <p className="text-sunrise-deep/60 text-sm leading-relaxed mb-8">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/70 border border-sunrise-orange/10 flex items-center justify-center text-sunrise-deep hover:bg-sunrise-orange hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/70 border border-sunrise-orange/10 flex items-center justify-center text-sunrise-deep hover:bg-sunrise-orange hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-sm text-sunrise-orange">{t.footer.location}</h4>
            <ul className="space-y-4 text-sunrise-deep/65 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sunrise-orange shrink-0" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sunrise-orange shrink-0" />
                <span>+351 212 345 678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sunrise-orange shrink-0" />
                <span>reservas@sunrise-caparica.pt</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-sm text-sunrise-orange">{t.footer.hours}</h4>
            <ul className="space-y-4 text-sunrise-deep/65 text-sm">
              <li className="flex justify-between">
                <span>{t.footer.days.tue_thu}</span>
                <span>12:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t.footer.days.fri_sat}</span>
                <span>12:00 - 00:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t.footer.days.sun}</span>
                <span>12:00 - 22:00</span>
              </li>
              <li className="flex justify-between text-sunrise-red font-bold">
                <span>{t.footer.days.mon}</span>
                <span>{t.footer.days.closed}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-sm text-sunrise-orange">{t.footer.reserve_online}</h4>
            <p className="text-sunrise-deep/65 text-sm mb-6">{t.footer.reserve_desc}</p>
            <button className="w-full bg-sunrise-orange hover:bg-sunrise-red text-white py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-sunrise-orange/20">
              {t.footer.reserve_btn}
            </button>
          </div>
        </div>

        <div className="h-96 rounded-3xl overflow-hidden saturate-75 opacity-80 hover:saturate-100 hover:opacity-100 transition-all duration-700 mb-12 shadow-[0_20px_55px_rgba(39,83,92,0.12)]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.345678901234!2d-9.2345678!3d38.6456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecf4f4f4f4f4f%3A0x4f4f4f4f4f4f4f4f!2sAv.%20Gen.%20Humberto%20Delgado%2C%20Costa%20da%20Caparica!5e0!3m2!1spt!2spt!4v1620000000000!5m2!1spt!2spt" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sunrise-deep/35 text-xs border-t border-sunrise-deep/10 pt-12">
          <p>{t.footer.rights}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-sunrise-deep transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-sunrise-deep transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const t = translations[lang];

  return (
    <div className="min-h-screen selection:bg-sunrise-orange selection:text-white">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Menu t={t} />
        <Reviews t={t} />
        <Team t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
