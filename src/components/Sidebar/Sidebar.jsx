import { Avatar, Flex, Text, VStack } from "@chakra-ui/react";
import { FiPlusCircle } from "react-icons/fi";


const Sidebar = () => {
  return (
    <>
      <Flex p={4} alignItems={"center"}>
        <Avatar src="/eagle.png" name="MeyhuSurya" size={"xl"} />
        <VStack gap={2} p={1} alignItems={"start"}>
          <Text
            color={"black"}
            fontWeight={"bold"}
            fontSize={25}
            fontFamily={"poppins"}
          >
            A. Surya Teja
          </Text>
          <Text fontWeight={700} fontSize={15}>
            Fullstack Web Developer
          </Text>
        </VStack>
      </Flex>
      <Flex pt={10} pb={5} flexDirection={'column'} w={'full'} >
        <Flex justifyContent={'space-between'} p={3} alignItems={'center'} w={'full'} >
            <Text fontWeight={500} fontSize={20} fontFamily={'roboto'}>Conversations</Text>
            <FiPlusCircle size={20} />
        </Flex>
        <Flex gap={15} p={4} alignItems={'center'}>
            <Text bg={'gray.200'} textAlign={'center'} height={'40px'} pt={2} borderRadius={10} width={'40px'}>#</Text>
            <Text fontSize={18} fontWeight={500}>Poland Office</Text>
        </Flex>
        <Flex gap={15} p={4} alignItems={'center'} bg={'#629DF4'} color={'white'} w={'full'}>
            <Text bg={'#6093E7'} textAlign={'center'} height={'40px'} pt={2} borderRadius={10} width={'40px'}>#</Text>
            <Text fontSize={18} fontWeight={500}>Poland Office</Text>
        </Flex>
        <Flex gap={15} p={4} alignItems={'center'}>
            <Text bg={'gray.200'} textAlign={'center'} height={'40px'} pt={2} borderRadius={10} width={'40px'}>#</Text>
            <Text fontSize={18} fontWeight={500}>India Office</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Sidebar;
