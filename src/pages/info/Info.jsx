/* eslint-disable no-unused-vars */
import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { BiEnvelope, BiHome, BiPhoneCall } from "react-icons/bi";
import assets from '../../assets/image/dad09813b74d0eecbaad184a3f997580.jpg'
const InfoSection = () => {
  const infoItems = [
    { id: 1, text: "KG 42 Ave", imgSrc: BiHome },
    { id: 2, text: "+(250) 787 944 577", imgSrc: BiPhoneCall },
    { id: 3, text: "leon@gmail.com", imgSrc:BiEnvelope },
  ];

  return (
    <>
    <Box className="py-16 bg-black text-white  dark:text-white flex justify-center">
      <Box className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {infoItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="flex justify-center"
          >
            <Card className="w-64 shadow-lg bg-gray-800 text-center">
              <CardContent>
                <Box className="flex justify-center mb-4">
                  <item.imgSrc className="w-12 h-12" />
                </Box>
                <Typography variant="h6" component="p">
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col rounded-2xl items-center justify-center container mx-auto md:px-20 lg:px-22 w-full overflow-hidden"
      id="About"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-2">
       
        <b className="underline underline-offset-4 decoration-1 font-light ">
          Our Brand
        </b>
      </h2>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to your vision
      </p>
      <div className="bg-white p-4 text-black flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets}
          alt=""
          className="w-full sm:w-1/2 max-w-lg rounded-2xl"
        /> 
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">1+</p>
              <p>Decades of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">5+</p>
              <p>Completed Ventures</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Space Delivered (in Mn. Sq. Ft.)</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">2+</p>
              <p>Current Endeavors</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            At{" "}
            <b href="/" className="text-blue-500 hover:underline">
              LD
            </b>
            , we pride ourselves on a legacy of excellence, crafting spaces that
            inspire and endure. With years of expertise, a portfolio of
            accomplished projects, and millions of square feet delivered, we
            redefine industry standards with every endeavor. Our dedication to
            quality and innovation ensures that every vision becomes a reality.
          </p>

        </div>
      </div>
    </motion.div>
    </>
  );
};

export default InfoSection;
