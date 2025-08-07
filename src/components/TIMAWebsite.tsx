import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ChevronUp, ChevronDown, Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Navbar from '@/components/ui/Navbar';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const TIMAWebsite = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll functions
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to replay all animations
  const replayAnimations = () => {
    // Reset all elements to initial states
    gsap.set([".hero-title", ".hero-product"], { y: 150, opacity: 0, scale: 0.5 });
    gsap.set(".service-content", { opacity: 0, x: 0, y: 50 });
    gsap.set(".service-image", { opacity: 0, x: 0, y: 50, scale: 0.95 });
    gsap.set(".embedded-content-1, .embedded-content-3", { y: 50, opacity: 0 });
    gsap.set(".embedded-image-3", { y: 50, opacity: 0 });

    // Replay hero animation
    const heroTl = gsap.timeline({ delay: 0.2 });
    heroTl
      .to(".hero-title", { 
        y: 0, 
        opacity: 1, 
        duration: 1.5, 
        ease: "power3.out"
      })
      .to(".hero-product", { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 2, 
        ease: "back.out(1.2)" 
      }, 0.5);

    // Replay service animations with stagger
    gsap.to(".service-content", {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      delay: 1
    });

    gsap.to(".service-image", {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
      delay: 1.3
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Samsung-style Hero Entry Animation
      const heroTl = gsap.timeline();
      
      // Set initial states for Samsung-style entrance
      gsap.set(".hero-title", { y: 150, opacity: 0 });
      gsap.set(".hero-product", { y: 200, opacity: 0, scale: 0.5 });

      // Samsung-style entrance sequence
      heroTl
        .to(".hero-title", { 
          y: 0, 
          opacity: 1, 
          duration: 2, 
          ease: "power3.out"
        })
        .to(".hero-product", { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 2.5, 
          ease: "back.out(1.2)" 
        }, 0.8);

      // Custom animations for each service section
      const serviceAnimations = [
        // AI Service KRONOS - left to right
        { content: { x: -300, y: 0 }, image: { x: 300, y: 0 }, ease: 'power3.out' },
        // TIMA Cloud - fade-in upward
        { content: { x: 0, y: 100 }, image: { x: 0, y: 100 }, ease: 'power2.out' },
        // Freelancing Hub - top-down
        { content: { x: 0, y: -150 }, image: { x: 0, y: -200 }, ease: 'bounce.out' },
        // Crypto Lab - right to left
        { content: { x: 300, y: 0 }, image: { x: -300, y: 0 }, ease: 'power3.out' },
        // SIM Bank - left to right
        { content: { x: -300, y: 0 }, image: { x: 300, y: 0 }, ease: 'power3.out' },
        // FinTech - fade-in upward
        { content: { x: 0, y: 100 }, image: { x: 0, y: 100 }, ease: 'power2.out' },
        // Education Tech - fade-in with scale
        { content: { x: 0, y: 50, scale: 0.8 }, image: { x: 0, y: 50, scale: 0.8 }, ease: 'back.out(1.7)' },
        // Gym Equipment - top-down with zoom
        { content: { x: 0, y: -100, scale: 0.9 }, image: { x: 0, y: -150, scale: 0.9 }, ease: 'elastic.out(1, 0.75)' }
      ];

      gsap.utils.toArray('.service-content').forEach((content: any, index) => {
        const animation = serviceAnimations[index] || serviceAnimations[0];
        const contentSettings = { 
          opacity: 0, 
          ...animation.content
        };
        
        gsap.set(content, contentSettings);
        
        ScrollTrigger.create({
          trigger: content,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          refreshPriority: -1,
          invalidateOnRefresh: true,
          onEnter: () => {
            gsap.killTweensOf(content);
            gsap.to(content, {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: animation.ease,
              delay: 0.1,
              overwrite: true
            });
          },
          onLeave: () => {
            gsap.killTweensOf(content);
            gsap.to(content, {
              ...animation.content,
              opacity: 0,
              duration: 0.6,
              ease: 'power2.in',
              overwrite: true
            });
          },
          onEnterBack: () => {
            gsap.killTweensOf(content);
            gsap.to(content, {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: animation.ease,
              delay: 0.1,
              overwrite: true
            });
          },
          onLeaveBack: () => {
            gsap.killTweensOf(content);
            gsap.to(content, {
              ...animation.content,
              opacity: 0,
              duration: 0.6,
              ease: 'power2.in',
              overwrite: true
            });
          }
        });
      });

      gsap.utils.toArray('.service-image').forEach((image: any, index) => {
        const animation = serviceAnimations[index] || serviceAnimations[0];
        const imageSettings = { 
          opacity: 0, 
          ...animation.image
        };
        
        gsap.set(image, imageSettings);
        
        ScrollTrigger.create({
          trigger: image,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          refreshPriority: -1,
          invalidateOnRefresh: true,
          onEnter: () => {
            gsap.killTweensOf(image);
            gsap.to(image, {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1.5,
              ease: animation.ease,
              delay: 0.2,
              overwrite: true
            });
          },
          onLeave: () => {
            gsap.killTweensOf(image);
            gsap.to(image, {
              ...animation.image,
              opacity: 0,
              scale: 0.8,
              duration: 0.8,
              ease: 'power2.in',
              overwrite: true
            });
          },
          onEnterBack: () => {
            gsap.killTweensOf(image);
            gsap.to(image, {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1.5,
              ease: animation.ease,
              delay: 0.2,
              overwrite: true
            });
          },
          onLeaveBack: () => {
            gsap.killTweensOf(image);
            gsap.to(image, {
              ...animation.image,
              opacity: 0,
              scale: 0.8,
              duration: 0.8,
              ease: 'power2.in',
              overwrite: true
            });
          }
        });
      });

      // Samsung-style Image Parallax and Zoom on Scroll
      gsap.utils.toArray('.service-image img').forEach((img: any) => {
        ScrollTrigger.create({
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to(img, {
              scale: 1 + progress * 0.2,
              duration: 0.3
            });
          }
        });
      });

      // Samsung-style Hero Product Image Zoom & Rotation on Scroll
      gsap.utils.toArray('.hero-product-image').forEach((img: any) => {
        ScrollTrigger.create({
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to(img, {
              scale: 1 + progress * 0.5,
              rotation: progress * 15,
              duration: 0.3
            });
          }
        });
      });

      // TIMA Embedded Section Animations
      gsap.set(".embedded-image-1", { y: -100, opacity: 0 });
      gsap.set(".embedded-content-1", { y: 50, opacity: 0 });
      gsap.set(".embedded-content-3", { y: 50, opacity: 0 });
      gsap.set(".embedded-image-3", { y: 100, opacity: 0 });
      gsap.set(".tima-embedded-title", { scale: 0.8, opacity: 0 });

      // TIMA Embedded Title Animation
      ScrollTrigger.create({
        trigger: '.tima-embedded-title',
        start: 'top 80%',
        onEnter: () => {
          gsap.to('.tima-embedded-title', {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: 'back.out(1.7)'
          });
        }
      });

      // Embedded Systems & Simulators Animation
      ScrollTrigger.create({
        trigger: '.embedded-image-1',
        start: 'top 80%',
        onEnter: () => {
          gsap.to('.embedded-image-1', {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out'
          });
          gsap.to('.embedded-content-1', {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
            delay: 0.3
          });
        }
      });

      // Hardware, 3D & PCB Prototyping Animation
      ScrollTrigger.create({
        trigger: '.embedded-content-3',
        start: 'top 80%',
        onEnter: () => {
          gsap.to('.embedded-content-3', {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out'
          });
          gsap.to('.embedded-image-3', {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.3
          });
        }
      });

      // Ford Mustang GT Scroll Animation - Left to Right on Down, Right to Left on Up
      const mustangCar = document.querySelector('.mustang-car');
      if (mustangCar) {
        ScrollTrigger.create({
          trigger: '.mustang-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const direction = self.direction;
            
            if (direction === 1) {
              // Scrolling down - move left to right
              gsap.to(mustangCar, {
                x: `${progress * 200}px`,
                duration: 0.3,
                ease: 'none'
              });
            } else {
              // Scrolling up - move right to left
              gsap.to(mustangCar, {
                x: `${-progress * 200}px`,
                duration: 0.3,
                ease: 'none'
              });
            }
          }
        });
      }

      // Car Text Animations
      ScrollTrigger.create({
        trigger: '.mustang-section',
        start: 'top 80%',
        onEnter: () => {
          gsap.to('.car-text-top', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
          });
          gsap.to('.car-text-bottom', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            delay: 0.3
          });
        },
        onLeave: () => {
          gsap.to('.car-text-top', {
            y: -20,
            opacity: 0,
            duration: 0.6
          });
          gsap.to('.car-text-bottom', {
            y: 20,
            opacity: 0,
            duration: 0.6
          });
        },
        onEnterBack: () => {
          gsap.to('.car-text-top', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
          });
          gsap.to('.car-text-bottom', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            delay: 0.3
          });
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="text-white overflow-x-hidden" style={{background: 'linear-gradient(to right, #1e1e1e, #5a5a5a, #1e1e1e)'}}>
      <Navbar />
      
      {/* Hero Section - Samsung Galaxy Watch Style */}
      <section id="ai-software-solutions" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="https://videos.pexels.com/video-files/2792370/2792370-hd_1920_1080_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/2792370/2792370-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="hero-title opacity-0">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-10xl font-light text-white mb-4 sm:mb-6 leading-tight">
              Advanced AI & <span className="text-cyan-400">Software Solutions</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 px-4 sm:px-0">
              Future-grade Innovation
            </p>
          </div>
        </div>
      </section>

      {/* AI Services - KRONOS Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 sm:py-12" style={{backgroundColor: '#051650'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="service-content opacity-0 text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-4 sm:mb-6 leading-tight">
                AI Services
                <br />
                <span className="text-cyan-400">KRONOS Cyborg</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                Proprietary AI agent powering automation across chatbots, OCR, LLM, and SaaS tools. 
                Enterprise licensing for global freelance and educational markets.
              </p>
              <div className="w-16 sm:w-20 h-px bg-cyan-400"></div>
            </div>
            <div className="service-image opacity-0 order-1 lg:order-2">
              <img 
                src="/lovable-uploads/cybrog.svg" 
                alt="AI Robot and Technology" 
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* TIMA Cloud Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 sm:py-12" style={{backgroundColor: '#051650'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
            <div className="service-content opacity-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-4 sm:mb-6 leading-tight">
                TIMA
                <br />
                <span className="text-cyan-400">Cloud Hosting</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-4xl px-4 sm:px-0">
                India's AWS/Azure alternative delivering low-cost, low-latency, compliance-first 
                infrastructure for SMEs breaking free from cloud giants.
              </p>
              <div className="w-16 sm:w-20 h-px bg-cyan-400 mx-auto"></div>
            </div>
            <div className="service-image opacity-0">
              <img 
                src="/lovable-uploads/cloud.svg" 
                alt="Cloud Data Center" 
                className="w-full max-w-4xl h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Global Hub Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 sm:py-12" style={{backgroundColor: '#051650'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
            <div className="service-image opacity-0 order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                alt="Global Freelancing Network" 
                className="w-full max-w-4xl h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-2xl"
              />
            </div>
            <div className="service-content opacity-0 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-4 sm:mb-6 leading-tight">
                Freelancing
                <br />
                <span className="text-cyan-400">Global Hub</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-4xl px-4 sm:px-0">
                24/7 productivity ecosystem serving US, UK, EU, and AUS markets 
                with AI, design, automation, coding, and cloud services.
              </p>
              <div className="w-16 sm:w-20 h-px bg-cyan-400 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Crypto Lab Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 sm:py-12" style={{backgroundColor: '#051650'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="service-image opacity-0 order-1">
              <img 
                src="/lovable-uploads/crypto.svg" 
                alt="Cryptocurrency Circuit Technology" 
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-2xl"
              />
            </div>
            <div className="service-content opacity-0 text-left lg:text-right order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-4 sm:mb-6 leading-tight">
                Crypto &
                <br />
                <span className="text-cyan-400">Automation Lab</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                Node hosting, crypto bots, and TIMA Coin ecosystem with 
                social impact through scam awareness and education tools.
              </p>
              <div className="w-16 sm:w-20 h-px bg-cyan-400 lg:ml-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* SIM Bank Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 sm:py-12" style={{backgroundColor: '#051650'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="service-content opacity-0 text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-4 sm:mb-6 leading-tight">
                VO IP
                <br />
                <span className="text-cyan-400">Infrastructure</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                Advanced OTP management and marketing SMS routing 
                infrastructure for seamless communication workflows.
              </p>
              <div className="w-16 sm:w-20 h-px bg-cyan-400"></div>
            </div>
            <div className="service-image opacity-0 order-1 lg:order-2">
              <img 
                src="/lovable-uploads/voip.svg" 
                alt="Communications Infrastructure" 
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FinTech Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 sm:py-12" style={{backgroundColor: '#051650'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
            <div className="service-content opacity-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-4 sm:mb-6 leading-tight">
                FinTech
                <br />
                <span className="text-cyan-400">Division</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-4xl px-4 sm:px-0">
                Hitachi ATM dealership pipeline and innovative 
                used auto loan applications driving financial inclusion.
              </p>
              <div className="w-16 sm:w-20 h-px bg-cyan-400 mx-auto"></div>
            </div>
            <div className="service-image opacity-0">
              <img 
                src="/lovable-uploads/fintech.svg" 
                alt="Financial Technology Building" 
                className="w-full max-w-4xl h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Education Tech Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 sm:py-12" style={{backgroundColor: '#051650'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
            <div className="service-content opacity-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-4 sm:mb-6 leading-tight">
                Education
                <br />
                <span className="text-cyan-400">Technology</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-4xl px-4 sm:px-0">
                Pearson VUE test center certifications and TIMA Wallet 
                digital student record locker revolutionizing EdTech learning.
              </p>
              <div className="w-16 sm:w-20 h-px bg-cyan-400 mx-auto"></div>
            </div>
            <div className="service-image opacity-0">
              <img 
                src="/lovable-uploads/education.svg" 
                alt="Education Technology Programming" 
                className="w-full max-w-4xl h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gym Equipment Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 sm:py-12" style={{backgroundColor: '#051650'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
            <div className="service-image opacity-0 order-2 lg:order-1">
              <img 
                src="/lovable-uploads/fittech.svg" 
                alt="Fitness Equipment Technology" 
                className="w-full max-w-4xl h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-2xl"
              />
            </div>
            <div className="service-content opacity-0 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 leading-tight">
                Gym Equipment &
                <br />
                <span className="text-cyan-400">Fitness Tech</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-4xl px-4 sm:px-0">
                Manufacturing facilities across Madurai, Chennai, Bangalore 
                with AI-powered logging, diet apps, and fitness coaching.
              </p>
              <div className="w-16 sm:w-20 h-px bg-cyan-400 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* TIMA Embedded Section */}
      <div id="embedded-pcb-solutions" className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 sm:py-12">
        {/* Background Video - Only behind TIMA Embedded heading */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="https://videos.pexels.com/video-files/2792370/2792370-hd_1920_1080_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/2792370/2792370-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
            <div className="service-content opacity-0">
              <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-10xl font-light text-white mb-4 sm:mb-6 leading-tight">
                Smart Embedded &
                <br />
                <span className="text-cyan-400">PCB Solutions</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-4xl px-4 sm:px-0">
                Gaming & Console Racing Theme with cutting-edge embedded systems and hardware prototyping.
              </p>
              <div className="w-16 sm:w-20 h-px bg-cyan-400 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Systems & Simulators Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        {/* Gaming Theme Background with Joystick Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          {/* Floating Joystick Icons */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`joystick-${i}`}
              className="absolute animate-pulse"
              style={{
                left: `${(i * 15) % 100}%`,
                top: `${(i * 23) % 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            >
              🎮
            </div>
          ))}
          {/* Additional Gaming Icons */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`gaming-${i}`}
              className="absolute animate-bounce opacity-30"
              style={{
                left: `${(i * 20 + 10) % 100}%`,
                top: `${(i * 30 + 15) % 100}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: '2s'
              }}
            >
              {i % 3 === 0 ? '🕹️' : i % 3 === 1 ? '🎯' : '⚡'}
            </div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* PlayStation Button Shapes - Falling Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Position 1 - Left side falling shapes */}
            <div className="absolute top-0 left-[20%] animate-[fall_4s_linear_infinite] opacity-70" style={{animationDelay: '0s'}}>
              <div className="w-6 h-6 bg-emerald-500 transform rotate-0" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
            </div>
            <div className="absolute top-0 left-[25%] animate-[fall_5s_linear_infinite] opacity-70" style={{animationDelay: '1s'}}>
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
            </div>
            
            {/* Position 2 - Center falling shapes */}
            <div className="absolute top-0 left-[45%] animate-[fall_4.5s_linear_infinite] opacity-70" style={{animationDelay: '2s'}}>
              <div className="w-6 h-6 bg-purple-400 relative flex items-center justify-center">
                <span className="text-white font-bold text-lg">✕</span>
              </div>
            </div>
            <div className="absolute top-0 left-[50%] animate-[fall_5.5s_linear_infinite] opacity-70" style={{animationDelay: '0.5s'}}>
              <div className="w-6 h-6 bg-pink-400 border-2 border-pink-400 bg-transparent"></div>
            </div>
            
            {/* Position 3 - Right side falling shapes */}
            <div className="absolute top-0 left-[70%] animate-[fall_4.2s_linear_infinite] opacity-70" style={{animationDelay: '1.5s'}}>
              <div className="w-6 h-6 bg-emerald-500 transform rotate-0" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
            </div>
            <div className="absolute top-0 left-[75%] animate-[fall_5.2s_linear_infinite] opacity-70" style={{animationDelay: '2.5s'}}>
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
            <div className="service-image opacity-0 order-2 lg:order-1">
              <img 
                src="/lovable-uploads/simulator.svg" 
                alt="Gaming Console Setup" 
                className="w-full max-w-4xl h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-2xl"
              />
            </div>
            <div className="service-content opacity-0 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-4 sm:mb-6 leading-tight">
                Embedded Systems &
                <br />
                <span className="text-cyan-400">Simulators</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-4xl px-4 sm:px-0">
                Highlight key projects like game consoles and racing simulators. 
                Target use cases: Gaming lounges and entertainment zones.
              </p>
              <div className="w-16 sm:w-20 h-px bg-cyan-400 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Ford Mustang GT Scroll Animation Section */}
      <div className="mustang-section h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 px-4 sm:px-6">
        {/* Text Above Car - Much closer to car */}
        <div className="absolute top-8 sm:top-12 md:top-16 left-0 right-0 text-center z-10 car-text-top opacity-0 px-4" style={{transform: 'translateY(-20px)'}}>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white leading-tight">
            Racing <span className="text-cyan-400">Simulator</span>
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto mt-1">
            High-performance embedded systems for automotive excellence
          </p>
        </div>

        {/* Car - Centered with more space */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/lovable-uploads/car.svg" 
            alt="Classic Ford Mustang GT" 
            className="mustang-car w-full h-auto max-h-[75vh] object-contain"
            style={{
              objectPosition: 'center center'
            }}
          />
        </div>

        {/* Text Below Car - Much closer to car */}
        <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-0 right-0 text-center z-10 car-text-bottom opacity-0 px-4" style={{transform: 'translateY(20px)'}}>
          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-cyan-400 leading-tight">
            Advanced ECU Technology
          </h4>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mt-1">
            Custom embedded solutions for next-generation automotive systems and racing performance
          </p>
        </div>
      </div>

      {/* Hardware, 3D & PCB Prototyping Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 sm:py-12 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        {/* Gaming PCB Theme Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
          {/* Circuit Pattern with Gaming Elements */}
          {[...Array(10)].map((_, i) => (
            <div
              key={`circuit-${i}`}
              className="absolute animate-pulse"
              style={{
                left: `${(i * 18) % 100}%`,
                top: `${(i * 27) % 100}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: '4s'
              }}
            >
              🔌
            </div>
          ))}
          {/* Gaming Controllers and Tech Icons */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`tech-gaming-${i}`}
              className="absolute animate-bounce opacity-40"
              style={{
                left: `${(i * 25 + 12) % 100}%`,
                top: `${(i * 35 + 20) % 100}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: '3s'
              }}
            >
              {i % 2 === 0 ? '🎮' : '⚙️'}
            </div>
          ))}
        </div>
        
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* PlayStation Button Shapes - Falling from Hardware section */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Position 1 - Left side falling shapes */}
            <div className="absolute top-0 left-[15%] animate-[fall_4.8s_linear_infinite] opacity-60" style={{animationDelay: '1s'}}>
              <div className="w-5 h-5 bg-emerald-400 transform rotate-0" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
            </div>
            <div className="absolute top-0 left-[20%] animate-[fall_5.3s_linear_infinite] opacity-60" style={{animationDelay: '2.5s'}}>
              <div className="w-5 h-5 bg-red-400 rounded-full"></div>
            </div>
            
            {/* Position 2 - Center falling shapes */}
            <div className="absolute top-0 left-[48%] animate-[fall_4.7s_linear_infinite] opacity-60" style={{animationDelay: '0.5s'}}>
              <div className="w-5 h-5 bg-purple-300 relative flex items-center justify-center">
                <span className="text-white font-bold text-sm">✕</span>
              </div>
            </div>
            <div className="absolute top-0 left-[52%] animate-[fall_5.8s_linear_infinite] opacity-60" style={{animationDelay: '3s'}}>
              <div className="w-5 h-5 bg-pink-300 border-2 border-pink-300 bg-transparent"></div>
            </div>
            
            {/* Position 3 - Right side falling shapes */}
            <div className="absolute top-0 left-[75%] animate-[fall_4.4s_linear_infinite] opacity-60" style={{animationDelay: '1.8s'}}>
              <div className="w-5 h-5 bg-emerald-400 transform rotate-0" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
            </div>
            <div className="absolute top-0 left-[80%] animate-[fall_5.1s_linear_infinite] opacity-60" style={{animationDelay: '0.2s'}}>
              <div className="w-5 h-5 bg-red-400 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
            <div className="service-content opacity-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-4 sm:mb-6 leading-tight">
                Hardware, 3D &
                <br />
                <span className="text-cyan-400">PCB Prototyping</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-4xl px-4 sm:px-0">
                Showcase manufacturing scopes: EV components, IoT devices, PCB printing, and event gifting. 
                Emphasize use cases like smart devices, gym integrations, and embedded R&D solutions.
              </p>
              <div className="w-16 sm:w-20 h-px bg-cyan-400 mx-auto"></div>
            </div>
            <div className="service-image opacity-0">
              <img 
                src="/lovable-uploads/3d.svg" 
                alt="PCB Circuit Board Manufacturing" 
                className="w-full max-w-4xl h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* TIMA EV Section - Eco Green Theme */}
      <div id="ev-green-energy" className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 sm:py-12 bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Wind and Leaf Animations Moving Left to Right */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Wind lines moving left to right */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`wind-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-green-300 to-transparent opacity-30 animate-[windFlow_4s_linear_infinite]"
              style={{
                width: '300px',
                top: `${10 + i * 12}%`,
                left: '-300px',
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
          
          {/* Leaves moving left to right */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`leaf-lr-${i}`}
              className="absolute text-green-400 opacity-60 animate-[leafDrift_8s_linear_infinite]"
              style={{
                fontSize: `${16 + Math.random() * 12}px`,
                top: `${Math.random() * 80 + 10}%`,
                left: '-50px',
                animationDelay: `${i * 0.7}s`
              }}
            >
              {['🍃', '🌿', '🍂'][i % 3]}
            </div>
          ))}
          
          {/* Additional falling leaves for layered effect */}
          <div className="leaf absolute animate-[fall_8s_linear_infinite] opacity-40 text-green-600 text-2xl" style={{left: '10%', animationDelay: '0s'}}>🍃</div>
          <div className="leaf absolute animate-[fall_10s_linear_infinite] opacity-40 text-emerald-600 text-xl" style={{left: '20%', animationDelay: '2s'}}>🌿</div>
          <div className="leaf absolute animate-[fall_12s_linear_infinite] opacity-40 text-green-700 text-lg" style={{left: '30%', animationDelay: '4s'}}>🍃</div>
          <div className="leaf absolute animate-[fall_9s_linear_infinite] opacity-40 text-emerald-500 text-xl" style={{left: '40%', animationDelay: '1s'}}>🌿</div>
          <div className="leaf absolute animate-[fall_11s_linear_infinite] opacity-40 text-green-600 text-2xl" style={{left: '50%', animationDelay: '3s'}}>🍃</div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
            <div className="service-content opacity-0">
              <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-10xl font-light text-green-800 mb-4 sm:mb-6 animate-[leafFloat_3s_ease-in-out_infinite] leading-tight">
                Sustainable EV &
                <br />
                <span className="text-gradient-eco">Green Energy</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-700 mb-6 sm:mb-8 leading-relaxed max-w-4xl px-4 sm:px-0">
                Green Energy & Clean Tech Theme with sustainable transportation and eco-friendly solutions.
              </p>
              <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-green-600 to-emerald-600 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Green Energy & Eco Mission Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 sm:py-12 bg-gradient-to-bl from-emerald-50 to-green-100">
        {/* Curved Wind and Sparse Leaf Animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Curved wind lines */}
          {[...Array(4)].map((_, i) => (
            <div
              key={`curve-wind-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-20 animate-[curvedWind_6s_linear_infinite]"
              style={{
                width: '400px',
                top: `${20 + i * 15}%`,
                left: '-400px',
                animationDelay: `${i * 1.5}s`
              }}
            />
          ))}
          
          {/* Sparse leaves with wind */}
          {[...Array(3)].map((_, i) => (
            <div
              key={`sparse-leaf-${i}`}
              className="absolute text-green-500 opacity-40 animate-[sparseLeafDrift_8s_linear_infinite]"
              style={{
                fontSize: '18px',
                top: `${25 + i * 20}%`,
                left: '-40px',
                animationDelay: `${i * 2.5}s`
              }}
            >
              🍃
            </div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="service-content opacity-0 text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-green-800 mb-4 sm:mb-6 animate-[leafFloat_3s_ease-in-out_infinite_0.5s] leading-tight">
                Green Energy &
                <br />
                <span className="text-gradient-eco">Eco Mission</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-700 mb-6 sm:mb-8 leading-relaxed">
                Focus on power sources like solar energy and bio stations. 
                Highlight infrastructures such as data centers, mining farms, and production units with government incentives and green subsidies eligibility.
              </p>
              <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-green-600 to-emerald-600"></div>
            </div>
            <div className="service-image opacity-0 eco-fresh order-1 lg:order-2">
              <img 
                src="/lovable-uploads/green.svg" 
                alt="Solar Energy and Green Technology" 
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* EV Transport for Schools & Colleges Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 bg-gradient-to-br from-green-100 to-emerald-50">
        {/* Curved Wind and Sparse Leaf Animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Curved wind lines */}
          {[...Array(4)].map((_, i) => (
            <div
              key={`curve-wind-ev-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-20 animate-[curvedWind_6s_linear_infinite]"
              style={{
                width: '400px',
                top: `${20 + i * 15}%`,
                left: '-400px',
                animationDelay: `${i * 1.5 + 2}s`
              }}
            />
          ))}
          
          {/* Sparse leaves with wind */}
          {[...Array(3)].map((_, i) => (
            <div
              key={`sparse-leaf-ev-${i}`}
              className="absolute text-green-500 opacity-40 animate-[sparseLeafDrift_8s_linear_infinite]"
              style={{
                fontSize: '18px',
                top: `${25 + i * 20}%`,
                left: '-40px',
                animationDelay: `${i * 2.5 + 1}s`
              }}
            >
              🍃
            </div>
          ))}
        </div>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="service-content opacity-0">
              <h2 className="text-6xl lg:text-7xl font-light text-green-800 mb-6 animate-[leafFloat_3s_ease-in-out_infinite_1s]">
                EV Transport for
                <br />
                <span className="text-gradient-eco">Schools & Colleges</span>
              </h2>
              <p className="text-lg lg:text-xl text-green-700 mb-8 leading-relaxed max-w-4xl">
                Showcase EV rickshaw and mini-van fleet models with real-time tracking and CCTV-enabled safety. 
                Initial launch with 10 EVs, scaling through an Uber/Ola-style app model.
              </p>
              <div className="w-20 h-px bg-gradient-to-r from-green-600 to-emerald-600 mx-auto"></div>
            </div>
            <div className="service-image opacity-0 eco-fresh">
              <img 
                src="/lovable-uploads/EV.svg" 
                alt="Electric Vehicle Transport for Education" 
                className="w-full max-w-4xl h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hydroponic Farm Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 bg-gradient-to-tl from-emerald-100 to-green-50">
        {/* Curved Wind and Sparse Leaf Animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Curved wind lines */}
          {[...Array(4)].map((_, i) => (
            <div
              key={`curve-wind-hydro-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-20 animate-[curvedWind_6s_linear_infinite]"
              style={{
                width: '400px',
                top: `${20 + i * 15}%`,
                left: '-400px',
                animationDelay: `${i * 1.5 + 4}s`
              }}
            />
          ))}
          
          {/* Sparse leaves with wind */}
          {[...Array(3)].map((_, i) => (
            <div
              key={`sparse-leaf-hydro-${i}`}
              className="absolute text-green-500 opacity-40 animate-[sparseLeafDrift_8s_linear_infinite]"
              style={{
                fontSize: '18px',
                top: `${25 + i * 20}%`,
                left: '-40px',
                animationDelay: `${i * 2.5 + 2}s`
              }}
            >
              🍃
            </div>
          ))}
        </div>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="service-image opacity-0 eco-fresh">
              <img 
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop" 
                alt="Hydroponic Farm Fresh Produce" 
                className="w-full max-w-4xl h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="service-content opacity-0">
              <h2 className="text-6xl lg:text-7xl font-light text-green-800 mb-6 animate-[leafFloat_3s_ease-in-out_infinite_1.5s]">
                Hydroponic
                <br />
                <span className="text-gradient-eco">Farm</span>
              </h2>
              <p className="text-lg lg:text-xl text-green-700 mb-8 leading-relaxed max-w-4xl">
                Emphasize the pesticide-free, clean, and fresh produce advantage. 
                Sustainable farming solutions for the future of agriculture.
              </p>
              <div className="w-20 h-px bg-gradient-to-r from-green-600 to-emerald-600 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* TIMA E-Commerce Section - Same Style as Technologies */}
      <section id="ecommerce-platform" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" type="video/mp4" />
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="service-content opacity-0">
            <h2 className="text-8xl md:text-10xl font-light text-white mb-6">
              Digital E-commerce
              <br />
              <span className="text-cyan-400">Platform</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Classic Online Store Theme
            </p>
          </div>
        </div>
      </section>

      {/* Gym Equipment Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="service-content opacity-0 text-left">
              <h2 className="text-6xl lg:text-7xl font-light text-gray-900 mb-6">
                Gym
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Equipment</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                Display key gym equipment products with clean visuals and professional-grade quality for fitness enthusiasts.
              </p>
              <div className="w-20 h-px bg-gradient-to-r from-blue-600 to-purple-600"></div>
            </div>
            <div className="service-image opacity-0 group">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="/lovable-uploads/gym.svg" 
                  alt="Professional Gym Equipment" 
                  className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simulators Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="service-image opacity-0 group order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="lovable-uploads/simulator.svg" 
                  alt="Gaming Simulators and Consoles" 
                  className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="service-content opacity-0 text-left order-1 lg:order-2">
              <h2 className="text-6xl lg:text-7xl font-light text-gray-900 mb-6">
                Gaming
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Simulators</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                Showcase products like game consoles and racing simulators for entertainment venues and gaming lounges.
              </p>
              <div className="w-20 h-px bg-gradient-to-r from-blue-600 to-purple-600"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Events & Gifting Solutions Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="service-content opacity-0 text-left">
              <h2 className="text-6xl lg:text-7xl font-light text-gray-900 mb-6">
                Events &
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Gifting Solutions</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                Feature end-to-end event automation services with in-house gifting production targeting gaming lounges and entertainment zones.
              </p>
              <div className="w-20 h-px bg-gradient-to-r from-blue-600 to-purple-600"></div>
            </div>
            <div className="service-image opacity-0 group">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="lovable-uploads/gifting.jpg" 
                  alt="Event Management and Gifting Solutions" 
                  className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialty Food Supply Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="service-image opacity-0 group order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop" 
                  alt="Healthy Specialty Food and Nutrition" 
                  className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="service-content opacity-0 text-left order-1 lg:order-2">
              <h2 className="text-6xl lg:text-7xl font-light text-gray-900 mb-6">
                Specialty
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Food Supply</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                Cater to athletes, geriatric care, gym-goers, and bedridden patients with subscription model and customized meal plans.
              </p>
              <div className="w-20 h-px bg-gradient-to-r from-blue-600 to-purple-600"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Car Care & E-Commerce Products Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="service-content opacity-0 text-left">
              <h2 className="text-6xl lg:text-7xl font-light text-gray-900 mb-6">
                Car Care &
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">E-Commerce Products</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                Highlight products like car shampoo, wax, and scratch removers available on Amazon, Flipkart, and your own D2C platform.
              </p>
              <div className="w-20 h-px bg-gradient-to-r from-blue-600 to-purple-600"></div>
            </div>
            <div className="service-image opacity-0 group">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="lovable-uploads/carcare.svg" 
                  alt="Car Care Products and Detailing" 
                  className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Car Wash & Roadside Assistance Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="service-image opacity-0 group order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="lovable-uploads/carwash.svg" 
                  alt="Mobile Car Wash and Roadside Service" 
                  className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="service-content opacity-0 text-left order-1 lg:order-2">
              <h2 className="text-6xl lg:text-7xl font-light text-gray-900 mb-6">
                Mobile Car Wash &
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Roadside Assistance</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                Operate in Madurai and nearby districts providing on-site car wash, jumpstart, and tire change services with company vehicles.
              </p>
              <div className="w-20 h-px bg-gradient-to-r from-blue-600 to-purple-600"></div>
            </div>
          </div>
        </div>
      </div>

      {/* TIMI TIMI TINGLES - Juice Brand Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="service-content opacity-0 text-left">
              <h2 className="text-6xl lg:text-7xl font-light text-gray-900 mb-6">
                TIMI TIMI TINGLES
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Juice Brand</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                A youth-focused lifestyle beverage with completed branding and test launch, ready for scaling production and market expansion.
              </p>
              <div className="w-20 h-px bg-gradient-to-r from-blue-600 to-purple-600"></div>
            </div>
            <div className="service-image opacity-0 group">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="lovable-uploads/timtim.svg" 
                  alt="TIMI TIMI TINGLES Juice Brand" 
                  className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 border-t border-slate-700 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">TIMA Integrated Technologies</h3>
              <p className="text-gray-400 mb-4">"Together We Rise, Together We Thrive."</p>
              <div className="flex space-x-4">
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 hover:scale-110 transition-all cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-400 hover:scale-110 transition-all cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 hover:scale-110 transition-all cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/#about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/division" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/partners" className="hover:text-white transition-colors">Partners</Link></li>

                <li><Link to="/academy" className="hover:text-white transition-colors">Academy</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>admin@thetima.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 93637 21147</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>TIMA Integrated Technologies Pvt Ltd, 50-A, AA Road, Rathinapuram, Madurai - 625011</span>
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
          </div>
          
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            
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

export default TIMAWebsite;