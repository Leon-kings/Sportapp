/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Google,
  Phone,
  Reviews,
  ReviewsOutlined,
} from "@mui/icons-material";

import logo from "../../assets/image/Black and Red Y2k Modern Professional Fashion Logo.png";
import GMTTime from "../time/Time";
const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <Box
      component="footer"
      className="bg-black text-white dark:text-white py-8"
    >
      <Container>
        <Box className="flex flex-wrap justify-between items-center">
          <Box className="text-2xl font-bold">
            <Link href="index.html" color="inherit" underline="none">
              <img src={logo} alt="" className="w-16 object-cover" />
            </Link>
          </Box>
          <Box className="flex gap-6 space-x-4">
            <Link color="inherit">
              <button>
                <Reviews className="size-4" />
              </button>
            </Link>
            <Link color="inherit">
              <button>
                <ReviewsOutlined />
              </button>
            </Link>
            <Link color="inherit">
              <button>blog</button>
            </Link>
          </Box>
        </Box>
        <Box className="mt-6 flex flex-wrap justify-between items-center border-t border-gray-700 pt-4">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} <GMTTime />
          </Typography>
          <Box className="flex items-center space-x-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
              <div>
                <Typography
                  variant="body2"
                  className="flex text-amber-200 items-center sm:hidden md:block"
                >
                  <Phone className="mr-2 sm:hidden lg:block" /> +250 (78) 794
                  4577
                </Typography>
              </div>
              <div>
                <IconButton color="inherit">
                  <Facebook />
                </IconButton>
                <IconButton color="inherit">
                  <Twitter />
                </IconButton>
                <IconButton color="inherit">
                  <LinkedIn />
                </IconButton>
                <IconButton color="inherit">
                  <Google />
                </IconButton>
              </div>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
