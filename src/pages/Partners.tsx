import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Navbar from '@/components/ui/Navbar';

gsap.registerPlugin(ScrollTrigger);


const Partners = () => {
  const navigate = useNavigate();
  const heroImageRef = useRef<HTMLImageElement>(null);
  const leftImageRef = useRef<HTMLImageElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const weAreHereRef = useRef<HTMLDivElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const handshakeRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Hero section animations
    const tl = gsap.timeline();
    
    if (heroImageRef.current) {
      tl.fromTo(heroImageRef.current, 
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
      );
    }

    if (leftImageRef.current) {
      tl.fromTo(leftImageRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );
    }

    if (rightTextRef.current) {
      tl.fromTo(rightTextRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.8"
      );
    }

    // Scroll triggered animations with highlight effect for "We are here"
    if (weAreHereRef.current) {
      const heading = weAreHereRef.current.querySelector('.highlight-heading');
      const underline = weAreHereRef.current.querySelector('.highlight-underline');
      
      gsap.fromTo(weAreHereRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: weAreHereRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Highlight animation for the heading
      if (heading && underline) {
        gsap.fromTo(heading,
          { scale: 1, textShadow: "0 0 0px rgba(255,255,255,0)" },
          {
            scale: 1.05,
            textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo(underline,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }

    // Why Choose Us staggered animation
    if (whyChooseRef.current) {
      const items = whyChooseRef.current.querySelectorAll('.why-choose-item');
      gsap.fromTo(items,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: whyChooseRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Services section animation with enhanced button effect
    if (servicesRef.current) {
      gsap.fromTo(servicesRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Enhanced button animation
      const button = servicesRef.current.querySelector('button');
      if (button) {
        gsap.fromTo(button,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            delay: 0.3,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: button,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }

    // Handshake animation section
    if (handshakeRef.current) {
      gsap.fromTo(handshakeRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: handshakeRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Footer animation with staggered social icons
    if (footerRef.current) {
      const socialIcons = footerRef.current.querySelectorAll('.social-icon');
      gsap.fromTo(socialIcons,
        { y: 30, opacity: 0, rotation: 180 },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleDivisionNavigation = (sectionId: string) => {
    navigate(`/division#${sectionId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Partner Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="text-center mb-16">
          <img
            ref={heroImageRef}
            src="lovable-uploads/cybrogtext.svg"
            alt="Partnership collaboration"
            className="mx-auto mb-12 max-w-4xl w-full h-97 object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* Removed the container mx-auto that was wrapping the grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <img
              ref={leftImageRef}
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
              alt="Technology partnership"
              className="rounded-xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div ref={rightTextRef} className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-6">Building Strong Partnerships</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>• Strategic collaborations that drive innovation and growth</p>
              <p>• Trusted partnerships built on mutual success and shared values</p>
              <p>• Global network of technology leaders and industry experts</p>
              <p>• Comprehensive support throughout your digital transformation journey</p>
              <p>• Cutting-edge solutions tailored to your unique business needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* We Are Here for You Section */}
      <section ref={weAreHereRef} className="py-20 px-6 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-6xl font-bold text-foreground mb-8 relative highlight-heading">
            We are here for you
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full highlight-underline"></div>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>We grow with you, building lasting relationships that transcend traditional business partnerships.</p>
            <p>We believe in long-term collaboration, supporting your vision every step of the way.</p>
            <p>Our commitment extends beyond delivery - we're your trusted technology partner for life.</p>
            <p>Together, we create innovative solutions that drive your success and shape the future.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyChooseRef} className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="why-choose-item text-center space-y-4">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
                alt="Innovation"
                className="mx-auto rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold text-foreground">Innovation Excellence</h3>
              <p className="text-muted-foreground">Cutting-edge technology solutions that push the boundaries of what's possible in your industry.</p>
            </div>
            
            <div className="why-choose-item text-center space-y-4">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
                alt="Technical Expertise"
                className="mx-auto rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold text-foreground">Technical Expertise</h3>
              <p className="text-muted-foreground">Deep technical knowledge across multiple domains, ensuring robust and scalable solutions.</p>
            </div>
            
            <div className="why-choose-item text-center space-y-4">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
                alt="Global Support"
                className="mx-auto rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold text-foreground">Global Support</h3>
              <p className="text-muted-foreground">24/7 worldwide support ensuring your operations never skip a beat, wherever you are.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 px-6 bg-gradient-to-r from-secondary/5 to-primary/5">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-foreground mb-8">Our Services</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Comprehensive technology solutions spanning AI, embedded systems, green energy, and e-commerce platforms. 
            We deliver excellence across every division of our expertise.
          </p>
          <Button 
            onClick={() => navigate('/division#ai-software')}
            className="px-8 py-3 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Explore Our Services
          </Button>
        </div>
      </section>

      {/* Handshake Image Section */}
      <section ref={handshakeRef} className="relative overflow-hidden">
        <Link to="/#contact" className="block w-full">
          <img
            src="/lovable-uploads/35f96d27-5eea-4c88-ba61-47c12fb3d4dc.png"
            alt="Business handshake - Click to contact us"
            className="w-full h-auto object-cover cursor-pointer hover:scale-105 transition-transform duration-500 md:h-64 lg:h-80 xl:h-96"
          />
        </Link>
      </section>

      {/* Footer */}
      <footer id="contact" ref={footerRef} className="bg-card border-t border-border py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">TIMA Integrated Technologies</h3>
              <p className="text-muted-foreground">
                "Together We Rise, Together We Thrive."
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <div className="space-y-2">
                
                <Link to="/division/#ai-software" className="block text-muted-foreground hover:text-primary transition-colors">Division</Link>
                <Link to="/partners" className="block text-muted-foreground hover:text-primary transition-colors">Partners</Link>
                <Link to="/academy" className="block text-muted-foreground hover:text-primary transition-colors">Academy</Link>

              </div>
            </div>

            

            
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Contact Info</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@tima.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 93637 21147</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>TIMA Integrated Technologies Pvt Ltd, 50-A, AA Road, Rathinapuram, Madurai - 625011</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Follow Us</h4>
              <div className="flex space-x-4">
                <Facebook className="social-icon w-6 h-6 text-muted-foreground hover:text-primary transition-colors cursor-pointer hover:scale-110 transform duration-200" />
                <Twitter className="social-icon w-6 h-6 text-muted-foreground hover:text-primary transition-colors cursor-pointer hover:scale-110 transform duration-200" />
                <Instagram className="social-icon w-6 h-6 text-muted-foreground hover:text-primary transition-colors cursor-pointer hover:scale-110 transform duration-200" />
                <Linkedin className="social-icon w-6 h-6 text-muted-foreground hover:text-primary transition-colors cursor-pointer hover:scale-110 transform duration-200" />
              </div>
            </div>
            <div className="md:col-span-1 w-full">
              <h4 className="font-semibold text-foreground text-right md:text-left">Our Location</h4>
              <div className="w-full md:w-[320px] ml-auto mt-2">
                <iframe 
                  title="TIMA Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.044167143801!2d78.1059835!3d9.9070064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf8a37a5ef5d%3A0x3dad7d22f09b1fc0!2sTIMA%20INTEGRATED%20TECHNOLOGIES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" 
                  height="180" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-md border"
                ></iframe>
              </div>
            </div>
          </div>
          
         
        </div>
      </footer>
    </div>
  );
};

export default Partners;