import React, { useState, useEffect } from "react";
import Navbar from '@/components/ui/Navbar';
import { Link } from 'react-router-dom';
import { ChevronUp, Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Complete list of all certifications from your images
const certifications = [
  // International Certification
  { 
    category: "International", 
    title: "Adobe Certification",
    logo: "/api/placeholder/64/64",
    description: "Master Adobe Creative Suite for creative and marketing excellence"
  },
  { 
    category: "International", 
    title: "Linux Certification",
    logo: "/api/placeholder/64/64",
    description: "Gain expertise in Linux system administration and networking"
  },
  { 
    category: "International", 
    title: "Digital Marketing Certification",
    logo: "/api/placeholder/64/64",
    description: "Learn modern digital marketing strategies and techniques"
  },
  { 
    category: "International", 
    title: "PostgreSQL Certification",
    logo: "/api/placeholder/64/64",
    description: "Database management and advanced PostgreSQL programming"
  },
  { 
    category: "International", 
    title: "INTEL Certification",
    logo: "/api/placeholder/64/64",
    description: "Hardware and processor technology certification program"
  },
  { 
    category: "International", 
    title: "Amazon Certification",
    logo: "/api/placeholder/64/64",
    description: "AWS cloud computing and web services certification"
  },
  { 
    category: "International", 
    title: "Novell Certification",
    logo: "/api/placeholder/64/64",
    description: "Enterprise networking and directory services"
  },
  { 
    category: "International", 
    title: "NetIQ Certification",
    logo: "/api/placeholder/64/64",
    description: "Identity and access management solutions"
  },
  { 
    category: "International", 
    title: "Suse Certification",
    logo: "/api/placeholder/64/64",
    description: "SUSE Linux enterprise solutions and administration"
  },
  { 
    category: "International", 
    title: "VMware Certification",
    logo: "/api/placeholder/64/64",
    description: "Virtualization and cloud infrastructure management"
  },
  { 
    category: "International", 
    title: "MongoDB Certification",
    logo: "/api/placeholder/64/64",
    description: "NoSQL database development and administration"
  },
  { 
    category: "International", 
    title: "Android Certification",
    logo: "/api/placeholder/64/64",
    description: "Mobile app development for Android platform"
  },
  { 
    category: "International", 
    title: "Google Certification",
    logo: "/api/placeholder/64/64",
    description: "Google Cloud Platform and workspace certifications"
  },
  { 
    category: "International", 
    title: "C++ Institute Certification",
    logo: "/api/placeholder/64/64",
    description: "Professional C++ programming certification"
  },
  { 
    category: "International", 
    title: "Corel Certification",
    logo: "/api/placeholder/64/64",
    description: "Graphic design and digital art with CorelDRAW"
  },
  { 
    category: "International", 
    title: "Microchip Certification",
    logo: "/api/placeholder/64/64",
    description: "Embedded systems and microcontroller programming"
  },
  { 
    category: "International", 
    title: "HP Enterprise Education",
    logo: "/api/placeholder/64/64",
    description: "Enterprise infrastructure and server management"
  },

  // Professional Course
  { 
    category: "Professional", 
    title: "Diploma in C and C++",
    logo: "/api/placeholder/64/64",
    description: "Comprehensive programming in C and C++ languages"
  },
  { 
    category: "Professional", 
    title: "Diploma in J2EE",
    logo: "/api/placeholder/64/64",
    description: "Enterprise Java development and frameworks"
  },
  { 
    category: "Professional", 
    title: "Diploma in .Net",
    logo: "/api/placeholder/64/64",
    description: "Microsoft .NET framework and C# development"
  },
  { 
    category: "Professional", 
    title: "Diploma in Core JAVA",
    logo: "/api/placeholder/64/64",
    description: "Core Java programming and object-oriented concepts"
  },
  { 
    category: "Professional", 
    title: "Software Testing",
    logo: "/api/placeholder/64/64",
    description: "Comprehensive software testing with Selenium automation"
  },
  { 
    category: "Professional", 
    title: "Diploma in VB + SQL",
    logo: "/api/placeholder/64/64",
    description: "Visual Basic programming with SQL database management"
  },

  // Certificate Course
  { 
    category: "Certificate", 
    title: "Diploma in PHP & MySQL",
    logo: "/api/placeholder/64/64",
    description: "Web development with PHP and MySQL database"
  },
  { 
    category: "Certificate", 
    title: "Certified Computer Accountant (Tally ERP 9)",
    logo: "/api/placeholder/64/64",
    description: "Accounting software expertise with Tally ERP 9"
  },
  { 
    category: "Certificate", 
    title: "Diploma in Web Designing",
    logo: "/api/placeholder/64/64",
    description: "Modern web design with CSS3, HTML5, and responsive design"
  },
  { 
    category: "Certificate", 
    title: "Diploma in Animation",
    logo: "/api/placeholder/64/64",
    description: "2D and 3D animation techniques and software"
  },
  { 
    category: "Certificate", 
    title: "Diploma in Computer & Networking",
    logo: "/api/placeholder/64/64",
    description: "Computer hardware and network administration"
  },
  { 
    category: "Certificate", 
    title: "Diploma in Information Technology",
    logo: "/api/placeholder/64/64",
    description: "Comprehensive IT skills and system management"
  },
  { 
    category: "Certificate", 
    title: "Flash Training",
    logo: "/api/placeholder/64/64",
    description: "Adobe Flash animation and interactive media design"
  },
  { 
    category: "Certificate", 
    title: "Diploma in Photoshop",
    logo: "/api/placeholder/64/64",
    description: "Advanced photo editing and digital design skills"
  },
  { 
    category: "Certificate", 
    title: "Business Intelligence - QLIK",
    logo: "/api/placeholder/64/64",
    description: "Data visualization and analytics with QlikView"
  },
  { 
    category: "Certificate", 
    title: "Blockchain Technology",
    logo: "/api/placeholder/64/64",
    description: "Distributed ledger technology and cryptocurrency development"
  },

  // Community College
  { 
    category: "Community", 
    title: "PMKVY",
    logo: "/api/placeholder/64/64",
    description: "Pradhan Mantri Kaushal Vikas Yojana skill development program"
  },
  { 
    category: "Community", 
    title: "TNSDC",
    logo: "/api/placeholder/64/64",
    description: "Tamil Nadu Skill Development Corporation certification"
  },
  { 
    category: "Community", 
    title: "NIELIT-SCI/IMAC CC",
    logo: "/api/placeholder/64/64",
    description: "National Institute of Electronics & IT certification"
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  course: "",
  message: "",
};

const highlights = [
  { number: "100%", text: "Placement Assistance", icon: "🎯" },
  { number: "36+", text: "Courses Available", icon: "📚" },
  { number: "5000+", text: "Students Trained", icon: "👥" },
  { number: "15+", text: "Years Experience", icon: "⭐" },
];

export default function CertificationPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const categories = ["All", "International", "Professional", "Certificate", "Community"];
  const filteredCertifications = selectedCategory === "All" 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      {/* Enhanced Hero Section with Animations */}
      <div className="bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800 text-white py-20 relative overflow-hidden pt-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          {/* Animated Title */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-blue-300 text-lg mb-2 font-semibold tracking-wide">
              Industry-Recognized Certifications
            </p>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Accelerate Your <span className="text-blue-400">Tech Career</span><br/>
              With Expert <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Certification</span>
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our certification programs combine hands-on training, placement assistance, 
              and interview preparation to help you land your dream tech job.
            </p>
          </div>

          {/* Animated Highlight Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {highlights.map((item, index) => (
              <div
                key={item.text}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform transition-all duration-700 hover:scale-105 hover:bg-white/20 border border-white/20 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-3xl font-bold text-blue-300 mb-1">{item.number}</div>
                <div className="text-white/90 text-sm font-medium">{item.text}</div>
              </div>
            ))}
          </div>

          {/* Animated CTA Button */}
          <div className={`mt-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
           
          </div>
        </div>
      </div>

      {/* Enhanced Category Filter with Animation */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 animate-pulse"
                  : "bg-white/90 text-slate-700 hover:bg-blue-50 hover:text-blue-600 shadow-lg hover:shadow-xl"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category} {category !== "All" && `(${certifications.filter(c => c.category === category).length})`}
            </button>
          ))}
        </div>

        {/* Enhanced Certifications Grid with Stagger Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCertifications.map((cert, index) => (
            <div
              key={`${cert.category}-${index}`}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 p-6 group border border-white/20"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <img 
                    src={cert.logo} 
                    alt={cert.title} 
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'block';
                      }
                    }}
                  />
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{display: 'none'}}>
                    {cert.title.charAt(0)}
                  </div>
                </div>
                
                <span className={`px-4 py-2 rounded-full text-xs font-bold mb-3 transition-all duration-300 group-hover:scale-105 ${
                  cert.category === 'International' ? 'bg-purple-100 text-purple-700 group-hover:bg-purple-200' :
                  cert.category === 'Professional' ? 'bg-green-100 text-green-700 group-hover:bg-green-200' :
                  cert.category === 'Certificate' ? 'bg-blue-100 text-blue-700 group-hover:bg-blue-200' :
                  'bg-orange-100 text-orange-700 group-hover:bg-orange-200'
                }`}>
                  {cert.category}
                </span>
                
                <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-blue-700 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-4 line-clamp-2 group-hover:text-slate-700 transition-colors duration-300">
                  {cert.description}
                </p>
                
                <div className="flex gap-2 w-full">
                  <button
                    onClick={() => alert(`Learn more about ${cert.title}`)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                  >
                    Learn More
                  </button>
                  <button
                    onClick={() => {
                      setForm(prev => ({ ...prev, course: cert.title }));
                      document.getElementById('enquiry-form').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Statistics Section */}
        <div className="bg-gradient-to-r from-slate-800/90 to-blue-900/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-16 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-4xl font-bold text-purple-400 mb-2 animate-pulse">17</div>
              <div className="text-white/80 font-medium">International Certifications</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-4xl font-bold text-green-400 mb-2 animate-pulse">6</div>
              <div className="text-white/80 font-medium">Professional Courses</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-4xl font-bold text-blue-400 mb-2 animate-pulse">10</div>
              <div className="text-white/80 font-medium">Certificate Courses</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-4xl font-bold text-orange-400 mb-2 animate-pulse">3</div>
              <div className="text-white/80 font-medium">Community Programs</div>
            </div>
          </div>
        </div>

        {/* Enhanced Enquiry Form */}
        <div id="enquiry-form" className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-slate-800 mb-2">Ready to Get Started?</h2>
              <p className="text-slate-600 text-lg">Fill out the form below and we'll get back to you shortly</p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-slate-700 font-bold mb-2 group-focus-within:text-blue-600 transition-colors">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform focus:scale-105"
                    value={form.name}
                    onChange={handleInput}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="group">
                  <label className="block text-slate-700 font-bold mb-2 group-focus-within:text-blue-600 transition-colors">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform focus:scale-105"
                    value={form.email}
                    onChange={handleInput}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-slate-700 font-bold mb-2 group-focus-within:text-blue-600 transition-colors">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform focus:scale-105"
                    value={form.phone}
                    onChange={handleInput}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="group">
                  <label className="block text-slate-700 font-bold mb-2 group-focus-within:text-blue-600 transition-colors">
                    Select Course *
                  </label>
                  <select
                    name="course"
                    required
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform focus:scale-105"
                    value={form.course}
                    onChange={handleInput}
                  >
                    <option value="">Choose a course</option>
                    {certifications.map((cert, idx) => (
                      <option key={idx} value={cert.title}>
                        {cert.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="group">
                <label className="block text-slate-700 font-bold mb-2 group-focus-within:text-blue-600 transition-colors">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform focus:scale-105 resize-none"
                  placeholder="Tell us about your goals and any questions you have..."
                  value={form.message}
                  onChange={handleInput}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white py-4 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg hover:shadow-blue-500/50 relative overflow-hidden group"
              >
                <span className="relative z-10">Submit Enquiry</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>

              {submitted && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform transition-all duration-500 scale-105">
                  <div className="text-green-600 font-bold text-lg mb-2">
                    ✅ Thank you! Your enquiry has been submitted successfully.
                  </div>
                  <div className="text-green-500 text-sm">
                    We'll get back to you within 24 hours.
                  </div>
                </div>
              )}
            </form>
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

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
