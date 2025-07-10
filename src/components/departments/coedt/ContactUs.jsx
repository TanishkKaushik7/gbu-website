 import { Mail, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl shadow-lg border border-gray-200 bg-white p-8 grid md:grid-cols-2 gap-8 hover:shadow-xl transition-shadow duration-300"
        >
          {/* Left: Address */}
          <div>
            <div className="flex items-start gap-3">
              <MapPin className="text-blue-600 mt-1" size={24} />
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                <strong>Centre Of Excellence - Drone Technology</strong><br />
                School of ICT,<br />
                Gautam Buddha University<br />
                Greater Noida,<br />
                Gautam Buddh Nagar<br />
                PIN - 201312
              </p>
            </div>
          </div>

          {/* Right: Email & Social */}
          <div className="flex flex-col justify-center md:items-end gap-6">
            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" size={24} />
              <a
                href="mailto:cedt.gbu@gmail.com"
                className="text-blue-700 font-medium text-base md:text-lg hover:underline"
              >
                cedt.gbu@gmail.com
              </a>
            </div>
            {/* Social Icons */}
            <div>
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                Connect With Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
