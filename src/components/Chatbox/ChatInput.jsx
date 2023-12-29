import {
  Avatar,
  Button,
  Flex,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";

const usersList = [
  " ",
  "Alamuri Surya",
  "Ponnaganti SaiKiran",
  "Kotikalapudi Vamsi",
  "Vyboina Saitarun",
  "Berry Allen",
  "Evan Thawn",
  "Robert Downeyjr.",
];

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const [displayMessage, setDisplayMessage] = useState("");
  const [user, setUser] = useState("");
  const [showEmoji, setshowEmoji] = useState(false);

  const sendMessage = () => {
    const randomName = Math.floor(Math.random() * (usersList.length - 1) + 1);
    setDisplayMessage(message);
    setUser(usersList[randomName]);
    setshowEmoji(false);
    setMessage("");
  };

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.map((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setMessage(message + emoji);
  };

  return (
    <>
      <Flex mb={2} alignItems={"end"} flexDirection={"column"}>
        {showEmoji && (
          <EmojiPicker width={"70%"} height={350} onEmojiClick={addEmoji} />
        )}
      </Flex>
      <Flex display={"flex"} gap={2} m={2}>
        <Avatar size={"sm"} />
        <Flex flexDirection={"column"}>
          <Text fontWeight={'bold'} color={'black'}>{user}</Text>
          <Text fontSize={15} color={'gray'} bg={'white'} p={4} borderRadius={10} borderTopLeftRadius={'none'} border={'0.5px solid gray.00'} fontWeight={500}>{displayMessage}</Text>
        </Flex>
      </Flex>
      <Flex mb={5} w={"100%"}>
        <FormControl
          display={"flex"}
          justifyContent={"space-between"}
          w={"full"}
          alignItems={"center"}
          border={"1px solid gray"}
          p={2}
          borderRadius={20}
          pl={5}
          pr={5}
        >
          <Input
            placeholder="Type Message"
            border={"none"}
            _hover={{ border: "none" }}
            _peerActive={{ border: "none" }}
            outline={"none"}
            variant={"unstyled"}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <BsEmojiSmile size={20} onClick={() => setshowEmoji(!showEmoji)} />
          <Button type="button" onClick={sendMessage}>
            Send
          </Button>
        </FormControl>
      </Flex>
    </>
  );
};

export default ChatInput;
