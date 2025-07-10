 import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-2 rounded-full" />
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8 bg-white border border-gray-300 rounded-xl shadow hover:shadow-lg transition p-8"
        >
          {/* Left: Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start gap-3"
          >
            <MapPin className="text-purple-600 mt-1" size={24} />
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              <strong>Centre for Rapid and Alternative Energy Mobility (RAEM)</strong><br />
              Gautam Buddha University<br />
              Greater Noida,<br />
              Gautam Buddh Nagar<br />
              PIN - 201312
            </p>
          </motion.div>

          {/* Right: Email & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-center md:items-end gap-6"
          >
            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="text-purple-600" size={24} />
              <a
                href="mailto:raem.gbu@gmail.com"
                className="text-purple-700 font-medium text-base md:text-lg hover:underline"
              >
                raem.gbu@gmail.com
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
                  className="text-purple-700 hover:text-purple-900"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 hover:text-purple-900"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 hover:text-purple-900"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 hover:text-purple-900"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
