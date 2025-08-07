import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDivisionOpen, setIsDivisionOpen] = useState(false);
  const navigate = useNavigate();
  const navbarRef = useRef(null);

  const navigateToSpecificDivision = (sectionId) => {
    navigate(`/division#${sectionId}`);
  };

  return (
    <nav ref={navbarRef} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/lovable-uploads/timafinal.png" alt="TIMA Logo" className="h-10 w-10" />
            <Link to="/" className="text-xl font-bold text-white hover:text-blue-300 transition-colors">
              TIMA
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-white hover:text-blue-300 transition-colors hover:scale-105 transform duration-200 flex items-center gap-1">
                Division
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-900 border-slate-700 text-white">
                <DropdownMenuItem 
                  className="text-white hover:bg-slate-800 cursor-pointer"
                  onClick={() => navigateToSpecificDivision('ai-software-solutions')}
                >
                  Advanced AI & Software Solutions
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-white hover:bg-slate-800 cursor-pointer"
                  onClick={() => navigateToSpecificDivision('embedded-pcb-solutions')}
                >
                  Smart Embedded & PCB Solutions
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-white hover:bg-slate-800 cursor-pointer"
                  onClick={() => navigateToSpecificDivision('ev-green-energy')}
                >
                  Sustainable EV & Green Energy
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-white hover:bg-slate-800 cursor-pointer"
                  onClick={() => navigateToSpecificDivision('ecommerce-platform')}
                >
                  Digital E-commerce Platform
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/#about" className="text-white hover:text-blue-300 transition-colors hover:scale-105 transform duration-200">
              About TIMA
            </a>
            <Link to="/partners" className="text-white hover:text-blue-300 transition-colors hover:scale-105 transform duration-200">
              Partners
            </Link>
            <Link to="/academy" className="text-white hover:text-blue-300 transition-colors hover:scale-105 transform duration-200">
              Academy
            </Link>
            <a href="/#contact" className="text-white hover:text-blue-300 transition-colors hover:scale-105 transform duration-200">
              Contact
            </a>
          </div>
          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6 text-white" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-900 border-slate-700">
              <div className="flex flex-col space-y-6 mt-8">
                {/* Division Dropdown */}
                <button
                  className="flex items-center justify-between text-white font-semibold text-left focus:outline-none w-full"
                  onClick={() => setIsDivisionOpen((prev) => !prev)}
                  aria-expanded={isDivisionOpen}
                  aria-controls="mobile-division-list"
                >
                  Division
                  <ChevronDown className={`ml-2 h-5 w-5 transition-transform ${isDivisionOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDivisionOpen && (
                  <div id="mobile-division-list" className="pl-4 space-y-2">
                    <button 
                      onClick={() => {
                        navigateToSpecificDivision('ai-software-solutions');
                        setIsMobileMenuOpen(false);
                      }}
                      className="block text-white hover:text-blue-300 transition-colors text-left"
                    >
                      Advanced AI & Software Solutions
                    </button>
                    <button 
                      onClick={() => {
                        navigateToSpecificDivision('embedded-pcb-solutions');
                        setIsMobileMenuOpen(false);
                      }}
                      className="block text-white hover:text-blue-300 transition-colors text-left"
                    >
                      Smart Embedded & PCB Solutions
                    </button>
                    <button 
                      onClick={() => {
                        navigateToSpecificDivision('ev-green-energy');
                        setIsMobileMenuOpen(false);
                      }}
                      className="block text-white hover:text-blue-300 transition-colors text-left"
                    >
                      Sustainable EV & Green Energy
                    </button>
                    <button 
                      onClick={() => {
                        navigateToSpecificDivision('ecommerce-platform');
                        setIsMobileMenuOpen(false);
                      }}
                      className="block text-white hover:text-blue-300 transition-colors text-left"
                    >
                      Digital E-commerce Platform
                    </button>
                  </div>
                )}
                {/* Other links */}
                <a 
                  href="#about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white hover:text-blue-300 transition-colors mb-2"
                >
                  About TIMA
                </a>
                <Link 
                  to="/partners" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white hover:text-blue-300 transition-colors mb-2"
                >
                  Partners
                </Link>
                <Link 
                  to="/academy" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white hover:text-blue-300 transition-colors mb-2"
                >
                  Academy
                </Link>
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white hover:text-blue-300 transition-colors"
                >
                  Contact
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}