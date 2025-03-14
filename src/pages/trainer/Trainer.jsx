/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { trainingData } from "../../assets/data/training";
import assets from "../../assets/image/hero1.webp";
import { SkipNext, SkipNextOutlined, SkipPrevious } from "@mui/icons-material";
const TrainersSection = () => {
  const trainers = [
    {
      name: "Smirth Jon",
      img: "https://nationalpti.org/wp-content/uploads/2014/02/Personal-Trainer.jpg",
    },
    {
      name: "Jean Doe",
      img: "https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png?resize=640:*",
    },
    {
      name: "Alex Den",
      img: "https://atp.uidaho.edu/wp-content/uploads/2020/10/FY187730_02_5943-Custom-1.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToDisplay = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(trainingData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToDisplay();

    window.addEventListener("resize", updateCardsToDisplay);
    return () => window.removeEventListener("resize", updateCardsToDisplay);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % trainingData.length);
  };
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? trainingData.length - 1 : prevIndex - 1
    );
  };
  return (
    <section className="w-full py-16 bg-black text-white dark:text-white">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          TRAINERS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card sx={{ maxWidth: 345, margin: "auto" }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={trainer.img}
                  alt=""
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {trainer.name}
                  </Typography>
                  <Box display="flex" justifyContent="center" marginTop={2}>
                    <Box sx={{ width: 32, height: 32, marginRight: 1 }}>
                      <FaFacebook className="size-6 text-blue-400" />
                    </Box>
                    <Box sx={{ width: 32, height: 32, marginRight: 1 }}>
                      <BsTwitterX className="size-6 text-black" />
                    </Box>
                    <Box sx={{ width: 32, height: 32 }}>
                      <BsInstagram className="size-6 text-red-400" />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      {/*  */}
      <div
        className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
        id="Projects"
      >
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-4xl font-bold mb-2 text-center"
        >
          TRAINING{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            WE SERVE
          </span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-500 max-w-80 text-center mx-auto mb-8"
        >
          Showcasing our journey of excellence through successfully delivered
          projects.
        </motion.p>

        {/* Slider Buttons */}
        <div className="flex justify-end items-center mb-8">
          <motion.button
            onClick={prevProject}
            className="p-3 bg-gray-200 rounded mr-2"
            aria-label="Previous Project"
            whileTap={{ scale: 0.9 }}
          >
            <SkipPrevious className="size-6 text-white" />
          </motion.button>
          <motion.button
            onClick={nextProject}
            className="p-3 bg-gray-200 rounded"
            aria-label="Next Project"
            whileTap={{ scale: 0.9 }}
          >
            <SkipNext className="size-6 text-white" />
          </motion.button>
        </div>

        {/* Project Slider */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4"
            initial={{ x: "100%" }}
            animate={{ x: `-${(currentIndex * 100) / cardsToShow}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {trainingData.map((project, index) => (
              <motion.div
                key={index}
                className="relative flex-shrink-0 w-full sm:w-1/4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0, delay: index * 0.1 }}
              >
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-auto mb-14 object-cover"
                />
                <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                  <div className="inline-block bg-white w-3/4 py-2 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-blue-300 font-bold">
                      {project.price} <span className="px-2">|</span>{" "}
                      {project.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
