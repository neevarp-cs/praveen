import Icon from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/layout";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Social = () => {
  return (
    <HStack spacing={24}>
      <a href="https://www.facebook.com/profile.php?id=100008983328843"><Icon as={FaFacebookF} boxSize={50} /></a>
      <a href="https://www.instagram.com/neevarp_cs/"><Icon as={FaInstagram} boxSize={50} /></a>
      <a href="https://www.twitter.com/neevarp0101?t=nTDYctC0v_F-wDZerLXU3A&s=09"><Icon as={FaTwitter} boxSize={50} /> </a>
    </HStack>
  );
};

export default Social;
