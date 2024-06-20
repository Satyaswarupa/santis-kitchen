import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <motion.div
          className="map-container"
          initial={{
            y: "100%",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509307!2d144.95592831568568!3d-37.81720974201465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727f5fdf01a9d3!2sVictoria!5e0!3m2!1sen!2sau!4v1642833260974!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
        <motion.div
          className="contact-info"
          initial={{
            y: "100%",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <h2>Contact Us</h2>
          <p>
            <FaMapMarkerAlt /> 1234 Example Street, Victoria, Australia
          </p>
          <p>
            <FaPhone /> +61 3 1234 5678
          </p>
          <p>
            <FaEnvelope /> info@santiskitchen.com
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
