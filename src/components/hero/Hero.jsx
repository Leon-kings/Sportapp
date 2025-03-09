import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Slider = () => {
  const images = [
    {
      // title: "Fitness",
      subtitle: "Training",
      heading: "LD Gym",
      description: "LD is happy to Serve you a fitness app .",
      buttonText: "Contact",
      backgroundImage:
        "https://media.gq-magazine.co.uk/photos/67657a8e8113b47d55474865/16:9/w_2560%2Cc_limit/2012-homeworkout.jpg", // Sostituisci con il percorso della tua immagine
    },
    {
      // title: "Fitness",
      subtitle: "Training",
      heading: "Neogym",
      description: "Lorem ipsum dolor sit amet...",
      buttonText: "Contattaci",
      backgroundImage:
        "https://www.dmoose.com/cdn/shop/articles/feature-image_5437ab6a-8565-46da-bb72-6891b21a95bc.jpg?v=1685102059", // Sostituisci con il percorso della tua immagine
    },
    {
      // title: "Fitness",
      subtitle: "Training",
      heading: "Neogym",
      description: "Lorem ipsum dolor sit amet...",
      buttonText: "Contattaci",
      backgroundImage:
        "https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/lean_woman_doing_dumbbell_row.jpg?itok=eU6elx6n", // Sostituisci con il percorso della tua immagine
    },
    {
      // title: "Fitness",
      subtitle: "Training",
      heading: "Neogym",
      description: "Lorem ipsum dolor sit amet...",
      buttonText: "Contattaci",
      backgroundImage:
        "https://www.dmoose.com/cdn/shop/articles/feature-image_932f229c-ac45-44c0-b4f6-b41a4be3126d.jpg?v=1682512277", // Sostituisci con il percorso della tua immagine
    },
    {
      // title: "Fitness",
      subtitle: "Training",
      heading: "Neogym",
      description: "Lorem ipsum dolor sit amet...",
      buttonText: "Contattaci",
      backgroundImage:
        "https://admin.wellandgood.com/wp-content/uploads/sites/3/2019/10/GettyImages-1132086660.jpg?w=500&quality=50", // Sostituisci con il percorso della tua immagine
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const currentImage = images[currentImageIndex];

  const sliderVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.3 } },
  };

  return (
    <section className="w-full bg-black relative">
      <div className="relative w-full h-screen">
        <AnimatePresence initial={false} custom={currentImageIndex}>
          <motion.div
            key={currentImageIndex}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={sliderVariants}
            className="absolute inset-0 flex items-center justify-center"
            style={{
              backgroundImage: currentImage?.backgroundImage
                ? `url(${currentImage.backgroundImage})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container mx-auto">
              <div className="lg:w-10/12 md:w-11/12 mx-auto text-white text-center">
                <div className="detail-box">
                  <div>
                    <h3 className="text-xl">{currentImage.title}</h3>
                    <h2 className="text-3xl">{currentImage.subtitle}</h2>
                    <h1 className="text-5xl font-bold">
                      {currentImage.heading}
                    </h1>
                    <p className="mt-4  items-center justify-center text-center">{currentImage.description}</p>
                    <div className="mt-8">
                      <button
                        
                        className="text-white font-bold py-2 px-4 rounded"
                      >
                        {currentImage.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
          <button
            onClick={prevImage}
            className="bg-gray-800 sm:bg-amber-200 text-white p-2 rounded-full"
          >
            &lt;
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
          <button
            onClick={nextImage}
            className="bg-gray-800 sm:bg-amber-200 text-white p-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
