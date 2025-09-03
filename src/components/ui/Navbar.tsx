import { useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDivisionOpen, setIsDivisionOpen] = useState(false);
  const navigate = useNavigate();
  const navbarRef = useRef(null);
  const location = useLocation();

  const navigateToSpecificDivision = (sectionId) => {
    navigate(`/division#${sectionId}`);
  };

  const handleContactClick = (event?: React.MouseEvent) => {
    if (event) event.preventDefault();
    navigate('/#contact');
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10 text-white py-6 px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo only - Left side */}
          <div className="flex-shrink-0">
          <Link to="/" className="flex items-center">
    <img 
      src="https://i.postimg.cc/NfQHTgHj/navlogo.png" // Replace with your logo path
      alt="TIMA Logo"
      className="h-20 w-auto" // Increased from h-10
    />
  </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            
            {/* Division Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center px-4 py-3 text-white/90 hover:text-white font-medium text-lg tracking-wide transition-all duration-300 hover:bg-black/10 rounded-lg">
                Division
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/80 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl">
                <DropdownMenuItem 
                  onClick={() => navigateToSpecificDivision('ai-software-solutions')}
                  className="text-white/90 hover:text-white hover:bg-white/10 cursor-pointer font-medium text-base py-3 px-4 rounded-lg transition-all duration-200"
                >
                  Advanced AI & Software Solutions
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => navigateToSpecificDivision('embedded-pcb-solutions')}
                  className="text-white/90 hover:text-white hover:bg-white/10 cursor-pointer font-medium text-base py-3 px-4 rounded-lg transition-all duration-200"
                >
                  Smart Embedded & PCB Solutions
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => navigateToSpecificDivision('ev-green-energy')}
                  className="text-white/90 hover:text-white hover:bg-white/10 cursor-pointer font-medium text-base py-3 px-4 rounded-lg transition-all duration-200"
                >
                  Sustainable EV & Green Energy
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => navigateToSpecificDivision('ecommerce-platform')}
                  className="text-white/90 hover:text-white hover:bg-white/10 cursor-pointer font-medium text-base py-3 px-4 rounded-lg transition-all duration-200"
                >
                  Digital E-commerce Platform
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other Navigation Links */}
            <Link 
              to="/partners" 
              className="px-4 py-3 text-white/90 hover:text-white font-medium text-lg tracking-wide transition-all duration-300 hover:bg-black/10 rounded-lg"
            >
              Partners
            </Link>
            
            <Link 
              to="/academy" 
              className="px-4 py-3 text-white/90 hover:text-white font-medium text-lg tracking-wide transition-all duration-300 hover:bg-black/10 rounded-lg"
            >
              Academy
            </Link>
            
            <Link 
              to="/#contact" 
              onClick={handleContactClick}
              className="px-4 py-3 text-white/90 hover:text-white font-medium text-lg tracking-wide transition-all duration-300 hover:bg-black/10 rounded-lg"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button - Right side */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="text-white/90 hover:text-white hover:bg-white/10 focus:outline-none p-3 rounded-lg transition-all duration-300"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="bg-black/80 backdrop-blur-md border-l border-white/20 w-64 p-6"
              >
                {/* Mobile Menu Content */}
                <div className="space-y-6 mt-6">
                  
                  {/* Division Dropdown */}
                  <div>
                    <button
                      onClick={() => setIsDivisionOpen((prev) => !prev)}
                      aria-expanded={isDivisionOpen}
                      aria-controls="mobile-division-list"
                      className="flex items-center justify-between w-full text-white/90 hover:text-white transition-all duration-300 text-left py-3 px-2 hover:bg-white/10 rounded-lg font-medium text-base tracking-wide"
                    >
                      Division
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isDivisionOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isDivisionOpen && (
                      <div id="mobile-division-list" className="ml-4 mt-3 space-y-2">
                        <button
                          onClick={() => {
                            navigateToSpecificDivision('ai-software-solutions');
                            setIsMobileMenuOpen(false);
                          }}
                          className="block text-white/80 hover:text-white transition-all duration-300 text-left py-2 px-2 hover:bg-white/5 rounded-md font-normal text-base w-full"
                        >
                          Advanced AI & Software Solutions
                        </button>
                        
                        <button
                          onClick={() => {
                            navigateToSpecificDivision('embedded-pcb-solutions');
                            setIsMobileMenuOpen(false);
                          }}
                          className="block text-white/80 hover:text-white transition-all duration-300 text-left py-2 px-2 hover:bg-white/5 rounded-md font-normal text-base w-full"
                        >
                          Smart Embedded & PCB Solutions
                        </button>
                        
                        <button
                          onClick={() => {
                            navigateToSpecificDivision('ev-green-energy');
                            setIsMobileMenuOpen(false);
                          }}
                          className="block text-white/80 hover:text-white transition-all duration-300 text-left py-2 px-2 hover:bg-white/5 rounded-md font-normal text-base w-full"
                        >
                          Sustainable EV & Green Energy
                        </button>
                        
                        <button
                          onClick={() => {
                            navigateToSpecificDivision('ecommerce-platform');
                            setIsMobileMenuOpen(false);
                          }}
                          className="block text-white/80 hover:text-white transition-all duration-300 text-left py-2 px-2 hover:bg-white/5 rounded-md font-normal text-base w-full"
                        >
                          Digital E-commerce Platform
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Other links */}
                  <Link
                    to="/partners"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white/90 hover:text-white transition-all duration-300 py-3 px-2 hover:bg-white/10 rounded-lg font-medium text-base tracking-wide"
                  >
                    Partners
                  </Link>
                  
                  <Link
                    to="/academy"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white/90 hover:text-white transition-all duration-300 py-3 px-2 hover:bg-white/10 rounded-lg font-medium text-base tracking-wide"
                  >
                    Academy
                  </Link>
                  
                  <Link
                    to="/#contact"
                    onClick={(e) => { handleContactClick(e); setIsMobileMenuOpen(false); }}
                    className="block text-white/90 hover:text-white transition-all duration-300 py-3 px-2 hover:bg-white/10 rounded-lg font-medium text-base tracking-wide"
                  >
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
