import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronUp, ChevronDown, Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import aiSoftwareBanner from '@/assets/ai-software-banner.jpg';
import embeddedPcbBanner from '@/assets/embedded-pcb-banner.jpg';
import evGreenEnergyBanner from '@/assets/ev-green-energy-banner.jpg';
import ecommerceBanner from '@/assets/ecommerce-banner.jpg';
import Navbar from '@/components/ui/Navbar';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const timelineRef = useRef(null);
  const navbarRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDivisionOpen, setIsDivisionOpen] = useState(false);
  const navigate = useNavigate();
  const [hoveredTimelineIndex, setHoveredTimelineIndex] = useState<number | null>(null);
  const [showFixedTimelineLine, setShowFixedTimelineLine] = useState(false);

  const banners = [
    {
      title: "Advanced AI & Software Solutions",
      image: aiSoftwareBanner,
      sectionId: "ai-software-solutions"
    },
    {
      title: "Smart Embedded & PCB Solutions", 
      image: embeddedPcbBanner,
      sectionId: "embedded-pcb-solutions"
    },
    {
      title: "Sustainable EV & Green Energy",
      image: evGreenEnergyBanner,
      sectionId: "ev-green-energy"
    },
    {
      title: "Digital E-commerce Platform",
      image: ecommerceBanner,
      sectionId: "ecommerce-platform"
    }
  ];

  useEffect(() => {
    // Navbar animation
    gsap.fromTo(navbarRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Logo floating animation
    gsap.to(logoRef.current, {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

    // Timeline animation on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animated timeline line based on scroll progress
    const timelineContainer = document.querySelector('.timeline-container');
    const timelineLine = document.querySelector('.timeline-line');
    
    if (timelineContainer && timelineLine) {
      ScrollTrigger.create({
        trigger: timelineContainer,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(timelineLine, {
            height: `${progress * 100}%`,
            duration: 0.3,
            ease: "none"
          });
        }
      });
    }

    // About section animation
    gsap.fromTo(aboutRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%"
        }
      }
    );

    // Contact form animation
    const formElements = document.querySelectorAll('.form-element');
    gsap.fromTo(formElements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 70%"
        }
      }
    );

  }, []);

  // Fixed center line visibility while the timeline section is in view
  useEffect(() => {
    if (!timelineRef.current) return;
    const st = ScrollTrigger.create({
      trigger: timelineRef.current as any,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setShowFixedTimelineLine(true),
      onEnterBack: () => setShowFixedTimelineLine(true),
      onLeave: () => setShowFixedTimelineLine(false),
      onLeaveBack: () => setShowFixedTimelineLine(false),
    });
    return () => {
      st.kill();
    };
  }, []);

  // Auto-slide effect for banners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToDivisionSection = (sectionId: string) => {
    navigate(`/division#${sectionId}`);
  };

  const navigateToSpecificDivision = (sectionId: string) => {
    navigate(`/division#${sectionId}`);
  };


  const timelineData = [
    { year: "1995", event: "The Inception (Tim)", description: "The entrepreneurial journey began when my father founded , a traditional business engaged in soap oil and juice manufacturing, retail, and direct supply. This laid the foundation for our family's business values and inspired my future ambitions.", side: "left" },
    { year: "2017", event: "Academic Excellence & Industry Experience", description: "I completed my Bachelor's in Mechanical Engineering (BE) and joined a production engineering team as a designer. Here, I gained hands-on expertise in mechanical design, CAD modeling, and production planning, which strengthened my technical foundation.", side: "right" },
    { year: "2019", event: "Entry into Freelancing and Entrepreneurship", description: "Parallel to my professional role, I began technical freelancing in mechanical design and established a small setup for non-technical projects, gradually gaining exposure to entrepreneurship, project management, and client relations.", side: "left" },
    { year: "2020", event: "Pandemic Setback", description: "The COVID-19 lockdown led to the closure of my initial business. This phase became a turning point, reinforcing resilience and adaptability in navigating unforeseen challenges.", side: "right" },
    { year: "2021", event: "Reskilling & Freelance Growth", description: "During the pandemic, I invested time in upskilling my technical expertise and returned to freelancing in design and consulting, building a stronger portfolio of clients and projects.", side: "left" },
    { year: "2022", event: "Corporate Training & Skill Expansion", description: "I expanded into corporate training, specializing in mechanical drawing and CAD tools, while continuing freelance work. This experience bridged the gap between industrial practice and knowledge-sharing.", side: "right" },
    { year: "2024", event: "Evolution from Tim to Tima", description: "Inspired to revive and modernize our family business, I rebranded it as “Tima”, representing a contemporary and forward-looking identity. I began building infrastructure to support a technology-driven manufacturing enterprise", side: "left" },
    { year: "Present", event: "Incorporation of Tima Integrated Technologies Pvt. Ltd.", description: "I officially registered Tima Integrated Technologies Private Limited, marking the transition from vision to reality. Today, Tima specializes in manufacturing its own products, selling online, and integrating software solutions, blending traditional manufacturing expertise with modern technology.", side: "right" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />
      {/* Hero Section - Full Screen Auto-Sliding Banners */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="flex items-center justify-center h-full">
              <div className="text-center px-6">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                  {banner.title}
                </h1>
                <Button 
                  size="lg" 
                  className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  onClick={() => navigateToDivisionSection(banner.sectionId)}
                >
                  EXPLORE
                </Button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-cyan-400' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-28 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Journey</h2>
          <div className="relative w-full">
            {/* single center line aligned to the row */}
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-cyan-500/70 z-0"></div>

            {/* responsive grid layout */}
            <div className="relative z-10 py-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 xl:gap-6 items-center min-h-[520px]">
                {timelineData.map((item, index) => {
                  const isAbove = index % 2 === 0;
                  const isActive = hoveredTimelineIndex === index;
                  return (
                    <div key={index} className={`group relative ${isAbove ? 'self-start mt-2' : 'self-end mb-2'}`}>
                      <div
                        className={`timeline-item w-full rounded-xl border bg-slate-800 px-4 py-4 lg:px-5 lg:py-5 text-left transition ${isActive ? 'border-cyan-600 shadow-[0_0_0_2px_rgba(34,211,238,0.25)]' : 'border-slate-700 hover:border-cyan-600'}`}
                        onMouseEnter={() => setHoveredTimelineIndex(index)}
                        onMouseLeave={() => setHoveredTimelineIndex(null)}
                        onFocus={() => setHoveredTimelineIndex(index)}
                        onBlur={() => setHoveredTimelineIndex(null)}
                        tabIndex={0}
                      >
                        <div className="text-cyan-400 font-bold text-base lg:text-lg leading-none">{item.year}</div>
                        <div className="text-cyan-200 text-xs lg:text-sm mt-1 leading-tight">{item.event}</div>
                      </div>

                      {/* Hover popover rectangle near center line */}
                      <div
                        className={`pointer-events-none absolute left-1/2 -translate-x-1/2 ${isAbove ? 'top-[calc(50%+32px)]' : 'bottom-[calc(50%+32px)]'} z-20 hidden group-hover:block`}
                      >
                        <div className="bg-slate-900/95 border border-cyan-600/40 rounded-xl shadow-xl p-4 max-w-xs lg:max-w-sm xl:max-w-md text-gray-300 text-xs lg:text-sm">
                          <div className="font-semibold text-cyan-300 mb-1">{item.event}</div>
                          <div className="leading-relaxed">{item.description}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      

      {/* CEO & Director Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Leadership</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-slate-800/50 border-slate-700 hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <img src="/lovable-uploads/e247af24-9c60-4f15-8223-079e0bed38ce.png" alt="CEO" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                <h3 className="text-2xl font-bold text-white mb-2">Mr. Manos Simson</h3>
                <p className="text-blue-400 mb-4">Chief Executive Officer</p>
                <p className="text-gray-300">"Innovation is not just about technology; it's about creating solutions that transform lives and businesses."</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <img src="/src/assets/Director.jpg" alt="Director" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                <h3 className="text-2xl font-bold text-white mb-2">Mrs. Joys Anita Simson</h3>
                <p className="text-blue-400 mb-4">Technical Director</p>
                <p className="text-gray-300">"Excellence in execution combined with visionary thinking drives our success in every project."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About TIMA Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={aboutRef} className="max-w-prose mx-auto text-center lg:text-left">
              <h2 className="text-4xl font-bold text-white mb-6">About TIMA</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At TIMA Integrated Technology, we are more than just a tech company we are a partner in transformation.
                 Our team is fueled by a passion for innovation, driven by expertise, and focused on delivering exceptional value to our clients.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                ref={logoRef}
                src="/lovable-uploads/timafinal.png" 
                alt="TIMA Logo" 
                className="w-64 h-64 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" ref={contactRef} className="py-20 px-6 bg-slate-800/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Get In Touch</h2>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="form-element">
                  <Input 
                    placeholder="Your Name *" 
                    required 
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="form-element">
                  <Input 
                    type="email" 
                    placeholder="Your Email *" 
                    required 
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="form-element">
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="form-element">
                  <Select>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      <SelectItem value="ai-software">Advanced AI & Software Solutions</SelectItem>
                      <SelectItem value="embedded-pcb">Smart Embedded & PCB Solutions</SelectItem>
                      <SelectItem value="ev-energy">Sustainable EV & Green Energy</SelectItem>
                      <SelectItem value="ecommerce">Digital E-commerce Platform</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="Others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="form-element">
                  <Textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="form-element">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8 text-center md:text-left items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">TIMA  Integrated Technologies</h3>
              <p className="text-gray-400 mb-4">"Together We Rise, Together We Thrive."</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 hover:scale-110 transition-all cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-400 hover:scale-110 transition-all cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 hover:scale-110 transition-all cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
              
                <li><Link to="/division" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/partners" className="hover:text-white transition-colors">Partners</Link></li>
                <li><a href="/academy" className="hover:text-white transition-colors">Academy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-center md:justify-start items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>admin@thetima.com</span>
                </div>
                <div className="flex justify-center md:justify-start items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 93637 21147</span>
                </div>
                <div className="flex justify-center md:justify-start items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>123 Tech Street, Innovation City</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
               
              </ul>
            </div>
            <div className="md:col-span-1 w-full">
              <h4 className="text-lg font-semibold text-white mb-4 text-right md:text-left">Our Location</h4>
              <div className="w-full md:w-[320px] ml-auto">
                <iframe 
                  title="TIMA Location"
                  src="https://www.google.com/maps?q=TIMA+Integrated+Technologies+Pvt+Ltd,+Madurai&output=embed"
                  width="100%" 
                  height="180" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-md border border-slate-700"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-700 gap-y-4">
           
            <Button 
              onClick={scrollToTop}
              variant="outline" 
              size="icon"
              className="border-slate-600 text-gray-400 hover:text-white hover:scale-110 transition-all"
            >
              <ChevronUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
