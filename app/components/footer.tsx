export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/axora-logo.png" // replace with your actual logo file path
            alt="Axora Technologies"
            className="w-36 mb-4"
          />
          <p className="text-sm text-gray-400">
            Empowering businesses with next-gen web & app solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2 items-center md:items-start">
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <a href="#services" className="hover:text-indigo-400 transition">
            Services
          </a>
          <a href="#portfolio" className="hover:text-indigo-400 transition">
            Portfolio
          </a>
          <a href="#about" className="hover:text-indigo-400 transition">
            About Us
          </a>
          {/* <a href="#contact" className="hover:text-indigo-400 transition">
            Contact
          </a> */}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-2 items-center md:items-start">
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <p>Email: info@axoratech.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Ahmedabad, India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Axora Technologies. All Rights Reserved.
      </div>
    </footer>
  );
}
