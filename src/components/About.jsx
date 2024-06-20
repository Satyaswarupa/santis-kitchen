import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <motion.div
        className="about-content"
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
          <h2>Santis Kitchen</h2>
          <p>
            Welcome to Santis Kitchen! We provide healthy, homemade meals delivered right to your doorstep. Our mission is to make your life easier by offering a convenient and nutritious meal option.
          </p>
          <p>
            Our meals are prepared with the freshest ingredients, ensuring you get the best taste and nutrition. Whether you're a busy professional, a student, or simply someone who enjoys good food, our tiffin service is perfect for you.
          </p>
          <p>
            Join us on this culinary journey and experience the joy of home-cooked meals without the hassle of cooking. We look forward to serving you!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
