import { Box, Container } from "@chakra-ui/react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Chatbox from "./components/Chatbox/Chatbox.jsx";

function App() {
  return (
    <Container
      display={"flex"}
      flexDirection={"row"}
      gap={10}
      maxW={"4xl"}
      center="true"
      bg={"#EDF1F5"}
      maxH={"90vh"}
      marginTop={5}
      p={0}
      border={"0.5px solid black"}
      borderRadius={20}
      boxShadow={"0px 0px 5px 10px #00000020"}
    >
      <Box
        maxW={"35%"}
        minH={"89vh"}
        borderTopLeftRadius={20}
        borderBottomLeftRadius={20}
        bg={"white"}
      >
        <Sidebar />
      </Box>
      <Box w={'57%'}>
        <Chatbox />
      </Box>
    </Container>
  );
}

export default App;
