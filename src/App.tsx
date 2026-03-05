import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Instagram, 
  Twitter, 
  Facebook, 
  ChevronRight, 
  Gauge, 
  Zap, 
  Wind,
  Plus,
  ChevronDown,
  ArrowUpRight,
  Star
} from 'lucide-react';
import { CARS, Car } from './constants';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <span className="font-bold text-2xl tracking-tighter">Rentura</span>
          <div className="hidden lg:flex items-center gap-8">
            {['Home', 'About', 'Our Fleet'].map((item) => (
              <a key={item} href="#" className="text-[11px] font-semibold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">{item}</a>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest opacity-60">
            <span>EN</span>
            <ChevronDown size={14} />
          </div>
          <button className="px-6 py-2.5 bg-black text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-zinc-800 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="u-text-display mb-8"
            >
              Drive Your Dream <br />
              Car Today.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-lg text-zinc-500 max-w-md mb-10 leading-relaxed"
            >
              Discover the thrill of driving luxury with our exclusive collection of well-maintained hypercars and sports cars available for rent.
            </motion.p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black text-white text-[11px] font-bold uppercase tracking-widest rounded-full flex items-center gap-3"
            >
              Explore Fleet <ArrowRight size={16} />
            </motion.button>
          </div>
          
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-0"
            >
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=90&w=1200" 
                alt="Porsche 911" 
                className="w-full h-auto drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col gap-4">
              <div className="w-12 h-px bg-black/10" />
              <span className="u-text-mono text-[10px] rotate-90 origin-left translate-x-4">01 / 02</span>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-black/5 pt-12">
          <div>
            <span className="text-4xl font-bold block mb-2">200+</span>
            <span className="text-[10px] uppercase tracking-widest opacity-40">Luxury Sports Cars <br />Ready to Rent</span>
          </div>
          <div>
            <span className="text-4xl font-bold block mb-2">5000+</span>
            <span className="text-[10px] uppercase tracking-widest opacity-40">Successful Rentals <br />Completed Worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedSection = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="u-text-mono text-zinc-400 mb-4 block">01 / Featured Cars</span>
            <h2 className="u-text-h2">Experience Speed And <br />Luxury In Every Ride</h2>
          </div>
          <div className="flex flex-col items-end gap-4">
            <button className="px-6 py-2 border border-black/10 rounded-full text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 hover:bg-black hover:text-white transition-all">
              360° Experience <ArrowUpRight size={14} />
            </button>
            <p className="text-[10px] text-right opacity-40 uppercase tracking-widest max-w-[200px]">
              Experience every angle with our 360° car view, giving you a complete inside-out look before you rent.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Bugatti Chiron Sport', price: '10.99', img: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800' },
            { name: 'Lamborghini Countach', price: '10.99', img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800' },
            { name: 'Porsche 918 Spyder', price: '10.99', img: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800' }
          ].map((car, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100 mb-6 relative">
                <img src={car.img} alt={car.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold mb-1">{car.name}</h3>
                  <span className="text-xs opacity-40">${car.price}/Day</span>
                </div>
                <div className="flex gap-4 text-[10px] uppercase tracking-widest opacity-40">
                  <span>Petrol</span>
                  <span>Mileage: 18031</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const [active, setActive] = useState(1);
  const features = [
    { id: '01', title: 'Affordable Prices', desc: 'We offer competitive rates for all our luxury vehicles without compromising on quality.' },
    { id: '02', title: 'Premium Fleet', desc: 'Our premium fleet is carefully curated to bring you the most iconic and sought-after cars in the world.', img: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1200' },
    { id: '03', title: 'Well-Maintained Cars', desc: 'Every vehicle undergoes rigorous multi-point inspections to ensure peak performance.' },
    { id: '04', title: '24/7 Support', desc: 'Our dedicated concierge team is available around the clock for any assistance.' },
    { id: '05', title: 'Flexible Plans', desc: 'Choose from daily, weekly, or monthly rental options tailored to your needs.' }
  ];

  return (
    <section className="py-32 bg-[#F8F8F8]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-start mb-24">
          <h2 className="u-text-h2">Setting The Standard For Luxury Car <br />Rentals Every Day</h2>
          <span className="u-text-mono opacity-40">02 / Why Us</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7">
            {features.map((f, i) => (
              <div 
                key={f.id}
                onMouseEnter={() => setActive(i)}
                className={`group py-10 border-t border-black/5 flex items-center justify-between cursor-pointer transition-all ${active === i ? 'opacity-100' : 'opacity-30'}`}
              >
                <div className="flex items-center gap-12">
                  <span className="u-text-mono">{f.id}</span>
                  <h3 className="text-4xl font-bold tracking-tight">{f.title}</h3>
                </div>
                <div className={`w-12 h-12 rounded-full border border-black/10 flex items-center justify-center transition-transform ${active === i ? 'rotate-45 bg-black text-white' : ''}`}>
                  <ArrowUpRight size={20} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-5 relative hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="sticky top-32"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-8">
                  <img src={features[active].img || "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800"} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <p className="text-lg text-zinc-500 leading-relaxed">
                  {features[active].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Steps = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-24">
          <div>
            <h2 className="u-text-h2 mb-4">Effortless Rentals: <br />Your Dream Car In Just 3 Steps</h2>
          </div>
          <div className="text-right">
            <span className="u-text-mono opacity-40 block mb-4">04 / Rental Process</span>
            <p className="text-[10px] uppercase tracking-widest opacity-40 max-w-[200px]">Our streamlined rental process makes it easy to get behind the wheel of your dream car.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Browse And Select', step: '01', desc: 'Begin your journey by exploring our extensive collection of luxury and sports cars, each meticulously curated to suit a variety of preferences.', img: 'https://images.unsplash.com/photo-1603584173870-7f3ca993466d?auto=format&fit=crop&q=80&w=600' },
            { title: 'Book And Confirm', step: '02', desc: 'Once you\'ve found your ideal car, proceed to book with ease. Select your rental duration, choose optional add-ons for a personalized experience.', bg: 'bg-zinc-100' },
            { title: 'Drive And Enjoy', step: '03', desc: 'Pick up your car or have it delivered to your location. Experience the thrill and comfort of driving a well-maintained premium vehicle.', bg: 'bg-zinc-50' }
          ].map((s, i) => (
            <div key={i} className={`p-12 rounded-3xl flex flex-col h-[500px] ${s.bg || 'bg-zinc-900 text-white'} relative overflow-hidden`}>
              {s.img && <img src={s.img} className="absolute inset-0 w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />}
              <div className="relative z-10 flex justify-between items-start mb-auto">
                <h3 className="text-2xl font-bold max-w-[150px]">{s.title}</h3>
                <span className="w-10 h-10 rounded-full border border-current flex items-center justify-center text-xs font-bold">{s.step}</span>
              </div>
              <p className={`relative z-10 text-sm leading-relaxed ${s.bg ? 'text-zinc-500' : 'text-white/60'}`}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedRide = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto bg-zinc-950 rounded-[40px] overflow-hidden relative min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=90&w=2560" 
            alt="McLaren" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 p-12 md:p-24 w-full">
          <span className="u-text-mono text-white/40 mb-8 block">05 / Featured Ride</span>
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter italic">McLaren P1</h2>
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur rounded-full text-[10px] uppercase tracking-widest text-white font-bold mb-12">
            50% Off Weekend Rentals
          </div>
          
          <div className="grid grid-cols-3 gap-12 max-w-xl border-t border-white/10 pt-12">
            <div>
              <span className="text-3xl font-bold text-white block mb-1">350 <span className="text-xs font-normal opacity-40">Kph</span></span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">Top Speed</span>
            </div>
            <div>
              <span className="text-3xl font-bold text-white block mb-1">900 <span className="text-xs font-normal opacity-40">Nm</span></span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">Torque</span>
            </div>
            <div>
              <span className="text-3xl font-bold text-white block mb-1">916 <span className="text-xs font-normal opacity-40">Ps</span></span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">Power</span>
            </div>
          </div>
        </div>

        <button className="absolute top-12 right-12 flex items-center gap-2 text-white text-[11px] font-bold uppercase tracking-widest group">
          Book Now <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [open, setOpen] = useState(0);
  const faqs = [
    { q: 'What Documents Are Required To Rent A Car?', a: 'You typically need a valid driver\'s license, a passport or ID card, and a major credit card in the driver\'s name.' },
    { q: 'Can I Extend My Rental Period?', a: 'Yes, extensions are possible subject to vehicle availability. Please contact our concierge at least 24 hours before your scheduled return.' },
    { q: 'Are There Any Mileage Limits On Rentals?', a: 'Mileage limits vary depending on the car and rental plan you choose. Some high-performance vehicles have a daily limit.' },
    { q: 'Is Delivery And Pickup Available?', a: 'We offer doorstep delivery and pickup at your home, office, airport, or hotel within our service areas.' }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <span className="u-text-mono opacity-40 mb-6 block">07 / FAQs</span>
            <h2 className="u-text-h2">Your Go-To Guide For Hassle-Free Car Rentals</h2>
          </div>
          
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-black/5">
                  <button 
                    onClick={() => setOpen(i)}
                    className="w-full py-8 flex items-center justify-between text-left group"
                  >
                    <span className={`text-xl font-bold transition-colors ${open === i ? 'text-black' : 'text-zinc-400 group-hover:text-black'}`}>{faq.q}</span>
                    <div className={`w-10 h-10 rounded-full border border-black/5 flex items-center justify-center transition-all ${open === i ? 'bg-black text-white rotate-45' : ''}`}>
                      <ArrowUpRight size={18} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-zinc-500 leading-relaxed max-w-xl">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-32 pb-12 bg-white border-t border-black/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="flex items-start gap-4">
            <div className="w-8 h-5 bg-zinc-100 rounded-sm overflow-hidden flex-shrink-0">
              <div className="h-1/3 bg-[#002395]" /><div className="h-1/3 bg-white" /><div className="h-1/3 bg-[#ED2939]" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest block mb-2">United States</span>
              <p className="text-[10px] opacity-40 leading-relaxed uppercase tracking-widest">417 Bleecker Road, New York, NY 10013, USA.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-5 bg-zinc-100 rounded-sm overflow-hidden flex-shrink-0">
              <div className="h-full bg-[#00008B] relative">
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-white/20" />
              </div>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest block mb-2">Australia</span>
              <p className="text-[10px] opacity-40 leading-relaxed uppercase tracking-widest">25 Oceanview Drive, Sydney, NSW 2000, Australia.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-5 bg-zinc-100 rounded-sm overflow-hidden flex-shrink-0">
              <div className="h-1/3 bg-[#FF9933]" /><div className="h-1/3 bg-white" /><div className="h-1/3 bg-[#128807]" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest block mb-2">India</span>
              <p className="text-[10px] opacity-40 leading-relaxed uppercase tracking-widest">56, Green Park Avenue, Sector 15, Haryana 122001, India.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32 pt-12 border-t border-black/5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest block mb-6">@2025 Rentura Auto</span>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest block mb-6 opacity-40">Headquarter</span>
            <p className="text-[10px] uppercase tracking-widest leading-relaxed opacity-40">1450 Fifth Avenue, Suite 2300, <br />Downtown Financial District, <br />San Francisco, California, 94103, <br />United States Of America</p>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest block mb-6 opacity-40">Site Map</span>
            <ul className="space-y-2 text-[10px] uppercase tracking-widest font-bold">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Our Fleet</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest block mb-6 opacity-40">Get In Touch</span>
            <p className="text-[10px] uppercase tracking-widest font-bold mb-2">+1 123 345 6789</p>
            <p className="text-[10px] uppercase tracking-widest font-bold">info@rentura.com</p>
          </div>
        </div>

        <div className="relative py-20 overflow-hidden">
          <h1 className="text-[22vw] font-black tracking-tighter leading-none text-black select-none">Rentura</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5 gap-8">
          <div className="flex gap-6">
            <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"><Instagram size={14} /></div>
            <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"><Twitter size={14} /></div>
            <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"><Facebook size={14} /></div>
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest opacity-40">
            <a href="#">Terms Of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-black selection:text-white bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedSection />
        <WhyUs />
        <Steps />
        <FeaturedRide />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
