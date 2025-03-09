/* eslint-disable no-unused-vars */ 
    import React from 'react';
    import { motion } from 'framer-motion';
    import { FaFacebook } from 'react-icons/fa';
    import { BsTwitterX, BsInstagram } from 'react-icons/bs';
    import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
    
    const TrainersSection = () => {
        const trainers = [
            { name: "Smirth Jon", img: "https://nationalpti.org/wp-content/uploads/2014/02/Personal-Trainer.jpg" },
            { name: "Jean Doe", img: "https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png?resize=640:*" },
            { name: "Alex Den", img: "https://atp.uidaho.edu/wp-content/uploads/2020/10/FY187730_02_5943-Custom-1.jpg" },
          ];
          
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
                  <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={trainer.img}
                      alt=''
                      sx={{ objectFit: 'cover' }}
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
        </section>
      );
    };
    
    export default TrainersSection;
 
