import React from "react";
import MealCard from "../components/MealCard";
import Contact from "../components/Contact";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./Home.scss";
import About from "../components/About";
import Animation from "../components/Animation";

const Home = () => {
  const meals = [
    {
      image: "https://imgs.search.brave.com/SE359t0JweeNkzBbHbQ8tWtaDRtiM6l-Ep6nVszmEws/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzA4Lzg0LzI0/LzM2MF9GXzYwODg0/MjQxM19oZFlhZHA2/dVNDN2M3cHE2TEpl/dzlzOGdQblJTZ2ps/bi5qcGc",
      name: "Non Veg Meal",
      description: "Description of meal 1."
    },
    {
      image: "https://imgs.search.brave.com/Wt71x0BFSa_etyZ4FrQNY522UJp4HlEY6fQTnfl8hqE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by90cmFkaXRpb25h/bC1vbmFtLWZlYXN0/LXNvdXRoLWluZGlh/bi12ZWdldGFyaWFu/LXRoYWxpLWJhbmFu/YS1sZWFmLXJvdW5k/LXN0ZWVsLXBsYXRl/LWlzb2xhdGVkLXdo/aXRlXzk3MjMyNC0z/NzA4Ny5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw",
      name: "Veg Meal",
      description: "Description of meal 2."
    },
  ];

  return (
    <div className="home">
      <header className="home-header">
        <motion.h2
          initial={{
            x: "-100%",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          Welcome to <br />
          <motion.h1
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
          >
            Santi's Kitchen
          </motion.h1>
        </motion.h2>
        <motion.p
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          Delicious tiffins and meals delivered to your doorstep
        </motion.p>
        <div className="social-buttons">
          <motion.a
            href="https://wa.me/6370151031" // Replace with your WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="social-button whatsapp"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaWhatsapp /> WhatsApp
          </motion.a>
          <motion.a
            href="https://www.instagram.com/yourprofile" // Replace with your Instagram link
            target="_blank"
            rel="noopener noreferrer"
            className="social-button instagram"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaInstagram /> Instagram
          </motion.a>
        </div>
      </header>
      <Animation />
      <About />
      <section className="meal-section">
        <h2>Our Meals</h2>
        <div className="meal-cards">
          {meals.map((meal, index) => (
            <MealCard
              key={index}
              image={meal.image}
              name={meal.name}
              description={meal.description}
            />
          ))}
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Home;
