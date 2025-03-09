/* eslint-disable no-unused-vars */
import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { BiEnvelope, BiHome, BiPhoneCall } from "react-icons/bi";

const InfoSection = () => {
  const infoItems = [
    { id: 1, text: "KG 42 Ave", imgSrc: BiHome },
    { id: 2, text: "+(250) 787 944 577", imgSrc: BiPhoneCall },
    { id: 3, text: "leon@gmail.com", imgSrc:BiEnvelope },
  ];

  return (
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
  );
};

export default InfoSection;
