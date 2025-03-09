/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Card, CardContent, TextField, Button, Box, Typography } from "@mui/material";
import React from "react";
import image from '../../assets/image/Fitness-woman-holding-heavy-kettlebell-1024x703.jpg';
const ContactSection = () => {
  return (
    <Box className="py-16 bg-gray-900 text-white dark:text-white flex justify-center items-center">
      <Card className="w-full max-w-4xl shadow-lg">
        <Box className="flex flex-col lg:flex-row">
          <Box className="lg:w-1/2 w-full">
            <motion.img 
              src={image} 
              alt="" 
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </Box>
          <Box className="lg:w-1/2 w-full p-8">
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h4" component="h2" className="font-bold mb-6">
                Contact Us
              </Typography>
            </motion.div>
            <CardContent>
              <form className="space-y-4">
                <motion.div whileFocus={{ scale: 1.05 }}>
                  <TextField label="Name" variant="outlined" fullWidth />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.05 }}>
                  <TextField label="Email" type="email" variant="outlined" fullWidth />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.05 }}>
                  <TextField label="Phone Number" type="text" variant="outlined" fullWidth />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.05 }}>
                  <TextField label="Message" variant="outlined" fullWidth multiline rows={4} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button variant="contained" color="primary" fullWidth>
                    Send
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ContactSection;
