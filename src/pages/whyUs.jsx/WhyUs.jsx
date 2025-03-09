/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";

const features = [
  { img: 'https://www.fitnessgallery.com/wp-content/uploads/2020/12/Buying-the-right-home-fitness-equipment-1.jpg', title: "QUALITY EQUIPMENT", desc: "Build out your home gym with our top-tested equipment, including a treadmill, indoor cycling bike, cable system, dumbbells, kettlebells and more." },
  { img: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2018/04/Muscular-Lean-And-Fit-Man-Resting-and-Drinking-Supplement-Drink-After-A-Workout.jpg?quality=86&strip=all", title: "NUTRITION", desc: "Nutrition plays a key role in exercise and athletic performance. Explore pre- and post-workout nutrition guidance for recreational and competitive athletes." },
  { img: "https://www.shape.com/thmb/Nti_HBKTZCavOIQkCKRJS2sx9W8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_1069332170-2000-364c5bccbb1e4e2a83a0e4cfdc15723a.jpg", title: "HEALTHY DIET PLAN", desc: "A healthy diet plan focuses on a balanced intake of various food groups, emphasizing fruits, vegetables, whole grains, lean proteins, and healthy fats, while limiting processed foods, sugary drinks, and unhealthy fats. " },
  { img: "https://www.athleticlab.com/wp-content/uploads/2021/04/team-training-scaled.jpeg", title: "SPORT TRAINING", desc: "Sport training is a systematic process of preparation, aiming to improve and maintain high performance capacity in specific sports activities by applying scientific principles and methods. " }
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-16 bg-gray-900 text-white dark:text-white">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold mb-10" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          WHY US
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-4">
                <img src={feature.img} alt='' className="mx-auto w-20 rounded-2xl object-cover" />
              </div>
              <h5 className="text-xl font-semibold mb-2 text-gray-700">{feature.title}</h5>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
