import { Stack, Button } from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md";

const ButtonIcon = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Button leftIcon={<MdBuild />} colorScheme="pink" variant="solid">
        Settings
      </Button>
      <Button rightIcon={<MdCall />} colorScheme="blue" variant="outline">
        Call us
      </Button>
    </Stack>
  );
};

export default ButtonIcon;
