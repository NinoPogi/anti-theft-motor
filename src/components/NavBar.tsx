import { HStack, Center, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Center>
        <Text>Maangas na Motor</Text>
        <ColorModeSwitch />
      </Center>
    </HStack>
  );
};

export default NavBar;
