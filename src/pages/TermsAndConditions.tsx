import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Navbar from '@/components/ui/Navbar';

const TermsAndConditions = () => {
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
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions – TIMA Integrated Technologies Pvt Ltd</h1>
          <p className="text-gray-300 text-lg">This Privacy Statement is effective from 1st August 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Objectives</h2>
            <p className="text-gray-700 mb-4">
            At TIMA Integrated Technologies Pvt Ltd (“TIMA,” “we,” “our,” “us”), our objective is to clearly define the rights, responsibilities, and expectations for both TIMA and its clients, partners, and users.
By accessing or using our website thetima.com, services, or products, you agree to comply with these Terms & Conditions.

            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Eligibility</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>•	You must be at least 18 years old or have parental/guardian consent to use our services.</li>
              <li>•	You must comply with applicable laws in your jurisdiction.</li>
            
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. Scope of Services</h2>
            <p className="text-gray-700 mb-4">
            We provide::
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>•	AI Solutions & Automation Tools – KRONOS AI, ERP platforms, automation software.</li>
              <li>•	Hardware & IoT Devices – Embedded systems, electronics, smart devices.</li>
              <li>•	Training & Certification Programs – Professional and technical skill development.</li>
              <li>•	E commerce Products – Physical and digital products.</li>
              <li>•	Consulting & Project Development – Business and technology solutions.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Intellectual Property Rights</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>•	All content, code, trademarks, and materials on thetima.com are owned by TIMA Integrated Technologies Pvt Ltd and protected by copyright and trademark laws.</li>
              <li>•	You may not reproduce, distribute, or use our intellectual property without written consent.</li>
             
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">
            You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>•	Use our services lawfully and ethically.</li>
              <li>•	Not misuse, hack, reverse engineer, or disrupt our systems.</li>
              <li>•	Provide accurate and truthful information when engaging with our services.</li>
             
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Accounts & Security</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>•	You are responsible for keeping your account credentials safe.</li>
              <li>•	TIMA is not liable for unauthorized access due to your negligence.</li>
             
             
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">7. Pricing, Payments & Refunds</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>•	All prices are in INR unless otherwise stated.</li>
              <li>•	Payments must be completed before service delivery.</li>
              <li>•	Refunds are provided only as per our Refund Policy.</li>
             
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">8. Third Party Services</h2>
           <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>•	Our services may integrate or link with third party tools or websites.</li>
              <li>•	We are not responsible for their content, privacy practices, or security.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">9. Warranties & Disclaimers</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>•	Our services are provided “as is” and “as available” without any guarantees.</li>
              <li>•	We do not warrant that services will be uninterrupted, secure, or error free.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">10. Limitation of Liability</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>•	TIMA is not liable for indirect, incidental, or consequential damages.</li>
              <li>•	Our total liability will not exceed the amount paid for the specific service/product.</li>
            </ul>
          </section>

           <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">11. Termination</h2>
            <p className="text-gray-700 mb-4">
             We may suspend or terminate your access if you breach these terms or misuse our services.
            </p>
          </section>

           <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">12. Governing Law</h2>
             <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>•	These Terms & Conditions are governed by the laws of India.</li>
              <li>•	Any disputes will be handled in the courts of Madurai, Tamil Nadu.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">13. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For questions about this Privacy Policy or your data:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> admin@thetima.com<br />
                <strong>Phone:</strong> +91 93637 21147<br />
                <strong>Address:</strong> TIMA Integrated Technologies Pvt Ltd, 50-A, AA Road, Rathinapuram, Madurai - 625011
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
