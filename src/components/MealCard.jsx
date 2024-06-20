import React from "react";
import { motion } from "framer-motion";
import "./MealCard.scss";

const MealCard = ({ image, name, description }) => {
  return (
   
      <motion.div
        className="meal-card"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
      </motion.div>
    
  );
};

export default MealCard;
