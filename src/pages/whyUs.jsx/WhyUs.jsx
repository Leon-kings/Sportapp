/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { testimonialsData } from "../../assets/data/assets";
import { Home } from "lucide-react";
const features = [
  {
    img: "https://www.fitnessgallery.com/wp-content/uploads/2020/12/Buying-the-right-home-fitness-equipment-1.jpg",
    title: "QUALITY EQUIPMENT",
    desc: "Build out your home gym with our top-tested equipment, including a treadmill, indoor cycling bike, cable system, dumbbells, kettlebells and more.",
  },
  {
    img: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2018/04/Muscular-Lean-And-Fit-Man-Resting-and-Drinking-Supplement-Drink-After-A-Workout.jpg?quality=86&strip=all",
    title: "NUTRITION",
    desc: "Nutrition plays a key role in exercise and athletic performance. Explore pre- and post-workout nutrition guidance for recreational and competitive athletes.",
  },
  {
    img: "https://www.shape.com/thmb/Nti_HBKTZCavOIQkCKRJS2sx9W8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_1069332170-2000-364c5bccbb1e4e2a83a0e4cfdc15723a.jpg",
    title: "HEALTHY DIET PLAN",
    desc: "A healthy diet plan focuses on a balanced intake of various food groups, emphasizing fruits, vegetables, whole grains, lean proteins, and healthy fats, while limiting processed foods, sugary drinks, and unhealthy fats. ",
  },
  {
    img: "https://www.athleticlab.com/wp-content/uploads/2021/04/team-training-scaled.jpeg",
    title: "SPORT TRAINING",
    desc: "Sport training is a systematic process of preparation, aiming to improve and maintain high performance capacity in specific sports activities by applying scientific principles and methods. ",
  },
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
                <img
                  src={feature.img}
                  alt=""
                  className="mx-auto w-20 rounded-2xl object-cover"
                />
              </div>
              <h5 className="text-xl font-semibold mb-2 text-gray-700">
                {feature.title}
              </h5>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full  overflow-hidden py-20"
        id="Testimonials"
      >
        <h3 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
          <span className="underline underline-offset-4 decoration-1 under font-light">
            Testimonials
          </span>
        </h3>
        <p className="text-gray-500 max-w-80 text-center mx-auto mb-8">
          Hear from our clients about the impact of our services.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 justify-center gap-2">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="w-full bg-white text-black border shadow-lg rounded px-8 py-12 text-center"
            >
              <img
                className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                src={testimonial.image}
                alt=""
              />
              <h3 className="text-xl text-gray-700 font-medium">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
              <div className="flex justify-center gap-1 text-red-500 mb-4">
                {Array.from({ length: testimonial.rating }, (item, index) => (
                  <Home className="size-6" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
