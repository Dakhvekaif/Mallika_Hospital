import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12">
          {/* Column 1: Hospital Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Malika Super-Specialist Hospital</h2>
            <p className="text-gray-400 mb-4 max-w-md">
              Committed to providing our community with high-quality, compassionate healthcare. Your health is our priority.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>
                <span className="font-semibold text-white">Location:</span>{' '}
                Mallika Hospital, Sharma Estate , Next To Dewan Shopping Centre, S.V Road Jogeshwari 
                West Mumbai - 400102.
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{' '}
                <a href="hospital.m@gmail.com" className="hover:text-white transition-colors duration-300">hospital.m@gmail.com</a>
              </p>
              <p>
                <span className="font-semibold text-white">Main Line:</span>{' '}
                <a href="+91 9082097421" className="hover:text-white transition-colors duration-300">+91 9082097421</a>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Find a Doctor</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Our Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Patient Portal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Billing & Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Pay Your Bill</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">For Patients</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">For Visitors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Health Library</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Services */}

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">CATHLAB</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">ICU</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">OT</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">WARD</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">DIAYSIS CENTER</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">PHARMACY</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">LAB</a></li>
            </ul>
          </div>

          {/* Column 5: Medical Services */}

          <div>
            <h3 className="text-lg font-semibold mb-4">Medical Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">General Surgery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Plastic Surgery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Onco Surgery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Orthopedic</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Urology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Neuro Surgery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Ent</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Proctology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Obstetrics & Gynecology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Opthalmology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Vascular Surgery</a></li>
            </ul>
          </div>

          {/* Column 6: Consultants */}

          <div>
            <h3 className="text-lg font-semibold mb-4">Consultants</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cardiology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Neurology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Urology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Physician & Diabetology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Neprology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Gastroenterology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Oncology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Pediatrician</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Dermatology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Radiology</a></li>
            </ul>
          </div>

          {/* Column 7: Legal & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">HIPAA Notice</a></li>
            </ul>

            {/* <div>
              <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
              <p className="text-gray-400 mb-4">Subscribe for health tips and news.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 bg-slate-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} City General Hospital. All Rights Reserved.
          </p> */}
          <div className="flex space-x-6 mb-5">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;