import { Divider, Flex, Text, VStack } from "@chakra-ui/react";
import { HiMiniUsers } from "react-icons/hi2";

const ChatHeader = () => {
  return (
    <Flex flexDirection={'column'}>
      <Flex
        pt={5}
        justifyContent={"space-between"}
        flexDirection={"row"}
        alignItems={"center"}
      >
        <VStack alignItems={"start"} gap={0}>
          <Text fontWeight={"bold"} fontSize={20} color={"black"}>
            Introductions
          </Text>
          <Text fontSize={13} letterSpacing={2} fontFamily={"sans-serif"}>
            This channel is for Company Wide Chatter
          </Text>
        </VStack>
        <Flex gap={5}>
          <Text fontWeight={100}>3/100</Text>
          <HiMiniUsers size={20} />
        </Flex>
      </Flex>
      <Divider border={'1px solid gray'} my={5}/>
    </Flex>
  );
};

export default ChatHeader;
