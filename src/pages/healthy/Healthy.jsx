// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";

const HealthyMindBody = () => {
  return (
    <section className="w-full py-16 bg-black text-white dark:text-white">
      <div className="container mx-auto text-center px-4 md:px-8 lg:px-16">
        <motion.div
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            HEALTHY MIND, HEALTHY BODY
          </h2>
          <p className="text-gray-600 mb-6">
            'A sound mind in a sound body, is a short, but full description of a
            happy state in this World: he that has these two, has little more to
            wish for; and he that wants either of them, will be little the
            better for anything else. '<br /> 'Everything about your life, about your
            body, grows! Your cells regenerate; your hair, your nails,
            everything grows for your entire life. And your soul needs
            exploration and growth. And the only way you'll get it is by forcing
            yourself to be uncomfortable. Forcing yourself to get outside, out
            of your head. '
          </p>
          <motion.button
            href="#"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            READ MORE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HealthyMindBody;
