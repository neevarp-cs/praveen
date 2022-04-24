import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import React from "react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p="5">
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          Portfolio
        </Heading>
        <Spacer />
        <IconButton
          icon={<FaLinkedin />}
          isRound="true"
          onClick={() =>
            window.open("https://www.linkedin.com/in/praveen-s-b16b3a1ab/")
          }
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaInstagram />}
          isRound="true"
          onClick={() =>
            window.open("https://www.facebook.com/profile.php?id=100008983328843")
          }
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={() => window.open("https://github.com/neevarp-cs")}
        ></IconButton>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound={true}
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>
  );
};

export default App;
