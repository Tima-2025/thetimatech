import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Navbar from '@/components/ui/Navbar';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-6">
            <Link 
              to="/" 
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy – TIMA Integrated Technologies Pvt Ltd</h1>
          <p className="text-gray-300 text-lg">This Privacy Statement is effective from 1st August 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">1.  Objectives</h2>
            <p className="text-gray-700 mb-4">
              At TIMA Integrated Technologies Pvt Ltd (“TIMA,” “we,” “our,” “us”), our objective is to explain clearly how we handle your personal information with transparency, responsibility, and care.
            </p>
            <p className="text-gray-700 mb-4">
              We are committed to protecting your privacy and ensuring that your personal data is collected, used, and stored securely.
            </p>
            <p className="text-gray-700 mb-4">
              This Privacy Policy outlines our approach when you visit thetima.com or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>•	Personal Information: Name, email address, phone number, billing/shipping address.</li>
              <li>•	Account Information: Login credentials, account activity, preferences.</li>
              <li>•	Technical Data: IP address, browser type, device type, operating system, cookies.</li>
              <li>•	Transaction Data: Purchase history, payment details (processed via secure third party gateways).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We may use your data to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>•	Provide and manage our services, products, and training.</li>
              <li>•	Improve our website, products, and customer experience.</li>
              <li>•	Send important updates, offers, and promotional material (only if you opt in).</li>
              <li>•	Process payments and deliver purchased products/services.</li>
              <li>•	Comply with legal obligations.</li>
              
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Data Protection & Security</h2>
            <p className="text-gray-700 mb-4">
              We implement reasonable security measures to safeguard your data against unauthorized access, alteration, or disclosure.
            </p>
            <p className="text-gray-700 mb-4">
              While we strive to protect your information, no method of transmission or storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
            </p>
           
            <p className="text-gray-700 mb-4">
              You can disable cookies in your browser settings, but some features may not work properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Sharing of Information</h2>
            <p className="text-gray-700 mb-4">
              We do not sell or rent your personal data.
            </p>
            <p className="text-gray-700 mb-4">
              We may share your information with:
            </p>
             <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>•	Trusted service providers (payment processing, hosting, analytics, delivery).</li>
              <li>•	Legal authorities if required by law or to protect our rights.</li>
            
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">7. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>•	Access the personal data we hold about you.</li>
              <li>•	Request corrections to inaccurate information.</li>
              <li>•	Request deletion of your data (subject to legal obligations).</li>
              <li>•	Withdraw consent for marketing communications at any time.</li>
  
            </ul>
            
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">8. Third Party Links</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third party websites.
            </p>
  
           
            <p className="text-gray-700 mb-4">
             We are not responsible for their content, privacy policies, or practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">9. Updates to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time.
            </p>
             <p className="text-gray-700 mb-4">
              The latest version will always be available on thetima.com.
            </p>
          </section>


          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For questions about this Privacy Policy or your data:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> admin@thetima.com<br />
                <strong>Phone:</strong> +91 93637 21147<br />
                <strong>Address:</strong> TIMA Integrated Technologies Pvt Ltd, 50-A, AA Road, Rathinapuram, Madurai - 625011<br />
      
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
