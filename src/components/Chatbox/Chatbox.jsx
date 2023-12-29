import { Box, Flex } from "@chakra-ui/react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

const Chatbox = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      flexDirection={"column"}
      h={"full"}
      w={"100%"}
    >
      <ChatHeader />
      <Box>
        <ChatInput />
      </Box>
    </Flex>
  );
};

export default Chatbox;
